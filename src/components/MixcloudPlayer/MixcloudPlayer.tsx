import { useState } from 'react';
import { useMixcloudShows } from "../../hooks/useMixcloudShows";
import { ErrorMessage } from "../shared/ErrorMessage/ErrorMessage";
import { MixcloudPlayerCompact } from "./MixcloudPlayerCompact/MixcloudPlayerCompact";
import { MixcloudPlayerList } from "./MixcloudPlayerList/MixcloudPlayerList";

type MixcloudPlayerProps = {
    limit?: number;
    variant?: "compact" | "list";
};

const MixcloudPlayer = ({ limit = 2, variant = "compact" }: MixcloudPlayerProps) => {
    const [currentOffset, setCurrentOffset] = useState(0);
    const {shows, offset, hasMore, isLoading, error} = useMixcloudShows(currentOffset, limit);
    
    if (error) {
        const handleRetry = () => setCurrentOffset(offset);
        return <ErrorMessage
            message="Fehler beim Laden der Mixcloud-Shows."
            onRetry={handleRetry}
        />
    }
    
    const handleFetchMixes = () => {
        if (isLoading || !hasMore) return;
        setCurrentOffset(offset);
    }
    
    return (
        <>
            <MixcloudPlayerCompact variant={variant} shows={shows}/>
            <MixcloudPlayerList variant={variant} shows={shows} isLoading={isLoading} hasMore={hasMore}
                                handleFetchMixes={handleFetchMixes}/>
        </>
    );
}

export default MixcloudPlayer;
