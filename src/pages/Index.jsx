import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>bustle index page</h1>
    <p><Link to="/login">login</Link></p>
    <p><Link to="/register">register</Link></p>
  </div>
);
