import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import UserItem from "../shared/UserItem";
import userData from "@/constants/userData";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const [members, setMembers] = useState(userData);
  const [selectedMember, setSelectedMember] = useState([]);
  const selectMemberHandler = (id) => {
    setSelectedMember((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const groupName = useInputValidation("");

  const [users, setUsers] = useState(userData);

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Join Group</DialogTitle>

        <TextField
          label="Group name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography>Members</Typography>
        <Stack>
          {members.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              isAdded={selectedMember.includes(i._id)}
            />
          ))}
        </Stack>

        <Stack direction={"row"} alignItems={"center"}>
          <Button color={"success"}>Create</Button>
          <Button color={"error"}>Cancel</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
