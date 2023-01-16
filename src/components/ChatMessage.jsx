import React from 'react';
import { auth } from "../firebase.js";
import { Box, Container,  Typography, Avatar, Paper } from "@mui/material";

const ChatMessage = ( props ) => {
    const { text, photoUrl, uname, createdAt, uid } = props.message;

    const sent = (uid === auth.currentUser.uid);

    return (
        <Container sx={{ mb:3, mt:1 }} >
            <Typography sx={{ my:1 }} >
                    {uname}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}  >
                <Avatar sx={{ mr:2, display: sent ? 'hidden' : '' }} src={photoUrl}></Avatar>
                <Paper elevation={0} sx={{ p:1, borderRadius:3 }} >
                    <Typography variant="p">{text}</Typography>
                </Paper>
            </Box>
        </Container>
        
    )
}

export default ChatMessage