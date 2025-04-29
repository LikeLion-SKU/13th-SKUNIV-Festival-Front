import { create } from "zustand";

export interface HeaderState {
  title: string;
  showBack: boolean;
  showHome: boolean;
  canAccessAdmin: boolean;
  update: (state: Partial<HeaderState>) => void;
}

const useHeaderStore = create<HeaderState>((set) => ({
  title: "불러오는 중...",
  showBack: false,
  showHome: false,
  canAccessAdmin: false,
  update: (state) => set((prev) => ({ ...prev, ...state })),
}));

export default useHeaderStore;
