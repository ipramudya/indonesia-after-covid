export interface News {
    status: string;
    total_hits: number;
    page: number;
    total_pages: number;
    page_size: number;
    articles: Article[];
    user_input: UserInput;
}

export interface Article {
    title: string;
    author: null | string;
    published_date: string;
    published_date_precision: PublishedDatePrecision;
    link: string;
    clean_url: CleanURL;
    excerpt: string;
    summary: string;
    rights: null | string;
    rank: number;
    topic: Topic;
    country: Country;
    language: Lang;
    authors: string[];
    media: string;
    is_opinion: boolean;
    twitter_account: null | string;
    _score: number;
    _id: string;
}

export enum CleanURL {
    AntaranewsCOM = "antaranews.com",
    DetikCOM = "detik.com",
    KompasCOM = "kompas.com",
    Liputan6COM = "liputan6.com",
    OkezoneCOM = "okezone.com",
    TribunnewsCOM = "tribunnews.com",
}

export enum Country {
    ID = "ID",
}

export enum Lang {
    ID = "id",
}

export enum PublishedDatePrecision {
    Full = "full",
    TimezoneUnknown = "timezone unknown",
}

export enum Topic {
    News = "news",
    Science = "science",
}

export interface UserInput {
    q: string;
    search_in: string[];
    lang: Lang[];
    not_lang: null;
    countries: null;
    not_countries: null;
    from: string;
    to: null;
    ranked_only: string;
    from_rank: null;
    to_rank: null;
    sort_by: string;
    page: number;
    size: number;
    sources: null;
    not_sources: null;
    topic: null;
    published_date_precision: null;
}
