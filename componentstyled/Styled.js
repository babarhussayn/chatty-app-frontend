'use client'

import { styled } from "@mui/material";
import  {Link as NextLink}  from "next/link"; 


 const VisualHiddenInput=styled('input')({
    border:0,
    clip:"rect(0 0 0 0)",
    height:1,
    margin:-1,
   padding:0,
   position: 'absolute',
   whiteSpace: 'nowrap',
   width:1,

})

// const StyledLink = styled(NextLink)`

// text-decoration: none;
// color: black;
// padding: 1rem;
// &:hover{
//    background-color:#f0f0f0
// }
// `;
  



export default  VisualHiddenInput;

