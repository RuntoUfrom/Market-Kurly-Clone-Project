import { useNavigate } from "react-router-dom";
import useHistoryStore, { createHistory } from "@/stores/useHistoryStore";
import menuDataJson from "@/routes/MenuInfo.json";

// goBack → popstate 핸들러로 데이터를 전달하기 위한 임시 저장소
let _pendingBackNum = 0;
let _pendingPreParams = {};

/**
 * popstate 핸들러에서 호출하여 goBack이 저장한 num, preParams를 꺼내고 초기화
 * - goBack 경유: { num: 설정값, preParams: 설정값 }
 * - 브라우저 뒤로 버튼: { num: 0, preParams: {} } → 핸들러에서 기본값 1 사용
 */
export const consumePendingBack = () => {
  const num = _pendingBackNum;
  const preParams = _pendingPreParams;
  _pendingBackNum = 0;
  _pendingPreParams = {};
  return { num, preParams };
};

// 앱의 Core한 로직을 실행하기 위한 공통 Hook
const useHistoryController = () => {
  const navigate = useNavigate();
  const {
    historyList,
    nowPageParams,
    addHistoryList,
    clearHistoryList,
    setNowPageParams,
    getHistoryList,
  } = useHistoryStore();

  /**
   * 앞으로 페이지 이동 함수
   * @param menuId (string) - 이동할 페이지 menuId
   * @param params (object) - 이동할 페이지에 전달 할 파라미터 정보
   * @param options (num) - 페이지 이동시 특정 동작을 위한 옵션(-1 : 히스토리를 남기지 않고 이동)
   */
  const goForward = (menuId, params, options) => {
    if (options !== -1) {
      addHistoryList(
        createHistory(window.location.pathname, nowPageParams || {}),
      );
    }
    setNowPageParams({
      params: params || {},
      preParams: {},
    });

    const targetUrl = getMenuUrl(menuId);

    // 탭 정보가 있으면 sessionStorage에 저장
    if (params?.tab) {
      sessionStorage.setItem("activeTab", params.tab);
    }

    navigate(targetUrl);
    getHistoryList(); //확인용 주석
  };

  /**
   * 뒤로 페이지 이동 함수
   * - store 업데이트는 popstate 핸들러(Layout.jsx)에서 처리
   * - navigate(-num)이 popstate 이벤트를 발생시키면 핸들러가 동작
   * @param num (num) - 뒤로갈 페이지의 갯수
   * @param preParams  - 뒤로갈 페이지에 전달할 파라미터 정보
   */
  const goBack = (num, preParams) => {
    if (historyList.length >= num) {
      // popstate 핸들러에서 꺼내 쓸 수 있도록 임시 저장
      _pendingBackNum = num;
      _pendingPreParams = preParams || {};
      navigate(-num);
    } else {
      // 히스토리 부족 - 홈으로 이동 (PUSH이므로 popstate 발생 안 함)
      clearHistoryList();
      setNowPageParams({ params: {}, preParams });
      navigate("/");
    }
  };

  const getPageParams = () => {
    //Store에 넣어둔 nowPageParam의 데이터를 가져여오는 함수
    return nowPageParams;
  };

  const getMenuUrl = (menuId) => {
    let menuUrl = "";
    for (let i = 0; i < menuDataJson.container.length; i++) {
      for (let j = 0; j < menuDataJson.container[i].urlList.length; j++) {
        if (menuDataJson.container[i].urlList[j].menuId === menuId) {
          menuUrl = menuDataJson.container[i].urlList[j].url;
        }
      }
    }
    return menuUrl;
  };
  /**
   * 페이지 이동 함수
   * @param {Object} config
   * @param {"FORWARD"|"BACK"} config.direction - 필수: 이동 방향
   * @param {string} [config.menuId] - FORWARD 시 필수: 이동할 페이지 menuId
   * @param {Object} [config.params] - 선택: 전달할 파라미터
   * @param {number} [config.options] - 선택: -1이면 히스토리 없이 이동
   * @param {number} [config.num=1] - BACK 시 사용: 뒤로갈 페이지 수
   * @param {Object} [config.preParams] - Back 시 뒤로갈 때 가져갈 데이터
   */
  const moveTo = ({
    direction,
    menuId,
    params = {},
    options = 1,
    num = 1,
    preParams = {},
  }) => {
    if (!direction) {
      throw new Error("direction은 필수입니다");
    }
    if (direction === "FORWARD") {
      if (!menuId) {
        throw new Error("FORWARD 이동 시 menuId는 필수입니다");
      }
      goForward(menuId, params, options);
    } else if (direction === "BACK") {
      goBack(num, preParams);
    } else {
      return;
    }
  };
  return {
    getPageParams,
    getMenuUrl,
    moveTo,
  };
};

export default useHistoryController;
