import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trans, useTranslation } from "react-i18next";
import { QuoteBlock } from "../components/common/QuoteBlock";

const STREAMING_HISTORY = [
  { key: "streaming_list_1", years: "2015–2022", href: "https://rm.fm/house" },
  { key: "streaming_list_2", years: "2017–2023", href: "https://rm.fm/harder" },
  { key: "streaming_list_3", years: "2023–2024", href: "https://mixcloud.com/live" },
  { key: "streaming_list_4", years: "Seit 2020", href: "https://rm.fm/house" },
  { key: "streaming_list_5", years: "Seit 2023", href: "https://rm.fm/house" },
  { key: "streaming_list_6", years: "Seit 2024", href: undefined },
];

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
            src="/x-fate2_480.webp"
            alt="X-Fate auf der Ruhr In Love 2023"
            className="sepia h-full w-full shadow-md object-cover object-[100%_48%]"
            loading="eager"
            decoding="async"
          />
        </picture>
        <QuoteBlock
          quote={t("quote_hero")}
          author="Marilyn Manson"
          className="absolute bottom-4 left-1/2 w-full md:w-auto -translate-x-1/2 md:translate-0 md:left-4 bg-black/75 text-white p-4 rounded-xl max-w-md  text-base lg:text-lg xl:text-xl italic"
        />
      </div>
      <div className="max-w-full lg:max-w-[75vw] xl:max-w-[60vw] flex flex-col items-center m-4">
        <div className="m-4 w-full">
          <h2>{t("headline")}</h2>
          <div className="flex flex-col md:flex-row-reverse justify-around w-full text-base lg:text-lg xl:text-xl">
            <p className="mb-4 md:m-8 lg:w-1/2">{t("about_me")}</p>
            <QuoteBlock
              quote={t("about_me_quote")}
              className="relative w-full lg:w-[300px] my-8 md:my-auto md:mx-8 p-6 bg-gray/100 rounded-xl text-white italic"
            />
          </div>
        </div>
        <div className="m-4 md:m-8 w-full">
          <h2>{t("streaming_headline")}</h2>
          <div className="flex flex-col md:flex-row justify-around items-center w-full text-base lg:text-lg xl:text-xl">
            <ul role="list" className="text-left md:m-8 lg:w-1/2">
              {STREAMING_HISTORY.map(({ key, years, href }) => (
                <li key={key}>
                  <Trans
                    i18nKey={key}
                    ns="about_me"
                    values={{ years }}
                    components={{
                      0: <span className="font-bold" />,
                      1: (
                        <a
                          href={href}
                          className="underline hover:font-bold"
                          target="_blank"
                          rel="noreferrer"
                        />
                      ),
                    }}
                  />
                </li>
              ))}
            </ul>
            <QuoteBlock quote={t("streaming_quote")} />
          </div>
        </div>
        <div className="m-4 md:m-8 w-full">
          <h2>{t("live_headline")}</h2>
          <div className="flex flex-col md:flex-row-reverse justify-around items-center w-full text-base lg:text-lg xl:text-xl">
            <div className="text-left">
              <p className="font-bold">{t("live_wcd")}</p>
              <ul role="list">
                <li>{t("live_wcd_years")}</li>
                <li>{t("live_wcd_years_additional")}</li>
              </ul>
              <p className="font-bold mt-4">{t("live_ril")}</p>
              <ul role="list">
                <li>{t("live_ril_years")}</li>
              </ul>
              <p className="font-bold mt-4">{t("live_club")}</p>
              <ul role="list">
                <li>{t("live_club_1")}</li>
                <li>{t("live_club_2")}</li>
                <li>{t("live_club_3")}</li>
              </ul>
              <p className="font-bold mt-4">{t("live_stream")}</p>
              <ul role="list">
                <li>{t("live_stream_1")}</li>
                <li>{t("live_stream_2")}</li>
              </ul>
            </div>

            <QuoteBlock quote={t("live_stream_quote")} />
          </div>
        </div>
        <div className="m-4 md:m-8 w-full">
          <h2>{t("passion_headline")}</h2>
          <div className="flex flex-col md:flex-row justify-around items-center w-full text-base lg:text-lg xl:text-xl">
            <p className="mb-4 md:m-8 md:w-1/2">{t("passion_description")}</p>
            <QuoteBlock quote={t("passion_quote")} />
          </div>
        </div>
        <div aria-labelledby={t("contact_aria")} className="m-4 md:m-8 w-full">
          <h2>{t("contact_headline")}</h2>
          <p className="text-gray-300 mb-4 text-base lg:text-lg xl:text-xl">
            {t("contact_description")}
          </p>
          <a
            href="https://www.instagram.com/x_fate/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-row items-center gap-3 px-6 py-3 bg-pink-600 text-white font-medium rounded-full shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition"
            aria-label={t("contact_instagram_aria")}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" /> {t("contact_description_anchor")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMePage;
