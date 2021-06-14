import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./chat";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import { Route,  } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  const [ user , setUser] = useState(null);
  return (
    <div className="App__head">
      <div className="App">
        <WhatsAppIcon />
        <h1>whatsapp chat </h1>
        <div className="body_app">
         <Sidebar />
         <Chat />
        </div>
         <Router>
            <switch>
             <Sidebar />
              <Route path="/app">
                <Chat />
              </Route>
              <Route path="/">
              <Chat />
              </Route>
            </switch>
          </Router>

      </div>
    </div>
  );
}

export default App;
