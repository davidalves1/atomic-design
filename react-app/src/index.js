import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './pages';

import MainTemplate from './templates/main';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <MainTemplate>{ routes }</MainTemplate>
  </Router>,
document.getElementById('root'));
