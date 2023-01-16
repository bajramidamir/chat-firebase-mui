import React from 'react';
import { Typography, AppBar, Toolbar, Button } from "@mui/material";
import { auth } from "../firebase.js";
import LogoutIcon from '@mui/icons-material/Logout';


const SignOut = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Button startIcon={<LogoutIcon />} variant='string' onClick={() => auth.signOut()} disableElevation>
          Sign out
        </Button>
      </Toolbar>
    </AppBar>
    
  )
}

export default SignOut;