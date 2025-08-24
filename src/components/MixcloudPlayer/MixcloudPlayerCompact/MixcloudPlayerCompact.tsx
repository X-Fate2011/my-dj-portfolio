import type { ShowItem } from "../../../hooks/useMixcloudShows";

type MixcloudPlayerCompactProps = {
    variant: "compact" | "list";
    shows: ShowItem[];
}

export function MixcloudPlayerCompact({ variant, shows }: MixcloudPlayerCompactProps) {
    if (variant !== "compact") return null;
    
    return (
        <div className="grid grid-cols-1 gap-6">
            {shows.map((show) => (
                <div key={show.key} className="rounded-lg overflow-hidden shadow-md">
                    <iframe
                        title={show.name}
                        width="100%"
                        height="60"
                        src={`https://player-widget.mixcloud.com/widget/iframe/?feed=${encodeURIComponent(show.url)}&light=1&hide_cover=1&mini=1`}
                        allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
                        className="w-full"
                        loading="lazy"
                    ></iframe>
                </div>
            ))}
        </div>
    )
}