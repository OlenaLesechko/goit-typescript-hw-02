export interface Image {
    urls: {
        regular: string;
        small: string;
    };
    description?: string;
    id: string;
    length: number;
    likes: number;
    raw: string;
}

export interface ServerResponse {
    total_pages: number;
    results: Image[];
}