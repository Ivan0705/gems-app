import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
//import {resources} from "../../../../public/locales/resources/index";

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    //resources,
    //lng: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: { useSuspense: false },
    backend: {
      loadPath:
        process.env.NODE_ENV === "production"
          ? ` /gems-app/locales/{{lng}}/{{ns}}.json`
          : `/locales/{{lng}}/{{ns}}.json`,
    },
  });

export default i18n;
