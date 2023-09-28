import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Table from './TableAll';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import {useState} from 'react';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleChange2 = event => {
    setMessage2(event.target.value);
  }; 

  const handleClick = event => {
    event.preventDefault();
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" sx={{right:477,top:-10,height:48}} color='warning' size='large' onClick={handleClickOpen}>
        Add new +
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="responsive-dialog-title">{"Add new post"}
        </DialogTitle>
        <DialogContent>
        <Divider variant="middle" />
          <DialogContentText>
            Title
          </DialogContentText>
          <TextField id="outlined-basic" onChange={handleChange} value={message} name="message" label="Title" variant="outlined" style = {{width: 500}} />
          <DialogContentText>
            Description
          </DialogContentText>
          <TextField id="outlined-basic" onChange={handleChange2} value={message2} multiline rows={4} label="Description" variant="outlined" style = {{width: 500}} />
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="outlined" color='error' onClick={handleClose}>
            Exit
          </Button>
          <Button color='success' variant="outlined" onClick={handleClick} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}