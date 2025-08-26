import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BurgerMenu } from "./subcomponents/BurgerMenu";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { NavigationLinks } from "./subcomponents/NavigationLinks";
import { useOnEscape } from "../../hooks/useOnEscape";
import { useScrollLock } from "../../hooks/useScrollLock";
import { FocusTrap } from "focus-trap-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useIsDesktop(640);
  const { t } = useTranslation("common");

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  useOnEscape(closeMenu);
  useScrollLock(isOpen);

  return (
    <header className="bg-header shadow sticky top-0 z-50">
      <div className="mx-auto max-w-full px-4 py-4 flex items-center justify-between">
        <h1>
          <Link to="/" aria-label={t("header.logoLinkAriaLabel")}>
            <picture>
              <source
                srcSet="/logo_480.webp 480w, /logo.webp 1920w"
                type="image/webp"
                sizes="100vw"
              />
              <img
                src="/logo_480.webp"
                alt={t("header.logoAltLabel")}
                className="h-10 w-auto"
                loading="eager"
                decoding="async"
              />
            </picture>
          </Link>
        </h1>

        <FocusTrap active={isOpen}>
          <div className={isDesktop ? "hidden" : "block z-[999]"}>
            <BurgerMenu burgerVisible={!isDesktop} isMenuOpen={isOpen} toggleMenu={toggleMenu} />
            <aside
              id="mobile-menu"
              aria-label={t("header.mobileNavigationAriaLabel")}
              className={`fixed top-0 right-0 w-full h-full bg-header text-white z-50 transform transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={t("header.mobileNavigationAriaLabel")}
                className="p-6 flex flex-col gap-6"
              >
                <NavigationLinks closeMenu={closeMenu} />
              </div>
            </aside>
          </div>
        </FocusTrap>

        <nav className="hidden sm:flex gap-6" aria-label={t("header.desktopNavigationAriaLabel")}>
          <NavigationLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;
