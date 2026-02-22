import { create } from "zustand";

const LoadingStore = (set, get) => ({
  loadingList: [],
  // 파생 상태: loadingList에 항목이 있으면 true
  get isLoading() {
    return get().loadingList.length > 0;
  },
  addLoading: (id) => {
    set((state) => ({ loadingList: [...state.loadingList, id] }));
  },
  removeLoading: (id) => {
    set((state) => ({
      loadingList: state.loadingList.filter((item) => item !== id),
    }));
  },
});

const useLoadingStore = create(LoadingStore);
export default useLoadingStore;
