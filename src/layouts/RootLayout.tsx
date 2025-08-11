import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import CookieOverlay from "../components/CookieOverlay/CookieOverlay.tsx";
import CookieBanner from "../components/CookieBanner/CookieBanner.tsx";
import { useCookieConsent } from "../hooks/useCookieConsent.ts";

const RootLayout = () => {
    const consentGiven = useCookieConsent();
    const [showBanner, setShowBanner] = useState(!consentGiven);
    
    const handleAccept = () => {
        setShowBanner(false);
        window.dispatchEvent(new Event("cookie-consent-change"));
    };
    const handleDecline = () => setShowBanner(false);
    
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Header/>
                
                <main className="flex-1 min-h-full">
                    <Outlet/>
                </main>
                
                <Footer/>
            </div>
            <CookieOverlay visible={showBanner}/>
            <CookieBanner
                onAccept={handleAccept}
                onDecline={handleDecline}
            />
        </>
    );
};

export default RootLayout;