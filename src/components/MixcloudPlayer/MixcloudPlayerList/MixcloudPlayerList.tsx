import { capitalizeTags } from "../../../utils/string-utils";
import { LoadMoreShows } from "./LoadMoreShows/LoadMoreShows";
import { useIsDesktop } from "../../../hooks/useIsDesktop";
import type { ShowItem } from "../../../hooks/useMixcloudShows";

type MixcloudPlayerListProps = {
    variant: "compact" | "list";
    shows: ShowItem[];
    isLoading: boolean;
    hasMore: boolean;
    handleFetchMixes: () => void;
}
export function MixcloudPlayerList({variant, isLoading, hasMore, shows, handleFetchMixes}: MixcloudPlayerListProps) {
    const isDesktop = useIsDesktop();
    const hideArtwork = isDesktop ? "1" : "0";
    
    if (variant !== "list") return null;
    
    return (
        <div className="divide-y divide-white-300 space-y-6">
            {shows.map((show) => (
                <div className="flex flex-col md:flex-row pb-6 w-full">
                    <img className="mr-auto md:mr-6 lg:mr-8 rounded-2xl hidden lg:block md:h-[250px]" src={show.pictures.large} alt={'Cover der Show "' + show.name + '"'} loading="lazy"/>
                    <div className="flex flex-col justify-between w-full">
                        <div className="flex flex-col">
                            <div className="flex flex-col-reverse lg:flex-row space-x-6 pb-4">
                                <div className="flex flex-col text-left">
                                    <span>Datum</span>
                                    <span
                                        className="text-white font-bold text-lg md:text-xl lg:text-2xl">{new Date(show.created_time).toLocaleDateString("de-DE", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    })}</span>
                                </div>
                                <div className="flex flex-col text-left mb-4 lg:mb-auto">
                                    <span>Titel</span>
                                    <span className="text-white font-bold text-lg md:text-xl lg:text-2xl">{show.name}</span>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-6 pb-4 md:pb-6 lg:pb-8">
                                <div className="flex flex-col text-left">
                                    <span>Genre</span>
                                    <div className="flex flex-wrap gap-2 mt-2 -ml-2">
                                        {show.tags.map((tag, index) => (
                                            <span key={index}
                                                  className="bg-gray-800 text-white px-3 py-1 my-1 rounded-full text-sm font-semibold">{capitalizeTags(tag.name)}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div key={show.key} className="w-full">
                            <iframe
                                title={show.name}
                                width="100%"
                                height="60"
                                src={`https://player-widget.mixcloud.com/widget/iframe/?feed=${encodeURIComponent(show.url)}&light=1&hide_cover=1&hide_artwork=${hideArtwork}&mini=1`}
                                allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
                                className="rounded shadow-md"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            ))}
            
            <LoadMoreShows hasMore={hasMore} isLoading={isLoading} handleFetchMixes={handleFetchMixes}/>
        </div>
    )
}