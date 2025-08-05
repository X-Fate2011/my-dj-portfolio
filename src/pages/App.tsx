import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import MixcloudFeedHome from "../components/MixcloudFeedHome.tsx";
import TwitchStream from "../components/TwitchStream.tsx";

function App() {
    
    return (
        <>
            <section className="flex flex-col">
                <div className="flex flex-col lg:flex-row mb-4 lg:m-8 h-[450px] md:h-[350px] lg:h-[450px]">
                    {/* Overlay */}
                    
                    <div className="relative w-full overflow-hidden">
                        <picture>
                            <source
                                srcSet="/x-fate_480.webp 480w, /x-fate_1280.webp 1280w, /x-fate.webp 1920w"
                                type="image/webp"
                                sizes="100vw"
                            />
                            <img
                                src="/x-fate_1280.webp"
                                alt="X-Fate"
                                className="w-full h-full object-cover object-top rounded-none lg:rounded-2xl"
                                loading="eager"
                                decoding="async"
                            />
                        </picture>
                        <div className="absolute inset-0 bg-white/75 h-full z-10 lg:hidden" aria-hidden="true"/>
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col absolute lg:relative justify-between lg:ml-8 z-20">
                        <div className="p-4 lg:p-6 xl:p-8 lg:mb-8 bg-transparent lg:bg-white lg:rounded-2xl text-black max-w-full">
                            <h2>Sound. Energie. Emotion. Passion.</h2>
                            <p className="text-base lg:text-lg xl:text-xl">
                                Mein Name ist X-Fate und ich mixe seit 2011 elektronische Musik – von den ersten Beats im Webradio über
                                Festivalbühnen
                                bis hin zu meinen aktuellen Livestreams auf Twitch.
                                Ob EDM, Hardstyle, Hard-/Frenchcore oder Drum & Bass: Ich liebe es, Genres zu verbinden und Menschen mit
                                Energie
                                und Emotionen zu begeistern.
                                Hör rein, tauch ein – und folg mir auf meiner musikalischen Reise!
                            </p>
                        </div>
                        
                        <div className="p-4 lg:p-6 xl:p-8 bg-transparent lg:bg-white lg:rounded-2xl text-black max-w-full z-20">
                            <h2>Kommende Shows</h2>
                            <p className="text-base lg:text-lg xl:text-xl">
                                Jeden Dienstag um 20:00 Uhr – im Wechsel Webradio &amp; Twitch.
                                Schau vorbei und sei live dabei!
                            </p>
                            <p className="text-black text-base lg:text-lg xl:text-xl">
                                <a href="https://twitch.tv/truededicationmusic" target="_blank" rel="noopener noreferrer"
                                   className="!text-black"><FontAwesomeIcon icon={faTwitch}/>Twitch</a>
                                &nbsp;|&nbsp;
                                <a href="https://rm.fm/house" target="_blank" rel="noopener noreferrer"
                                   className="!text-black"><FontAwesomeIcon icon={faPlay}/>RauteMusik</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full">
                    <MixcloudFeedHome/>
                    <TwitchStream/>
                </div>
            
            </section>
        </>
    )
}

export default App
