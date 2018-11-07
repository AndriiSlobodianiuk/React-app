import {
  getMoviesByCategory,
  createAction,
  searchMovie
} from '../../utils/utils';

const dispatchMoviesToStore = createAction(
  'dispatch movies to store by category'
);
const searchMovies = createAction('search movies');
const endLoading = createAction('loading end');
const startLoading = createAction('loading start');

export const getMoviesList = category => dispatch => {
  dispatch(startLoading(true));
  getMoviesByCategory(category).then(data => {
    dispatch(endLoading(false));
    dispatch(dispatchMoviesToStore(data));
  });
};

export const getMovieBySearch = query => dispatch => {
  dispatch(startLoading(true));
  searchMovie(query).then(data => {
    dispatch(endLoading(false));
    dispatch(searchMovies(data));
  });
};
