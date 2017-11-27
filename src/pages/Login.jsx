import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'semantic-ui-react';
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
    <h1>Login</h1>
    <Form>
      <Form.Field
        control={Input}
        label='Username'
        placeholder='Username'
      />

      <Form.Field
        control={Input}
        label='Password'
        placeholder='Password'
      />
    </Form>
    <p/>
    <Button>Login</Button>
  </div>
);
