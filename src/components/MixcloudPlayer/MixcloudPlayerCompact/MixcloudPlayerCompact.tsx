import type { ShowItem } from "../../../hooks/useMixcloudShows";
import { MixcloudPlayerFrame } from "../MixcloudPlayerFrame/MixcloudPlayerFrame";

type MixcloudPlayerCompactProps = {
    variant: "compact" | "list";
    shows: ShowItem[];
}

export function MixcloudPlayerCompact({ variant, shows }: MixcloudPlayerCompactProps) {
    if (variant !== "compact") return null;
    
    return (
        <div data-testid="mixcloudPlayerFrameWrapper" className="grid grid-cols-1 gap-6">
            {shows.map((show) => (
                <MixcloudPlayerFrame key={show.key} showTitle={show.name} showUrl={show.url} hideArtwork={false}
                                     customClass={"rounded-lg overflow-hidden shadow-md"}/>
            ))}
        </div>
    )
}