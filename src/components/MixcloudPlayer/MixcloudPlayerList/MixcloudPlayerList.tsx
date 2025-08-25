import { capitalizeTags } from "../../../utils/string-utils";
import { LoadMoreShows } from "./LoadMoreShows/LoadMoreShows";
import { useIsDesktop } from "../../../hooks/useIsDesktop";
import type { ShowItem } from "../../../hooks/useMixcloudShows";
import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { MixcloudPlayerFrame } from "../MixcloudPlayerFrame/MixcloudPlayerFrame";

type MixcloudPlayerListProps = {
    variant: "compact" | "list";
    shows: ShowItem[];
    isLoading: boolean;
    hasMore: boolean;
    handleFetchMixes: () => void;
}

export function MixcloudPlayerList({variant, isLoading, hasMore, shows, handleFetchMixes}: MixcloudPlayerListProps) {
    const isDesktop = useIsDesktop();
    const {t} = useTranslation("mixcloud");
    
    if (variant !== "list") return null;
    
    return (
        <div className="divide-y divide-white-300 space-y-6">
            {shows.map((show) => (
                <MixcloudShowItem key={show.key} show={show} isDesktop={isDesktop} t={t}/>
            ))}
            <LoadMoreShows hasMore={hasMore} isLoading={isLoading} handleFetchMixes={handleFetchMixes}/>
        </div>
    );
}

function MixcloudShowItem({
                              show,
                              isDesktop,
                              t,
                          }: {
    show: ShowItem;
    isDesktop: boolean;
    t: TFunction<"mixcloud">;
}) {
    return (
        <div className="flex flex-col md:flex-row pb-6 w-full">
            <img
                className="mr-auto md:mr-6 lg:mr-8 rounded-2xl hidden lg:block md:h-[250px]"
                src={show.pictures.large}
                alt={t("mixcloudListCoverAlt", {showName: show.name})}
                loading="lazy"
            />
            <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col">
                    <div className="flex flex-col-reverse lg:flex-row space-x-6 pb-4">
                        <DateBlock date={show.created_time} t={t}/>
                        <TitleBlock title={show.name} t={t}/>
                    </div>
                    <div className="flex flex-col md:flex-row space-x-6 pb-4 md:pb-6 lg:pb-8">
                        <TagsBlock tags={show.tags} t={t}/>
                    </div>
                </div>
                <MixcloudPlayerFrame
                    showTitle={show.name}
                    showUrl={show.url}
                    hideArtwork={isDesktop}
                    customClass="w-full"
                />
            </div>
        </div>
    );
}

type DateBlockProps = {
    date: string;
    t: TFunction<"mixcloud">;
}

function DateBlock({date, t}: DateBlockProps) {
    const formatted = new Date(date).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    return (
        <div className="flex flex-col text-left">
            <span>{t("mixcloudListDate")}</span>
            <span className="text-white font-bold text-lg md:text-xl lg:text-2xl">{formatted}</span>
        </div>
    );
}

type TitleBlockProps = {
    title: string;
    t: TFunction<"mixcloud">;
}

function TitleBlock({title, t}: TitleBlockProps) {
    return (
        <div className="flex flex-col text-left mb-4 lg:mb-auto">
            <span>{t("mixcloudListTitle")}</span>
            <span className="text-white font-bold text-lg md:text-xl lg:text-2xl">{title}</span>
        </div>
    );
}

type TagsBlockProps = {
    tags: { name: string }[];
    t: TFunction<"mixcloud">;
}

function TagsBlock({tags, t}: TagsBlockProps) {
    return (
        <div className="flex flex-col text-left">
            <span>{t("mixcloudListGenre")}</span>
            <div className="flex flex-wrap gap-2 mt-2 -ml-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-gray-800 text-white px-3 py-1 my-1 rounded-full text-sm font-semibold"
                    >{capitalizeTags(tag.name)}</span>
                ))}
            </div>
        </div>
    );
}