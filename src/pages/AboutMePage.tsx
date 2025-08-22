import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trans, useTranslation } from "react-i18next";

function AboutMePage() {
    const { t } = useTranslation("about_me");
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
                    {t("quote_hero")}
                    <cite className="block mt-2 text-sm lg:text-md xl:text-lg not-italic text-gray-300">– Marilyn Manson</cite>
                </blockquote>
            </div>
            <div className="max-w-auto lg:max-w-[75vw] xl:max-w-[60vw] flex flex-col items-center m-4">
                <div className="m-4 w-full">
                    <h2>{t("headline")}</h2>
                    <div className="flex flex-col md:flex-row-reverse justify-around w-full text-base lg:text-lg xl:text-xl">
                        <p className="mb-4 md:m-8 lg:w-1/2">{t("about_me")}</p>
                        <blockquote
                            className="relative w-full lg:w-[300px] my-8 md:my-auto md:mx-8 p-6 bg-gray/100 rounded-xl text-white italic">
                            <span className="absolute bottom-4 -left-2 text-6xl text-white">„</span>
                            {t("about_me_quote")}
                            <span className="absolute -top-4 -right-2 text-6xl text-white">“</span>
                        </blockquote>
                    </div>
                </div>
                <div className="m-4 md:m-8 w-full">
                    <h2>{t("streaming_headline")}</h2>
                    <div className="flex flex-col md:flex-row justify-around items-center w-full text-base lg:text-lg xl:text-xl">
                        <ul className="text-left md:m-8 lg:w-1/2">
                            <li><Trans
                                i18nKey="streaming_list_1"
                                ns="about_me"
                                values={{ years: "2015–2022" }}
                                components={{
                                    0: <span className="font-bold" />,
                                    1: <a href="https://rm.fm/house" target="_blank" rel="noreferrer" />
                                }}
                            /></li>
                            <li><Trans
                                i18nKey="streaming_list_2"
                                ns="about_me"
                                values={{ years: "2017–2023" }}
                                components={{
                                    0: <span className="font-bold" />,
                                    1: <a href="https://rm.fm/harder" target="_blank" rel="noreferrer" />
                                }}
                            /></li>
                            <li><Trans
                                i18nKey="streaming_list_3"
                                ns="about_me"
                                values={{ years: "2023–2024" }}
                                components={{
                                    0: <span className="font-bold" />,
                                    1: <a href="mixcloud.com/live" target="_blank" rel="noreferrer" />
                                }}
                            /></li>
                            <li><Trans
                                i18nKey="streaming_list_4"
                                ns="about_me"
                                values={{ years: "Seit 2020" }}
                                components={{
                                    0: <span className="font-bold" />,
                                    1: <a href="rm.fm/house" target="_blank" rel="noreferrer" />
                                }}
                            /></li>
                            <li><Trans
                                i18nKey="streaming_list_5"
                                ns="about_me"
                                values={{ years: "Seit 2023" }}
                                components={{
                                    0: <span className="font-bold" />,
                                    1: <a href="rm.fm/house" target="_blank" rel="noreferrer" />
                                }}
                            /></li>
                            <li><Trans
                                i18nKey="streaming_list_6"
                                ns="about_me"
                                values={{ years: "Seit 2024" }}
                                components={{
                                    0: <span className="font-bold" />
                                }}
                            /></li>
                        </ul>
                        <blockquote className="relative w-full md:w-[300px] mt-8 md:my-auto p-6 bg-gray/100 rounded-xl text-white italic">
                            <span className="absolute bottom-4 -left-2 text-6xl text-white">„</span>
                            {t("streaming_quote")}
                            <span className="absolute -top-4 -right-2 text-6xl text-white">“</span>
                        </blockquote>
                    </div>
                </div>
                <div className="m-4 md:m-8 w-full">
                    <h2>{t("live_headline")}</h2>
                    <div className="flex flex-col md:flex-row-reverse justify-around items-center w-full text-base lg:text-lg xl:text-xl">
                        <div className="text-left">
                            <p className="font-bold">{t("live_wcd")}</p>
                            <ul>
                                <li>{t("live_wcd_years")}</li>
                                <li>{t("live_wcd_years_additional")}</li>
                            </ul>
                            <p className="font-bold mt-4">{t("live_ril")}</p>
                            <ul>
                                <li>{t("live_ril_years")}</li>
                            </ul>
                            <p className="font-bold mt-4">{t("live_club")}</p>
                            <ul>
                                <li>{t("live_club_1")}</li>
                                <li>{t("live_club_2")}</li>
                                <li>{t("live_club_3")}</li>
                            </ul>
                            <p className="font-bold mt-4">{t("live_stream")}</p>
                            <ul>
                                <li>{t("live_stream_1")}</li>
                                <li>{t("live_stream_2")}</li>
                            </ul>
                        </div>
                        
                        <blockquote
                            className="relative w-full md:w-[300px] mt-8 md:mr-8 md:my-auto p-6 bg-gray/100 rounded-xl text-white italic">
                            <span className="absolute bottom-4 -left-2 text-6xl text-white">„</span>
                            {t("live_stream_quote")}
                            <span className="absolute -top-4 -right-2 text-6xl text-white">“</span>
                        </blockquote>
                    </div>
                </div>
                <div className="m-4 md:m-8 w-full">
                    <h2>{t("passion_headline")}</h2>
                    <div className="flex flex-col md:flex-row justify-around items-center w-full text-base lg:text-lg xl:text-xl">
                        <p className="mb-4 md:m-8 md:w-1/2">
                            {t("passion_description")}
                        </p>
                        <blockquote className="relative w-full mt-8 md:my-auto md:w-[300px] p-6 bg-gray/100 rounded-xl text-white italic">
                            <span className="absolute bottom-4 -left-2 text-6xl text-white">„</span>
                            {t("passion_quote")}
                            <span className="absolute -top-4 -right-2 text-6xl text-white">“</span>
                        </blockquote>
                    </div>
                </div>
                <div aria-labelledby="kontakt" className="m-4 md:m-8 w-full">
                    <h2>{t("contact_headline")}</h2>
                    <p className="text-gray-300 mb-4 text-base lg:text-lg xl:text-xl">
                        {t("contact_description")}
                    </p>
                    <a
                        href="https://www.instagram.com/x_fate/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-row items-center gap-3 px-6 py-3 bg-pink-600 text-white font-medium rounded-full shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition"
                        aria-label="Kontaktiere X-Fate über Instagram Direktnachricht"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x"/> {t("contact_description_anchor")}
                    </a>
                </div>
            </div>
        </section>
    
    )
}

export default AboutMePage
