import {
    GET_POPULAR_MOVIES,
    GET_TOP_MOVIES,
    GET_MOVIE,
    GET_MOVIE_REVIEWS,
    GET_UPCOMING_MOVIES
} from "./actionTypes";

export const getPopularMoviesSuccess = popularMovies => {
    return {
        type: GET_POPULAR_MOVIES,
        payload: {
            popularMovies
        }
    };
};

export const getMovieSuccess = movie => {
    return {
        type: GET_MOVIE,
        payload: {
           movie
        }
    };
};

export const getTopMoviesSuccess = topMovies => {
    return {
        type: GET_TOP_MOVIES,
        payload: {
            topMovies
        }
    };
};

export const getMoviesReviewsSuccess = movieReviews => {
    return {
        type: GET_MOVIE_REVIEWS,
        payload: {
            movieReviews
        }
    };
};

export const getUpcomingMoviesSuccess = upcomingMovies => {
    return {
        type: GET_UPCOMING_MOVIES,
        payload: {
            upcomingMovies
        }
    };
};