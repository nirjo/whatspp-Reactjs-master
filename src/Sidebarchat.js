import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";

import "./Sidebarchat.css";

// add props addNewChat
function Sidebarchat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const rootName = prompt("Please enter name for chat");
    if (rootName) {
      // do some stuff...
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
