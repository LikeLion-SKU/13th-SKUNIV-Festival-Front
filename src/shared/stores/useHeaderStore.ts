import { create } from "zustand";

export interface HeaderStoreProps {
  title: string;
  showBack: boolean;
  showHome: boolean;
  update: (state: Partial<HeaderStoreProps>) => void;
}

const useHeaderStore = create<HeaderStoreProps>((set) => ({
  title: "불러오는 중...",
  showBack: false,
  showHome: false,
  update: (state) => set((prev) => ({ ...prev, ...state })),
}));

export default useHeaderStore;
