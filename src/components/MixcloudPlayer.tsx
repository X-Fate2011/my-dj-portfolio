import React, { useEffect, useRef, useState } from 'react';

type ShowItem = {
    key: string;
    name: string;
    url: string;
    pictures: { large: string };
    created_time: string;
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
                <>
                    {shows.map((show) => (
                        <div className="flex flex-col md:flex-row">
                            <img src={show.pictures.large} alt={'Cover der Show "' + show.name + '"'} loading="lazy"/>
                            <div className="flex flex-col">
                                <div className="flex flex-col md:flex-row">
                                    <div className="flex flex-col">
                                        <span>Datum</span>
                                        <span>{new Date(show.created_time).toLocaleDateString("de-DE")}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Titel</span>
                                        <span>{show.name}</span>
                                    </div>
                                </div>
                            </div>
                            <div key={show.key} className="w-full">
                                <iframe
                                    title={show.name}
                                    width="100%"
                                    height="60"
                                    src={`https://player-widget.mixcloud.com/widget/iframe/?feed=${encodeURIComponent(show.url)}&light=1&hide_cover=1&mini=1`}
                                    allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
                                    className="rounded shadow-md"
                                    loading="lazy"
                                ></iframe>
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
                </>
            )}
        </>
    );
}

export default MixcloudPlayer;
