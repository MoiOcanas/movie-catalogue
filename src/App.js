import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/layout/Navbar';
import Homepage from './components/layout/Homepage';
import MovieDetails from './components/movies/MovieDetails';
import SearchMovie from './components/search/SearchMovie';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />

          <Switch>
            <Route exact path="/movie-catalogue/" component={Homepage} />
            <Route exact path="/movie-catalogue/:id" component={MovieDetails}/>
            <Route exact path="/movie-catalogue/search" component={SearchMovie}/>
          </Switch>
      </div>

    </BrowserRouter>
    );
  }
}

export default App;
