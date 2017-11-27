import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Form, Select, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../index.css'


const testSchools = [{key: 'csw', text: "Charter School of Wilmington", value: 'wilmingtoncharter'}, {key: 'cab', text: "Cab Calloway School of the Arts", value: 'cabcalloway'}, 
{key: 'other', text: "The Other School of Otherness", value: 'otherschool'},]

const roles = [{key: 's', text: 'Student', value: 'student'},{key: 'd', text: 'Driver', value: 'driver'},{key: 'a', text: 'Administrator', value: 'admin'}]

const submitForm = () => {
  alert("Form submitted (But right now that doesn't mean much)");
}
 
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
        <h1>Sign Up Here</h1>
        {/*TODO: Add actual functionality upon submission, make submit disabled until all form fields are filled, different registration based on role*/}
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
            
            <Button type="submit" onClick={submitForm}>Submit</Button>
        </Form>
    </div>
  )