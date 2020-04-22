import React, { Component } from 'react';
import axios from 'axios';
let imgURL = 'https://image.tmdb.org/t/p/w500';

class MovieDetails extends Component {

    state = {
        movie: {}
    }

    componentDidMount = () => {
        this.getMovie();
    }

    getMovie = () => {
        const id = this.props.match.params.id;
        let apiKey = '26b6f99577e56d992ffe47051578e1ac';
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => {
                this.setState({ movie: res.data });
                console.log(this.state.movie);
            })
    }

    render() {
        const { movie } = this.state;
        return (
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
                            { movie.production_companies && movie.production_companies.map((p, i) => {
                                return(
                                    <span key={i} className="badge badge-dark">{p.name}</span>
                                );
                            }) }
                        </small>
                        <small>
                            Genres: 
                            { movie.genres && movie.genres.map((g, i) => {
                                return(
                                    <span key={i} className="badge badge-dark">{g.name}</span>
                                );
                            }) }
                        </small>
                    </section>
                </article>
            </main>
        );
    }
}

export default MovieDetails;