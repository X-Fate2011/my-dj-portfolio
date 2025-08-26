import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./styles/App.css";
import MixcloudFeedHome from "./components/MixcloudFeedHome/MixcloudFeedHome.tsx";
import TwitchStream from "./components/TwitchStream/TwitchStream.tsx";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation("common");
  return (
    <>
      <section className="flex flex-col">
        <div className="relative overflow-hidden flex flex-col lg:flex-row mb-4 lg:m-8 md:h-[350px] lg:h-[450px]">
          <div className="absolute lg:relative w-full overflow-hidden bg-white/75 lg:rounded-2xl">
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
            <div
              className="absolute inset-0 bg-white/75 h-full z-10 lg:hidden"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col relative justify-between lg:ml-8 z-20">
            <div className="p-4 lg:p-6 xl:p-8 lg:mb-8 bg-transparent lg:bg-white lg:rounded-2xl text-black max-w-full">
              <h2>{t("home.subtitle1")}</h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl">{t("home.subtext1")}</p>
            </div>

            <div className="px-4 pb-4 lg:p-6 xl:p-8 bg-transparent lg:bg-white lg:rounded-2xl text-black max-w-full z-20">
              <h2>{t("home.subtitle2")}</h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl">{t("home.subtext2")}</p>
              <p className="text-black text-sm sm:text-base lg:text-lg xl:text-xl">
                <a
                  href="https://twitch.tv/truededicationmusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-black"
                >
                  <FontAwesomeIcon icon={faTwitch} />
                  {t("home.twitchAnchor")}
                </a>
                &nbsp;|&nbsp;
                <a
                  href="https://rm.fm/house"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-black"
                >
                  <FontAwesomeIcon icon={faPlay} />
                  {t("home.rmAnchor")}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <MixcloudFeedHome />
          <TwitchStream />
        </div>
      </section>
    </>
  );
}

export default App;
