import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const LegalLinks = () => {
  const { t } = useTranslation("footer");

  return (
    <nav
      aria-label={t("legalAriaLabel")}
      className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
    >
      <NavLink
        aria-label={t("imprintAriaLabel")}
        rel="noopener noreferrer"
        to="/imprint"
        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {t("imprintAnchor")}
      </NavLink>
      <NavLink
        aria-label={t("privacyAriaLabel")}
        rel="noopener noreferrer"
        to="/privacy"
        className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {t("privacyAnchor")}
      </NavLink>
    </nav>
  );
};
