import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { mainResponsive } from '../../mainResponsive';

//Components
import PopularMovieList from '../movies/PopularMoviesList';
import TopMoviesList from '../movies/TopMoviesList';
import UpcomingMoviesList from '../movies/UpcomingMoviesList';
let imgURL = 'https://image.tmdb.org/t/p/original';

class Homepage extends Component {

    state = {
        upcomingMovies: []
    }

    componentDidMount = () => {
        this.getMovies();
    }

    getMovies = () => {
        let apiKey = '26b6f99577e56d992ffe47051578e1ac';
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
            .then(res => {
                this.setState({ upcomingMovies: res.data.results });
                console.log(this.state.upcomingMovies)
            })
    }

    render() {
        const { upcomingMovies } = this.state;
        return (
            <div className="main-carousel-container">
                <Carousel
                    showDots={false}
                    sliderClass=""
                    swipeable
                    responsive={mainResponsive}
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    slidesToSlide={1}
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                >
                    {upcomingMovies && upcomingMovies.map(movie => {
                        return (
                            <div key={movie.id} className="main-element-container">
                                <img style={{ width: '100%' }} key={movie.id} alt={movie.title} src={imgURL + movie.backdrop_path} />
                                <div className="top-right">
                                    <div className="top-right-container">
                                        <h1>{movie.title}</h1>
                                        <p>{movie.overview}</p>
                                        <div className="text-center">
                                            <Link to={`/movie/${movie.id}`}>
                                                See details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
                <div className="container main-container">
                    <PopularMovieList />
                    <br />
                    <TopMoviesList />
                    <br />
                    <UpcomingMoviesList />
                </div>
            </div>
        );
    }
}

export default Homepage;