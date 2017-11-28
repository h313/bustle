import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Header, Menu, Image } from 'semantic-ui-react';

const doTheLogin = () => {
  alert("Unecessary alert about successful login, I'll redirect you in the future");
}

export default () => (
  <div>
    <Menu inverted>
      <Menu.Item>
        <Link to='/'>
          <Button
            inverted color='yellow'
            size='massive'
            className='homeBtn'
          >Bustle</Button>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Image avatar />
        <span className='username'>Username</span>
      </Menu.Item>
    </Menu>
    <Header as='h1'>Login</Header>
    <Form>
      <Form.Field
        control={Input}
        label='Username'
        placeholder='Username'
      />

      <Form.Field
        control={Input}
        type='password'
        label='Password'
        placeholder='Password'
      />
      <Link to='/'><Form.Button content='Login' onClick={doTheLogin} /></Link>
    </Form>
  </div>
);
