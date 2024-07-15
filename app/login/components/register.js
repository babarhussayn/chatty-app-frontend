'use client'
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import Validator from "../../../utils/validator.js";
import {
  Avatar,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import VisualHiddenInput from "../../../componentstyled/Styled";
import { useFileHandler, useInputValidation } from "6pp";
import {useDispatch} from 'react-redux';
import { userExists, userNotExists } from "@/redux/reducers/auth";
import { useRouter } from "next/navigation.js";
import {  toast } from 'react-toastify';
import axios from 'axios'


const register = ({ togle }) => {
  const name = useInputValidation("");
  const username = useInputValidation("", Validator);
  const password = useInputValidation("");
  const email = useInputValidation("");
  const bio = useInputValidation("");

  const avatar = useFileHandler("single");

  const router = useRouter()

const dispatch=useDispatch();


  const handleSignup =async (e) => {
e.preventDefault();

  const formData = new FormData();
  formData.append('avatar',avatar.file)
  formData.append('name',name.value);
  formData.append('username',username.value)
  formData.append('bio',bio.value)
  formData.append('password',password.value)
  try {
    const {data}= await  axios.post(
        "http://localhost:3001/api/v1/user/new",
        formData ,
      
      );

      dispatch(userExists(true))
      toast.success(data.message);
      router.push('/home')
    } catch (error) {
      toast.error(error?.response?.data?.message );
    }

  
  };
  return (
    <>
      <Typography variant="h5">Register</Typography>

      <Stack position={"relative"} width={"10rem"} margin={"auto"}>
        <Avatar
          sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
          src={avatar.preview}
        />

        <IconButton
          sx={{ position: "absolute", bottom: "0", right: "0" }}
          component="label"
        >
          <>
            <CameraAltIcon />
            <VisualHiddenInput type="file" onChange={avatar.changeHandler} />
          </>
        </IconButton>
      </Stack>

      <form>
        <TextField
          label="Name"
          placeholder="First Name"
          required
          fullWidth
          margin="normal"
          value={name.value}
          onChange={name.changeHandler}
        />
        <TextField
          label="Password"
          name="password"
          placeholder="Password"
          required
          type="password"
          fullWidth
          margin="normal"
          value={password.value}
          onChange={password.changeHandler}
        />

        <TextField
          label="Email"
          name="email"
          placeholder="email"
          required
          type="email"
          fullWidth
          margin="normal"
          value={email.value}
          onChange={email.changeHandler}
        
        />
        <TextField
          label="Username"
          placeholder=""
          required
          margin="normal"
          fullWidth
          value={username.value || ""}
          onChange={username.changeHandler}
        />
        <TextField
          label="Bio"
          placeholder="bio"
          required
          margin="normal"
          fullWidth
          value={bio.value || ""}
          onChange={bio.changeHandler}
        />
        {username.error && (
          <Typography color="error" variant="caption">
            {username.error}
          </Typography>
        )}
        <Button onClick={handleSignup} variant="contained" fullWidth>
          Signup
        </Button>
      </form>
      <Typography textAlign={"center"} m={"1rem"} >
        OR
      
      </Typography>

      <Button fullWidth type="text" onClick={togle}>
        Login instead
        
      </Button>

      
    </>
  );
};

export default register;
