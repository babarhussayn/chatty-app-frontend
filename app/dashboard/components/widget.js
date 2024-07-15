import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const widget = ({title,value,Icon}) => {
  return (

<Paper sx={{padding:'1rem',margin:'1rem 0',borderRadius:'1rem',width:'10rem',alignItems:'center'}}>

    
    

    <Typography alignItems={'center'} justifyContent={'center'}>
        {value}
    </Typography>
<Stack>
    {Icon}
    <Typography>{title}</Typography>
</Stack>
    
    </Paper>
  )
}

export default widget