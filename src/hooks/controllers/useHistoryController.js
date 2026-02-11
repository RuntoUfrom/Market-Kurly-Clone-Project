import { useNavigate } from "react-router-dom";
import useHistoryStore, { createHistory } from "@/stores/useHistoryStore";
import menuDataJson from "@/routes/MenuInfo.json";

// 앱의 Core한 로직을 실행하기 위한 공통 Hook
const useHistoryController = () => {
  const navigate = useNavigate();
  const {
    historyList,
    nowPageParams,
    addHistoryList,
    removeHistoryList,
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
   * @param num (num) - 뒤로갈 페이지의 갯수
   * @param preParams  - 뒤로갈 페이지에 전달할 파라미터 정보
   */
  const goBack = (num, preParams) => {
    console.log("=== goBack 시작 ===");
    console.log(
      "뒤로가기 전 historyList:",
      JSON.parse(JSON.stringify(historyList)),
    );
    console.log("뒤로갈 페이지 수:", num);

    let lastUrl = "";

    if (historyList.length >= num) {
      // 바로 직전 num번째 요소를 가져옴
      const prev = historyList[historyList.length - num];
      console.log("이동할 이전 페이지:", prev);

      if (prev?.url) {
        lastUrl = prev.url;
        setNowPageParams({
          params: prev.nowparams || {},
          preParams,
        });
      }

      removeHistoryList(num);
    } else {
      console.log("히스토리 부족 - 홈으로 이동");
      clearHistoryList();
      setNowPageParams({ params: {}, preParams });
    }

    console.log(`네비게이션: -> ${lastUrl || "/"}`);
    console.log("=== goBack 완료 ===");
    getHistoryList(); //확인용 주석

    navigate(lastUrl || "/");
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
