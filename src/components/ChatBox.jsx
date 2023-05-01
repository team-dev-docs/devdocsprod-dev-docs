import React, { useState } from 'react';
import { unified } from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';

import logoJson from '../../logo.json'
import chatJson from '../../chat.json'

const {logo} = logoJson
const {chatUrl} = chatJson
console.log(logo)

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, { createElement: React.createElement });

function ChatBox({ messages, onSendMessage }) {
  const [showChatBox, setShowChatBox] = useState(false);
  const [message, setMessage] = React.useState('');

  const handleSendMessage = async (event) => {
    event.preventDefault();
    console.log(message);
    messages.push({ text: message });

    try {
      const response = await fetch(chatUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: message }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from server');
      }

      const data = await response.json();
      console.log(data);
      const { source_nodes} = data?.response
      const answer = data?.response?.response
      messages.push({ text: `${answer} \n Here is the orignal article:` });
      source_nodes.forEach((messageObject) => {
        messages.push({
          text: `[Original Source](/${messageObject?.node?.extra_info?.document_id.split('.md')[0]}) \n ${messageObject?.node?.text}`,
        });
      });
    } catch (error) {
      console.error(error);
      messages.push({ text: 'hi' });
    }

    setMessage('');
  };

  return (
    <div>
      <div className={`chat-box ${showChatBox ? 'show' : 'hide'}`}>
        <button onClick={() => setShowChatBox(!showChatBox)} className='chat-box__button'>
          Hide
        </button>

        <div className='chat-box__messages'>
          {messages.map((message, index) => (
            <div
              className={`chat-box__message ${
                message.sender === 'user' ? 'user-message' : 'bot-message'
              }`}
              key={index}
            >
              {processor.processSync(message.text).result}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <input
            type='text'
            placeholder='Type your message'
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className='chat-box__input'
          />
          <button type='submit' className='chat-box__button'>
            Send
          </button>
        </form>
      </div>
      <div className='overlay'>
        <img
          onClick={() => setShowChatBox(!showChatBox)}
          className='toggle-button'
          src={logo}
          alt='Circular button'
        />
      </div>
    </div>
  );
}

export default ChatBox;
