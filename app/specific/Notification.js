
import { useErrors } from "@/hooks/hook";
import { useAcceptRequestMutation, useGetNotificationsQuery } from "@/redux/api/api";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import avatar from "../chats/components/avatar";

import { useDispatch, useSelector } from "react-redux";
import { setIsNotifications } from "@/redux/reducers/misc";
import { toast } from "react-toastify";


const Notification = () => {

const {isNotifications}=useSelector((state)=> state.misc);
  const dispatch=useDispatch();
const {isError,error,isLoading,data}=useGetNotificationsQuery()


useErrors([{error,isError}])

const [acceptRequest]= useAcceptRequestMutation()
  const friendRequestHandler=async({_id,accept})=>{
try{
const res = await acceptRequest({requestId:_id,accept})

if(res?.data?.success){
toast.success(res?.data?.message)
}else {
  toast.error(res?.data?.error)
  
}


}catch(error){
  console.log(error,'error agya ')
}

};
const closeHandler=()=>dispatch(setIsNotifications(false));
  
  return (
    <>
      <Dialog open={isNotifications} onClose={closeHandler} >
        <Stack p={"2rem"} direction={"column"}>
          <DialogTitle textAlign={"center"}>Notification</DialogTitle>

          {data?.allRequests?.length > 0 ? (
            data?.allRequests?.map(({sender,_id}) => (
              <NotificationItem sender={sender} _id={_id} key={_id} handler={friendRequestHandler} avatar={avatar}/>
            ))
          ) : (
            <Typography></Typography>
          )}
        </Stack>
      </Dialog>
    </>
  );
};

const NotificationItem = ({ sender, _id, handler }) => {
  const { name, avatar } = sender;

  return (
    <ListItem>
      <Stack
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        spacing={"1rem"}
      >
        <Avatar src={avatar} alt={sender?.name} />
        <Typography
          variant="body1"
          sx={{ flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {`${name} sent you a request`}
        </Typography>
        <Stack direction={{
          xs: "column",
          sm:'row'
        }}>
          <Button color={'success'} onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color={'warning'} onClick={() => handler({ _id, accept: false })} >
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
};
export default Notification;
