import { create } from "zustand";

/**
 * History 객체 생성
 * @param {string} url - 페이지 URL
 * @param {Object} nowparams - 현재 페이지로 오면서 받아온 파라미터
 * @param {Object} preParams - 다음 페이지에게 넘길 파라미터
 * @returns {{ url: string, params: Object, preParams: Object }}
 */
export const createHistory = (url, nowparams = {}) => ({
  url,
  nowparams,
});

// 히스토리 관리용 Store
const HistoryStore = (set, get) => ({
  historyList: [],
  nowPageParams: {}, //현재 페이지가 들고 있는 데이터를 임시 보관하는 변수
  addHistoryList: (history) =>
    set((state) => ({
      ...state,
      historyList: [...state.historyList, history],
    })),
  // 히스토리 삭제(원하는 만큼)
  removeHistoryList: (num) =>
    set((state) => ({
      ...state,
      historyList: state.historyList.slice(0, state.historyList.length - num),
    })),
  // 마지막 히스토리 삭제
  removeLastHistoryList: () =>
    set((state) => ({
      ...state,
      historyList: state.historyList.slice(0, state.historyList.length - 1),
    })),
  // 모든 히스토리 삭제
  clearHistoryList: () => set((state) => ({ ...state, historyList: [] })),
  // 현재 페이지 파라미터 세팅
  setNowPageParams: (params) =>
    set((state) => ({ ...state, nowPageParams: params })),
  getHistoryList: () => {
    get().historyList.forEach((item) => {
      console.log("히스토리 리스트 목록 나열 ", item.url);
    });
  },
});

const useHistoryStore = create(HistoryStore);

export default useHistoryStore;
