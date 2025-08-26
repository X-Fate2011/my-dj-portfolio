import { useEffect, useState } from "react";
import type { ShowItem } from "../types/ShowItem";
import { fetchMixcloudShows } from "../services/mixcloud";

export function useMixcloudShows(currentOffset: number, limit: number = 2) {
  const [shows, setShows] = useState<ShowItem[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    fetchMixcloudShows(currentOffset, limit, controller.signal).then((data) => {
        setShows((prevShows) => [...prevShows, ...data.data]);
        setOffset((prevOffset) => prevOffset + limit);
        setHasMore(data.data.length === limit);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err as Error);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [currentOffset, limit]);

  return { shows, offset, isLoading, hasMore, error };
}
