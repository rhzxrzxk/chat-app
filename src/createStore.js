import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers';

const storageMiddleware = store => next => action => {
  const result = next(action);
  window.localStorage.setItem('app-state', JSON.stringify(store.getState()));
  return result;
};

const reducer = combineReducers({
  ...reducers,
  router: routerReducer,
});
const savedState = JSON.parse(localStorage.getItem('app-state'));

export default function createStore(history) {
  return reduxCreateStore(
    reducer,
    savedState ? savedState : reducer(undefined, {type: 'INIT'}),
    applyMiddleware(
      logger,
      thunk,
      storageMiddleware,
      routerMiddleware(history)
    )
  );
}
