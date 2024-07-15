'use cleint'

import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'
import { Face as FaceIcon, AlternateEmail as UserNameIcon ,CalendarMonth as CalendarIcon} from '@mui/icons-material';
import moment from 'moment';
const Profile = ({user}) => {
  return (
    <>
    <Stack spacing={'2rem'} direction={'column'} alignItems={'center'} marginTop={'2rem'}>
      <Avatar src={user?.avatar?.url} alt={user?.name} sx={{width:200,height:200,objectFit:'contain',border:'5px solid white', marginBottom:'10px'}}/>

               
<ProfileCard heading={'BIO'} text={user?.bio}  />
<ProfileCard heading={'Name'} text={user?.name} Icon={<FaceIcon/>}  />
<ProfileCard heading={'Username'} text={user?.username} Icon={<UserNameIcon/>}  />
<ProfileCard heading={'Joined'} text={moment(user?.createdAt).fromNow()} Icon={<CalendarIcon/>}  />

    </Stack>
    
    
    </>
  )
};




const ProfileCard=({Icon,heading,text})=>


<Stack direction={'row'} alignItems={'center'} spacing={'1rem'} color={'grey'} textAlign={'center'}>


{Icon && Icon}
<Stack>
<Typography variant='body1' color={'white'}>
  {text}
</Typography>
<Typography color={'white'} variant='caption'>{heading}</Typography>
</Stack>
</Stack>






export default Profile