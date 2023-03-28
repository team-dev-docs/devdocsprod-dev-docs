import React, { useState } from "react";

import logoJson from "../../logo.json"

const logo = logoJson?.logo
function ChatBox({ messages, onSendMessage }) {
  const [showChatBox, setShowChatBox] = useState(false);
  const [message, setMessage] = React.useState("");

  const handleSendMessage = async (event) => {
    event.preventDefault();
    console.log(message)
    // Add the user's message to the chat
    //onSendMessage(message, "user");
    messages.push({text: message})
    try {
      const response = await fetch("http://localhost:8000/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: message }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from server");
      }

      const data = await response.json();

      // Add the bot's response to the chat
      //onSendMessage(data.response, "bot");
      messages.push({text: data.response.response})
    } catch (error) {
      console.error(error);
      messages.push({text: "hi"})
    }

    setMessage("");
  };

  return (
    <div>
      <div className={`chat-box ${showChatBox ? "show" : "hide"}`}>
        <div className="chat-box__messages">
          {messages.map((message, index) => (
            <div
              className={`chat-box__message ${
                message.sender === "user" ? "user-message" : "bot-message"
              }`}
              key={index}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="chat-box__input"
          />
          <button type="submit" className="chat-box__button">
            Send
          </button>
        </form>
      </div>
      <div className="overlay">
      {/* <button
        className="toggle-button"
        onClick={() => setShowChatBox(!showChatBox)}
      >
        {showChatBox ? "Hide Chat" : "Show Chat"}
      </button> */}
      <img onClick={() => setShowChatBox(!showChatBox)} class="toggle-button"  src={logo} alt="Circular button" />
      </div>
      
    </div>
  );
}

export default ChatBox;
