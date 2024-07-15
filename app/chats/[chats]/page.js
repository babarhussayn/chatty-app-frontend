"use client";

import { Grid, Icon, IconButton, Input, Stack } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import InputBox from "../../../componentstyled/InputBox";
import React, { useRef } from "react";
import Samplechats from "@/constants/Sample";
import sampleMessage from "../../../constants/sampleMessage";
import Header from "../../home/components/header";
import ChatList from "../components/chatList";
import { useParams } from "next/navigation";
import MessageComponent from "@/app/shared/MessageComponent";
const Chats = () => {

  const params = useParams();
  const chatId = params.chatId;
  const containerRef = useRef(null);

const user= {
    _id:'dffsfds',
    name:'jbngi',
};

  return (
    <>
      <Header />
     
      <Grid container height={"calc(100vh - 4rem)"} >
        <Grid
          item
          sm={2}
          md={3}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          height={"100%"}
    
        > 
        <ChatList    chats={Samplechats}
            ChatId={chatId}
            newMessagesAlert={[{ chatId, count: 5 }]}
            onlineUsers={["1", "2"]}/>
            </Grid>

            <Grid
          item
          sm={8}
          xs={12}
          md={5}
          lg={6}
          sx={{
            display: { xs: "block", sm: "block" },
          }}
          height={"90%"}
        >
        
        <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"#E9E9E9"}
        height={"90%"}
    
    
    
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
         
        }}
      >
            
            {sampleMessage.map((i)=>(
<MessageComponent message={i} user={user} key={i._id}/>))}

        
        
          </Stack>
        <form
          style={{
            height: "10%",
        
            
          }}
        >
          <Stack direction={"row"} height={'100%'} alignItems={'center'} position={'relative'} padding={'1rem'}>
            <IconButton sx={{position:'absolute',padding:'1rem'}}>
              <AttachFileIcon />
            </IconButton>

            <InputBox placeholder="Type Message here...." />

            <IconButton type="submit" sx={{bgcolor:'lightgreen' ,rotate:'-20deg',"&:hover":{bgcolor:'Highlight'}, padding:'0.5rem',marginLeft:'1rem'}}>
              <SendIcon />
            </IconButton>
          </Stack>
        </form>
     
        
          <Stack spacing={"1rem"}></Stack>
        </Grid>


      
      
       </Grid> 
    </>
  );
};

export default Chats;
