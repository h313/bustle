import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Grid } from 'semantic-ui-react';

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
    <Grid>
      <Grid.Row centered>
        <Header as='h1' textAlign='center'>Welcome to Bustle</Header>
      </Grid.Row>
      <Grid.Row centered>
        <p><Link to="/register"><Button secondary={true}>Register</Button></Link></p>
      </Grid.Row>
      <Grid.Row centered>
        <p><Link to="/login"><Button secondary={true}>Login</Button></Link></p>
        </Grid.Row>
    </Grid>
  </div>
);
