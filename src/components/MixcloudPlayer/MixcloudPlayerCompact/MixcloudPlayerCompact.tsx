import type { ShowItem } from "../../../hooks/useMixcloudShows";
import { MixcloudPlayerFrame } from "../MixcloudPlayerFrame/MixcloudPlayerFrame";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

type MixcloudPlayerCompactProps = {
    variant: "compact" | "list";
    shows: ShowItem[];
}

export function MixcloudPlayerCompact({ variant, shows }: MixcloudPlayerCompactProps) {
    const { t } = useTranslation("common");
    if (variant !== "compact") return null;
    
    return (
        <div data-testid="mixcloudPlayerFrameWrapper" className="grid grid-cols-1 gap-6">
            {shows.map((show) => (
                <MixcloudPlayerFrame key={show.key} showTitle={show.name} showUrl={show.url} hideArtwork={false}
                                     customClass={"rounded-lg overflow-hidden shadow-md"}/>
            ))}
            <NavLink to="/mixes" className="mb-4 md:mt-4 text-sm md:text-base font-bold hover:underline">
                {t("home.mixcloudFeedHomeShowAll")}
            </NavLink>
        </div>
    )
}