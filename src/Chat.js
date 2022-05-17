import React from 'react'
import "./Chat.css"
import AttachFileIcon from '@mui/icons-material/AttachFile';
import IconButton from "@mui/material/IconButton"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  SearchIcon from '@mui/icons-material/Search';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
function Chat() {
  return (
    <div className='chat'>
      <div className='chat__header'>
      <AccountCircleIcon/>
      <div className = "chat__headerInfo">
         <h3> Room Name </h3>
         <p> Last seen </p>
      </div>
    <div className='chat__headerRight'>
    <IconButton>
            <SearchIcon/>
            </IconButton> 
           
           <IconButton>
           <AttachFileIcon/>
           </IconButton>
           <IconButton>
           <MoreVertIcon/>
           </IconButton>

        </div>
      </div>

      <div className = "chat__body">
       <p className='chat__message'> 
         
         <span className='chat__name'>Tyler</span>
         
         This is a message
         <span className='chat__timestamp'>
           {new Date().toUTCString()}
          </span>
          </p>
          <p className='chat__message   chat__receiver'> 
         
         <span className='chat__name'>Tyler</span>
         
         This is a message
         <span className='chat__timestamp'>
           {new Date().toUTCString()}
          </span>
          </p>

          <p className='chat__message'> 
         
         <span className='chat__name'>Tyler</span>
         
         This is a message
         <span className='chat__timestamp'>
           {new Date().toUTCString()}
          </span>
          </p>   
      </div>
     <div className='chat__footer'>
     <InsertEmoticonOutlinedIcon/>
     <form>
       <input placeholder ="Type a message"
       type = "text"/>
       <button type ="submit">Send a message</button>
     </form>
     <MicOutlinedIcon/>
     </div>

    </div>
  )
}

export default Chat

