import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import viCommon from "./locales/vi/common.json";
import viHome from "./locales/vi/home.json";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";

import viTest from "./locales/vi/test.json";
import enTest from "./locales/en/test.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "vi",
    supportedLngs: ["vi", "en"],

    ns: ["common", "home", "test"],
    defaultNS: "common",

    resources: {
      vi: {
        common: viCommon,
        home: viHome,
        test: viTest
      },
      en: {
        common: enCommon,
        home: enHome,
        test: enTest
      }
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;