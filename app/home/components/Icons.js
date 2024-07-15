
import {  IconButton, Tooltip } from '@mui/material'


const IconBtn= ({title,icon,onClick})=>{

    





    return(

<>

<Tooltip title={title}>
                <IconButton onClick={onClick}>
                        
                           {icon}
                </IconButton>
            </Tooltip>
            
</>


    )
}
export default IconBtn;

