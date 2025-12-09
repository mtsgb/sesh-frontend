export type Mode = "grid" | "list" | "carousel";

export type Cover = {
    data?: {
        attributes?: {
            url?: string;
            alternativeText?: string;
        };
    };
};

export type PostAttributes = {
    title?: string;
    content?: string;
    cover?: Cover;
};

export type Post = {
    id: number;
    attributes: PostAttributes;
};