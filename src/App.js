import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';

import './styles/global.scss';
import './styles/bootstrap.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/HomePage/HomePageContainer';
import Clothes from './components/views/Clothes/ClothesContainer';
import Equipment from './components/views/Equipment/EquipmentContainer';
import Accessories from './components/views/Accessories/AccessoriesContainer';
import Contact from './components/views/Contact/ContactContainer';



const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/ubrania/' component={Clothes} />
          <Route exact path='/biwak/' component={Equipment} />
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
