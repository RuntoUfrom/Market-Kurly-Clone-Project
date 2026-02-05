import { create } from "zustand";

// 테마 관리용 Store (market: 마켓컬리, beauty: 뷰티컬리)
const ThemeStore = (set, get) => ({
  theme: "market",
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => {
    set((state) => {
      if (state.theme === "market") {
        return { theme: "beauty" };
      } else {
        return { theme: "market" };
      }
    });
  },
});

const useThemeStore = create(ThemeStore);

export default useThemeStore;
