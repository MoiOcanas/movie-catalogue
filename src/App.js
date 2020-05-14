import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/layout/Navbar';
import Homepage from './components/layout/Homepage';
import MovieDetails from './components/movies/MovieDetails';
import SearchMovie from './components/search/SearchMovie';
import AboutPage from './components/layout/AboutPage';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/movie-catalogue/" component={Homepage} />
        <Route path="/movie-catalogue/:id" component={MovieDetails} />
        <Route path="/search" component={SearchMovie} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
