import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMePage() {
    
    return (
        <section className="flex flex-col items-center">
            <div className="w-full h-[200px] md:h-[500px] lg:h-[500px] xl:h-[600px] overflow-hidden relative">
                <picture>
                    <source
                        srcSet="/x-fate2_480.webp 480w, /x-fate2_1280.webp 1280w, /x-fate2.webp 1920w"
                        type="image/webp"
                        sizes="100vw"
                    />
                    <img
                        src="/x-fate_1280.webp"
                        alt="X-Fate auf der Ruhr In Love 2023"
                        className="sepia h-full w-full shadow-md object-cover object-[100%_48%]"
                        loading="eager"
                        decoding="async"
                    />
                </picture>
                <blockquote
                    className="absolute bottom-4 left-1/2 w-full md:w-auto -translate-x-1/2 md:translate-0 md:left-4 bg-black/75 text-white p-4 rounded-xl max-w-md  text-base lg:text-lg xl:text-xl italic">
                    „Musik ist die stärkste Form der Magie.“
                    <cite className="block mt-2 text-sm lg:text-md xl:text-lg not-italic text-gray-300">– Marilyn Manson</cite>
                </blockquote>
            </div>
            <div className="max-w-auto lg:max-w-[75vw] xl:max-w-[60vw] flex flex-col items-center m-4">
                <div className="m-4 w-full">
                    <h2>Über mich</h2>
                    <div className="flex flex-col md:flex-row-reverse justify-around w-full text-base lg:text-lg xl:text-xl">
                        <p className="mb-4 md:m-8 lg:w-1/2">
                            Seit 2011 bin ich als DJ aktiv. Angefangen hat alles bei GlobalBase.FM, einem kleinen Webradio, bei dem ich
                            meine
                            ersten
                            Schritte mit Unterstützung eines guten Freundes und Mentors gemacht habe.
                            Ein Jahr später folgte mit TechLaRocca.FM (gegründet von u.a. TomTrax) der nächste Meilenstein – ein damals sehr
                            bekannter Sender in der Webradio-Szene.
                            2014 wechselte ich zu NextAge.FM, bevor sich 2015 ein langjähriger Traum erfüllte: Ich wurde Teil von
                            RauteMusik.FM,
                            dem
                            größten Webradio Europas.
                            Ab 2015 prägte ich dort die Clubformate auf rm.fm/house (bis heute) sowie rm.fm/harder (bis 2023) mit eigenen
                            regelmäßigen Shows. Seit 2020 bin ich Teil der Sendeleitung von rm.fm/house.
                        </p>
                        <blockquote
                            className="relative w-full lg:w-[300px] my-8 md:my-auto md:mx-8 p-6 bg-gray/100 rounded-xl text-white italic">
                            <span className="absolute bottom-4 -left-2 text-6xl text-white">„</span>
                            „Mit RauteMusik ging ein riesiger Traum in Erfüllung – plötzlich wurden Festivalauftritte Realität.“
                            <span className="absolute -top-4 -right-2 text-6xl text-white">“</span>
                        </blockquote>
                    </div>
                </div>
                <div className="m-4 md:m-8 w-full">
                    <h2>Sendungen & Streaming</h2>
                    <div className="flex flex-col md:flex-row justify-around items-center w-full text-base lg:text-lg xl:text-xl">
                        <ul className="text-left md:m-8 lg:w-1/2">
                            <li><span className="font-bold">2015–2022:</span> Wöchentliche Show auf rm.fm/house</li>
                            <li><span className="font-bold">2017–2023:</span> Wöchentliche Show auf rm.fm/harder</li>
                            <li><span className="font-bold">2023–2024:</span> Umzug auf mixcloud.com/live</li>
                            <li><span className="font-bold">Seit 2020:</span> Sendeleitung bei rm.fm/house</li>
                            <li><span className="font-bold">Seit 2023:</span> Zweiwöchentlicher Wechsel zwischen rm.fm/house & Twitch-Stream
                            </li>
                            <li><span className="font-bold">Seit 2024:</span> Twitch-Stream im Wechsel mit Dom Cray – ein gemeinsames
                                Projekt
                                von
                                uns Beiden
                            </li>
                        </ul>
                        <blockquote className="relative w-full md:w-[300px] mt-8 md:my-auto p-6 bg-gray/100 rounded-xl text-white italic">
                            <span className="absolute bottom-4 -left-2 text-6xl text-white">„</span>
                            „Wenn ich auflege, bin ich wie in einer anderen Welt.“
                            <span className="absolute -top-4 -right-2 text-6xl text-white">“</span>
                        </blockquote>
                    </div>
                </div>
                <div className="m-4 md:m-8 w-full">
                    <h2>Live-Auftritte</h2>
                    <div className="flex flex-col md:flex-row-reverse justify-around items-center w-full text-base lg:text-lg xl:text-xl">
                        <div className="text-left">
                            <p className="font-bold">World Club Dome</p>
                            <ul>
                                <li>2017, 2018, 2019, 2023</li>
                                <li>2024 zusätzlich: VIP Floor bei der Winter Edition</li>
                            </ul>
                            <p className="font-bold mt-4">Ruhr In Love</p>
                            <ul>
                                <li>2017, 2022, 2023</li>
                            </ul>
                            <p className="font-bold mt-4">Club-Events</p>
                            <ul>
                                <li>2018: CrosSs Sounds, Ingolstadt</li>
                                <li>2018: Hard Emotions, Recklinghausen</li>
                                <li>2018: Hard Emotions, Bochum</li>
                            </ul>
                            <p className="font-bold mt-4">Stream-Specials</p>
                            <ul>
                                <li>2021: rm.fm/house "Office Stream Special Sounds", Köln</li>
                                <li>2023: BreakZ.FM meets rm.fm/house, Köln</li>
                            </ul>
                        </div>
                        
                        <blockquote
                            className="relative w-full md:w-[300px] mt-8 md:mr-8 md:my-auto p-6 bg-gray/100 rounded-xl text-white italic">
                            <span className="absolute bottom-4 -left-2 text-6xl text-white">„</span>
                            „Ich liebe es, wenn Menschen mit meiner Musik mitgehen – das gibt mir unendlich viel zurück.“
                            <span className="absolute -top-4 -right-2 text-6xl text-white">“</span>
                        </blockquote>
                    </div>
                </div>
                <div className="m-4 md:m-8 w-full">
                    <h2>Was mich antreibt</h2>
                    <div className="flex flex-col md:flex-row justify-around items-center w-full text-base lg:text-lg xl:text-xl">
                        <p className="mb-4 md:m-8 md:w-1/2">
                            Musik ist für mich mehr als Klang. Sie ist Emotion, Verbindung und Energie zugleich.
                            Jeder Mix erzählt eine Geschichte, und jedes Set ist für mich eine Reise – für mich und für die, die zuhören.
                            Umso mehr freut es mich zu sehen (und auch via Chat zu lesen), wenn die Leute mit mir feiern!
                        </p>
                        <blockquote className="relative w-full mt-8 md:my-auto md:w-[300px] p-6 bg-gray/100 rounded-xl text-white italic">
                            <span className="absolute bottom-4 -left-2 text-6xl text-white">„</span>
                            „Ich freue mich auf alles, was noch kommt – und bleibe am Ball.“
                            <span className="absolute -top-4 -right-2 text-6xl text-white">“</span>
                        </blockquote>
                    </div>
                </div>
                <div aria-labelledby="kontakt" className="m-4 md:m-8 w-full">
                    <h2>Kontakt</h2>
                    <p className="text-gray-300 mb-4 text-base lg:text-lg xl:text-xl">
                        Du hast Fragen, Booking-Anfragen oder willst einfach nur connecten? Dann lass mir einen Follow auf Instagram da oder schreib mir einfach eine
                    </p>
                    <a
                        href="https://www.instagram.com/x_fate/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-row items-center gap-3 px-6 py-3 bg-pink-600 text-white font-medium rounded-full shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition"
                        aria-label="Kontaktiere X-Fate über Instagram Direktnachricht"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x"/> DM auf Instagram
                    </a>
                </div>
            </div>
        </section>
    
    )
}

export default AboutMePage
