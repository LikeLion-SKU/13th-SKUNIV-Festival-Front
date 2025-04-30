import { create } from "zustand";

export interface ReservationState {
  modalStep: number;
  waitingOrder: number | undefined;
  onClose: () => void;
  setModalStep: (modalStep: ReservationState["modalStep"]) => void;
  setWaitingOrder: (value: ReservationState["waitingOrder"]) => void;
}

const useReservationStore = create<ReservationState>((set) => ({
  modalStep: 0, // default hidden,
  waitingOrder: undefined,
  onClose: () => set(() => ({ modalStep: 0 })),
  setModalStep: (modalStep) => set(() => ({ modalStep })),
  setWaitingOrder: (waitingOrder) => set(() => ({ waitingOrder })),
}));

export default useReservationStore;
