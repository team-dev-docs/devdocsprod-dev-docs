import React, { useState, useRef, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface TerminalProps {
  initialMessage?: string;
  prompt?: string;
  codespace?: string;
}

interface TerminalLine {
  content: string;
  type: 'input' | 'output' | 'error';
}

function TerminalContent({ initialMessage = 'Welcome to the terminal simulator', prompt = '>', codespace: propCodespace }: TerminalProps) {
  const [history, setHistory] = useState<TerminalLine[]>([
    { content: initialMessage, type: 'output' }
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [storedCodespace, setStoredCodespace] = useState<string | null>(null);
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedCodespace = localStorage.getItem('codespace');
    setStoredCodespace(savedCodespace);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = async (command: string) => {
    const token = localStorage.getItem('github_token');
    if (!token) {
      return { error: 'No GitHub token found. Please authenticate first.', output: '' };
    }

    const activeCodespace = propCodespace || storedCodespace;
    if (!activeCodespace) {
      return { error: 'No codespace found. Please authenticate first.', output: '' };
    }

    try {
      const response = await fetch('http://localhost:3002/codespaces/terminal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-github-token': token,
        },
        body: JSON.stringify({
          command,
          codespace: activeCodespace,
        }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return { error: 'Failed to execute command', output: '' };
    }
  };

  const handleCommand = async (command: string) => {
    setHistory(prev => [...prev, { content: `${prompt} ${command}`, type: 'input' }]);
    
    const activeCodespace = propCodespace || storedCodespace;
    if (activeCodespace) {
      // Execute command through API if codespace is available
      const result = await executeCommand(command);
      
      if (result.stderr) {
        setHistory(prev => [...prev, { content: result.stderr, type: 'error' }]);
      }
      if (result.stdout) {
        setHistory(prev => [...prev, { content: result.stdout, type: 'output' }]);
      }
    } else {
      // Fallback to local command handling
      let output = '';
      switch (command.toLowerCase()) {
        case 'help':
          output = 'Available commands: help, clear, echo [text], date';
          break;
        case 'clear':
          setHistory([{ content: initialMessage, type: 'output' }]);
          return;
        case 'date':
          output = new Date().toString();
          break;
        default:
          if (command.toLowerCase().startsWith('echo ')) {
            output = command.slice(5);
          } else if (command.trim() !== '') {
            output = `Command not found: ${command}`;
          }
      }

      if (output) {
        setHistory(prev => [...prev, { content: output, type: 'output' }]);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input);
      setCommandHistory(prev => [...prev, input]);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="terminal-container bg-black text-green-400 p-4 rounded-lg font-mono text-sm h-[400px] overflow-hidden">
      <div 
        ref={terminalRef}
        className="terminal-output h-[calc(100%-2rem)] overflow-y-auto space-y-1"
      >
        {history.map((line, i) => (
          <div 
            key={i} 
            className={`terminal-line ${line.type === 'input' ? 'pl-2' : ''} ${
              line.type === 'error' ? 'text-red-400' : ''
            }`}
          >
            {line.content}
          </div>
        ))}
      </div>
      <div className="terminal-input-line flex items-center mt-2">
        <span className="mr-2">{prompt}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none border-none"
          autoFocus
        />
      </div>
    </div>
  );
}

export function Terminal(props: TerminalProps): JSX.Element {
  return (
    <BrowserOnly>
      {() => <TerminalContent {...props} />}
    </BrowserOnly>
  );
}
