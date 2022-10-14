import React from "react";
import { BsChatDots } from "react-icons/bs";
import "./Bot.css";
const bot = () => {
  return (
    <div id="bot">
      <div id="root"></div>
      <div className="chat-icon">
        <BsChatDots />
      </div>
      <div className="chatbox"></div>
    </div>
  );
};

export default bot;
