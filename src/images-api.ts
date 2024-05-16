import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
export const fetchImg = async (searchQuery, page = 1) => {
    const response = await axios.get('search/photos', {
        params: {
        query: searchQuery,
        page,
        client_id: `IUphalDjTh_XPzf2r7FuJFfWVyNpUIw684ZJcRW77YY`,
        per_page: 10,
        },
    });

    return response.data.results;
};