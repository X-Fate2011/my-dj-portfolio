import { useEffect, useState } from 'react';

type MixcloudItem = {
    key: string;
    name: string;
    url: string;
};

export default function MixcloudFeed() {
    const [shows, setShows] = useState<MixcloudItem[]>([]);
    
    useEffect(() => {
        const fetchMixes = async () => {
            try {
                const response = await fetch('https://api.mixcloud.com/x_fate/cloudcasts/?limit=2');
                const data = await response.json();
                setShows(data.data);
            } catch (err) {
                return err;
            }
        };
        
        fetchMixes()
            .then(() => console.log("Fetched data from Mixcloud successfully."))
            .catch((err) => console.error(err));
    }, []);
    
    return (
        <section aria-label="Letzte Shows" className="z-10 p-4 lg:p-auto lg:ml-8 w-full lg:w-1/2">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-4">Die letzten Shows nochmal anhören</h2>
            <div className="grid grid-cols-1 gap-6">
                {shows.map((show) => (
                    <div key={show.key} className="rounded-lg overflow-hidden shadow-md">
                        <iframe
                            title={show.name}
                            width="100%"
                            height="60"
                            src={`https://player-widget.mixcloud.com/widget/iframe/?feed=${encodeURIComponent(show.url)}&light=1&hide_cover=1&mini=1`}
                            frameBorder="0"
                            allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
                            className="w-full"
                            loading="lazy"
                        ></iframe>
                    </div>
                ))}
            </div>
        </section>
    );
}
