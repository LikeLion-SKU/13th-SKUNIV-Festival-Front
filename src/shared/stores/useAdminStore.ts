import { create } from "zustand";

export interface AdminStoreProps {
  modalStep: number;
  onClose: () => void;
  setModalStep: (modalStep: AdminStoreProps["modalStep"]) => void;
}

const useAdminStore = create<AdminStoreProps>((set) => ({
  modalStep: 0, // default hidden,
  onClose: () => set(() => ({ modalStep: 0 })),
  setModalStep: (modalStep) => set(() => ({ modalStep })),
}));

export default useAdminStore;
