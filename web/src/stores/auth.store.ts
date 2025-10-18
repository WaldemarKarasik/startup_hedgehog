import { create } from "zustand";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

// Тип состояния хранилища
type AuthState = {
  user: User | null;
  // 'loading' (проверка), 'authenticated' (вошел), 'unauthenticated' (не вошел)
  status: "loading" | "authenticated" | "unauthenticated";
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: "loading", // По умолчанию - 'loading', пока мы не проверим
  setUser: (user) => set({ user, status: "authenticated" }),
  clearUser: () => set({ user: null, status: "unauthenticated" }),
}));
