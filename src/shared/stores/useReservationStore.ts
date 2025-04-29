import { create } from "zustand";

export interface ReservationState {
  modalStep: number;
  onClose: () => void;
  setModalStep: (modalStep: ReservationState["modalStep"]) => void;
}

const useReservationStore = create<ReservationState>((set) => ({
  modalStep: 0, // default hidden,
  onClose: () => set(() => ({ modalStep: 0 })),
  setModalStep: (modalStep) => set(() => ({ modalStep })),
}));

export default useReservationStore;
