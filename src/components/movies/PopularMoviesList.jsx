import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../responsive';

//Components
import MovieItem from './MovieItem';

//Redux
import { connect } from 'react-redux';
import { getPopularMovies } from '../../store/actions/moviesActions';

class PopularMoviesList extends Component {

    componentDidMount = () => {
        this.props.getPopularMovies();
    }

    render() {
        const { popularMovies } = this.props;

        return (
            <div>
                <h2><b>Popular Movies</b></h2>
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
                    {popularMovies && popularMovies.map(movie => {
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
    const { popularMovies } = state.movies;
    return {
        popularMovies
    }
}

export default connect(mapStateToProps, { getPopularMovies })(PopularMoviesList);