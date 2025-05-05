import { create } from "zustand";

export interface HeaderState {
  title: string | null;
  showBack: boolean;
  showHamburger: boolean;
  showMenu: boolean;
  canAccessAdmin: boolean;
  canAccessLost: boolean;
  transparent: boolean;
  update: (state: Partial<HeaderState>) => void;
}

const useHeaderStore = create<HeaderState>((set) => ({
  title: null,
  showBack: false,
  showHamburger: false,
  showMenu: false,
  canAccessAdmin: false,
  canAccessLost: false,
  transparent: false,
  update: (state) => set((prev) => ({ ...prev, ...state })),
}));

export default useHeaderStore;
