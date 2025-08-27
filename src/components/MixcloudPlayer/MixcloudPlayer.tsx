import { useState } from "react";
import { useMixcloudShows } from "../../hooks/useMixcloudShows";
import { ErrorMessage } from "../shared/ErrorMessage/ErrorMessage";
import { MixcloudPlayerCompact } from "./MixcloudPlayerCompact/MixcloudPlayerCompact";
import { MixcloudPlayerList } from "./MixcloudPlayerList/MixcloudPlayerList";
import { useTranslation } from "react-i18next";

type MixcloudPlayerProps = {
  limit?: number;
  variant?: "compact" | "list";
};

const MixcloudPlayer = ({ limit = 2, variant = "compact" }: MixcloudPlayerProps) => {
  const [currentOffset, setCurrentOffset] = useState(0);
  const { shows, offset, hasMore, error } = useMixcloudShows(currentOffset, limit);
  const { t } = useTranslation("mixes");

  if (error) {
    const handleRetry = () => setCurrentOffset(offset);
    return <ErrorMessage message={t("mixcloudFetchError")} onRetry={handleRetry} />;
  }

  const handleFetchMixes = () => {
    if (!hasMore) return;
    setCurrentOffset(offset);
  };

  return (
    <>
      <MixcloudPlayerCompact variant={variant} shows={shows} />
      <MixcloudPlayerList
        variant={variant}
        shows={shows}
        hasMore={hasMore}
        handleFetchMixes={handleFetchMixes}
      />
    </>
  );
};

export default MixcloudPlayer;
