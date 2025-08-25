import { useCookieConsent } from "../hooks/useCookieConsent.ts";
import { useTranslation } from "react-i18next";

export default function TwitchStream() {
    const parentUrl = window.location.href.includes("localhost") ? "localhost" : encodeURIComponent(window.location.host);
    const consentGiven = useCookieConsent();
    const {t} = useTranslation("common");
    return (
        <div
            className={`'flex flex-col w-full lg:w-1/2 mt-4 lg:mt-auto lg:mx-8 pb-8 h-[400px]' ${consentGiven ? 'justify-center items-center' : ''} `}>
            <h2>{t("home.twitchStreamTitle")}</h2>
            {consentGiven ? (
                <iframe
                    src={`https://player.twitch.tv/?channel=truededicationmusic&parent=${parentUrl}`}
                    className="w-full h-full"
                    loading="lazy"
                    title={t("home.twitchStreamFrameTitle")}
                    allowFullScreen>
                </iframe>
            ) : <p>{t("home.twitchStreamCookieNote")}</p>
            }
        </div>
    )
}