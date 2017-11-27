import React from 'react'
import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Loading = () => <p>Loading</p>

const Lazy = Loadable({
  loader: () => import('./pages/Lazy'),
  loading: Loading,
})

const SuperLazy = Loadable({
  loader: () => import('./pages/SuperLazy'),
  loading: Loading,
})

const SignUp = Loadable({
  loader: () => import('./pages/SignUp'),
  loading: Loading,
})

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Lazy} />
      <Route path="/SuperLazy" component={SuperLazy} />
      <Route path="/SignUp" component={SignUp} />
    </div>
  </Router>
);
