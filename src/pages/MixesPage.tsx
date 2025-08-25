import MixcloudPlayer from "../components/MixcloudPlayer/MixcloudPlayer.tsx";
import { useCookieConsent } from "../hooks/useCookieConsent.ts";
import { useTranslation } from "react-i18next";

function MixesPage() {
    const { t } = useTranslation("mixes");
    const consentGiven = useCookieConsent();
    return (
        <div className="p-4 md:p-6 lg:p-8">
            {consentGiven ? (<MixcloudPlayer limit={10} variant="list"/>) :
                (
                    <>
                        <p>{ t("mixesAcceptCookiesNotice") }</p>
                    </>
                )}
        </div>
    )
}

export default MixesPage
