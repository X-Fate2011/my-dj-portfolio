export type ShowItem = {
    key: string;
    name: string;
    url: string;
    pictures: { large: string };
    created_time: string;
    tags: { name: string }[];
};