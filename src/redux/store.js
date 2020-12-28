import {combineReducers, createStore, applyMiddleware} from 'redux';
import initialState from './initialState';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import subpagesReducer from './subpagesRedux';
import productsReducer from './productsRedux';
import contactReducer from './contactRedux';
import cartReducer from './cartRedux';

const middleware = [thunk];

const reducers = {
  subpages: subpagesReducer,
  products: productsReducer,
  contact: contactReducer,
  cart: cartReducer,

};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
