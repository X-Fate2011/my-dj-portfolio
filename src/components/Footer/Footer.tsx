import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faMixcloud, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("footer");
    return (
        <footer className="bg-transparent text-white py-8 z-20" role="contentinfo">
            <div className="px-4 flex flex-col lg:flex-row items-center justify-center gap-4">
                
                {/* Social Links */}
                <nav aria-label="Social Media" className="flex gap-4">
                    <a
                        href="https://www.instagram.com/x_fate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label={t("instagramAriaLabel")}
                        tabIndex={0}
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                    <a
                        href="https://www.mixcloud.com/x_fate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label={t("mixcloudAriaLabel")}
                        tabIndex={1}
                    >
                        <FontAwesomeIcon icon={faMixcloud} size="2x"/>
                    </a>
                    <a
                        href="https://twitch.tv/truededicationmusic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label={t("twitchAriaLabel")}
                        tabIndex={2}
                    >
                        <FontAwesomeIcon icon={faTwitch} size="2x"/>
                    </a>
                </nav>
                
                <p aria-label={t("copyrightAriaLabel")}
                   className="text-sm text-gray-400"
                >{t("copyrightAnchor", { year: new Date().getFullYear() })}</p>
                
                {/* © Legal stuff */}
                <nav aria-label={t("legalAriaLabel")} className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    <NavLink tabIndex={3} aria-label={t("imprintAriaLabel")} rel="noopener noreferrer" to="/imprint" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white">{t("imprintAnchor")}</NavLink>
                    <NavLink tabIndex={4} aria-label={t("privacyAriaLabel")} rel="noopener noreferrer" to="/privacy" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white">{t("privacyAnchor")}</NavLink>
                </nav>
            </div>
        </footer>
    
    );
};

export default Footer;