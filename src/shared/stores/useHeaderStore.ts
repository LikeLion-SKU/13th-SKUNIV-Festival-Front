import { create } from "zustand";

export interface HeaderState {
  title: string | null;
  showBack: boolean;
  showHome: boolean;
  canAccessAdmin: boolean;
  canAccessLost: boolean;
  update: (state: Partial<HeaderState>) => void;
}

const useHeaderStore = create<HeaderState>((set) => ({
  title: null,
  showBack: false,
  showHome: false,
  canAccessAdmin: false,
  canAccessLost: false,
  update: (state) => set((prev) => ({ ...prev, ...state })),
}));

export default useHeaderStore;
