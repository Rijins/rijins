import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
     <Typography variant='h3' color='primary'>Signup</Typography>
     <TextField label="First name" variant='outlined'></TextField>
     <TextField label="Last name" variant='filled'></TextField>
     <br /><TextField label="Email address" variant='filled'></TextField>
     <br /><TextField label="Password" type="password" variant='filled'></TextField>
     <br /><Button variant="text">Next</Button>
   
    
      
    </div>
  )
}

export default Signup
