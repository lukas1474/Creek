import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';

import './styles/global.scss';
import './styles/bootstrap.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/HomePage/HomePage';
import AboutUs from './components/views/AboutUs/AboutUs';
import Clothes from './components/views/Clothes/Clothes';
import Equipment from './components/views/Equipment/Equipment';
import Accessories from './components/views/Accessories/Accessories';
import Contact from './components/views/Contact/Contact';



const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/oNas/' component={AboutUs} />
          <Route exact path='/ubrania/' component={Clothes} />
          <Route exact path='/sprzęt/' component={Equipment} />
          <Route exact path='/akcesoria/' component={Accessories} />
          <Route exact path='/kontakt/' component={Contact} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
