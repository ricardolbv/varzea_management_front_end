import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store'

import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/login/LoginPage';
import HowToPage from './pages/howto/HowToPage';
import CaptainPage from './pages/captain/CaptainPage';
import HomePage from './pages/home/HomePage';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Route path="/" exact component={LandingPage}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/login" exact component={LoginPage}/>
      <Route path="/howto" exact component={HowToPage}/>
      <Route path="/register" exact component={CaptainPage}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);


