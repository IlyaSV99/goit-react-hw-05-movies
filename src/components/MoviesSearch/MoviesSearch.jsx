import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import MoviesSearchForm from './MoviesSearchForm';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';

import { getMoviesSearch } from 'api/api';
import { useFetchItems } from 'hooks/useFetchItems';

function MoviesSearch() {
    const firstRender = useRef(true);

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");

    const { state, setState } = useFetchItems({ getFetch: getMoviesSearch, array: [search], params: search, firstRender});
    
    const { items, loading } = state;

    function changeSearch({ search }) {
        setSearchParams({ search });
        setState(prevState => ({
            ...prevState,
            items:[],
        }))
    };
    return (
        <>
            <MoviesSearchForm onSubmit={changeSearch} />
            {loading && <Loader />}
            <MovieList items={items} />
        </>
        
    )
}

export default MoviesSearch;