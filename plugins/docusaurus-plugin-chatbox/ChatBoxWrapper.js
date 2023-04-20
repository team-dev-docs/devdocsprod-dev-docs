import React from "react";
import ReactDOM from "react-dom";
import ChatBox from "./ChatBox";

const chatBoxWrapper = document.createElement("div");
document.body.appendChild(chatBoxWrapper);

ReactDOM.render(<ChatBox />, chatBoxWrapper);
