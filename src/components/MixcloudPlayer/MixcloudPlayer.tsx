import React, { useEffect, useRef, useState } from 'react';
import { useIsDesktop } from "../../hooks/useIsDesktop";

type ShowItem = {
    key: string;
    name: string;
    url: string;
    pictures: { large: string };
    created_time: string;
    tags: { name: string }[];
};

type MixcloudPlayerProps = {
    limit?: number;
    showLoadMoreButton?: boolean;
    variant?: "compact" | "list";
};

const MixcloudPlayer: React.FC<MixcloudPlayerProps> = ({
                                                           limit = 2,
                                                           showLoadMoreButton = false,
                                                           variant = "compact"
                                                       }) => {
    const [shows, setShows] = useState<ShowItem[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    
    const fetchMixes = async (currOffset: number, limit: number): Promise<ShowItem[]> => {
        const response = await fetch(`https://api.mixcloud.com/x_fate/cloudcasts/?limit=${limit}&offset=${currOffset}`);
        const data = await response.json();
        return data.data;
    };
    
    const hasFetchedOnce = useRef(false);
    
    useEffect(() => {
        if (!hasFetchedOnce.current) {
            hasFetchedOnce.current = true;
            fetchMixes(0, limit!)
                .then((newShows: ShowItem[]) => {
                    setShows((prevShows) => [...prevShows, ...newShows]);
                    setOffset((prevOffset) => prevOffset + limit);
                    setHasMore(newShows.length === limit);
                    setIsLoading(false);
                })
                .catch((err) => console.error(err));
        }
    }, []);
    
    const handleLoadMore = async () => {
        if (isLoading || !hasMore) return;
        
        setIsLoading(true);
        try {
            const moreData = await fetchMixes(offset, limit!);
            setShows((prev) => [...prev, ...moreData]);
            setOffset((prev) => prev + limit!);
            setHasMore(moreData.length === limit);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }
    
    function capitalizeTags(tag: string): string {
        return tag
            .split(" ")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
    
    const isDesktop = useIsDesktop();
    const hideArtwork = isDesktop ? "1" : "0";
    
    return (
        <>
            {variant === "compact" && (
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
            )}
            {variant === "list" && (
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
                                                {show.tags.map((tag) => (
                                                    <span
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
                    
                    {showLoadMoreButton && hasMore && (
                        <button
                            onClick={handleLoadMore}
                            disabled={isLoading}
                            className="mt-4 px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold disabled:opacity-50"
                        >
                            {isLoading ? "Lade..." : "Mehr laden"}
                        </button>
                    )}
                </div>
            )}
        </>
    );
}

export default MixcloudPlayer;
