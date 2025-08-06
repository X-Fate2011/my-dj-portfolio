import { useEffect, useState } from "react";
import { getCookieConsentValue } from "react-cookie-consent";

export function useCookieConsent(cookieName: string = "siteConsent") {
    const [consentGiven, setConsentGiven] = useState(
        getCookieConsentValue(cookieName) === "true"
    );
    
    useEffect(() => {
        const handleStorageChange = () => {
            setConsentGiven(getCookieConsentValue(cookieName) === "true");
        };
        
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [cookieName]);
    
    return consentGiven;
}