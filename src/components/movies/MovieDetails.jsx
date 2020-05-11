import React, { Component } from 'react';

//delayde - north fell
//Components
import MovieReviewsList from './MovieReviewsList';

//Redux
import { connect } from 'react-redux';
import { getMovie, getMovieReviews } from '../../store/actions/moviesActions';

let imgURL = 'https://image.tmdb.org/t/p/w500';

class MovieDetails extends Component {

    componentDidMount = () => {
        window.scrollTo(0, 0);
        const id = this.props.match.params.id;
        this.props.getMovie(id);
        this.props.getMovieReviews(id);
    }

    render() {
        const { movie, movieReviews } = this.props;

        return (
            <div className="container" ref={this.scrollRef} >
                <main className="movie-container">
                    <article className="movie-component is-centered">
                        <section className="pc-section-1">
                            <img src={imgURL + movie.poster_path} alt="alt" />
                        </section>
                        <section className="pc-section-2">
                            <h2 className="pc-title">{movie.title}</h2>
                            <div className="pc-rating">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <span>{movie.vote_average}</span>
                            </div>
                            <p>{movie.overview}</p>
                            <small>Duration: {movie.runtime + "min"}</small>
                            <small>
                                Production companies:
                            {movie.production_companies && movie.production_companies.map((p, i) => {
                                return (
                                    <span key={i} className="badge badge-dark">{p.name}</span>
                                );
                            })}
                            </small>
                            <small>
                                Genres:
                            {movie.genres && movie.genres.map((genre, i) => {
                                return (
                                    <span key={i} className="badge badge-dark">{genre.name}</span>
                                );
                            })}
                            </small>
                        </section>
                    </article>
                </main>
                <MovieReviewsList movieReviews={movieReviews} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { movie, movieReviews } = state.movies;
    return {
        movie,
        movieReviews
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        getMovie: id => { dispatch(getMovie(id)) },
        getMovieReviews: id => { dispatch(getMovieReviews(id)) }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);