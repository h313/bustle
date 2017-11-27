import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default () => (
  <div>
    <div className='bustleHeader'>
      <Link to='/'>
        <Button
            inverted color = 'yellow'
            size='massive'
            className = 'homeBtn'
        >Bustle</Button>
      </Link>
    </div>
    <p/>
    <p><Link to="/login"><Button secondary>Login</Button></Link></p>
    <p><Link to="/register"><Button secondary>Register</Button></Link></p>
  </div>
);
