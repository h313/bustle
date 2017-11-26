import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux';

import Index from './pages/Index'
import Login from './pages/Login'
import Register from './pages/Register'

function mapStateToProps(state) {
  return {
    
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps)(App);
