import React from 'react'

 import Avatar from '../../chats/components/avatar'

import { Stack, Typography } from '@mui/material'
import styled from '@emotion/styled';
import Link from 'next/link';




const groupItem = ({group, chatId}) => {
 
    const {name,avatar,_id} = group;
    const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 0;
    &:hover {
      background-color: #fefefe;
    }
    
  `;
  return (
    <StyledLink href={`?group=${_id}`} onClick={(e)=>{if (chatId=== _id) e.preventDefault()}}>
    
    <Stack  direction={'row'} spacing={'1rem'} margin={'1rem'} alignItems={'center'}>
    <Avatar avatar={avatar}/>
  
   <Typography textAlign={'center'} >{name}</Typography>
    </Stack>
    
    
    
    </StyledLink>
  )
}

export default groupItem