import { Stack } from "@mui/material";
import React,{memo} from "react";
import ChatItem from "./chatItem";

const chatList = ({
  handleDeleteChat,
  newMessagesAlert = [{ chatId: "", count: 0 }],
  onlineUsers = [],
  ChatId,
  chats = [],
  w = "100%",
}) => {
  return (
    <>
      <Stack width={w} direction={"column"} overflow={'auto'} height={'100%'} sx={{backgroundImage: ' linear-gradient(#e66465, #9198e5);'}}> 
  {chats.map((data, index) => {
    const { avatar, _id, name, groupChat, members } = data;
    const newMessageAlert = newMessagesAlert.find(({ chatId }) => chatId === _id);
    const isOnline = members?.some((member) => onlineUsers.includes(member));

    return (
      <div key={_id}>
        <ChatItem
          index={index}
          avatar={avatar}
          _id={_id}
          name={name}
          groupChat={groupChat}
          members={members}
          newMessageAlert={newMessageAlert}
          isOnline={isOnline}
          handleDeleteChatOpen={handleDeleteChat}
        />
      </div>
    );
  })}
</Stack>
    </>
  );
};

export default memo(chatList);
