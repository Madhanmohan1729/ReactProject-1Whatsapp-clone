import React from 'react'
import "./SidebarChat.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SidebarChat() {
  return (
    <div className = "sidebarChat">
        <AccountCircleIcon />
        <div className ="sidebarChat__info">
            <h2>Room name</h2>
            <p> This is a meassage</p>
        </div>
    </div>
  )
}

export default SidebarChat
