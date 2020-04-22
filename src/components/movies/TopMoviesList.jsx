import React, { Component } from 'react';
import axios from 'axios';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../responsive';

//Components
import MovieItem from './MovieItem';

class TopMoviesList extends Component {
    state = {
        topMoviesList: []
    }

    componentDidMount = () => {
        this.getMovies();
    }

    getMovies = () => {
        let apiKey = '26b6f99577e56d992ffe47051578e1ac';
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=2`)
            .then(res => {
                this.setState({ topMoviesList: res.data.results });
            })
    }

    render() {
        const { topMoviesList } = this.state;
        return (
            <div>
                <h2><b>Top Ranked Movies</b></h2>
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
                    {topMoviesList && topMoviesList.map(movie => {
                        return (
                            <MovieItem key={movie.id} movie={movie} />
                        )
                    })}
                </Carousel>
            </div>
        );
    }
}

export default TopMoviesList;