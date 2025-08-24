import { useTranslation } from "react-i18next";

export const CopyrightNotice = () => {
    const { t } = useTranslation("footer");
    
    return (
        <p
            aria-label={t("copyrightAriaLabel")}
            className="text-sm text-gray-400"
        >
            {t("copyrightAnchor", { year: new Date().getFullYear() })}
        </p>
    );
};
