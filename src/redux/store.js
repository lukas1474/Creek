import {combineReducers, createStore} from 'redux';
import initialState from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';

import subpagesReducer from './subpagesRedux';
import clothesReducer from './clothesRedux';

const reducers ={
  subpages: subpagesReducer,
  clothes: clothesReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools()
);

export default store;
