import { create } from "zustand";

export interface ReservationStoreProps {
  modalStep: number;
  onClose: () => void;
  setModalStep: (modalStep: ReservationStoreProps["modalStep"]) => void;
}

const useReservationStore = create<ReservationStoreProps>((set) => ({
  modalStep: 0, // default hidden,
  onClose: () => set(() => ({ modalStep: 0 })),
  setModalStep: (modalStep) => set(() => ({ modalStep })),
}));

export default useReservationStore;
