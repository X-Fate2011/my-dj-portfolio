import commonDe from "../locales/de/common.json";
import aboutMeDe from "../locales/de/about-me.json";
import footerDe from "../locales/de/footer.json";
import cookieBannerDe from "../locales/de/cookie-banner.json";
import mixcloudDe from "../locales/de/mixcloud.json";

import commonEn from "../locales/en/common.json";
import aboutMeEn from "../locales/en/about-me.json";
import footerEn from "../locales/en/footer.json";
import cookieBannerEn from "../locales/en/cookie-banner.json";
import mixcloudEn from "../locales/en/mixcloud.json";

export const resources = {
    de: {
        common: commonDe,
        about_me: aboutMeDe,
        footer: footerDe,
        cookie_banner: cookieBannerDe,
        mixcloud: mixcloudDe,
    },
    en: {
        common: commonEn,
        about_me: aboutMeEn,
        footer: footerEn,
        cookie_banner: cookieBannerEn,
        mixcloud: mixcloudEn,
    }
} as const;

export type AvailableLanguages = keyof typeof resources;