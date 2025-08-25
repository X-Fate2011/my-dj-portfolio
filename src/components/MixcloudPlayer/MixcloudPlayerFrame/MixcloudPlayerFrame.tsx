type MixcloudPlayerFrameProps = {
    showTitle: string;
    showUrl: string;
    hideArtwork: boolean;
    customClass: string;
};

export const MixcloudPlayerFrame = ({showTitle, showUrl, hideArtwork, customClass}: MixcloudPlayerFrameProps) => {
    
    return (
        <div data-testid="frameWrapper" className={customClass}>
            <iframe
                data-testid="frame"
                title={showTitle}
                width="100%"
                height="60"
                src={`https://player-widget.mixcloud.com/widget/iframe/?feed=${encodeURIComponent(showUrl)}&light=1&hide_artwork=${hideArtwork ? '1' : '0'}&hide_cover=1&mini=1`}
                allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
                className="w-full"
                loading="lazy"
            ></iframe>
        </div>
    )
}