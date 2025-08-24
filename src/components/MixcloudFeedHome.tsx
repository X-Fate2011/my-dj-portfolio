import MixcloudPlayer from "./MixcloudPlayer/MixcloudPlayer.tsx";
import { useCookieConsent } from "../hooks/useCookieConsent.ts";

export default function MixcloudFeedHome() {
    const consentGiven = useCookieConsent();
    
    return (
        <section aria-label="Letzte Shows" className="z-10 p-4 lg:p-0 lg:ml-8 w-full lg:w-1/2">
            <h2>Die letzten Shows nochmal anhören</h2>
            <div className="grid grid-cols-1 gap-6">
                {consentGiven ? (
                    <MixcloudPlayer limit={2} variant="compact"/>
                    ) : (
                        <>
                            <p>Bitte akzeptiere die Cookies, um den Mixcloud-Player nutzen zu können.</p>
                        </>
                    )}
            </div>
        </section>
    );
}
