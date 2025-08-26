import { useEffect, useState } from "react";
import { getCookieConsentValue } from "react-cookie-consent";

export function useCookieConsent(cookieName: string = "siteConsent") {
  const [consentGiven, setConsentGiven] = useState(getCookieConsentValue(cookieName) === "true");

  useEffect(() => {
    const handleStorageChange = () => {
      setConsentGiven(getCookieConsentValue(cookieName) === "true");
    };

    window.addEventListener("cookie-consent-change", handleStorageChange);
    return () => window.removeEventListener("cookie-consent-change", handleStorageChange);
  }, [cookieName]);

  return consentGiven;
}
