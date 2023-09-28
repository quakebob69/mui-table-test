import './App.css';
import React, { Component }  from 'react';
import Table from './TableAll';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  DialogBoxAddPost from './DialogBoxAddPost';


class App extends Component {
  render() {
    const myStyle={
        backgroundImage:"url(${image})",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div>
        <br></br>
        <div className='inline-add-search'>
        <TextField id="filled-basic" label="Search" variant="filled" size="small" sx={{right:-430,top:40}} color='warning'/>
        <DialogBoxAddPost />
        </div>
        <Table/>
      </div>
      
      
    );
  }
}
export default App;  


