import { combineReducers } from 'redux';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case 'dispatch movies to store by category':
    case 'search movies':
      return payload;

    default:
      return state;
  }
};

const isLoading = (state = false, { type, payload }) => {
  switch (type) {
    case 'loading start':
    case 'loading end':
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  isLoading
});
