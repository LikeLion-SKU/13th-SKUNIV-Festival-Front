import "i18next";

import main from "./src/shared/locales/kr/main.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      main: typeof main;
    };
  }
}
