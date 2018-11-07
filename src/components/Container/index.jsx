import React from 'react';
import MoviesList from '../MovieList';
import WatchList from '../Watchlist';
import './Container.css';
import Form from '../Form';

const Container = () => (
  <div className="container">
    <WatchList />
    <div className="form-container">
      <Form />
      <MoviesList />
    </div>
  </div>
);

export default Container;
