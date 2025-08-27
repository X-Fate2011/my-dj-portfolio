import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <LangButton
        lang={"en"}
        clickHandler={() => changeLanguage("en")}
        currentLang={i18n.language}
        t={t}
      />
      <LangButton
        lang={"de"}
        clickHandler={() => changeLanguage("de")}
        currentLang={i18n.language}
        t={t}
      />
    </div>
  );
}

type LangButtonProps = {
  lang: string;
  clickHandler: () => void;
  currentLang: string;
  t: TFunction;
};

const LangButton = ({ lang, clickHandler, currentLang, t }: LangButtonProps) => {
  return (
    <button
      aria-label={t("header.switchLanguageAriaLabel", { lang: lang.toUpperCase() })}
      onClick={clickHandler}
      className={`px-2 py-1 rounded ${
        currentLang === lang ? "bg-white text-black" : "text-white drop-shadow-md bg-transparent"
      }`}
    >
      {lang.toUpperCase()}
    </button>
  );
};
