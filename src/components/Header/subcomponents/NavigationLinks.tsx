import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

type PageLinkProps = {
    path: string;
    labeli18n: string;
};

const PAGE_LINKS = [
    { path: "/", labeli18n: "header.start" },
    { path: "/mixes", labeli18n: "header.mixes" },
    { path: "/about", labeli18n: "header.about" },
];

type NavigationLinksProps = { closeMenu?: () => void };

export function NavigationLinks({ closeMenu }: NavigationLinksProps) {
    const { t } = useTranslation("common");
    return (
        <>
            {PAGE_LINKS.map((link: PageLinkProps) => (
                <NavLink key={link.path} to={link.path} onClick={closeMenu}
                         className={({ isActive }) => isActive
                            ? "font-bold underline"
                            : "hover:underline transition"
                    }>
                    {t(link.labeli18n)}
                </NavLink>
            ))}
        </>
    )
}