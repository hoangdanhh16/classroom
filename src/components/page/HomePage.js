import * as React from 'react';
import ClassList from '../class/ClassList';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import AddClass from '../class/AddClass';


function HomePage(){
  return(
    <div>
      <div style={{display:'flex',justifyContent:'space-between', marginTop: '15px', borderBottom:'1px solid grey'}}>
        <div style={{display:'flex',justifyContent:'flex-start'}}>
          <IconButton>
            <MenuIcon/> 
          </IconButton>
          <Typography variant="h5" gutterBottom component="div" style={{marginTop: '5px'}}>
            Classroom
          </Typography>
        </div>
        <div>
          <AddClass style={{marginRight:'20px'}}>
            
              <AddIcon/> 
            
          </AddClass>
        </div>
      </div>
      <ClassList />

    </div>
    
  )
}
export default HomePage;