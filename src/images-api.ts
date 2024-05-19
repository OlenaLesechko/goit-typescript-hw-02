import axios, { AxiosResponse } from 'axios';
import { Image } from "./Types";
axios.defaults.baseURL = 'https://api.unsplash.com/';

interface UnsplashResponse {
    results: Image[];
    total: number;
    total_pages: number;
}

export const fetchImg = async (searchQuery: string, page = 1): Promise<Image[]> => {
    const response: AxiosResponse<UnsplashResponse> = await axios.get<UnsplashResponse>('search/photos', {
        params: {
            query: searchQuery,
            page,
            client_id: 'IUphalDjTh_XPzf2r7FuJFfWVyNpUIw684ZJcRW77YY',
            per_page: 10,
        },
    });

    return response.data.results;
};