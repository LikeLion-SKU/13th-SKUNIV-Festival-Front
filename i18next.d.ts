import "i18next";

import main from "./src/shared/locales/kr/main.json";
import booth from "./src/shared/locales/kr/booth.json";
import ui from "./src/shared/locales/kr/ui.json";
import lostandfound from "./src/shared/locales/kr/lostandfound.json";
import credit from "./src/shared/locales/kr/credit.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      main: typeof main;
      booth: typeof booth;
      ui: typeof ui;
      lostandfound: typeof lostandfound;
      credit: typeof credit;
    };
  }
}
