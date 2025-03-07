import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import CodeBlock from '@theme/CodeBlock';

const CodeSnippets = ({ children }) => {
  // Extract code blocks from MDX structure
  const codeBlocks = React.Children.toArray(children)
    .map(child => {
      let childObject = {...child.props.children.props}
      // Extract language and filename from className (format: "language-javascript::filename")
      const [langPart, fileName] = childObject.className.split("::");
      const language = langPart.replace('language-', '');
      
      return {
        ...childObject,
        language,
        fileName,
        // Keep the original className for Prism highlighting
        prismClassName: `language-${language}`
      };
    });

  if (codeBlocks.length === 0) {
    console.warn('No valid code blocks found');
    return null;
  }

  return (
    <div className="mt-[1em]">
      <Tabs defaultValue={codeBlocks[0].className}>
        <TabsList>
          {codeBlocks.map(({ className, fileName }) => (
            <TabsTrigger 
              key={className} 
              value={className}
            >
              {fileName}
            </TabsTrigger>
          ))}
        </TabsList>
        {codeBlocks.map(({ className, children, language }) => (
          <TabsContent 
            key={className} 
            value={className}
            className="mt-2"
          >
            <CodeBlock
              language={language}
              showLineNumbers
            >
              {children}
            </CodeBlock>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CodeSnippets;
