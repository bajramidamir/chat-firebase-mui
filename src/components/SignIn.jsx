import React from 'react';
import { Container, Button, Paper, Box,  Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { signInWithPopup , GoogleAuthProvider } from 'firebase/auth';
import { auth } from "../firebase.js";


const SignIn = () => {

    const userSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }


    return (
        <Container maxWidth="xs" sx={{borderRadius:3, p:6, bgcolor:'#f1f5f9', mt:12, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography variant='h2' align='center' sx={{color:"#334155",fontWeight: 500}} gutterBottom>
                Welcome to Chat DB 
            </Typography>
            <Box>
                <Avatar  alt="Login icon" sx={{bgcolor: "#0277bd", mx:"auto"}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Button onClick={userSignIn} endIcon={<LoginIcon />} variant="contained" sx={{mt:4}}>Sign in with Google</Button>
            </Box>
        </Container>
    )
}

export default SignIn