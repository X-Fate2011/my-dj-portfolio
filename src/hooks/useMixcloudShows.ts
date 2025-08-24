import { useEffect, useState } from "react";

export type ShowItem = {
    key: string;
    name: string;
    url: string;
    pictures: { large: string };
    created_time: string;
    tags: { name: string }[];
};

export function useMixcloudShows(currentOffset: number, limit: number = 2) {
    const [shows, setShows] = useState<ShowItem[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    
    useEffect(() => {
        const controller = new AbortController();
        const fetchOpts = {
            signal: controller.signal
        }
        fetch(`https://api.mixcloud.com/x_fate/cloudcasts/?limit=${limit}&offset=${currentOffset}`, fetchOpts)
            .then((response) => response.json())
            .then((data) => {
                setShows((prevShows) => [...prevShows, ...data.data]);
                setOffset((prevOffset) => prevOffset + limit);
                setHasMore(data.data.length === limit);
            }).catch((err) => {
                setError(err as Error);
        }).finally(() => {
            setIsLoading(false);
        });
        
        return () => controller.abort();
    }, [currentOffset, limit]);
    
    return { shows, offset, isLoading, hasMore, error };
}