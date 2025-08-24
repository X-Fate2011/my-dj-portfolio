import MixcloudPlayer from "../components/MixcloudPlayer/MixcloudPlayer.tsx";
import { useCookieConsent } from "../hooks/useCookieConsent.ts";

function MixesPage() {
    const consentGiven = useCookieConsent();
    return (
        <div className="p-4 md:p-6 lg:p-8">
            {consentGiven ? (<MixcloudPlayer limit={10} variant="list"/>) :
                (
                    <>
                        <p>Bitte akzeptiere die Cookies, um den Mixcloud-Feed sehen zu können.</p>
                    </>
                )}
        </div>
    )
}

export default MixesPage
