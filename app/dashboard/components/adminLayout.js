'use client'
import { Box, Drawer, Grid, IconButton } from '@mui/material'
import {Menu as MenuIcon,Close as CloseIcon, Draw} from '@mui/icons-material'
import React, { useState } from 'react'
import SideBar from './sideBar'
const adminLayout = ({children}) => {


const [isMobile,setIsMobile]= useState(false)

const handleMobile=()=>{
setIsMobile(!isMobile)
}
const handleClose=()=>{
  setIsMobile(false)
}


  return (
    <Grid container minHeight={'100vh'}>
        <Box sx={{display:{md:'none',xs:'block'},position:'fixed',right:'1rem',top:'1rem'}}>

<IconButton onClick={handleMobile}>
    {isMobile ? <CloseIcon/>:<MenuIcon/>}
</IconButton>
        </Box>

<Grid item md={4} lg={3} sx={{display:{xs:'none',md:'block'}}}>
<SideBar/>
</Grid>

<Grid item xs={12} md={8} lg={9} sx={{backgroundColor:'lightgray'}}>
    {children}
</Grid>

<Drawer open={isMobile} onClose={handleClose}>
  <SideBar w={'50vw'}/>
</Drawer>
    </Grid>
  )
}

export default adminLayout