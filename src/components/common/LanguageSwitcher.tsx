import { useTranslation } from "react-i18next";
import type { i18n as i18nType, TFunction } from "i18next";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <LangButton lang={"en"} clickHandler={() => changeLanguage("en")} i18n={i18n} t={t} />
      <LangButton lang={"de"} clickHandler={() => changeLanguage("de")} i18n={i18n} t={t} />
    </div>
  );
}

type LangButtonProps = {
  lang: string;
  clickHandler: () => void;
  i18n: i18nType;
  t: TFunction;
};

const LangButton = ({ lang, clickHandler, i18n, t }: LangButtonProps) => {
  return (
    <button
      aria-label={t("header.switchLanguageAriaLabel", { lang: lang.toUpperCase() })}
      onClick={clickHandler}
      className={`px-2 py-1 rounded ${
        i18n.language === lang ? "bg-white text-black" : "bg-transparent"
      }`}
    >
      {lang.toUpperCase()}
    </button>
  );
};
