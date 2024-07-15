"use client";

import { Drawer, Grid, Skeleton, Stack } from "@mui/material";
import React from "react";
import ChatList from "../../chats/components/chatList";
import Samplechats from "@/constants/Sample";
import { useParams } from "next/navigation";
import Profile from "@/app/specific/Profile";
import Mainpage from "./Mainpage";
import Chats from "@/app/chats/[chats]/page";
import { useGetMyChatsQuery } from "@/redux/api/api";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile} from "@/redux/reducers/misc";
import { useErrors } from "@/hooks/hook";
import { getSocket } from "@/app/socket";
const main = () => {
  const params = useParams();
const dispatch=useDispatch();


  const chatId = params.chatId;
  const {isLoading,isError,data,error,refetch}=useGetMyChatsQuery("")
      
  const {isMobile}= useSelector((state)=>state.misc);
  const {user}= useSelector((state)=>state.auth);
 
  useErrors([{isError,error}])

const handleMobileClose=()=>dispatch(setIsMobile(false));

const socket = getSocket()
console.log(socket.id)



  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDefault();
    console.log("delete chat", _id, groupChat);
  };
  return (
    <>


{isLoading ? <Skeleton/>:(<Drawer open={isMobile} onClose={handleMobileClose}>
  <ChatList
            chats={data?.chats}
            ChatId={chatId}
            w="70vw"
            handleDeleteChat={handleDeleteChat}/>
</Drawer>)}

      <Grid container height={"calc(100vh - 4rem)"} spacing={2}>
        <Grid
          item
          sm={4}
          md={3}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          height={"100%"}
        >
        {isLoading ? (<Skeleton/>): ( <ChatList
            chats={data?.chats}
            ChatId={chatId}
            newMessagesAlert={[{ chatId, count: 5 }]}
            onlineUsers={["1", "2"]}
            handleDeleteChat={handleDeleteChat}
          />)}
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
          height={"100%"}
        >
          <Mainpage/>
        
          <Stack spacing={"1rem"}></Stack>
        </Grid>
        <Grid
          item
          md={4}
          lg={3}
          sx={{
            display: { xs: "none", md: "block" }, backgroundColor:'black',padding:'1rem',
          }}
          height={"100%"}
        >
        <Profile user={user} />
        </Grid>
      </Grid>
    </>
  );
};

export default main;
