import transformImage from "@/app/lib/tranformIm";
import { AvatarGroup, Stack,Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const avatar = ({ avatar = [], max = 4 }) => {
  return (
    <>
      <Stack spacing={0.2} direction={"row"}>
        <AvatarGroup max={max} sx={{position:'relative'}}>
          <Box width={"5rem"} height={"3rem"}>
            {avatar.map((i, index) => (
              <Avatar
                key={Math.random() * 100}
                src={transformImage(i)}
                alt={`Avatar ${index}`}
                sx={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                  left:{
                    
                    sm:`${index}rem`
                  }
                }}
              />
            ))}
          </Box>
        </AvatarGroup>
      </Stack>
    </>
  );
};

export default avatar;
