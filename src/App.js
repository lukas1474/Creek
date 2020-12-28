import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';

import './styles/global.scss';
import './styles/bootstrap.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/HomePage/HomePageContainer';
import Products from './components/views/Products/ProductsContainer';
import Contact from './components/views/Contact/ContactContainer';
import Cart from './components/features/Cart/Cart';

const App = () => (

  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/sklep/' component={Products} />
          <Route exact path='/kontakt/' component={Contact} />
          <Route exact path='/koszyk/' component={Cart} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
