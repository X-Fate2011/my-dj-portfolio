import { useEffect, useState } from "react";
import type { ShowItem } from "../types/ShowItem";
import { fetchMixcloudShows } from "../services/mixcloud";
import { useLoading } from "./useLoading";

export function useMixcloudShows(currentOffset: number, limit: number = 2) {
  const [shows, setShows] = useState<ShowItem[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const controller = new AbortController();
    startLoading();
    fetchMixcloudShows(currentOffset, limit, controller.signal)
      .then((data) => {
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
        stopLoading();
      });

    return () => controller.abort();
  }, [currentOffset, limit, startLoading, stopLoading]);

  return { shows, offset, hasMore, error };
}
