import { create } from "zustand";

export interface ReservationState {
  modalStep: number;
  waitingOrder: number | undefined;
  name: string | undefined;
  phoneNum: string | undefined;
  idsToDelete: { id: number; boothName: string }[];
  onClose: () => void;
  setModalStep: (modalStep: ReservationState["modalStep"]) => void;
  setReservation: (
    data: Partial<Pick<ReservationState, "waitingOrder" | "name" | "phoneNum" | "idsToDelete">>
  ) => void;
  addIdToDelete: (id: number, boothName: string) => void;
  cancelIdToDelete: (id: number) => void;
}

const useReservationStore = create<ReservationState>((set) => ({
  modalStep: 0, // default hidden,
  waitingOrder: undefined,
  name: undefined,
  phoneNum: undefined,
  idsToDelete: [],
  onClose: () => set(() => ({ modalStep: 0 })),
  setModalStep: (modalStep) => set(() => ({ modalStep })),
  setReservation: (data) => set(() => ({ ...data })),
  addIdToDelete: (id, boothName) =>
    set((prev) => ({ idsToDelete: [...prev.idsToDelete, { id, boothName }] })),
  cancelIdToDelete: (id) =>
    set((prev) => ({ idsToDelete: [...prev.idsToDelete.filter((i) => i.id !== id)] })),
}));

export default useReservationStore;
