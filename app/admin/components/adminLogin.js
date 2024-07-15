"use client";

import React, { useState } from "react";
import { Paper, TextField, Button, Container, Typography } from "@mui/material";

import { useInputValidation } from "6pp";
import Validator from '../../../utils/validator.js';
import { useRouter } from "next/navigation.js";



const login = () => {
 

const isAdmin= false;

const submitHandler = (e) => {
    e.preventDefault()
}
 const username =useInputValidation('',Validator)
 const password =useInputValidation('')
 
const router=useRouter();

if(isAdmin)return router.push('/')

  return (
    
      <Container component={"main"} maxWidth="xs" sx={{display:'flex',justifyContent:'center', height:'100vh', alignItems:'center', }}>
        <Paper
          elevation={3}
          sx={{ padding: 4, display: "flex", flexDirection: "column",alignItems: "center",justifyContent: "center"}}
        >
        
        
              <Typography>Admin Login</Typography>
              <form style={{width: "100%",marginTop: "1rem"}}
              onSubmit={submitHandler}
              >
                <TextField
                  label="Username"
                 
                  placeholder=""
                  required
                  margin="normal"
                  fullWidth
                  value={username.value || ''}
                  onChange={username.changeHandler}
                />

                {username.error && (<Typography color="error" variant="caption">
                    {username.error}
                </Typography>)
                }
                <TextField
                  label="Password"
                  variant="outlined"
                  placeholder="Password"
                  required
                  margin="normal"
                  type="password"
                  fullWidth
                  value={password.value || ''}
                  onChange={password.changeHandler}
                />

                <Button variant="contained" fullWidth type="submit">Login</Button>
              </form>




            
            
          
        </Paper>
      </Container>

  );
};

export default login;
