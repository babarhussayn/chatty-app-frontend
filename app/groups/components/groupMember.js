import UserItem from "@/app/shared/UserItem";
import UserData from "@/constants/userData";
import { Delete as DeleteIcon, Add as AddIcon } from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { useState } from "react";




const ConfirmDeleteGroup= lazy(() => import('../../dialogs/Confirm'))
const AddMember= lazy(() => import('../../dialogs/AddMem'))

const groupMember = () => {

  const [members, setMembers] = useState(UserData);
  const [selectedMember, setSelectedMember] = useState([]);
  const selectMemberHandler = (id) => {
    setSelectedMember((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };


  const deleteHandler = () => {
console.log('deeeletede group')
setConfirmDeleteGroup(false);
  };


  const openConfirmDeleteGroup = () => {
    console.log('deleted group')
    setConfirmDeleteGroup(true);
      };

      const closeConfirmDeleteGroup = () => {
        console.log('de')
        setConfirmDeleteGroup(false);
          };
  const handleAddMember = () => {

    console.log('adding member')
  };
const [confirmDeleteGroup,setConfirmDeleteGroup]=useState(false)



  const groupBtn = (
    <Stack
      direction={{ sm: "row", xs: "column-reverse" }}
      spacing={"1rem"}
      p={{ xs: "0", sm: "1rem", md: "1rem 4rem" }}
    >
      <Button startIcon={<DeleteIcon color="error" />} onClick={openConfirmDeleteGroup}>Delete Group</Button>
      <Button startIcon={<AddIcon color="success" />} onClick={handleAddMember}>Add Member</Button>
    </Stack>
  );

  return (
    <>
      <Typography>Members</Typography>
      <Stack
        height={"50vh"}
        bgcolor={"bisque"}
        maxWidth={"45rem"}
        padding={{ sm: "1rem", xs: "0", md: "1rem 4rem" }}
        spacing={"2rem"}
      >

        {UserData.map((i)=>(
<UserItem user={i} key={i._id} handler={selectMemberHandler} isAdded={selectedMember.includes(i._id)}/>

        ))}
      </Stack>

      {groupBtn}

      {confirmDeleteGroup && <Suspense fallback={(<div >Loading...</div>)}>
        <ConfirmDeleteGroup open={confirmDeleteGroup} handleClose={closeConfirmDeleteGroup} deleteHandler={deleteHandler} />
        </Suspense>}


        <Stack>
          {AddMember && <Suspense fallback={(<div> Loading....</div>)}>
            <AddMember open />
            </Suspense>}
        </Stack>
    </>
  );
};

export default groupMember;
