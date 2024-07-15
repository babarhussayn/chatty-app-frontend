"use client";
import "../../globals.css";
import { Box, styled } from "@mui/material";
import React from "react";
import Link from "next/link";
import { Stack, Typography, } from "@mui/material";
import Avatar from './avatar'
const chatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {

    
    

        
        

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 0;
    &:hover {
      background-color: #f0f0f0;
    }
    
  `;
 
  
  return (
    <>
      <StyledLink
        href={`/chats/${_id}`}
        onContextMenu={(e)=>handleDeleteChat(e,index,groupChat)}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: sameSender ? "black" : "unset",
            color: sameSender ? "white" : "unset",
            position: "relative",
          }}
        >
            <Avatar avatar={avatar}/>
          <Stack>
            <Typography>{name}</Typography>

            {newMessageAlert && (
              <Typography
                variant="span"
                sx={{ fontSize: "12px", color: "black" }}
              >
                {newMessageAlert.count} New Messages
              </Typography>
            )}
          </Stack>

          {isOnline && (
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "green",
                position: "absolute",
                right: "1rem",
                transform: "translateY(-50%)",
                top: "50%",
                borderRadius: "50%",
              }}
            />
          )}
        </div>
      </StyledLink>
    </>
  );
};

export default chatItem;
