import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import './App.css';
import { useEffect, useState } from "react";
import  DialogBoxEdit from './DialogBoxEdit';
import DialogBoxAddPost from './DialogBoxAddPost';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:"#ED6C02",
    color: theme.palette.common.white,
    fontSize:20,
    fontFamily: 'Quicksand',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'Quicksand',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Tableall() {
  const [posts, setPosts] = useState([])

  const fetchData = () => {

    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {

        return response.json()

      })

      .then((data) => {
        setPosts(data.slice(0, 6));
      });

  };


  useEffect(() => {

    fetchData()

  }, []);

  const handleDelete = (postIndex) => {
    setPosts((prevPosts) =>
      prevPosts.filter((_, index) => index !== postIndex)
    );
  };

  return (
    <TableContainer sx={{
      marginLeft:'auto',
      width:'max-content',
      marginRight:'auto',
    }}component={Paper}>
      <Table sx={{ minWidth: 700,tableLayout:'auto' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{width:250}}>Title</StyledTableCell>
            <StyledTableCell align="center" sx={{width:500}}>Description</StyledTableCell>
            <StyledTableCell align="center" sx={{width:100}}></StyledTableCell>
            <StyledTableCell align="center"sx={{width:100}}></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post,postIndex) => (
            <StyledTableRow key={post.id}>
              <StyledTableCell component="th" scope="row">{post.title}</StyledTableCell>
              <StyledTableCell align="center">{post.body}</StyledTableCell>
              <StyledTableCell align="center"><DialogBoxEdit dataParent1={post.title} dataParent2={post.body} /></StyledTableCell>
              <StyledTableCell align="center"><Button variant="outlined" color="error" onClick={() => handleDelete(postIndex)}>Delete</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
