import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./chat";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


function App() {
  return (
    <div className="App__head">
      <div className="App">
     <WhatsAppIcon />
        <h1>whatsapp chat </h1>
        <div className="body_app">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
