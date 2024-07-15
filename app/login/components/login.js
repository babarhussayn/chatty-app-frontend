"use client";

import React, { useEffect, useState } from "react";
import { Paper, TextField, Button, Container, Typography } from "@mui/material";
import Register from "./register";
import { useInputValidation } from "6pp";
import Validator from "../../../utils/validator.js";
import {toast} from 'react-toastify'
import { useDispatch } from "react-redux";
import { userExists, userNotExists } from "@/redux/reducers/auth";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";

const login = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {}, []);

  const [login, setLogin] = useState(true);
  const togle = () => setLogin((prev) => !prev);

  const username = useInputValidation("", Validator);
  const password = useInputValidation("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
    const {data}= await  axios.post(
        "http://localhost:3001/api/v1/user/login",
        { username: username.value, password: password.value },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
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
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {login ? (
            <>
              <Typography>Login</Typography>
              <form style={{ width: "100%", marginTop: "1rem" }}>
                <TextField
                  label="Username"
                  placeholder=""
                  required
                  margin="normal"
                  fullWidth
                  value={username.value || ""}
                  onChange={username.changeHandler}
                />

                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  label="Password"
                  placeholder="Password"
                  required
                  margin="normal"
                  type="password"
                  fullWidth
                  value={password.value || ""}
                  onChange={password.changeHandler}
                />

                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </form>
              {user}

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>

              <Button
                onClick={(e) => {
                  setLogin(false);
                }}
                type="text"
                fullWidth
                margin="normal"
              >
                Register
              </Button>
            </>
          ) : (
            <span>
              <Register togle={togle} />
            </span>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default login;
