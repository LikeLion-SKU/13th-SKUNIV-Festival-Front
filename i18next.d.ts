import "i18next";

import main from "./src/shared/locales/kr/main.json";
import booth from "./src/shared/locales/kr/booth.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      main: typeof main;
      booth: typeof booth;
    };
  }
}
