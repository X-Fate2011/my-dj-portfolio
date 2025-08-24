import commonDe from "../locales/de/common.json";
import aboutMeDe from "../locales/de/about-me.json";
import footerDe from "../locales/de/footer.json";

import commonEn from "../locales/en/common.json";
import aboutMeEn from "../locales/en/about-me.json";
import footerEn from "../locales/en/footer.json";

export const resources = {
    de: {
        common: commonDe,
        about_me: aboutMeDe,
        footer: footerDe
    },
    en: {
        common: commonEn,
        about_me: aboutMeEn,
        footer: footerEn
    }
} as const;

export type AvailableLanguages = keyof typeof resources;