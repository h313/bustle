/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Grid, Menu, Image } from 'semantic-ui-react';

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
    <Grid>
      <Grid.Row centered>
        <Header as='h1' textAlign='center'>Welcome to Bustle</Header>
      </Grid.Row>
      <Grid.Row centered>
        <Header as='h4' textAlign='center' color='grey'>You ain't hustlin' if you ain't bustlin'!</Header>
      </Grid.Row>
      <Grid.Row centered>
        <Link to="/register"><Button secondary={true}>Register</Button></Link>
      </Grid.Row>
      <Grid.Row centered>
        <Link to="/login"><Button secondary={true}>Login</Button></Link>
      </Grid.Row>
      <Grid.Row centered>
        <a href="http://h313.info/bustle/"><Button secondary={true}>Test Map Service</Button></a>
      </Grid.Row>
    </Grid>
  </div>
);
