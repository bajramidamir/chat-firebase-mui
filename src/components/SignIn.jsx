import React from 'react';
import { Container, Button, createTheme, Box, Avatar, Typography, ThemeProvider, responsiveFontSizes } from "@mui/material";
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import LoginIcon from '@mui/icons-material/Login';
import { signInWithRedirect,  GoogleAuthProvider } from 'firebase/auth';
import { auth } from "../firebase.js";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const SignIn = () => {

    const userSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }


    return (
        <ThemeProvider theme={theme}>
             <Container sx={{borderRadius:3, p:6, mt:12, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <Typography align='center' variant='h1' sx={{ mb:6, color:'white' ,fontWeight: 500 }} gutterBottom>
                    Welcome to Chat DB 
                </Typography>
                <Box>
                    <Avatar alt="Login icon" sx={{ height:'64px', width:'64px', bgcolor: "#0277bd", mx: "auto" }}>
                        <MarkChatUnreadIcon fontSize='large' />
                    </Avatar>
                    <Button onClick={userSignIn} endIcon={<LoginIcon />} variant="outlined" sx={{ mt:6 }}>Sign in with Google</Button>
                </Box>
            </Container>
        </ThemeProvider>  
    )
}

export default SignIn