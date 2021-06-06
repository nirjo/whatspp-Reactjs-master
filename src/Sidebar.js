import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import "./Sidebar.css";
import Sidebarchat from "./Sidebarchat";

const options = [
 
  'New group',
  'Create a room',
  'profile',
  'Achived',
  'starred',
  'Setting',
  'Logout'

];
function Sidebar()  {
    const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

// menu 
const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/nirmal${seed}.svg`} />
        <chat />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton aria-label="more"
        aria-controls="Sidebar"
        aria-haspopup="true"
        onClick={handleClick} >
          
            <MoreVertIcon  />
          </IconButton>
  <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
       {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>

        </div>
        </div>

        <div className="sidebar_search">
        
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">
        <Sidebarchat addNewChat />
        <Sidebarchat />
        <Sidebarchat />
        <Sidebarchat />
        <Sidebarchat />

      </div>
    </div>
  );
}

export default Sidebar;
