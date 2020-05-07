import moviesReducer from './moviesReducer';
import { combineReducers } from 'redux';

/* Main reducer, we can define a new one a put it here */
const rootReducer = combineReducers({
    movies: moviesReducer
});

export default rootReducer;