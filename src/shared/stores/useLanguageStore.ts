import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface LanguageState {
  locale: string | null;
  setLang: (newLang: string) => void;
}

const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      locale: null,
      setLang: (newLang) => set({ locale: newLang }),
    }),
    {
      name: "lang",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLanguageStore;
