import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import confirmation from './middlewares/confirmation';

// custom thunk
// import thunk from './middlewares/movielist';
import thunk from 'redux-thunk';

const enhancer = composeWithDevTools(applyMiddleware(confirmation, thunk));

const store = createStore(combineReducers, enhancer);

export default store;
