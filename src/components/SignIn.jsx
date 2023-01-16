import React from 'react';
import { Container, Button, Paper, Box,  Avatar, Typography } from "@mui/material";
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import LoginIcon from '@mui/icons-material/Login';
import { signInWithRedirect,  GoogleAuthProvider } from 'firebase/auth';
import { auth } from "../firebase.js";


const SignIn = () => {

    const userSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }


    return (
        <Container maxWidth="xs" sx={{borderRadius:3, p:6, mt:12, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography variant='h2' align='center' sx={{ color:'white' ,fontWeight: 500 }} gutterBottom>
                Welcome to Chat DB 
            </Typography>
            <Box>
                <Avatar alt="Login icon" sx={{ height:'48px', width:'48px', bgcolor: "#0277bd", mx: "auto" }}>
                    <MarkChatUnreadIcon fontSize='large' />
                </Avatar>
                <Button onClick={userSignIn} endIcon={<LoginIcon />} variant="outlined" sx={{ mt:4 }}>Sign in with Google</Button>
            </Box>
        </Container>
    )
}

export default SignIn