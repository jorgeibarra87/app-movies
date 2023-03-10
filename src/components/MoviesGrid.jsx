import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import { get } from "../utils/httpClient"
import styles from "../MoviesGrid.module.css"
import Spinner from '../components/Spinner';
import { useQuery } from '../hooks/useQuery';
import InfiniteScroll from 'react-infinite-scroll-component';

export function MoviesGrid({ search }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [hasMore, setHasmotre] = useState(true)


    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page;
        get(searchUrl).then((data) => {
            "/discover/movie"
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasmotre(data.page < data.total_pages)
            setIsLoading(false)
        });
    }, [search, page]);



    return (
        <InfiniteScroll dataLength={movies.length} hasMore={hasMore} next={() => setPage((prevPage) => prevPage + 1)} loader={<Spinner />}>
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </InfiniteScroll>
    )
}
