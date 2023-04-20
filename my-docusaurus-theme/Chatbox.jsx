import React, { useState } from "react";
import {unified} from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";

import logoJson from "../../logo.json";

const logo = logoJson?.logo;

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, { createElement: React.createElement });

function ChatBox({ messages, onSendMessage }) {
  const [showChatBox, setShowChatBox] = useState(false);
  const [message, setMessage] = React.useState("");

  const handleSendMessage = async (event) => {
    event.preventDefault();
    console.log(message);
    messages.push({ text: message });

    try {
      const response = await fetch("http://localhost:4000/question", {
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
      console.log(data)
      const { sourceDocuments, text } = data
      messages.push({text: `## ${text}`})
      sourceDocuments.forEach((messageObject) => {
        messages.push({ text: messageObject.pageContent });
      });
    } catch (error) {
      console.error(error);
      messages.push({ text: "hi" });
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
              {processor.processSync(message.text).result}
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
        <img
          onClick={() => setShowChatBox(!showChatBox)}
          className="toggle-button"
          src={logo}
          alt="Circular button"
        />
      </div>
    </div>
  );
}

export default ChatBox;
