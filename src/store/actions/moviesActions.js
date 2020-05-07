import axios from 'axios';
import { 
    getPopularMoviesSuccess,
    getMovieSuccess,
    getTopMoviesSuccess,
    getUpcomingMoviesSuccess,
    getMoviesReviewsSuccess
 } from './dispatchers';

const url = "https://api.themoviedb.org/3/movie/";
const apiKey = '26b6f99577e56d992ffe47051578e1ac';

export const getPopularMovies = () => {
    return async dispatch => {
       await axios.get(`${url}popular?api_key=${apiKey}&language=en-US&page=1`)
            .then(res => {
                let popularMovies = res.data.results;
                dispatch(getPopularMoviesSuccess(popularMovies));
            })
            .catch(err => {
                console.log(err)
            });
    };
};

export const getTopMovies = () => {
    return async dispatch => {
       await axios.get(`${url}top_rated?api_key=${apiKey}&language=en-US&page=1`)
            .then(res => {
                let topMovies = res.data.results;
                dispatch(getTopMoviesSuccess(topMovies));
            })
            .catch(err => {
                console.log(err)
            });
    };
};

export const getUpcomingMovies = () => {
    return async dispatch => {
       await axios.get(`${url}upcoming?api_key=${apiKey}&language=en-US&page=1`)
            .then(res => {
                let upcomingMovies = res.data.results;
                dispatch(getUpcomingMoviesSuccess(upcomingMovies));
            })
            .catch(err => {
                console.log(err)
            });
    };
};

export const getMovie = id => {
    return async dispatch => {
       await axios.get(`${url}${id}?api_key=${apiKey}&language=en-US`)
            .then(res => {
                let movie = res.data;
                dispatch(getMovieSuccess(movie));
            })
            .catch(err => {
                console.log(err)
            });
    };
};

export const getMovieReviews = id => {
    return async dispatch => {
       await axios.get(`${url}${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
            .then(res => {
                let moviesReviews = res.data.results;
                dispatch(getMoviesReviewsSuccess(moviesReviews));
            })
            .catch(err => {
                console.log(err)
            });
    };
};