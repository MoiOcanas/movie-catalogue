import React, { Component } from 'react';


//Components
import PopularMovieList from '../movies/PopularMoviesList';
import TopMoviesList from '../movies/TopMoviesList';
import UpcomingMoviesList from '../movies/UpcomingMoviesList';

class Homepage extends Component {
    render() {
        return (
            <div className="main-container">
                <PopularMovieList />
                <br />
                <TopMoviesList />
                <br />
                <UpcomingMoviesList />
            </div>
        );
    }
}

export default Homepage;