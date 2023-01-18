import { useFetchItems } from 'hooks/useFetchItems';
import Loader from 'components/Loader';
import MovieList from 'components/MovieList';

import { getTrendingMovies } from 'api/api';
import styles from './trendMovies.module.css';


function TrendMovies() { 
    const { state} = useFetchItems({getFetch: getTrendingMovies});
    const { items, loading, error } = state;
    return (
        <>
            <h1 className={styles.title}>Films in trend</h1>
            {loading && <Loader />}
            {error && <p>Something went wrong</p>}
            <MovieList items={items} />
        </>
    )
};

export default TrendMovies;

