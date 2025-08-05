import MixcloudPlayer from "./MixcloudPlayer.tsx";

export default function MixcloudFeedHome() {
    return (
        <section aria-label="Letzte Shows" className="z-10 p-4 lg:p-0 lg:ml-8 w-full lg:w-1/2">
            <h2>Die letzten Shows nochmal anhören</h2>
            <div className="grid grid-cols-1 gap-6">
                <MixcloudPlayer limit={2} variant="compact"/>
            </div>
        </section>
    );
}
