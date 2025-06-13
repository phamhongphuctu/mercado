import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import vi from "./locales/vi.json";
import es from "./locales/es.json";
import zh from "./locales/zh.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "vi", // nếu không phát hiện được thì dùng Tiếng Việt
    resources: {
      en: { translation: en },
      vi: { translation: vi },
      es: { translation: es },
      zh: { translation: zh },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
