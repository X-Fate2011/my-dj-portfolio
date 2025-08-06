import { useCookieConsent } from "../hooks/useCookieConsent.ts";

export default function TwitchStream() {
    const parentUrl = window.location.href.includes("localhost") ? "localhost" : encodeURIComponent(window.location.host);
    const consentGiven = useCookieConsent();
    return (
        <div className={`'flex flex-col w-full lg:w-1/2 mt-4 lg:mt-auto lg:mx-8 pb-8 h-[400px]' ${consentGiven ? 'justify-center items-center' : ''} `}>
            <h2>Livestream</h2>
            {consentGiven ? (
                <>
                    <iframe
                        src={`https://player.twitch.tv/?channel=truededicationmusic&parent=${parentUrl}`}
                        className="w-full h-full"
                        loading="lazy"
                        title="Twitch Stream von TrueDedicationMusic"
                        allowFullScreen>
                    </iframe>
                </>
            ) : (
                <>
                    <p>Bitte akzeptiere die Cookies, um den Twitch-Livestream nutzen zu können.</p>
                </>
            )}
        
        </div>
    )
}