import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { Delete as DeleteIcon,Clear as ClearIcon } from '@mui/icons-material'
import React from 'react'

const Confirm = ({open ,handleClose,deleteHandler}) => {
  return (
    <>
    <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>
                      Are You sure  to delete
                </DialogContentText>
            </DialogContent>
            <DialogActions> 
              
              
               <Button onClick={deleteHandler} color='error'><DeleteIcon/>Yes</Button>
          <Button onClick={handleClose} color='success'><ClearIcon/>Cancel</Button></DialogActions>
        

        
    </Dialog>
    
    
    
    </>
  )
}

export default Confirm