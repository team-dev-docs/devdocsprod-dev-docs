import React, { useState } from "react";
import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";

import logoJson from "../../logo.json";
import chatJson from "../../chat.json";
import { IconX, IconSend2 } from '@tabler/icons-react';

const { logo } = logoJson;
const { chatUrl } = chatJson;



function capitalizeFirstLetterOfEachWord(str) {
  return str.replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
}

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, { createElement: React.createElement });

const SvgBackgroundImage = ({ imageUrl }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="chatbot-avatar"
      viewBox="0 0 53 53"
    >
      {/* Background circle */}
      <circle
        cx="26.5"
        cy="26.5"
        stroke-width="1px"
        stroke="#FFF"
        r="26"
        fill="#7984EB"
      />

      {/* Image pattern */}
      <defs>
        <pattern
          id="imgPattern"
          patternUnits="userSpaceOnUse"
          width="53"
          height="53"
        >
          <image xlinkHref={imageUrl} x="0" y="0" width="53" height="53" />
        </pattern>
      </defs>

      {/* Foreground circle with image */}
      <circle cx="26.5" cy="26.5" r="25" fill="url(#imgPattern)" />
    </svg>
  );
};

const LoadingDots = () => {
  return (
    <div className="loading-dots">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

const SendInput = () => {
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="flex border-2 rounded">
        <input
          type="text"
          className="px-4 py-2 w-80"
          placeholder="Type something"
        />
        <button className="flex items-center justify-center px-4 border-l">
          <IconSend2 className="text-white" /> {/* Tabler search icon */}
        </button>
      </div>
    </div>
  );
};

function ChatBox({ messages, onSendMessage }) {
  const [showChatBox, setShowChatBox] = useState(false);
  const [loadingBar, setLoadingBar] = useState(false);
  const [message, setMessage] = React.useState("");

  const handleSendMessage = async (event) => {
    event.preventDefault();

    messages.push({ text: message , sender: "user"});
    setLoadingBar(true);
    try {
      const response = await fetch(chatUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: message }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from server");
      }

      const data = await response.json();

      const answer = data?.text;
      messages.push({
        text: `${answer} \n Here are the sources and other relavant articles:`,
      });

      const { metadatas } = data?.relevantDocuments;
      let metadatasList = metadatas[0];
      // let messageObject = metadatasList[metadatasList - 1]
      // messages.push({
      //   text: `[Oringal Source](/${messageObject?.path.split(".md")[0].replace(/\s/g, "%20")}) \n ${messageObject?.file}`,
      // });
      metadatasList.forEach((messageObject) => {
        let filename = messageObject?.file.split(".md")[0].replace(/\_/g, " ");
        let camelSourceName = capitalizeFirstLetterOfEachWord(filename);
        let markdownPath = `(/${messageObject?.path
          .split(".md")[0]
          .replace(/\s/g, "%20")})`;
        let existingMessage = messages.find(function (message) {
          return message.text.includes(markdownPath);
        });
        console.log(existingMessage);
        if (!existingMessage) {
          messages.push({
            text: `[Oringal Source]${markdownPath} \n ${camelSourceName}`,
          });
        }
      });
    } catch (error) {
      console.error(error);
      //messages.push({ text: 'hi' });
    }
    setLoadingBar(false);
    setMessage("");
  };

  return (
    <div>
      <div className={`chat-box ${showChatBox ? "show" : "hide"}`}>
        <div className="" style={{ width: "100%", display: "flex", padding: "20px", borderBottom: '1px solid  #616062' }}>
          <SvgBackgroundImage imageUrl={logo} />
       
          <h3 className="pl-4 chat-header">Dev-Docs AI Bot</h3>
        </div>

        <div className="chat-box__messages flex" style={{"padding": "20px", "flexDirection": "column"}}>
          {messages.map((message, index) => (
            <div
              style={{
                display: "flex",
                alignItems: "flex-end", // Align items vertically
                background: "transparent",
              }}
              className={`${
                message.sender === "user" ? "user-message" : "bot-message"
              } mb-4`}
              key={index}
            >
              {/* Fixed-size avatar container with no flex-shrink */}
              <div  className={`${
                message.sender === "user" ? "user-avatar" : "bot-avatar"
              } pr-2`} style={{ flexShrink: 0 }}>
                <SvgBackgroundImage imageUrl={logo} />
              </div>

              {/* Message container with padding and flex-grow */}
              <div
                className={`chat-box__message ${
                  message.sender === "user" ? "user-message" : "bot-message"
                }`}
                style={{
                  flexGrow: 1,
                  background: "#616062",
                  marginLeft: message.sender === "user" ? "16px" : "0", // Adjust spacing based on sender
                  marginRight: message.sender === "user" ? "0" : "16px", // Adjust spacing based on sender
                }}
              >
                {processor.processSync(message.text).result}
              </div>
            </div>
          ))}
          {loadingBar && (
             <div
             style={{
               display: "flex",
               alignItems: "flex-end", // Align items vertically
             }}
             className="chat-box__message loading_message"
           >
            <LoadingDots />
          </div>
          )}
        </div>

        <form className="flex" style={{ marginLeft: "10px", marginRight: "10px", marginBottom: "10px",  border: '1px solid  #616062', borderRadius: "10px"  }} onSubmit={handleSendMessage}>
      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="chat-box__input focus:outline-none flex-1 rounded-l-lg p-2" // Adjust classes as needed
      />
      <button
        type="submit"
        className="flex items-center justify-center px-4 bg-transparent font-semibold hover:text-white py-2 hover:border-transparent rounded-r-lg"
      >
        <IconSend2 />
      </button>
    </form>
      </div>
      <div className="overlay">
      {
  showChatBox
    ? (
        // The 'if' part: this will render when showChatBox is true
        <IconX onClick={() => setShowChatBox(!showChatBox)}
        className="toggle-button"
        src={logo}
        alt="Circular button" />
      )
    : (
        // The 'else' part: this will render when showChatBox is false
  

        <img
        onClick={() => setShowChatBox(!showChatBox)}
        className="toggle-button"
        src={logo}
        alt="Circular button"
      />
      )
}
      </div>
    </div>
  );
}

export default ChatBox;
