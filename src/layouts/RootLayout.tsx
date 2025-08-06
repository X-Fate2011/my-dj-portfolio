import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import CookieOverlay from "../components/CookieOverlay.tsx";
import CookieBanner from "../components/CookieBanner.tsx";
import { getCookieConsentValue } from "react-cookie-consent";

const RootLayout = () => {
    const cookiesAccepted = getCookieConsentValue("siteConsent");
    const [showBanner, setShowBanner] = useState(cookiesAccepted !== "true");
    
    const handleAccept = () => setShowBanner(false);
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