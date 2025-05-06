import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import main_kr from "../locales/kr/main.json";
import booth_kr from "../locales/kr/booth.json";
import ui_kr from "../locales/kr/ui.json";
import lostandfound_kr from "../locales/kr/lostandfound.json";
import credit_kr from "../locales/kr/credit.json";

import main_en from "../locales/en/main.json";
import booth_en from "../locales/en/booth.json";
import ui_en from "../locales/en/ui.json";
import lostandfound_en from "../locales/en/lostandfound.json";
import credit_en from "../locales/en/credit.json";

import main_jp from "../locales/jp/main.json";
import booth_jp from "../locales/jp/booth.json";
import ui_jp from "../locales/jp/ui.json";
import lostandfound_jp from "../locales/jp/lostandfound.json";
import credit_jp from "../locales/jp/credit.json";

import main_ch from "../locales/ch/main.json";
import booth_ch from "../locales/ch/booth.json";
import ui_ch from "../locales/ch/ui.json";
import lostandfound_ch from "../locales/ch/lostandfound.json";
import credit_ch from "../locales/ch/credit.json";

i18n.use(initReactI18next).init({
  resources: {
    kr: {
      main: main_kr,
      booth: booth_kr,
      ui: ui_kr,
      lostandfound: lostandfound_kr,
      credit: credit_kr,
    },
    en: {
      main: main_en,
      booth: booth_en,
      ui: ui_en,
      lostandfound: lostandfound_en,
      credit: credit_en,
    },
    jp: {
      main: main_jp,
      booth: booth_jp,
      ui: ui_jp,
      lostandfound: lostandfound_jp,
      credit: credit_jp,
    },
    ch: {
      main: main_ch,
      booth: booth_ch,
      ui: ui_ch,
      lostandfound: lostandfound_ch,
      credit: credit_ch,
    },
  },
  lng: "kr",
  fallbackLng: "kr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
