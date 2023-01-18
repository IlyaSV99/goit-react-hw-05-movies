import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: { api_key: 'bab84c6abc9ea1f5c44be5c540a9092e' },
    
})

export const getTrendingMovies = async () => {
    const {data} = await instance.get('trending/movie/day', {
        params: {
            page: 1,
        }
    });

    return data.results;
}

export const getMovieDetails = async (id) => {
    const {data} = await instance.get(`movie/${id}`);
    return data;
}

export const getMovieCast = async (id) => {
    const { data } = await instance.get(`movie/${id}/credits`);
    return data.cast;
}
export const getMovieReviews = async (id) => {
    const { data } = await instance.get(`movie/${id}/reviews`);
    return data.results;
}

export const getMoviesSearch = async(search) => {
    const { data } = await instance.get('search/movie', {
        params: {
            query: search,
        }
    });
    return data.results;
}