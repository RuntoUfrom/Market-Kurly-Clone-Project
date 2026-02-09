import { create } from "zustand";

const AuthStore = (set) => ({
  isLoggedIn: false,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
});

const useAuthStore = create(AuthStore);

export default useAuthStore;
