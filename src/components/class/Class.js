import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardActions from '@mui/material/CardActions';
import Paper from '@mui/material/Paper';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Tooltip from '@mui/material/Tooltip';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import './Class.css'

function Class({item}){
    return (
        <Paper elevation={3}
            style={{width: 330, height: 330, borderRadius: '10px', margin:'20px'}}
        >
            <CardHeader 
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title = {<span className="name">{item.name}</span>}
                subheader = {item.teacher}
                style={{backgroundImage: `url("https://gstatic.com/classroom/themes/img_backtoschool.jpg")`, 
                        cursor: 'pointer', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', height: '120px'}}
            />
    
            <div style={{borderTop:'1px solid grey', marginTop:'120px', display: 'flex', justifyContent: 'flex-end'}}>
                <CardActions >
                    <Tooltip title={`Open Exercises for "${item.name}"`} arrow>
                        <IconButton>
                            <PermContactCalendarIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={`Open Files for "${item.name}" in Google Drive`} arrow>
                        <IconButton>
                            <FolderOpenIcon/>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </div>
        </Paper>
    )
}
export default Class;