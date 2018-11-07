import { createSelector } from 'reselect';

const getMovieList = state => state.moviesList.items;
const isLoading = state => state.moviesList.isLoading;

export const getMoviesData = createSelector(
  [getMovieList, isLoading],
  (items, isLoading) => ({
    movies: items,
    loading: isLoading
  })
);
