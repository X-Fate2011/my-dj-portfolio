import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faMixcloud, faTwitch } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="bg-transparent text-white py-8 mt-16 z-20" role="contentinfo">
            <div className="px-4 flex flex-col lg:flex-row items-center justify-center gap-4">
                
                {/* Social Links */}
                <nav aria-label="Social Media" className="flex gap-4">
                    <a
                        href="https://www.instagram.com/x_fate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label="X-Fate auf Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                    <a
                        href="https://www.mixcloud.com/x_fate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label="X-Fate auf Mixcloud"
                    >
                        <FontAwesomeIcon icon={faMixcloud} size="2x"/>
                    </a>
                    <a
                        href="https://www.mixcloud.com/truededicatinmusic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label="TrueDedicationMusic auf Twitch"
                    >
                        <FontAwesomeIcon icon={faTwitch} size="2x"/>
                    </a>
                </nav>
                
                {/* © Info */}
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} X-Fate. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    
    );
};

export default Footer;