import { Avatar, IconButton, ListItem, Typography, Stack } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import React from "react";







const UserItem = ({ user, handler, handlerIsLoading,isAdded=false }) => {
  const {name, _id, avatar } = user?._doc;
  

  return (
    <ListItem>
      <Stack
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        spacing={"1rem"}
      >
    <Avatar src={user?._doc?.avatar?.url} alt={user?._doc?.name}  />
    
  
        <Typography
          variant="body1"
          sx={{ flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}
        >
        
    {name}
    
        </Typography>

        <IconButton
          size="small"
          sx={{ bgcolor: isAdded ? "error.main" : "primary.main", }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
        {isAdded ? <RemoveIcon />:<AddIcon /> }  
        </IconButton>
    
        
      </Stack>
    </ListItem>
  );
};

export default UserItem;
