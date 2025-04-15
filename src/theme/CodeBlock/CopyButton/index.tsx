import React, {useCallback, useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/CodeBlock/CopyButton';
import IconCopy from '@theme/Icon/Copy';
import IconSuccess from '@theme/Icon/Success';
import { Button } from '@site/src/components/ui/button';
import { Input } from '@site/src/components/ui/input';
import { IconWand, IconPlayerPlay, IconExternalLink } from '@tabler/icons-react';
import { cn } from '@site/src/utils';
import { useColorMode } from '@docusaurus/theme-common';
import { CodespaceOpener } from '@site/src/components/CodespaceOpener';
import { AUTH_CONFIG } from '@site/src/config/auth';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@site/src/components/ui/dialog';
import Markdown from "react-markdown";

import styles from './styles.module.css';

const StyledInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <Input {...props} ref={ref} />
));

StyledInput.displayName = 'StyledInput';

const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      // For modern browsers
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        textArea.remove();
        return true;
      } catch (error) {
        textArea.remove();
        return false;
      }
    }
  } catch (error) {
    return false;
  }
};

function CopyButtonContent({code, className}: Props): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [rewrittenCode, setRewrittenCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedResponse, setStreamedResponse] = useState('');
  const [executionResult, setExecutionResult] = useState<{ stderr?: string; stdout?: string; code?: number } | null>(null);
  const copyTimeout = useRef<number | undefined>(undefined);
  const activeCodespace = localStorage.getItem('codespace');

  const { colorMode } = useColorMode();
  const contentStyle: React.CSSProperties = {
    backgroundColor: colorMode === 'dark' ? '#0A0A0A' : 'white',
    border: colorMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.30), 0px 12px 24px 0px rgba(0, 0, 0, 0.20)',
    maxHeight: '425px',
    maxWidth: '60vw',
    overflowY: 'scroll' as const
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: colorMode === 'dark' ? '#1A1A1A' : '#F5F5F5',
    border: colorMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
    padding: '10px 12px',
    fontSize: '14px',
    width: '100%',
    color: colorMode === 'dark' ? '#E4E4E7' : '#18181B',
  };

  const codeBlockStyle: React.CSSProperties = {
    backgroundColor: colorMode === 'dark' ? '#1A1A1A' : '#F5F5F5',
    border: colorMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
    padding: '16px',
    margin: '8px 0',
    fontSize: '14px',
    lineHeight: '1.5',
    color: colorMode === 'dark' ? '#E4E4E7' : '#18181B',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    maxWidth: '100%',
  };

  const handleRunCode = async (command: string) => {
    setIsLoading(true);
    setExecutionResult(null);
    
    const token = localStorage.getItem('github_token');
    if (!token) {
      setExecutionResult({ stdout: '', stderr: 'No GitHub token found. Please authenticate first.' });
      setIsLoading(false);
      return;
    }

    if (!activeCodespace) {
      setExecutionResult({ stdout: '', stderr: 'No codespace found. Please authenticate first.' });
      setIsLoading(false);
      return;
    }

    try {
      // First, get the codespace status and URL
      // const getResponse = await fetch(`http://localhost:3002/codespaces/get?codespace_name=${activeCodespace}`, {
      //   headers: {
      //     'x-github-token': token,
      //   },
      // });
      
      // const getResult = await getResponse.json();
      
      // if (getResult.success && getResult.url) {
      //   const shouldOpen = window.confirm('The codespace needs to be opened before running the code. Would you like to open it in a new tab?');
      //   if (shouldOpen) {
      //     window.open(getResult.url, '_blank');
      //     // Give the user some time to let the codespace load
      //     setExecutionResult({ stdout: 'Please wait for the codespace to load before running the code again.', stderr: '' });
      //     setIsLoading(false);
      //     return;
      //   } else {
      //     setExecutionResult({ stdout: '', stderr: 'Cannot run code without opening the codespace first.' });
      //     setIsLoading(false);
      //     return;
      //   }
      // }

      // If we get here, the codespace is already running, so execute the command
      const response = await fetch('http://localhost:3002/codespaces/terminal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-github-token': token,
        },
        body: JSON.stringify({
          code,
          codespace: activeCodespace,
          command: command,
        }),
      });

      const data = await response.json();
      setExecutionResult(data);
    } catch (error) {
      setExecutionResult({ stdout: '', stderr: 'Failed to execute command' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyCode = useCallback(async () => {
    const success = await copyToClipboard(code);
    if (success) {
      setIsCopied(true);
      copyTimeout.current = window.setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }, [code]);

  const handleRewriteCode = async () => {
    const token = localStorage.getItem("github_token");
    if (!token) {
      alert("Please sign in to use the code rewrite feature");
      return;
    }

    setIsLoading(true);
    setIsStreaming(true);
    setStreamedResponse('');
    setRewrittenCode('');
    try {
      const myHeaders = new Headers();
      myHeaders.append("X-GitHub-Token", token);
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that can analyze and rewrite code. Always format your responses in markdown, using proper code blocks with language specification. Only provide the rewritten code, no additional text.",
          },
          {
            role: "user",
            content: `${prompt}\n\nHere is the code to rewrite:\n\`\`\`\n${code}\n\`\`\``,
          },
        ],
        stream: true
      });

      const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch(`${AUTH_CONFIG.interactiveDocsBaseUrl}/copilot/chat/completions`, requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const reader = response.body?.getReader();
      
      if (!reader) {
        throw new Error('No reader available');
      }

      let accumulatedResponse = '';
      const decoder = new TextDecoder();
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value);
        try {
          // Split the chunk by lines and process each line
          const lines = chunk.split('\n').filter(line => line.trim());
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const jsonStr = line.slice(6);
              if (jsonStr === '[DONE]') continue;
              
              const jsonData = JSON.parse(jsonStr);
              const content = jsonData.choices[0]?.delta?.content || '';
              accumulatedResponse += content;
              setStreamedResponse(accumulatedResponse);
            }
          }
        } catch (e) {
          console.error('Error processing chunk:', e);
        }
      }
      
      // Set the final rewritten code
      setRewrittenCode(accumulatedResponse);
    } catch (error) {
      console.error("Code rewrite error:", error);
      setStreamedResponse('Error: Failed to rewrite code');
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  const [isRewrittenCodeCopied, setIsRewrittenCodeCopied] = useState(false);
  const rewrittenCopyTimeout = useRef<number | undefined>(undefined);

  const handleCopyRewrittenCode = useCallback(async () => {
    const success = await copyToClipboard(rewrittenCode);
    if (success) {
      setIsRewrittenCodeCopied(true);
      rewrittenCopyTimeout.current = window.setTimeout(() => {
        setIsRewrittenCodeCopied(false);
      }, 1000);
    }
  }, [rewrittenCode]);

  useEffect(() => {
    return () => {
      window.clearTimeout(copyTimeout.current);
      window.clearTimeout(rewrittenCopyTimeout.current);
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-2">
        <button
          type="button"
          aria-label={
            isCopied
              ? translate({
                  id: 'theme.CodeBlock.copied',
                  message: 'Copied',
                  description: 'The copied button label on code blocks',
                })
              : translate({
                  id: 'theme.CodeBlock.copyButtonAriaLabel',
                  message: 'Copy code to clipboard',
                  description: 'The ARIA label for copy code blocks button',
                })
          }
          title={translate({
            id: 'theme.CodeBlock.copy',
            message: 'Copy',
            description: 'The copy button label on code blocks',
          })}
          className={clsx(
            'clean-btn',
            className,
            styles.copyButton,
            isCopied && styles.copyButtonCopied,
          )}
          onClick={handleCopyCode}>
          <span className={styles.copyButtonIcons} aria-hidden="true">
            <IconCopy className={styles.copyButtonIcon} />
            <IconSuccess className={styles.copyButtonSuccessIcon} />
          </span>
        </button>

        <button
          type="button"
          aria-label="Run code"
          title="Run code"
          className={clsx(
            'clean-btn',
            className,
            styles.copyButton,
          )}
          onClick={() => handleRunCode(code)}
          disabled={isLoading}
        >
          <span className={styles.copyButtonIcons} aria-hidden="true">
            <IconPlayerPlay className={styles.copyButtonIcon} />
          </span>
        </button>

        {activeCodespace && (
          <CodespaceOpener codespace_name={activeCodespace} />
        )}

        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label="Rewrite code with AI"
              title="Rewrite code with AI"
              className={clsx(
                'clean-btn',
                className,
                styles.copyButton,
              )}>
              <span className={styles.copyButtonIcons} aria-hidden="true">
                <IconWand className={styles.copyButtonIcon} />
              </span>
            </button>
          </DialogTrigger>
          <DialogContent style={contentStyle} className="sm:max-w-[425px]">
            <DialogHeader className="text-left">
              <DialogTitle className="text-lg">
                Rewrite Code with AI
              </DialogTitle>
              <DialogDescription className="text-sm">
                Enter your instructions for how you want the code to be rewritten
              </DialogDescription>
            </DialogHeader>

            <div style={{maxWidth: '100%'}} className="flex flex-col gap-4 py-4">
              <StyledInput
                type="text"
                placeholder="Ask a question about this code or request a rewrite (e.g., 'Make this code more efficient' or 'Explain what this code does')"
                value={prompt}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
                style={inputStyle}
                className={cn(
                  "focus:outline-none focus:ring-2 focus:ring-offset-2",
                  colorMode === 'dark' 
                    ? "focus:ring-blue-500 focus:ring-offset-black" 
                    : "focus:ring-blue-500 focus:ring-offset-white"
                )}
              />

              {rewrittenCode || streamedResponse ? (
                <div className="mt-2 w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={cn(
                      "font-medium",
                      colorMode === 'dark' ? "text-gray-200" : "text-gray-800"
                    )}>
                      Response{isStreaming ? ' (Streaming...)' : ':'}
                    </h4>
                    <button
                      type="button"
                      aria-label={isRewrittenCodeCopied ? 'Copied' : 'Copy code to clipboard'}
                      title="Copy"
                      className={clsx(
                        'clean-btn',
                        className,
                        styles.copyButton,
                        isRewrittenCodeCopied && styles.copyButtonCopied,
                      )}
                      onClick={handleCopyRewrittenCode}
                      disabled={isStreaming}>
                      <span className={styles.copyButtonIcons} aria-hidden="true">
                        <IconCopy className={styles.copyButtonIcon} />
                        <IconSuccess className={styles.copyButtonSuccessIcon} />
                      </span>
                    </button>
                  </div>
                  <div style={codeBlockStyle}>
                    <Markdown>{streamedResponse || rewrittenCode}</Markdown>
                  </div>
                </div>
              ) : (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={cn(
                      "font-medium",
                      colorMode === 'dark' ? "text-gray-200" : "text-gray-800"
                    )}>
                      Original Code:
                    </h4>
                  </div>
                  <div style={codeBlockStyle}>
                    <pre className={cn(
                      "text-sm block m-0",
                      colorMode === 'dark' ? "text-gray-200" : "text-gray-800"
                    )}>
                      <code>{code}</code>
                    </pre>
                  </div>
                </div>
              )} 
            </div>

            <DialogFooter className="gap-2">
              <Button 
                variant="outline" 
                onClick={() => document.querySelector<HTMLButtonElement>('[aria-label="Close"]')?.click()}
              >
                Cancel
              </Button>
              <Button
                variant="outline"
                onClick={handleRewriteCode}
                disabled={isLoading || !prompt}
              >
                {isLoading ? 'Rewriting...' : 'Rewrite Code'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {(isLoading || executionResult) && (
        <div className="mt-4 w-full">
          {isLoading ? (
            <div className={cn(
              "p-4 rounded-md",
              colorMode === 'dark' ? "bg-gray-800" : "bg-gray-100"
            )}>
              Running code...
            </div>
          ) : executionResult && (
            <div className={cn(
              "p-4 rounded-md",
              colorMode === 'dark' ? "bg-gray-800" : "bg-gray-100",
              executionResult.stderr || executionResult.code !== 0 ? "border-red-500" : "border-green-500",
              "border"
            )}>
              <pre className="whitespace-pre-wrap break-words">
                {executionResult.stderr ? (
                  <span className="text-red-500">{executionResult.stderr}</span>
                ) : executionResult.code !== 0 ? (
                  <span className="text-red-500">Command failed with exit code {executionResult.code}</span>
                ) : (
                  executionResult.stdout
                )}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function CopyButton(props: Props): JSX.Element {
  return (
    <BrowserOnly>
      {() => <CopyButtonContent {...props} />}
    </BrowserOnly>
  );
}
