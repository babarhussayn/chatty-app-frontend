import { Avatar, Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React from 'react'
import UserData from '../../constants/userData';
import UserItem from '../shared/UserItem';
import { useState } from 'react';
const AddMem = ({addMember,isLoadingAddMember,chatId}) => {

const addMemberSubmit=()=>{
    console.log('addMemberSubmit')
}

const closeHandler = ()=>{

};
const [members, setMembers] = useState(UserData);
  const [selectedMember, setSelectedMember] = useState([]);
  const selectMemberHandler = (id) => {
    setSelectedMember((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  return (
    
<Dialog  close={closeHandler}>
<Stack width={'25rem'} spacing={1} p={'1rem'}>
    <DialogTitle>Add Member</DialogTitle>
    <Stack>
    {UserData.length> 0 ? (UserData.map((i)=>(
    
    
        <UserItem key={i._id} user={i} handler={selectMemberHandler} isAdded={selectedMember.includes(i._id)}/>
    
        
))):(<Typography>No available</Typography>)
}
</Stack>
<Stack direction={'row'} alignContent={'center'} alignItems={'center'} justifyContent={'space-evenly'}>
    <Button color='success' variant='outlined' sx={{"&:hover":{bgcolor:'green',color:'white'}}} onClick={addMemberSubmit}>Submit</Button>
    <Button color='error' variant='contained' onClick={closeHandler} sx={{"&:hover":{bgcolor:'white',color:'red'}}}>Cancel</Button>
</Stack>
</Stack>
</Dialog>


    
  )
}

export default AddMem