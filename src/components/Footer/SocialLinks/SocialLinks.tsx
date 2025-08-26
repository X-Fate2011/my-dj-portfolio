import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faMixcloud, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const links = [
  { href: "https://www.instagram.com/x_fate", icon: faInstagram, key: "instagramAriaLabel" },
  { href: "https://www.mixcloud.com/x_fate", icon: faMixcloud, key: "mixcloudAriaLabel" },
  { href: "https://twitch.tv/truededicationmusic", icon: faTwitch, key: "twitchAriaLabel" },
];

export const SocialLinks = () => {
  const { t } = useTranslation("footer");

  return (
    <nav aria-label="Social Media" className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t(link.key)}
          className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <FontAwesomeIcon icon={link.icon} size="2x" />
        </a>
      ))}
    </nav>
  );
};
