import React, { Component } from 'react';
import axios from 'axios';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../responsive';

//Components
import MovieItem from './MovieItem';

class UpcomingMoviesList extends Component {
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
            })
    }

    render() {
        const { upcomingMovies } = this.state;

        return (
            <div>
                <h2><b>Upcoming Movies</b></h2>
                <Carousel
                    showDots={false}
                    sliderClass=""
                    swipeable
                    responsive={responsive}
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
                            <MovieItem key={movie.id} movie={movie} />
                        )
                    })}
                </Carousel>
            </div>
        );
    }
}

export default UpcomingMoviesList;