import { combineReducers } from 'redux';
import { watchListreducer } from './components/Watchlist/reducer';
import moviesListReducer from './components/MovieList/reducer';

export default combineReducers({
  watchList: watchListreducer,
  moviesList: moviesListReducer
});
