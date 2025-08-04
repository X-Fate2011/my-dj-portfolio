export default function TwitchStream() {
    const parentUrl = window.location.href.includes("localhost") ? "localhost" : encodeURIComponent(window.location.host);
    return (
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-center mt-4 lg:mt-auto lg:mx-8 pb-8 h-[400px]">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-4">Livestream</h2>
            <iframe
                src={`https://player.twitch.tv/?channel=truededicationmusic&parent=${parentUrl}`}
                className="w-full h-full"
                loading="lazy"
                title="Twitch Stream von TrueDedicationMusic"
                allowFullScreen>
            </iframe>
        </div>
    )
}