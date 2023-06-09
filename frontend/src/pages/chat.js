import React from "react";
import { useState } from 'react';
import NavigationBar from '../components/navigationBar';
import "./chat.css";
  
const Chat = () => {
  const [msgs, setMsgs] = useState([]);
  const [msgTxt, setMsgTxt] = useState("");

  const handleMsg = (i) => {
    setMsgTxt(i.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMsg = msgTxt;
    setMsgs([...msgs, newMsg]);
    setMsgTxt("");
  }

  return (
    <div className="chatBackground">
      <NavigationBar />
      <br/><br/><br/><br/>
      <h1 style={{color: "white"}}>Study Space</h1>

      <div>
        <ul>
          {msgs.map((message, index) => (
            <li style={{display: "flex", alignItems: "left"}} key={index}>&nbsp;{message}</li>
          ))}
        </ul>
      </div>
      

      <div className = "footer">
        <form style={{display: "flex", flexDirection: "row"}} onSubmit={handleSubmit}>
          <input 
            style={{flex: "1"}}
            type="text"
            value={msgTxt}
            onChange={handleMsg}
            placeholder="Type your message here."/>
          &nbsp;<button type="submit">Send</button>
        </form>
      </div>      
    </div>
  );
};
  
export default Chat;