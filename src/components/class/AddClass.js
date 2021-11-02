import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import ClassList from './ClassList';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [render, setRender] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd =() =>{
    const a = document.getElementById('name');
    const b = document.getElementById('teacher');
    const c = document.getElementById('description');
    const obj = {
      name: a.value,
      teacher: b.value,
      description: c.value
    };

    async function postData(data){
      const response = await fetch("https://danhhoang-classroom-api.herokuapp.com/classes/add", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        
      });
      return response.json();
    }

    postData(obj)
      .then(obj=> {window.location.reload(false);});
    

    // (() => {
    //   fetch('http://localhost:3000/classes/add', {
    //       method: 'POST',
    //       mode: 'cors',
    //       body: JSON.stringify({
    //           obj
    //       }),
    //       headers:{
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json'

    //       }
    //   }).then(response=>{
    //           if(response.ok){
    //               console.log('created');
    //               return response.json;
                  
    //           }
              
    //       });
    // })();
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddIcon/> 
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Create Classroom</DialogTitle>
        <DialogContent >
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: '500px',
            }}
          >
            <TextField
              id="name"
              label="Class Name"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              id="teacher"
              label="Teacher"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              id="description"
              label="Description"
              fullWidth
              variant="standard"
            />
          </Box>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}