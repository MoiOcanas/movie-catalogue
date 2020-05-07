import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../responsive';

//Components
import MovieItem from './MovieItem';

//Redux
import { connect } from 'react-redux';
import { getTopMovies } from '../../store/actions/moviesActions';

class TopMoviesList extends Component {
    componentDidMount = () => {
        this.props.getTopMovies();
    }

    render() {
        const { topMovies } = this.props;
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
                    {topMovies && topMovies.map(movie => {
                        return (
                            <MovieItem key={movie.id} movie={movie} />
                        )
                    })}
                </Carousel>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { topMovies } = state.movies;
    return {
        topMovies
    }
}

export default connect(mapStateToProps, { getTopMovies })(TopMoviesList);