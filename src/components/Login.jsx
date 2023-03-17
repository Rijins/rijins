import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      {/* <h3>Login to Facebook</h3> */}
      {/* <input type="text" placeholder="Email address" name="" id="" /> */}
      {/* <br /><input type="password" placeholder="Password" name="" id="" /> */}
      {/* <br /><button type="submit">Login</button> */}
      {/* <br></br> */}
      <Typography variant='h3' color='primary'>Login to Facebook</Typography>
      <TextField label='email' variant='outlined'/>
      <br /><TextField label='Password' type="password" variant='outlined'/>
    </div>
  )
}

export default Login
