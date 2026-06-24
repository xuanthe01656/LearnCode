import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import viCommon from "./locales/vi/common.json";
import viHome from "./locales/vi/home.json";
import viTest from "./locales/vi/test.json";
import viPlacement from "./locales/vi/placement.json";
import viAuth from "./locales/vi/auth.json";
import viCourses from "./locales/vi/courses.json";
import viLessons from "./locales/vi/lessons.json";
import viTeacher from "./locales/vi/teacher.json";
import viAdmin from "./locales/vi/admin.json";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enTest from "./locales/en/test.json";
import enPlacement from "./locales/en/placement.json";
import enAuth from "./locales/en/auth.json";
import enCourses from "./locales/en/courses.json";
import enLessons from "./locales/en/lessons.json";
import enTeacher from "./locales/en/teacher.json";
import enAdmin from "./locales/en/admin.json";

const namespaces = [
  "common",
  "home",
  "test",
  "placement",
  "auth",
  "courses",
  "lessons",
  "teacher",
  "admin",
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "vi",
    supportedLngs: ["vi", "en"],
    ns: namespaces,
    defaultNS: "common",
    resources: {
      vi: {
        common: viCommon,
        home: viHome,
        test: viTest,
        placement: viPlacement,
        auth: viAuth,
        courses: viCourses,
        lessons: viLessons,
        teacher: viTeacher,
        admin: viAdmin,
      },
      en: {
        common: enCommon,
        home: enHome,
        test: enTest,
        placement: enPlacement,
        auth: enAuth,
        courses: enCourses,
        lessons: enLessons,
        teacher: enTeacher,
        admin: enAdmin,
      },
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
