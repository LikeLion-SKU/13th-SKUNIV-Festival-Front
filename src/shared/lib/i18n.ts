import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import KR from "../locales/kr/main.json";
import EN from "../locales/en/main.json";
import JP from "../locales/jp/main.json";
import CN from "../locales/cn/main.json";

i18n.use(initReactI18next).init({
  resources: {
    kr: {
      main: KR,
    },
    en: {
      main: EN,
    },
    jp: {
      main: JP,
    },
    cn: {
      main: CN,
    },
  },
  lng: "kr",
  fallbackLng: "kr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
