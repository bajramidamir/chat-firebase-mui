import React, { useState } from 'react';
import { db, auth } from "../firebase.js";
import { collection, addDoc, serverTimestamp, refEqual } from "firebase/firestore";
import { Container, Box, Input, Button, Grid } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const SendMessage = ({ scroll }) => {

  const [message, setMessage] = useState('');

  const msgCol = collection(db, 'messages');

  async function sendMsg(e) {
    e.preventDefault();
    const { displayName, photoURL, uid } = auth.currentUser;
    
    await addDoc(msgCol, {
      text: message,
      createdAt: serverTimestamp(),
      photoUrl: photoURL,
      uname: displayName
    })

    setMessage('');
    
    scroll.current.scrollIntoView();

  }
1

  return (
    <Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'>
      <Grid item>
          <Container sx={{p:1}} maxWidth="sm">
            <Box>
              <form onSubmit={sendMsg}>
                <Input sx={{ mx:2 }} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message...' />
                <Button startIcon={<SendRoundedIcon />} variant='string' type='submit'>Send</Button>
              </form>
            </Box>
          </Container>
      </Grid>
    </Grid>
      
    
    
  )
}

export default SendMessage;