import { create } from "zustand";

export interface AdminState {
  modalStep: number;
  onClose: () => void;
  setModalStep: (modalStep: AdminState["modalStep"], props?: Record<string, any>) => void;
  [key: string]: any;
}

const useAdminStore = create<AdminState>((set) => ({
  modalStep: 0, // default hidden,
  onClose: () => set(() => ({ modalStep: 0 })),
  setModalStep: (modalStep, props) => set(() => ({ modalStep, ...props })),
}));

export default useAdminStore;
