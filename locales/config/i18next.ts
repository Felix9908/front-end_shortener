import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { resources } from "./index";

i18n
  .use(LanguageDetector) // detecta automáticamente el idioma del navegador
  .use(initReactI18next) // conecta con React
  .init({
    resources,
    fallbackLng: "en", // si no encuentra traducción en el idioma actual
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
