/* eslint-disable */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import MapService from './pages/MapService';

function mapStateToProps(state) {
  return state;
}

const App = () => { 
  return (
    <Router>
      <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/mapService" component={MapService} />
      </div>
    </Router>
  );
};

export default connect(mapStateToProps)(App);
