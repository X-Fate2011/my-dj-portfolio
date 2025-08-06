import { CookieConsent } from "react-cookie-consent";

interface CookieBannerProps {
    onAccept: () => void;
    onDecline: () => void;
}

export default function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
    return (
            <CookieConsent
                location="bottom"
                buttonText="Zustimmen"
                declineButtonText="Ablehnen"
                disableStyles={true}
                enableDeclineButton
                cookieName="siteConsent"
                style={{ background: "#1f2937"}}
                buttonWrapperClasses="w-full flex flex-col mt-4 md:mt-0 md:flex-row md:ml-8 md:w-auto"
                buttonClasses="m-2 md:m-4"
                declineButtonClasses="m-2 md:m-4"
                containerClasses="fixed flex flex-col md:flex-row w-full z-100 px-4 py-2 align-center justify-between"
                contentClasses="flex items-center"
                buttonStyle={{
                    color: "#fff",
                    background: "#10b981",
                    borderRadius: "0.5rem",
                    padding: "0.5rem 1rem",
                }}
                declineButtonStyle={{
                    color: "#fff",
                    background: "#ef4444",
                    borderRadius: "0.5rem",
                    padding: "0.5rem 1rem"
                }}
                onAccept={onAccept}
                onDecline={onDecline}
                expires={365}
            >
                Auf dieser Seite sind Inhalte von Drittanbietern (z.B. Twitch, Mixcloud) eingebunden.
                Dabei können Cookies durch diese Dienste gesetzt werden, sobald du zustimmst.
            </CookieConsent>
    )
}

