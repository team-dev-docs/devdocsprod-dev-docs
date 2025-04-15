import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Rnd } from 'react-rnd';
import TerminalLogo from '../../static/svgs/terminallogo.svg';
import TerminalExpand from '../../static/svgs/terminalexpand.svg';
import TerminalClose from '../../static/svgs/terminalclose.svg';
import aiConfig from '@site/ai.json';
import { TerminalMarkdown } from './markdown/TerminalMarkdown';
import { Terminal } from '@site/src/components/ui/terminal';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { AUTH_CONFIG } from "../config/auth.ts"
// Debounce helper
const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

interface Message {
  content: string | {
    content: string;
    asciiArt: Array<{
      content: string;
      color: string;
    }>;
    footer: string;
  };
  type: 'user' | 'bot';
  loading?: boolean;
  isBootMessage?: boolean;
  isProjectGeneration?: boolean;
}

interface TerminalChatBotProps {
  initialHeight?: number;
  minHeight?: number;
  maxHeight?: number;
  onModeChange?: (mode: 'terminal' | 'normal') => void;
}

// Add new interface for project state
interface ProjectState {
  isGenerated: boolean;
  path: string;
  codespace: string;
}

function TerminalChatBotContent({
  initialHeight = 600,
  minHeight = 200,
  maxHeight = window.innerHeight * 0.8,
  onModeChange,
}: TerminalChatBotProps) {
  const bootMessage = {
    content: `
Booting up chat...

`,
    asciiArt: [
      { content: '     ', color: 'text-[#D4D404]' },
      { content: '##############################', color: 'text-[#7984EB]' },
      { content: '    \n', color: 'text-[#D4D404]' },


      { content: '    #', color: 'text-[#1E3E3B]' },
      { content: '##', color: 'text-[#7984EB]' },
      { content: '%%%&@@@@@@@@@@@@@@@@@@@@@', color: 'text-[#D4D4D4]' },
      { content: '###', color: 'text-[#7984EB]' },
      { content: '#    \n', color: 'text-[#D4D4D4]' },


      { content: '    ###', color: 'text-[#7984EB]' },
      { content: '%%%@@@@@@@@@@@@@@@@@@@@@@@', color: 'text-[#D4D4D4]' },
      { content: '###    \n', color: 'text-[#7984EB]' },



      { content: '////', color: 'text-[#7984EB]' },
      { content: '(##', color: 'text-[#7984EB]' },
      { content: '%%%', color: 'text-[#D4D4D4]' },
      { content: '&&&&', color: 'text-[#7984EB]' }, // eye
      { content: '@@@@@@@@@@@', color: 'text-[#D4D4D4]' },
      { content: '&&&&', color: 'text-[#7984EB]' },
      { content: '@@@@', color: 'text-[#D4D4D4]' },
      { content: '###', color: 'text-[#7984EB]' },


      { content: '////\n', color: 'text-[#7984EB]' },
      { content: '////', color: 'text-[#7984EB]' },
      { content: '(##', color: 'text-[#7984EB]' },

      { content: '%%', color: 'text-[#D4D4D4]' },
      { content: '#', color: 'text-[#7984EB]' }, // eye
      { content: '@@@@', color: 'text-[#D4D4D4]' },
      { content: '%#', color: 'text-[#7984EB]' },

      { content: '@@@@@@@@', color: 'text-[#D4D4D4]' },

      { content: '#', color: 'text-[#7984EB]' },
      { content: '@@@@', color: 'text-[#D4D4D4]' },
      { content: '##', color: 'text-[#7984EB]' }, // eye
      { content: '@@', color: 'text-[#D4D4D4]' },
      { content: '###', color: 'text-[#7984EB]' },

      { content: '////\n', color: 'text-[#7984EB]' },
      { content: '////', color: 'text-[#7984EB]' },


      { content: '(##', color: 'text-[#7984EB]' },
      { content: '##', color: 'text-[#D4D4D4]' },
      { content: '#', color: 'text-[#7984EB]' },
      { content: '@@@@', color: 'text-[#D4D4D4]' },
      { content: '%#', color: 'text-[#7984EB]' },
      { content: '@@@@@@@@', color: 'text-[#D4D4D4]' },
      { content: '#', color: 'text-[#7984EB]' }, // eye
      { content: '@@@@', color: 'text-[#D4D4D4]' },
      { content: '%#', color: 'text-[#7984EB]' },
      { content: '@@', color: 'text-[#D4D4D4]' },
      { content: '###', color: 'text-[#7984EB]' },

      { content: '////\n', color: 'text-[#7984EB]' },
      { content: '****', color: 'text-[#543938]' },

      { content: '(##', color: 'text-[#7984EB]' },
      { content: '%%%', color: 'text-[#D4D4D4]' },
      { content: '#', color: 'text-[#7984EB]' },
      { content: '%#', color: 'text-[#7984EB]' },
      { content: '(#', color: 'text-[#7984EB]' },
      { content: '@@@@@@@@@@', color: 'text-[#D4D4D4]' },
      { content: '#', color: 'text-[#7984EB]' }, // eye
      { content: '%#', color: 'text-[#7984EB]' }, // eye
      { content: '#', color: 'text-[#7984EB]' }, // eye
      { content: '#@@@@', color: 'text-[#D4D4D4]' },
      { content: '##', color: 'text-[#7984EB]' },





      { content: '****\n', color: 'text-[#543938]' },

      { content: '    ###', color: 'text-[#7984EB]' },
      { content: '%%%@@@@@@@@@@@@@@@@@@@@@@@', color: 'text-[#D4D4D4]' },
      { content: '###    \n', color: 'text-[#7984EB]' },
      { content: '    ###', color: 'text-[#7984EB]' },
      { content: '%%%@@@@@@@@@@@@@@@@@@@@@@@', color: 'text-[#D4D4D4]' },
      { content: '###    \n', color: 'text-[#7984EB]' },




      { content: '    /(#############################/    \n', color: 'text-[#7984EB]' },
      { content: '      ////////////////////////////     \n', color: 'text-[#7984EB]' },
      { content: '                *//####                 \n', color: 'text-[#3D5C7C]' },
      { content: '           ///##############            \n', color: 'text-[#7984EB]' },
      { content: '          /#@&&#@############ \n', color: 'text-[#7984EB]' },
    ],
    footer: '\nInitialization complete. How can I help you today?'
  };

  const [messages, setMessages] = useState<Message[]>([
    { content: bootMessage, type: 'bot', isBootMessage: true }
  ]);
  const [input, setInput] = useState('');
  const [height, setHeight] = useState(initialHeight);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [docsContent, setDocsContent] = useState<string | null>(null);
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [currentMode, setCurrentMode] = useState<'terminal' | 'normal'>('terminal');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [projectState, setProjectState] = useState<ProjectState>({
    isGenerated: false,
    path: '',
    codespace: ''
  });

  const updateHeight = useCallback(
    debounce((newHeight: number) => {
      setHeight(newHeight);
    }, 10),
    []
  );

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowModeDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleOpenAIChat = () => {
      setIsVisible(true);
    };

    window.addEventListener('openAIChat', handleOpenAIChat);

    return () => {
      window.removeEventListener('openAIChat', handleOpenAIChat);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    // Refocus the input field after scrolling
    inputRef.current?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const token = localStorage.getItem('github_token');
    if (!token) {
      setMessages(prev => [...prev,
      { content: input, type: 'user' },
      { content: 'Please sign in to use the chat feature', type: 'bot' }
      ]);
      setInput('');
      return;
    }

    if (!aiConfig.github_features) {
      return;
    }

    setMessages(prev => [...prev, { content: input, type: 'user' }]);
    setInput('');
    setIsLoading(true);

    try {
      const myHeaders = new Headers();
      myHeaders.append('X-GitHub-Token', token);
      myHeaders.append('Content-Type', 'application/json');

      // Check if this is a project generation request
      if (input.toLowerCase().startsWith('generate:')) {
        const prompt = input.slice('generate:'.length).trim();
        
        // Determine the language based on the prompt
        let language = 'typescript';
        const lowerPrompt = prompt.toLowerCase();
        if (lowerPrompt.includes('react')) {
          language = 'react typescript';
        } else if (lowerPrompt.includes('vue')) {
          language = 'vue typescript';
        }

        setMessages(prev => [...prev, {
          content: `Generating ${language} project structure, please wait...`,
          type: 'bot',
          isProjectGeneration: true
        }]);

        // First, generate the project structure
        const response = await fetch('http://localhost:3000/generate-project', {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify({
            prompt,
            language
          })
        });

        if (!response.ok) {
          let errorData;
          try {
            errorData = await response.json();
          } catch (e) {
            errorData = { message: 'An unknown error occurred' };
          }

          let errorMessage = 'An error occurred while generating the project.';
          if (response.status === 401) {
            errorMessage = 'Please sign in again to continue.';
          } else if (response.status === 403) {
            errorMessage = 'You do not have permission to use this feature.';
          }

          setMessages(prev => [...prev, { content: errorMessage, type: 'bot' }]);
          setIsLoading(false);
          return;
        }

        const projectData = await response.json();
        // Now send the project data to the codespace
          const activeCodespace = localStorage.getItem('codespace');
        try {
          const createProjectResponse = await fetch('http://localhost:3002/codespaces/create-project', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-GitHub-Token': token
            },
            body: JSON.stringify({
              codespace: activeCodespace,
              projectConfig: {
                title: projectData.title,
                description: projectData.description,
                dependencies: projectData.dependencies,
                files: projectData.files
              }
            })
          });

          // if (!createProjectResponse.ok) {
          //   throw new Error('Failed to create project in codespace');
          // }
          
          const createProjectResult = await createProjectResponse.json();
          if(createProjectResult.error != "Project created successfully") {
            throw new Error('Failed to create project in codespace');
          }
          let projectPath = `codebase_projects/${projectData.title}`
          // Update project state
          setProjectState({
            isGenerated: true,
            path: projectPath,
            codespace: activeCodespace
          });

          // Add this new code after setting project state:
          if (projectPath) {
            // Send commands to initialize and start the project
            const commands = [
              `npm install --prefix ${projectPath}`,
              `npm run dev --prefix ${projectPath}`
            ];

            // Execute commands sequentially
            for (const command of commands) {
              try {
                
                
                const terminalResponse = await fetch('http://localhost:3002/codespaces/terminal', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-GitHub-Token': token
                  },
                  body: JSON.stringify({
                    codespace: activeCodespace,
                    command: command
                  })
                });

                if (!terminalResponse.ok) {
                  throw new Error(`Failed to execute command: ${command}`);
                }
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Add command execution to messages
                setMessages(prev => [...prev, {
                  content: `> ${command}\nExecuting...\n`,
                  type: 'bot'
                }]);
              } catch (error) {
                console.error(`Error executing command ${command}:`, error);
                setMessages(prev => [...prev, {
                  content: `Error executing command ${command}. Please try running it manually.`,
                  type: 'bot'
                }]);
              }
            }
          }

          // Format the project data into a nice message with the result
          const formattedMessage = `
Project Generated Successfully!

Title: ${projectData.title}
Description: ${projectData.description}
Project Path: ${createProjectResult.projectPath}

Dependencies:
${projectData.dependencies.map(dep => `- ${dep}`).join('\n')}

Files Created:
${projectData.files.map(file => `📄 ${file.filename}`).join('\n')}

The project has been created in your codespace and initialized. You can now:
1. Access the project at ${createProjectResult.projectPath}
2. Dependencies have been installed
3. Development server has been started

Use the terminal below to interact with your project:
`;

          setMessages(prev => [...prev, {
            content: formattedMessage,
            type: 'bot',
            isProjectGeneration: true
          }]);
        } catch (error) {
          console.error('Error creating project in codespace:', error);
          setMessages(prev => [...prev, {
            content: 'The project structure was generated but there was an error creating it in the codespace. Please try again.',
            type: 'bot'
          }]);
        }
        
        setIsLoading(false);
        return;
      }

      // Original chat logic continues here
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
            content: input,
          },
        ],
        stream: true,
      });

      const response = await fetch(`${AUTH_CONFIG.interactiveDocsBaseUrl}/copilot/chat/completions`, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (e) {
          errorData = { message: 'An unknown error occurred' };
        }

        let errorMessage = 'An error occurred while processing your request.';

        if (response.status === 401) {
          errorMessage = 'Please sign in again to continue.';
        } else if (response.status === 403) {
          if (errorData?.error === 'Copilot License Required') {
            errorMessage = 'You need an active GitHub Copilot license to use this feature.';
          } else {
            errorMessage = 'You do not have permission to use this feature.';
          }
        }

        setMessages(prev => [...prev, { content: errorMessage, type: 'bot' }]);
        setIsLoading(false);
        return;
      }

      if (!response.body) {
        throw new Error('Response body is null');
      }

      // Initialize streaming message
      setMessages(prev => [...prev, { content: '', type: 'bot' }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Decode the chunk and add it to our buffer
        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        // Split on double newlines which typically separate SSE messages
        const parts = buffer.split('\n\n');

        // Keep the last part in the buffer if it's not complete
        buffer = parts.pop() || '';

        // Process all complete messages
        for (const part of parts) {
          const lines = part.split('\n');
          for (const line of lines) {
            if (line.trim() === '') continue;
            if (line.startsWith('data: ')) {
              const jsonData = line.slice(6); // Remove 'data: ' prefix

              // Skip [DONE] message
              if (jsonData.trim() === '[DONE]') continue;

              try {
                const data = JSON.parse(jsonData);

                // Add debug logging
                

                // Handle error messages from the stream
                if (data.error) {
                  setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMessage = newMessages[newMessages.length - 1];
                    if (lastMessage && lastMessage.type === 'bot') {
                      lastMessage.content = `Error: ${data.error}`;
                    }
                    return newMessages;
                  });
                  continue;
                }

                // Skip filter results and empty responses
                if (data.prompt_filter_results || (data.choices && data.choices.length === 0)) {
                  continue;
                }

                // Handle both streaming formats (OpenAI-style delta and raw content)
                const content = data.choices?.[0]?.delta?.content ||
                  data.choices?.[0]?.content ||
                  data.content || // Add direct content field check
                  data.message?.content || // Add message content field check
                  '';

                if (content) {
                  // Update the last message with the new content
                  setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMessage = newMessages[newMessages.length - 1];
                    if (lastMessage && lastMessage.type === 'bot') {
                      if (typeof lastMessage.content === 'string') {
                        lastMessage.content += content;
                      } else if (lastMessage.isBootMessage) {
                        // Don't modify boot message
                        lastMessage.content = lastMessage.content;
                      } else {
                        // Convert to string if it's not a boot message
                        lastMessage.content = String(lastMessage.content) + content;
                      }
                    }
                    return newMessages;
                  });
                }
              } catch (e) {
                console.error('Error parsing streaming data:', e, 'Raw data:', jsonData);
                // Only set error message if we haven't received any content yet
                setMessages(prev => {
                  const newMessages = [...prev];
                  const lastMessage = newMessages[newMessages.length - 1];
                  if (lastMessage && lastMessage.type === 'bot' && (!lastMessage.content || lastMessage.content === '')) {
                    lastMessage.content = 'Waiting for response...';
                  }
                  return newMessages;
                });
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        content: 'Sorry, there was an error processing your request. Please try again later.',
        type: 'bot'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  const showTerminal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(true);
  };

  const hideTerminal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleModeChange = (mode: 'terminal' | 'normal') => {
    setCurrentMode(mode);
    setShowModeDropdown(false);
    if (onModeChange) {
      onModeChange(mode);
    }
  };

  return (
    <>
      {!isVisible ? (
        <div
          className="fixed bottom-0 left-0 right-0 bg-[#323233] border-t border-[#424242] cursor-pointer z-[1000]"
          onClick={showTerminal}
          style={{ fontFamily: "'Pixelify Sans', monospace" }}
        >
          <div className="flex items-center justify-between px-4 py-1">
            <div className="flex items-center">
              <div className="text-sm text-gray-400" style={{ fontFamily: "'Pixelify Sans', monospace" }}>DOCS DEV CHAT BOT</div>
            </div>
            <div className="flex space-x-2">
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModeDropdown(!showModeDropdown);
                  }}
                  className="cursor-pointer"
                >
                  <TerminalLogo className="w-4 h-4 mr-2" />
                </div>
                {showModeDropdown && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#323233] ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <button
                        className={`block w-full text-left px-4 py-2 text-sm ${currentMode === 'terminal' ? 'bg-[#424242] text-white' : 'text-gray-300 hover:bg-[#424242]'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleModeChange('terminal');
                        }}
                        style={{ fontFamily: "'Pixelify Sans', monospace" }}
                      >
                        Terminal mode
                      </button>
                      <button
                        className={`block w-full text-left px-4 py-2 text-sm ${currentMode === 'normal' ? 'bg-[#424242] text-white' : 'text-gray-300 hover:bg-[#424242]'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleModeChange('normal');
                        }}
                        style={{ fontFamily: "'Pixelify Sans', monospace" }}
                      >
                        Normal mode
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <TerminalExpand onClick={toggleVisibility} className="w-4 h-4 cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed bottom-0 left-0 right-0 z-[1000]" style={{ height: height }}>
          <Rnd
            default={{
              x: 0,
              y: 0,
              width: '100%',
              height: initialHeight,
            }}
            size={{ width: '100%', height: height }}
            position={{ x: 0, y: 0 }}
            minHeight={minHeight}
            maxHeight={maxHeight}
            enableResizing={{ top: true }}
            disableDragging={true}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0
            }}
            onResize={(e, direction, ref) => {
              const newHeight = parseInt(ref.style.height);
              setHeight(newHeight);
            }}
            onResizeStop={(e, direction, ref) => {
              const newHeight = parseInt(ref.style.height);
              setHeight(newHeight);
            }}
          >
            <div className="flex flex-col h-full bg-[#1e1e1e] text-white font-mono" style={{ fontFamily: "'Pixelify Sans', monospace" }}>
              {/* Terminal Header */}
              <div
                className="flex items-center justify-between px-4 py-1 bg-[#323233] border-b border-[#424242]"
                onClick={(e) => e.stopPropagation()}
                style={{ fontFamily: "'Pixelify Sans', monospace" }}
              >
                <div className="flex items-center">
                  <div className="text-sm text-gray-400" style={{ fontFamily: "'Pixelify Sans', monospace" }}>DOCS DEV CHAT BOT</div>
                </div>
                <div className="flex space-x-2">
                  <div className="relative" ref={dropdownRef}>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowModeDropdown(!showModeDropdown);
                      }}
                      className="cursor-pointer"
                    >
                      <TerminalLogo className="w-4 h-4 mr-2" />
                    </div>
                    {showModeDropdown && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#323233] ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          <button
                            className={`block w-full text-left px-4 py-2 text-sm ${currentMode === 'terminal' ? 'bg-[#424242] text-white' : 'text-gray-300 hover:bg-[#424242]'}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleModeChange('terminal');
                            }}
                            style={{ fontFamily: "'Pixelify Sans', monospace" }}
                          >
                            Terminal mode
                          </button>
                          <button
                            className={`block w-full text-left px-4 py-2 text-sm ${currentMode === 'normal' ? 'bg-[#424242] text-white' : 'text-gray-300 hover:bg-[#424242]'}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleModeChange('normal');
                            }}
                            style={{ fontFamily: "'Pixelify Sans', monospace" }}
                          >
                            Normal mode
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <TerminalClose onClick={hideTerminal} className="w-4 h-4 cursor-pointer hover:opacity-80" />
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2" onClick={(e) => e.stopPropagation()}>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`${message.type === 'user' ? 'text-blue-400' : 'text-green-400'
                      } ${message.type === 'bot' && index === 0 ? 'whitespace-pre font-mono' : ''}`}
                    style={{ fontFamily: "'Pixelify Sans', monospace" }}
                  >
                    {message.type === 'user' ? '> ' : ''}
                    {message.loading ? 'Thinking...' :
                      message.isBootMessage && typeof message.content !== 'string' ? (
                        <>
                          <div className="text-green-400">{message.content.content}</div>
                          {message.content.asciiArt.map((part, i) => (
                            <span key={i} className={part.color} style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" }}>{part.content}</span>
                          ))}
                          <div className="text-green-400">{message.content.footer}</div>
                        </>
                      ) : (
                        <TerminalMarkdown
                          content={typeof message.content === 'string' ? message.content : ''}
                        />
                      )
                    }
                  </div>
                ))}
                <div ref={messagesEndRef} />
                
                {/* Show Terminal after project generation */}
                {projectState.isGenerated && (
                  <div className="mt-4">
                    <Terminal
                      initialMessage={`Terminal ready. Current directory: ${projectState.path}`}
                      prompt="$"
                      codespace={projectState.codespace}
                    />
                  </div>
                )}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-[#424242]" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2" style={{ fontFamily: "'Pixelify Sans', monospace" }}>{'>'}</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none border-none text-white"
                    style={{ fontFamily: "'Pixelify Sans', monospace" }}
                    placeholder="Ask a question..."
                    autoFocus
                    disabled={isLoading}
                  />
                </div>
              </form>
            </div>
          </Rnd>
        </div>
      )}
    </>
  );
}

export function TerminalChatBot(props: TerminalChatBotProps): JSX.Element {
  return (
    <BrowserOnly>
      {() => <TerminalChatBotContent {...props} />}
    </BrowserOnly>
  );
}
