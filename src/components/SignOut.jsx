import React from 'react';
import { Button } from "@mui/material";
import { auth } from "../firebase.js";
import LogoutIcon from '@mui/icons-material/Logout';

const SignOut = () => {
  return (
    <div>
        <Button variant="contained" startIcon={<LogoutIcon />} onClick={() => auth.signOut()}>
            Sign out 
        </Button>
    </div>
  )
}

export default SignOut;