import { createStore, compose } from 'redux';
import reducers from '../reducers/index';

let initialState = {};
const enhancers = [
];

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV === 'development' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/* eslint-enable */

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(...enhancers)
);
export default store;
