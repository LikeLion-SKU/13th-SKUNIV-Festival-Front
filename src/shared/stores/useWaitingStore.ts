import { create } from "zustand";

export interface WaitingState {
  waitingOrder: number | undefined;
  setWaitingOrder: (value: WaitingState["waitingOrder"]) => void;
}

const useWaitingStore = create<WaitingState>((set) => ({
  waitingOrder: undefined,
  setWaitingOrder: (value) => set(() => ({ waitingOrder: value })),
}));

export default useWaitingStore;
