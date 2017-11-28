/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Form, Select, Dropdown, Header, Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../index.css'


const testSchools = [{ key: 'csw', text: "Charter School of Wilmington", value: 'wilmingtoncharter' }, { key: 'cab', text: "Cab Calloway School of the Arts", value: 'cabcalloway' },
{ key: 'other', text: "The Other School of Otherness", value: 'otherschool' },]

const roles = [{ key: 's', text: 'Student', value: 'student' }, { key: 'd', text: 'Driver', value: 'driver' }, { key: 'a', text: 'Administrator', value: 'admin' }]

const submitForm = () => {
  alert("Congratulations, you're now registered with the best bus tracking service");
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
    <Header as='h1'>Sign Up</Header>
    {/*TODO: Add actual functionality upon submission(Fix the state stuff), make submit disabled until all form fields are filled, different registration based on role*/}
    <Form>
      <Form.Field
        control={Select}
        label='Choose your role...'
        options={roles}
      />

      <Form.Field
        control={Input}
        label='First Name'
        placeholder='First Name'
      />

      <Form.Field
        control={Input}
        label='Last Name'
        placeholder='Last Name'
      />

      <Form.Field
        control={Dropdown}
        label='School'
        fluid search selection options={testSchools}
        placeholder='Select your school...'
      />

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

      <Form.Field
        control={Input}
        type='password'
        label='Re-enter Password'
        placeholder='Re-enter Password'
      />

      <Form.Button content="Submit" onClick={submitForm} />
    </Form>
  </div>
)