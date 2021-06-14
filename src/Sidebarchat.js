import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";

import "./Sidebarchat.css";
// import db from "./firebase";


// add props addNewChat
function Sidebarchat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      // do some stuff...
      // db.collection("Rooms").add({
      //   name:roomName,
      // });
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room NJ</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat}
     className="sidebarChat__info">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default Sidebarchat;
