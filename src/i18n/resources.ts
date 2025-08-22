import commonDe from "../locales/de/common.json";
import aboutMeDe from "../locales/de/about-me.json";

import commonEn from "../locales/en/common.json";
import aboutMeEn from "../locales/en/about-me.json";

export const resources = {
    de: {
        common: commonDe,
        about_me: aboutMeDe
    },
    en: {
        common: commonEn,
        about_me: aboutMeEn
    }
} as const;

export type AvailableLanguages = keyof typeof resources;