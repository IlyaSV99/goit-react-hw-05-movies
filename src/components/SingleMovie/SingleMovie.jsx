import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import SingleMovieItem from "./SingleMovieItem";
import { getMovieDetails } from "api/api";
import Loader from "components/Loader";

import styles from './singleMovie.module.css';

function SingleMovie() {
    const { id } = useParams();
    const [state, setState] = useState({
        item: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        async function fetchMovieDetails() {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }))
            try {
                const data = await getMovieDetails(id);
                setState(prevState => ({
                    ...prevState,
                    item: data,
                }));
            }
            catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error
                }))
            }
            finally {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }))
            }
        }
        fetchMovieDetails();
    }, [id]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";
    const goBack = () => navigate(from);

    const { item, loading, error } = state;
    const isItem = Object.keys(item).length > 0;

    console.log(item);
    return (
        <div className={styles.wrapper}>
            {loading && <Loader />}
            {error &&   <p className={styles.p}>Movie not found</p>}
            {isItem && <button className={styles.button} type='button' onClick={goBack}>Back</button>}
            {isItem && <SingleMovieItem item={item}/>}
        </div>
    )
}

export default SingleMovie;


   
