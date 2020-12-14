import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import store from './redux/store';

import './styles/global.scss';
import './styles/bootstrap.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';



const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <p>komponenty</p>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
