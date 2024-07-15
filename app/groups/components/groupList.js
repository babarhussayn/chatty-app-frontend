import { Stack, Typography } from '@mui/material'
import React from 'react'
import GroupItem from './groupItem'

const groupList = ({w='100%',myGroups=[],chatId}) => {
  return (
    <Stack width={w} sx={{  backgroundImage: ' linear-gradient(#e66465, #9198e5)',height:'100vh',overflow:'scroll'}}>

        {myGroups.length > 0 ?(
            myGroups.map((group) =>
<GroupItem group={group} chatId={chatId} key={group._id}/>
            )
        ):(
            <Typography textAlign={'center'} padding={'1rem'}>
                No Group here
            </Typography>
        )}
    </Stack>
  )
}

export default groupList