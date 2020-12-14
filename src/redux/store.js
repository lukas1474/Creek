import {combineReducers, createStore} from 'redux';
import initialState from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers ={};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools()
);

export default store;
