import React from 'react'
//import logo from './logo.svg';
//import logo from './logo.jpg'; 
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import IconButton from "@mui/material/IconButton"
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SearchOutlined } from '@mui/icons-material';
 
function Sidebar() {
  return (
    <>
    <div className ='sidebar' >
      
        <div className ='sidebar__header'>


          <div className ='sidebar__headerRight'>
         
          <AccountCircleIcon url = "https://wallpaper.dog/large/5448663.jpg"/>
          <IconButton>
            <IconButton>
            </IconButton>  
           <DonutLargeIcon/>
           </IconButton>
           <IconButton>
           <ChatIcon/>
           </IconButton>
           <IconButton>
           <MoreVertIcon/>
           </IconButton>
          
          
          </div>
      </div>
    <div className = "sidebar__search">
      <div className = "sidebar__searchContainer">
        <SearchOutlined/>
        <input placeholder = "Search or start new chat "
        type = "text"/>
        </div>
      </div>
  
    <div className ="sidebar__chats">
   <SidebarChat/>
   <SidebarChat/>
   <SidebarChat/>

    </div>
    </div>

          </>
  )
}

export default Sidebar