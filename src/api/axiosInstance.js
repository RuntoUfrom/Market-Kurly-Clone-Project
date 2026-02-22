import LayerUtils from "@/utils/LayerUtils";
import useLoadingStore from "@/stores/useLoadingStore";
import axios from "axios";
//Axios 인스턴스 생성
const instance = axios.create({
  baseURL: "/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 요청 인터셉터
 * - 요청 전 공통 처리 (토큰 추가 등)
 */
let _requestId = 0;

instance.interceptors.request.use(
  (config) => {
    // 로딩 추가
    const id = ++_requestId;
    config._loadingId = id;
    useLoadingStore.getState().addLoading(id);

    // 토큰이 있으면 헤더에 추가 (필요시 활성화)
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * 응답 인터셉터
 * - 공통 에러 처리 (alert)
 */
instance.interceptors.response.use(
  (response) => {
    // 로딩 제거
    useLoadingStore.getState().removeLoading(response.config._loadingId);
    return response;
  },
  (error) => {
    // 로딩 제거
    if (error.config?._loadingId) {
      useLoadingStore.getState().removeLoading(error.config._loadingId);
    }
    // 네트워크 에러 (서버 응답 없음)
    if (!error.response) {
      LayerUtils.showAlert("네트워크 연결을 확인해주세요.");
      return Promise.reject(error);
    }

    const status = error.response.status;
    const message = error.response.data?.message || error.message;

    if (status === 401) {
      LayerUtils.showAlert("에러발생", "로그인이 필요합니다.");
    } else if (status === 403) {
      LayerUtils.showAlert("접근 권한이 없습니다.");
    } else if (status === 404) {
      LayerUtils.showAlert("에러발생", "페이지를 못찾겠습니다.");
    } else if (status === 500) {
      LayerUtils.showAlert("서버 오류", "서버 오류가 발생했습니다.");
    } else {
      LayerUtils.showAlert("에러발생", "서버 오류가 발생했습니다.");
    }

    return Promise.reject(error); //에러를 호출한 곳으로 전달
  },
);

export default instance;
