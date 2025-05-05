import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ReservationState {
  modalStep: number;
  waitingOrder: number | undefined;
  name: string | undefined;
  phoneNum: string | undefined;
  idsToDelete: { boothId: number; boothName: string }[];
  onClose: () => void;
  setModalStep: (modalStep: ReservationState["modalStep"]) => void;
  setReservation: (
    data: Partial<Pick<ReservationState, "waitingOrder" | "name" | "phoneNum" | "idsToDelete">>
  ) => void;
  addIdToDelete: (boothId: number, boothName: string) => void;
  cancelIdToDelete: (boothId: number) => void;
}

const useReservationStore = create<ReservationState>()(
  persist(
    (set) => ({
      modalStep: 0, // default hidden,
      waitingOrder: undefined,
      name: undefined,
      phoneNum: undefined,
      idsToDelete: [],
      onClose: () => set(() => ({ modalStep: 0 })),
      setModalStep: (modalStep) => set(() => ({ modalStep })),
      setReservation: (data) => set(() => ({ ...data })),
      addIdToDelete: (boothId, boothName) =>
        set((prev) => ({ idsToDelete: [...prev.idsToDelete, { boothId, boothName }] })),
      cancelIdToDelete: (boothId) =>
        set((prev) => ({
          idsToDelete: [...prev.idsToDelete.filter((i) => i.boothId !== boothId)],
        })),
    }),
    {
      name: "tabling",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        name: state.name,
        phoneNum: state.phoneNum,
      }),
    }
  )
);

export default useReservationStore;
