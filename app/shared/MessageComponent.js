import { Box, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react'
import FileFormat from '../lib/fileSample'
import RenderAttachment from './RenderAttachment';









const MessageComponent = ({message,user}) => {
const{sender,content,attachments=[],createAt}=message;



const sameSender = sender?._id === user?._id;
const timeAgo= moment(createAt).fromNow();
  return (
    <div style={{
        alignSelf :sameSender ? 'flex-end' : 'flex-start',backgroundColor:'#5cb85c' ,color: 'white', paddingLeft:'15px',paddingRight:'15px',borderRadius: '15px 15px', width:'fit-content',padding:'1rem'
        
    }}
    
    
    >
        
        {!sameSender && <Typography color={'#2574ab'} variant='caption' fontWeight={'600'} fontSize={'15px'}>{sender.name}</Typography>}
    
    {content && <Typography>{content}</Typography>}
    <Typography variant='caption' fontSize={'12px'} fontWeight={'600'} color={'#8e7cc3'}>{timeAgo}</Typography>



    {attachments.length > 0 && attachments.map((index,attachment)=>
    {
        const url= attachment.url;
        const file= FileFormat(url);
        return(<Box key={index}>
            <a href={url} target='_blank' download style={{
                color:'black',
            }}>

                {RenderAttachment(file,url)}
                
            </a>
        </Box>)
    }
    
    ) }
    </div>
  )
}

export default MessageComponent;