import commonDe from "../locales/de/common.json";
import aboutMeDe from "../locales/de/about-me.json";
import footerDe from "../locales/de/footer.json";
import cookieBannerDe from "../locales/de/cookie-banner.json";
import mixesDe from "../locales/de/mixes.json";

import commonEn from "../locales/en/common.json";
import aboutMeEn from "../locales/en/about-me.json";
import footerEn from "../locales/en/footer.json";
import cookieBannerEn from "../locales/en/cookie-banner.json";
import mixesEn from "../locales/en/mixes.json";

export const resources = {
  de: {
    common: commonDe,
    about_me: aboutMeDe,
    footer: footerDe,
    cookie_banner: cookieBannerDe,
    mixes: mixesDe,
  },
  en: {
    common: commonEn,
    about_me: aboutMeEn,
    footer: footerEn,
    cookie_banner: cookieBannerEn,
    mixes: mixesEn,
  },
} as const;

export type AvailableLanguages = keyof typeof resources;
