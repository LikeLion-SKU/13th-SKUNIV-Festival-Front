import { create } from "zustand";

export interface AdminState {
  modalStep: number;
  onClose: () => void;
  setModalStep: (modalStep: AdminState["modalStep"]) => void;
}

const useAdminStore = create<AdminState>((set) => ({
  modalStep: 0, // default hidden,
  onClose: () => set(() => ({ modalStep: 0 })),
  setModalStep: (modalStep) => set(() => ({ modalStep })),
}));

export default useAdminStore;
