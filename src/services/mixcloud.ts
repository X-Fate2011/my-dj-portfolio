import type { ShowItem } from "../types/ShowItem";

export async function fetchMixcloudShows(offset: number, limit: number, signal?: AbortSignal) {
  const response = await fetch(
    `https://api.mixcloud.com/x_fate/cloudcasts/?limit=${limit}&offset=${offset}`,
    { signal }
  );
  if (!response.ok) throw new Error("Failed to fetch Mixcloud shows");
  const data = await response.json();
  return data as { data: ShowItem[] };
}
