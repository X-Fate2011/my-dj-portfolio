import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { resources } from "./resources";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        supportedLngs: ["de", "en"],
        ns: ["common"],
        defaultNS: "common",
        interpolation: {
            escapeValue: false
        },
        debug: import.meta.env.DEV
    });

export default i18n;
