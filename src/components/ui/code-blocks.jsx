import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const DevDocsCodeBlocks = (props) => {
    const parseCodeSnippets = (children) => {
        let triggers = [];
        let contents = [];
      
        React.Children.forEach(children, (child) => {
            console.log("is dis the child", child)
          if (React.isValidElement(child) && (child.type === 'pre' || child.props.mdxType === 'pre')) {
            const className = child.props.className || child?.props?.children?.props?.className
            console.log("dis the class name", className)
            if (typeof className === 'string' && className.includes('-')) {
            console.log("dis the class name", className)
              const language = className.split('-')[1];
              const [lang, context] = language.split('::');
      
              triggers.push(
                <TabsTrigger key={language} value={language}>
                  {`${lang} ${context || ''}`}
                </TabsTrigger>
              );
              contents.push(
                <TabsContent key={language} value={language}>
                  {child.props.children}
                </TabsContent>
              );
            }
          }
        });
      
        return { triggers, contents };
      }

  const { triggers, contents } = parseCodeSnippets(props.children);

  return (
    <div className="mt-[1em] text-sm">
      <Tabs defaultValue={triggers.length > 0 ? triggers[0].props.value : ''}>
        <TabsList>{triggers}</TabsList>
        {contents}
      </Tabs>
    </div>
  );
};

export { DevDocsCodeBlocks };