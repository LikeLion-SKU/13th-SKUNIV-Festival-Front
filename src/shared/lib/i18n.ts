import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import main_ko from "../locales/ko/main.json";
import booth_ko from "../locales/ko/booth.json";
import ui_ko from "../locales/ko/ui.json";
import lostandfound_ko from "../locales/ko/lostandfound.json";
import credit_ko from "../locales/ko/credit.json";

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
    ko: {
      main: main_ko,
      booth: booth_ko,
      ui: ui_ko,
      lostandfound: lostandfound_ko,
      credit: credit_ko,
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
  lng: "ko",
  fallbackLng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
