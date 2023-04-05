export interface Movie {
    // id: number;
    title: string;
    rating: number;
    byline: string;
    headline: string;
    summary: string;
    reviewURL: string;
    image: string;
    commentCount: number;
}

export interface SearchCriteria {
    title: string;
}