export interface Article {
    author: string;
    content: string | null;
    description: string | null;
    publishedAt: string;
    source: {
        id: string | null;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string | undefined;
}

export enum ViewMode {
    List = 'list',
    Tiles = 'tiles',
}

export type Language = 'en' | 'pl';