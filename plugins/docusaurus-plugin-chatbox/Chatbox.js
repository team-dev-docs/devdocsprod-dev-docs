const React = require("react");
const { useState } = React;
const { unified } = require("unified");
const markdown = require("remark-parse");
const remark2rehype = require("remark-rehype");
const rehype2react = require("rehype-react");

const logoJson = require("../../logo.json");

const logo = logoJson?.logo;

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, { createElement: React.createElement });

function ChatBox({ messages, onSendMessage }) {
  const [showChatBox, setShowChatBox] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = async (event) => {
    event.preventDefault();
    console.log(message);
    messages.push({ text: message });

    // ... (the rest of your handleSendMessage function)

  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: `chat-box ${showChatBox ? "show" : "hide"}` },
      React.createElement(
        "div",
        { className: "chat-box__messages" },
        messages.map((message, index) =>
          React.createElement(
            "div",
            {
              className: `chat-box__message ${
                message.sender === "user" ? "user-message" : "bot-message"
              }`,
              key: index,
            },
            processor.processSync(message.text).result
          )
        )
      ),
      React.createElement(
        "form",
        { onSubmit: handleSendMessage },
        React.createElement("input", {
          type: "text",
          placeholder: "Type your message",
          value: message,
          onChange: (event) => setMessage(event.target.value),
          className: "chat-box__input",
        }),
        React.createElement(
          "button",
          { type: "submit", className: "chat-box__button" },
          "Send"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "overlay" },
      React.createElement("img", {
        onClick: () => setShowChatBox(!showChatBox),
        className: "toggle-button",
        src: logo,
        alt: "Circular button",
      })
    )
  );
}

module.exports = ChatBox;
