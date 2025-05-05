import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import main_kr from "../locales/kr/main.json";
import booth_kr from "../locales/kr/booth.json";

import main_en from "../locales/en/main.json";
import booth_en from "../locales/en/booth.json";

import main_jp from "../locales/jp/main.json";
import booth_jp from "../locales/jp/booth.json";

import main_ch from "../locales/ch/main.json";
import booth_ch from "../locales/ch/booth.json";

i18n.use(initReactI18next).init({
  resources: {
    kr: {
      main: main_kr,
      booth: booth_kr,
    },
    en: {
      main: main_en,
      booth: booth_en,
    },
    jp: {
      main: main_jp,
      booth: booth_jp,
    },
    ch: {
      main: main_ch,
      booth: booth_ch,
    },
  },
  lng: "kr",
  fallbackLng: "kr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
