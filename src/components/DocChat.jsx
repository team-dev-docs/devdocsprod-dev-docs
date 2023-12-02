import React, { useState } from 'react';
import { unified } from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';




import logoJson from '../../logo.json'
import chatJson from '../../chat.json'

const { logo } = logoJson
const { chatUrl } = chatJson



function capitalizeFirstLetterOfEachWord(str) {
  return str.replace(/(^\w|\s\w)/g, match => match.toUpperCase());
}

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, { createElement: React.createElement });

function ChatBox({ messages, onSendMessage }) {
  const [showChatBox, setShowChatBox] = useState(false);
  const [loadingBar, setLoadingBar] = useState(false)
  const [message, setMessage] = React.useState('');

  const handleSendMessage = async (event) => {
    event.preventDefault();
    
    messages.push({ text: message });
    setLoadingBar(true)
    try {
      const response = await fetch(chatUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: message }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from server');
      }

      const data = await response.json();

      const answer = data?.text
      messages.push({ text: `${answer} \n Here are the sources and other relavant articles:` });
    
      const { metadatas } = data?.relevantDocuments
      let metadatasList = metadatas[0]
      // let messageObject = metadatasList[metadatasList - 1]
      // messages.push({
      //   text: `[Oringal Source](/${messageObject?.path.split(".md")[0].replace(/\s/g, "%20")}) \n ${messageObject?.file}`,
      // });
      metadatasList.forEach((messageObject) => {
   
        let filename = messageObject?.file.split(".md")[0].replace(/\_/g, " ")
        let camelSourceName = capitalizeFirstLetterOfEachWord(filename)
        let markdownPath = `(/${messageObject?.path.split(".md")[0].replace(/\s/g, "%20")})`
        let existingMessage = messages.find(function(message) {
          return message.text.includes(markdownPath)
        })
        console.log(existingMessage)
        if(!existingMessage) {
          messages.push({
            text: `[Oringal Source]${markdownPath} \n ${camelSourceName}`,
          });
        }
      });
    } catch (error) {
      console.error(error);
      //messages.push({ text: 'hi' });
    }
    setLoadingBar(false)
    setMessage('');
  };

  return (
    <div>
      <div className={`chat-box ${showChatBox ? 'show' : 'hide'}`}>
        <div style={{width: "100%"}}>
            <button style={{float: "right"}} onClick={() => setShowChatBox(!showChatBox)}>X</button>
            <h3>Chat with our Dev Docs 🤖</h3>
        </div>
        
        <div className='chat-box__messages'>
          {messages.map((message, index) => (
            <div
              className={`chat-box__message ${message.sender === 'user' ? 'user-message' : 'bot-message'
                }`}
              key={index}
            >
              {processor.processSync(message.text).result}
            </div>
          ))}
          {loadingBar && (
            <div className={'chat-box__message'}> 🦾🤖 Loading....</div>
          )}
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
