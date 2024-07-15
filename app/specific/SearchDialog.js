import { useInputValidation } from "6pp";
import {
  useLazySearchUserQuery,
  useSendRequestMutation,
} from "@/redux/api/api";
import { setIsSearch } from "@/redux/reducers/misc";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import UserItem from "../shared/UserItem";
const SearchDialog = () => {
  const { isSearch } = useSelector((state) => state.misc);
  const dispatch = useDispatch();
  const search = useInputValidation("");
  const [users, setUsers] = useState([]);
  const [searchUser] = useLazySearchUserQuery();

  const isLoadinSendFriendRequest = false;

  const [sendFriendRequest] = useSendRequestMutation();

  const addFriendHandler = async (id) => {
    try {
      const res = await sendFriendRequest({ userId: id });
      if (res.data) {
        toast.success(res.data.message);
      } else {
        toast.error(res.error.data.message);
      }
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
  };
  const removeFriendHandler = (id) => {
    console.log("removeFriendHandler", id);
  };

  const searchCloseHandler = () => dispatch(setIsSearch(false));

  useEffect(() => {
    const timeOut = setTimeout(() => {
      searchUser(search.value)
        .then(({ data }) => setUsers(data.users))
        .catch((e) => console.log(e));
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [search.value]);

  return (
    <Dialog open={isSearch} onClose={searchCloseHandler}>
      <Stack p={"2rem"} direction={"column"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>

        <TextField
          label="Searched People"
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((i, index) => (
            <UserItem
              user={i}
              key={i.user?._doc?._id || index}
              handler={addFriendHandler}
              handlerIsLoading={isLoadinSendFriendRequest}
              isAdded={i.isAdded}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default SearchDialog;
