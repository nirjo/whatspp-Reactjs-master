import React, { useState, useEffect } from "react";

import { Avatar, IconButton } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "./chat.css";
const options = [
  "Contact info",
  "Select messages",
  "Mute notification",
  "Clear message",
  "Delete Chat",
];

// add props addNewChat
function Chat(timestamp) {
  console.log(timestamp);
  const [input, setInput] = useState("");

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

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed >> ", input);
  };
  // firebase setup
  // setInput("");
  // };

  return (
    <div className="Chat">
      <div className="Chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/micah/nirmal${seed}.svg`}
        />
        <div className="Chat__headerinfo">
          <h3>Nirmalraj Joseph</h3>
          <p>Last seen today at ...</p>
        </div>
        <div className="Chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton
            aria-label="more"
            aria-controls="Sidebar"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
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
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>

      <div className="Chat__body">
        <p className={`Chat__message ${true && "chat__receiver"}`}>
          <span className=" Chat__name "> Nirmal </span>
          Hey Guys
          <span className="Chat_timestamp">7:09pm</span>
        </p>
        <p className={`Chat__message ${true && "chat__receiver"}`}>
          <span className=" Chat__name "> Nirmal </span>
          Hey Guys
          <span className="Chat_timestamp">7:09pm</span>
        </p>
        <p className={`Chat__message ${true && "chat__receiver"}`}>
          <span className=" Chat__name "> Nirmal </span>
          Hey Guys
          <span className="Chat_timestamp">7:09pm</span>
        </p>
      </div>

      <div className="Chat__footer">
        <InsertEmoticonIcon />
        <AttachFileIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit ">
            Send a Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
