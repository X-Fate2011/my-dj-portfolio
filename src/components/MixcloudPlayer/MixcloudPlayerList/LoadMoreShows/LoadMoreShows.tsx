type LoadMoreShowsProps = {
    showLoadMoreButton: boolean;
    hasMore: boolean;
    isLoading: boolean;
    handleLoadMore: () => void;
}

export const LoadMoreShows = ({showLoadMoreButton, hasMore, isLoading, handleLoadMore}: LoadMoreShowsProps) => {
    if (!showLoadMoreButton || !hasMore) return null;
    
    return (
        <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="mt-4 px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold disabled:opacity-50"
        >
            {isLoading ? "Lade..." : "Mehr laden"}
        </button>
    )
}