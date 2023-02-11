import React, { useRef } from 'react';
import SignOut from './SignOut';
import SendMessage from "./SendMessage";
import ChatMessage from './ChatMessage';
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase.js";
import { Box, CssBaseline, Container } from "@mui/material";
import { useCollectionData } from "react-firebase-hooks/firestore";


const Chat = () => {

  const scroll = useRef();
  const messagesRef = collection(db, 'messages');
  const q = query(messagesRef, orderBy("createdAt"));
                      
  const [messages] = useCollectionData(q, {idField: 'id'});

  return (
    <div>
      <CssBaseline />
        <SignOut />
        <Container maxWidth="md"
        sx={{ my:2, p:1, width:"100%", minHeight:"70vh", maxHeight:"70vh", overflowY:'scroll'}}>
          <Box>
            {messages && messages.map(message => <ChatMessage key={message.createdAt} message={message} />)}
            <span className='hidden' ref={scroll}>hidden text</span>
          </Box>
        
        
        </Container>
        <SendMessage scroll={scroll} />
        
    </div>
  )
}

export default Chat