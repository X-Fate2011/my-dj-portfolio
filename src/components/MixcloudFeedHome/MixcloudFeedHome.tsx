import MixcloudPlayer from "../MixcloudPlayer/MixcloudPlayer.tsx";
import { useCookieConsent } from "../../hooks/useCookieConsent.ts";
import { useTranslation } from "react-i18next";

export default function MixcloudFeedHome() {
    const consentGiven = useCookieConsent();
    const {t} = useTranslation("common");
    
    return (
        <section aria-label="Letzte Shows" className="z-10 p-4 lg:p-0 lg:ml-8 w-full lg:w-1/2">
            <h2>{t("home.mixcloudFeedHomeTitle")}</h2>
            {
                consentGiven ? <MixcloudPlayer limit={3} variant="compact"/> : <p>{t("home.mixcloudFeedHomeCookieNote")}</p>
            }
        </section>
    );
}
