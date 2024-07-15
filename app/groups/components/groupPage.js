"use client";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import {
  Group,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
  Edit as EditIcon,
  Done as DoneIcon,
} from "@mui/icons-material";
import { useSearchParams } from "next/navigation";
import GroupList from "./groupList";
import GroupMember from "./groupMember";
import sampleChats from "../../../constants/Sample";
import { useRouter } from "next/navigation";
const GroupPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const chatId = searchParams.get('g');

  const upDateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue);
  };
  const [isMobile, setIsMobile] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const handleMobileClosed = () => {
    setIsMobile(false);
  };

  const handleBack = () => {
    router.push("/home");
  };

  const [groupName, setGroupName] = useState();
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState();

  const IconBtn = (
    <>
      {" "}
      <Tooltip title="back">
        <IconButton
          sx={{ position: "absolute", top: "2rem", left: "2rem" }}
          onClick={handleBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
    </>
  );

  const GroupName = (
    <>
      <Stack
        direction={"row"}
        padding={"1rem"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
      >
        {isEdit ? (
          <>
            <TextField
              placeholder="Enter Group name"
              value={groupNameUpdatedValue}
              onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
            />
            <IconButton onClick={upDateGroupName} sx={{ color: "green" }}>
              <DoneIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography>{groupName}</Typography>
            <IconButton onClick={() => setIsEdit(true)}>
              <EditIcon />
            </IconButton>
          </>
        )}
      </Stack>
    </>
  );

  useEffect(() => {

    // if(chatId){
    //  setGroupNameUpdatedValue(`groupvalue`);
    //  setGroupName(`groupName`);
    // }
    setGroupNameUpdatedValue(`groupvalue`);
    setGroupName(`group`);

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          backgroundImage: ' linear-gradient(#e66465, #9198e5);',
      
        }}
        sm={4}
      >
        List
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtn}

        <Grid>
          {groupName && (
            <>
              {GroupName} <GroupMember />
            </>
          )}
        </Grid>
      </Grid>

      <Drawer open={isMobile} onClose={handleMobileClosed}  >
        
        <GroupList myGroups={sampleChats} chatId={chatId}  />
      </Drawer>
  
    </Grid>
  );
};
export default GroupPage;
