import React, { useState } from 'react';
import { db, auth } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
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
    scroll.current.scrollIntoView({ behaviour: 'smooth' })
  }
1

  return (
      <Container sx={{bgcolor:'white', borderRadius:2, p:1}} maxWidth="sm">
        <Box>
          <form onSubmit={sendMsg}>
            <Input sx={{mx:2}} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message...' />
            <Button startIcon={<SendRoundedIcon />} variant='contained' type='submit'>Send</Button>
          </form>
        </Box>
    </Container>
    
    
  )
}

export default SendMessage;