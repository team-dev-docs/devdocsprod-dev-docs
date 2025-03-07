import React, { useState, useEffect, useCallback, Fragment, useRef } from "react";
import * as jsxRuntime from 'react/jsx-runtime';
import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import CodeBlock from "../components/ui/codeblock";
import { Input } from "../components/ui/input";
import { badgeVariants, Badge } from "../components/ui/badge";
import aiConfig from '@site/ai.json';
import TerminalLogo from '../../static/svgs/terminallogo.svg';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";
import { IconX, IconSend2 } from "@tabler/icons-react";
import logoJson from "../../logo.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const { logo } = logoJson;

function capitalizeFirstLetterOfEachWord(str) {
  return str.replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
}

const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // If window is defined, set the initial viewport size
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setViewport({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return viewport;
};

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, {
    createElement: React.createElement,
    Fragment: React.Fragment,
    jsx: jsxRuntime.jsx,
    jsxs: jsxRuntime.jsxs,
    components: {
      pre: CodeBlock,
    },
  });

const SvgBackgroundImage = ({ imageUrl }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="chatbot-avatar"
      viewBox="0 0 53 53"
    >
      <circle
        cx="26.5"
        cy="26.5"
        stroke-width="1px"
        stroke="#FFF"
        r="26"
        fill="#7984EB"
      />

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
        <Input
          type="text"
          autoFocus
          className="px-4 py-2 w-80"
          placeholder="Type something"
        />
        <Button className="flex items-center justify-center px-4 border-l">
          <IconSend2 className="text-white" />
        </Button>
      </div>
    </div>
  );
};

function ChatBox({ messages, onSendMessage, onModeChange }) {
  const [showChatBox, setShowChatBox] = useState(false);
  const [loadingBar, setLoadingBar] = useState(false);
  const [message, setMessage] = React.useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [docsContent, setDocsContent] = useState(null);
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [currentMode, setCurrentMode] = useState('normal');
  const dropdownRef = useRef(null);
  
  const { width, height } = useViewport();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowModeDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
    setShowModeDropdown(false);
    if (onModeChange) {
      onModeChange(mode);
    }
  };

  useEffect(() => {
    // Fetch the docs content when component mounts
    fetch('/llms-full.txt')
      .then(response => response.text())
      .then(content => {
        setDocsContent(content);
      })
      .catch(error => {
        console.error('Error loading docs content:', error);
      });
  }, []);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      setMessage("");
      return;
    }

    const token = localStorage.getItem('github_token');
    if (!token) {
      messages.push(
        { text: message, sender: "user" },
        { text: 'Please sign in to use the chat feature' }
      );
      setMessage("");
      return;
    }

    if (!aiConfig.github_features) {
      return;
    }

    messages.push({ text: message, sender: "user" });
    setLoadingBar(true);
    setMessage("");

    let messagesContainer = document.querySelector('.end-of-chat');
    let fullMessagesContainer = document.querySelector('.end-of-chat-fullscreen');
    if (messagesContainer) {
      messagesContainer.scrollIntoView({ behavior: 'smooth' });
    } 
    if(fullMessagesContainer) {
      fullMessagesContainer.scrollIntoView({ behavior: 'smooth' });
    }

    try {
      const myHeaders = new Headers();
      myHeaders.append('X-GitHub-Token', token);
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        messages: [
          {
            role: 'system',
            content: `You are a helpful documentation assistant that helps users understand the codebase and documentation. 
            You have access to the following documentation content:
            
            ${docsContent}
            
            Please use this information to provide accurate and relevant answers to user questions. When referencing specific parts of the documentation, 
            try to be precise and quote relevant sections when appropriate.`,
          },
          {
            role: 'user',
            content: trimmedMessage,
          },
        ],
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      const response = await fetch('http://localhost:3000/copilot/chat/completions', requestOptions);
      if (!response.ok) {
        throw new Error('Failed to get response from server');
      }

      const data = await response.json();
      const answer = data.choices[0].message.content;

      let messageItem = {
        text: answer,
        sources: [],
      };

      // If you want to keep the source functionality, you can add it here
      // For now, we'll just push the AI response
      messages.push(messageItem);
    } catch (error) {
      console.error(error);
      messages.push({
        text: 'Sorry, there was an error processing your request.',
      });
    } finally {
      setLoadingBar(false);
      setMessage("");
    }
  };

  const toggleFullScreen = () => {
    if (width <= 768) {
      setShowChatBox(true)
    } else {
      setIsDialogOpen(true)
    }
  };

  const openChat = (params = {}) => {
    if(params.closeAll) setShowChatBox(false)
    if(width <= 768) {
      setIsDialogOpen(!isDialogOpen)
    } else {
      setShowChatBox(!showChatBox)
    }
  }

  const openFullScreen = () => {
    setShowChatBox(false)
    setIsDialogOpen(!isDialogOpen)
  }

  const closeFullScreen = () => {
    setShowChatBox(false)
    setIsDialogOpen(false)
  }

  return (
    <div>
      <div
        className={`chat-box ${showChatBox ? "show" : "hide"} ${
          isFullScreen ? "full-screen" : ""
        }`}
      >
        <div
          className=""
          style={{
            width: "100%",
            display: "flex",
            padding: "20px",
            borderBottom: "1px solid  #616062",
          }}
        >
          <SvgBackgroundImage imageUrl={logo} />

          <h3 className="pl-4 chat-header">Dev-Docs AI Bot</h3>
          
          <div className="flex items-center ml-auto mr-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModeDropdown(!showModeDropdown);
                }}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 hover:text-white focus:outline-none"
              >
                  <TerminalLogo className="w-4 h-4 mr-2" />

              </button>
              {showModeDropdown && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#323233] ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        currentMode === 'terminal' ? 'bg-[#424242] text-white' : 'text-gray-300 hover:bg-[#424242]'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleModeChange('terminal');
                      }}
                    >
                      Terminal mode
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        currentMode === 'normal' ? 'bg-[#424242] text-white' : 'text-gray-300 hover:bg-[#424242]'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleModeChange('normal');
                      }}
                    >
                      Normal mode
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <AlertDialog open={isDialogOpen} className="mt-12">
            <AlertDialogTrigger asChild>
              <Button
                style={{ marginLeft: "auto", backgroundColor: "transparent" }}
                className="fullscreenBtn"
                variant="outline"
                onClick={() => openFullScreen()}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2.5C2 2.22386 2.22386 2 2.5 2H5.5C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H3V5.5C3 5.77614 2.77614 6 2.5 6C2.22386 6 2 5.77614 2 5.5V2.5ZM9 2.5C9 2.22386 9.22386 2 9.5 2H12.5C12.7761 2 13 2.22386 13 2.5V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3H9.5C9.22386 3 9 2.77614 9 2.5ZM2.5 9C2.77614 9 3 9.22386 3 9.5V12H5.5C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13H2.5C2.22386 13 2 12.7761 2 12.5V9.5C2 9.22386 2.22386 9 2.5 9ZM12.5 9C12.7761 9 13 9.22386 13 9.5V12.5C13 12.7761 12.7761 13 12.5 13H9.5C9.22386 13 9 12.7761 9 12.5C9 12.2239 9.22386 12 9.5 12H12V9.5C12 9.22386 12.2239 9 12.5 9Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="chat-popup-box">
              <AlertDialogHeader
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0 1em",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <SvgBackgroundImage imageUrl={logo} />
                <AlertDialogTitle>Dev-Docs AI Bot</AlertDialogTitle>
              </AlertDialogHeader>
              <div
                className="chat-box__messages flex"
                style={{
                  padding: "20px",
                  flexDirection: "column",
                  overflowY: "scroll",
                  minHeight: "40vh",
                  maxHeight: "40vh",
                }}
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        background: "transparent",
                      }}
                      className={`${
                        message.sender === "user"
                          ? "user-message"
                          : "bot-message"
                      } mb-4`}
                    >
                      <div
                        className={`${
                          message.sender === "user"
                            ? "user-avatar"
                            : "bot-avatar"
                        } pr-2`}
                        style={{ flexShrink: 0 }}
                      >
                        <SvgBackgroundImage imageUrl={logo} />
                      </div>
                      <div
                        className={`chat-box__message ${
                          message.sender === "user"
                            ? "user-message"
                            : "bot-message"
                        }`}
                        style={{
                          flexGrow: 1,
                          background: "#616062",
                          marginLeft: message.sender === "user" ? "16px" : "0",
                          marginRight: message.sender === "user" ? "0" : "16px",
                        }}
                      >
                        {processor.processSync(message.text).result}
                      </div>
                    </div>
                    {message.sources && message.sources.length > 0 && (
                      <div
                        className="sources-container"
                        style={{ marginTop: "10px" }}
                      >
                        <h3>Sources</h3>
                        {message.sources.map((source, sourceIndex) => (
                          <Badge
                            key={`${index}-${sourceIndex}`}
                            className="sources"
                          >
                            {processor.processSync(source.text).result}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {loadingBar && (
                  <div
                    style={{ display: "flex", alignItems: "flex-end" }}
                    className="chat-box__message loading_message"
                  >
                    <LoadingDots />
                  </div>
                )}
                <div className="end-of-chat-fullscreen"></div>
              </div>
              <form
                className="flex message-input"
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginBottom: "10px",
                  border: "1px solid  #616062",
                  borderRadius: "10px",
                }}
                onSubmit={handleSendMessage}
              >
                <Input
                  type="text"
                  placeholder="Type your message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="chat-box__input"
                />
                <Button
                  type="submit"
                  className="flex items-center justify-center px-4 bg-transparent font-semibold hover:text-white py-2 hover:border-transparent rounded-r-lg"
                >
                  <IconSend2 />
                </Button>
              </form>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => closeFullScreen()}>
                  Close
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <>
          <div
            className="chat-box__messages flex"
            style={{
              padding: "20px",
              flexDirection: "column",
              overflowY: "scroll",
              minHeight: "40vh",
              maxHeight: "40vh",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    background: "transparent",
                  }}
                  className={`${
                    message.sender === "user" ? "user-message" : "bot-message"
                  } mb-4`}
                >
                  <div
                    className={`${
                      message.sender === "user" ? "user-avatar" : "bot-avatar"
                    } pr-2`}
                    style={{ flexShrink: 0 }}
                  >
                    <SvgBackgroundImage imageUrl={logo} />
                  </div>
                  <div
                    className={`chat-box__message ${
                      message.sender === "user" ? "user-message" : "bot-message"
                    }`}
                    style={{
                      flexGrow: 1,
                      background: "#616062",
                      marginLeft: message.sender === "user" ? "16px" : "0",
                      marginRight: message.sender === "user" ? "0" : "16px",
                    }}
                  >
                    {processor.processSync(message.text).result}
                  </div>
                </div>
                {message.sources && message.sources.length > 0 && (
                  <div
                    className="sources-container"
                    style={{ marginTop: "10px" }}
                  >
                    <h3>Sources</h3>
                    {message.sources.map((source, sourceIndex) => (
                      <Badge
                        key={`${index}-${sourceIndex}`}
                        className="sources"
                      >
                        {processor.processSync(source.text).result}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loadingBar && (
              <div
                style={{ display: "flex", alignItems: "flex-end" }}
                className="chat-box__message loading_message"
              >
                <LoadingDots />
              </div>
            )}
             <div className="end-of-chat"></div>
          </div>

          <form
            className="flex w-full max-w-sm items-center space-x-2 message-input"
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            onSubmit={handleSendMessage}
          >
            <Input
              type="text"
              placeholder="Type your message"
              value={message}
              autoFocus
              onChange={(event) => setMessage(event.target.value)}
              className="chat-box__input"
            />
            <Button
              type="submit"
              className="flex items-center justify-center px-4 bg-transparent font-semibold hover:text-white py-2 hover:border-transparent rounded-r-lg"
            >
              <IconSend2 />
            </Button>
          </form>
        </>
      </div>
      <div className="overlay">
        {showChatBox ? (
          <IconX
            onClick={() => openChat()}
            className="toggle-button"
            src={logo}
            alt="Circular button"
          />
        ) : (
          <img
            onClick={() => openChat()}
            className="toggle-button"
            src={logo}
            alt="Circular button"
          />
        )}
      </div>
    </div>
  );
}

export default ChatBox;
