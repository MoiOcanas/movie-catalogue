import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopMovies } from '../../store/actions/moviesActions';
import MoviesCarousel from './MoviesCarousel';
import MovieItem from './MovieItem';
import { responsive } from '../../responsive';

const TopMoviesList = () => {

    const topMovies = useSelector(state => state.movies.topMovies);
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(getTopMovies()); 
    }, [dispatch]);

    return (
        <div>
            <h2><b>Top Ranked Movies</b></h2>
            <MoviesCarousel responsiveConfig={responsive}>
                {topMovies && topMovies.map(movie => {
                    return (
                        <MovieItem key={movie.id} movie={movie} />
                    )
                })}
            </MoviesCarousel>
        </div>
    );
}

export default TopMoviesList;