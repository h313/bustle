import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default () => (
  <div>
    <Link to="/superLazy">super lazy</Link>
    <p>this was lazily loaded</p>
    <p>
      <Link to="/signUp"><Button secondary>Sign up here!</Button></Link>
    </p>
  </div>
)
