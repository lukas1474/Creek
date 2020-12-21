import {combineReducers, createStore} from 'redux';
import initialState from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';

import subpagesReducer from './subpagesRedux';
import clothesReducer from './clothesRedux';
import equipmentReducer from './equipmentRedux';

const reducers ={
  subpages: subpagesReducer,
  clothes: clothesReducer,
  equipment: equipmentReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools()
);

export default store;
