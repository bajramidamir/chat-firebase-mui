import React, { useState, useEffect } from 'react';
import SignOut from './SignOut';
import SendMessage from "./SendMessage";
import ChatMessage from './ChatMessage';
import { collection, getDocs, query ,orderBy, limit } from "firebase/firestore"
import { db } from "../firebase.js";
import { Box, Typography, CssBaseline , Avatar, Container } from "@mui/material";
import { useCollectionData } from "react-firebase-hooks/firestore";


const Chat = () => {

  const messagesRef = collection(db, 'messages');
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
                      
  const [messages] = useCollectionData(q, {idField: 'id'});

  return (
    <div>
      <CssBaseline />
        <SignOut />
        <Container maxWidth="sm"
        sx={{bgcolor:'white', my:2, p:1, borderRadius:2, minHeight:"60vh" , maxHeight:"60vh", overflowY:'scroll'}}>


          <Box>
            {messages && messages.map(message => <ChatMessage key={message.id} message={message} />)}
          </Box>


        
        </Container>
        <SendMessage />
    </div>
  )
}

export default Chat