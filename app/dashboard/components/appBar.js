'use client'

import { AdminPanelSettings as AdminPanelSettingsIcon,Notifications as NotificationIcon,  } from '@mui/icons-material'
import { Button, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import moment from 'moment'
import styled from '@emotion/styled'
const appBar = () => {

const SearchField =styled('input')`
padding:1rem 2rem;
width:20vmax;
border:none
outline:none;
background-color:#fefefe;
border-radius:2rem
`



  return (
    <Container>
<Stack>
<Paper elevation={3} sx={{padding:'2rem',margin:'2rem 0',borderRadius:'1rem'}}>

    <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
    <AdminPanelSettingsIcon/>
<SearchField placeholder='search...'/>

    <Button variant='contained'>
        Search
    </Button>
<Typography>
    {moment().format('YYYY-MM-DD')}
</Typography>

<NotificationIcon/>
</Stack>
</Paper>

</Stack>

    </Container>
  )
}

export default appBar