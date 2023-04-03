import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from '../reducer/reducer';

const rootReducer = combineReducers({ auth: appReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
