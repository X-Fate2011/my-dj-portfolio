import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faMixcloud, faTwitch } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from "react-router-dom";

const Footer = () => {
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
                        aria-label="X-Fate auf Instagram"
                        tabIndex={0}
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                    <a
                        href="https://www.mixcloud.com/x_fate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label="X-Fate auf Mixcloud"
                        tabIndex={1}
                    >
                        <FontAwesomeIcon icon={faMixcloud} size="2x"/>
                    </a>
                    <a
                        href="https://twitch.tv/truededicationmusic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label="TrueDedicationMusic auf Twitch"
                        tabIndex={2}
                    >
                        <FontAwesomeIcon icon={faTwitch} size="2x"/>
                    </a>
                </nav>
                
                {/* © Info */}
                <p aria-label="Copyright Info" className="text-sm text-gray-400">&copy; {new Date().getFullYear()} X-Fate. Alle Rechte vorbehalten.</p>
                
                {/* © Legal stuff */}
                <nav aria-label="Rechtliches" className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    <NavLink tabIndex={3} aria-label="Impressum" rel="noopener noreferrer" to="/imprint" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Impressum</NavLink>
                    <NavLink tabIndex={4} aria-label="Datenschutzerklärung" rel="noopener noreferrer" to="/privacy" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Datenschutzerklärung</NavLink>
                </nav>
            </div>
        </footer>
    
    );
};

export default Footer;