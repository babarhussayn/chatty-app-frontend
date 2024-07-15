import styled from "@emotion/styled";
import { Chat, Dashboard, Group, Person,ExitToApp as ExitIcon } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const sideBar = ({ w = "100%" }) => {
  const location = useRouter()
  const sideNav = [
    {
      name: "Dashboard",
      icon: <Dashboard />,
      path: '/dashboard'
    },
    {
      name: "Groups",
      icon: <Group />,
      path:'/groupsManage'
    },
    {
      name: "Users",
      icon: <Person />,
      path: '/userManage'
    },
    {
      name: "Chats",
      icon: <Chat />,
      path: '/messageManage'
    },
  ];

  const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem 2rem;
  &:hover {
    background-color: #f0f0f0;
  }
  border-radius:2rem
  
`;
const logOutHandler=()=>{
  location.push('/')
}
  return (
    <Stack width={w} direction={"column"} p={"1rem"} spacing={"2rem"}>
      <Typography variant="h4">Admin Panel</Typography>
      <Stack spacing={"1rem"} >
        {sideNav.map((i) => (
        
            <StyledLink key={i.name} href={i.path}  p={"1rem"} 
            
             >
              <Stack  direction={"row"} alignItems={"center"} spacing={"1rem"}>
                {i.icon}
                <Typography>{i.name}</Typography>
              </Stack>
            </StyledLink>
          
))}
      </Stack>

      <StyledLink href='/admin' onClick={logOutHandler}>
<Stack direction={'row'} spacing={'1rem'} alignItems={'center'}>

    <ExitIcon/>
  
<Typography>LogOut</Typography>

</Stack>
</StyledLink>
    </Stack>
  );
};

export default sideBar;
