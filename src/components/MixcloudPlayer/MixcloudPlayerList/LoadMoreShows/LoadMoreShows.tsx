import { useTranslation } from "react-i18next";

type LoadMoreShowsProps = {
  hasMore: boolean;
  isLoading: boolean;
  handleFetchMixes: () => void;
};

export const LoadMoreShows = ({ hasMore, isLoading, handleFetchMixes }: LoadMoreShowsProps) => {
  const { t } = useTranslation("mixes");
  if (!hasMore) return null;

  return (
    <button
      className="mt-4 px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold disabled:opacity-50"
      onClick={handleFetchMixes}
      disabled={isLoading}
    >
      {isLoading ? t("mixcloudLoadMoreBtnIsLoadingLabel") : t("mixcloudLoadMoreLabel")}
    </button>
  );
};
