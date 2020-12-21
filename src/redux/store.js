import {combineReducers, createStore} from 'redux';
import initialState from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';

import subpagesReducer from './subpagesRedux';
import clothesReducer from './clothesRedux';
import equipmentReducer from './equipmentRedux';
import accessoriesReducer from './accessoriesRedux';
import contactReducer from './contactRedux';

const reducers = {
  subpages: subpagesReducer,
  clothes: clothesReducer,
  equipment: equipmentReducer,
  accessories: accessoriesReducer,
  contact: contactReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools()
);

export default store;
