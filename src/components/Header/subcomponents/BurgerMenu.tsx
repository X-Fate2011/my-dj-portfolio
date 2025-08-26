import { useTranslation } from "react-i18next";

export type BurgerMenuProps = {
  burgerVisible: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export function BurgerMenu({ burgerVisible, isMenuOpen, toggleMenu }: BurgerMenuProps) {
  const { t } = useTranslation("common");
  return (
    <button
      aria-controls="mobile-menu"
      aria-expanded={isMenuOpen}
      aria-hidden={!burgerVisible}
      aria-label={
        isMenuOpen ? t("header.burgerMenuCloseAriaLabel") : t("header.burgerMenuOpenAriaLabel")
      }
      tabIndex={burgerVisible ? 0 : -1}
      onClick={toggleMenu}
      className="fixed top-4 right-4 sm:hidden z-[999] p-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-white"
    >
      <span
        className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
          isMenuOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-white rounded my-1 transition-all duration-300 ${
          isMenuOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
          isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      />
    </button>
  );
}
