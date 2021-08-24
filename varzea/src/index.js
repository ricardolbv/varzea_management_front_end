import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/login/LoginPage';

ReactDOM.render(
  <Router>
    <Route path="/" exact component={LandingPage}/>
    <Route path="/login" exact component={LoginPage}/>
  </Router>,
  document.getElementById('root')
);


