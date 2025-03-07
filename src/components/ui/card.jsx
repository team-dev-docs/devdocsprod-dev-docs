import * as React from "react";
import { unified } from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';
import { useColorMode } from '@docusaurus/theme-common';

import { cn } from "@site/src/utils"

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, { createElement: React.createElement });

const Card = React.forwardRef(({ className, ...props }, ref) => {
  const { colorMode } = useColorMode();
  const cardStyle = {
    backgroundColor: colorMode === 'dark' ? '#0A0A0A' : 'white',
    border: colorMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.30), 0px 12px 24px 0px rgba(0, 0, 0, 0.20)'
  };

  return (
    <div
      ref={ref}
      style={cardStyle}
      className={cn("rounded-lg", className)}
      {...props} 
    />
  );
});
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => {
  const { colorMode } = useColorMode();
  const titleStyle = {
    color: colorMode === 'dark' ? '#FFFFFF' : '#000000'
  };

  return (
    <h3
      ref={ref}
      style={titleStyle}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}>
        {processor.processSync(children).result}
    </h3>
  );
})
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, children, ...props }, ref) => {
  const { colorMode } = useColorMode();
  const descriptionStyle = {
    color: colorMode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
  };

  return (
    <p
      ref={ref}
      style={descriptionStyle}
      className={cn("text-sm", className)}
      {...props}>
        {children}
    </p>
  );
})
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}>
      {children}
  </div>
))
CardFooter.displayName = "CardFooter"

const processChildren = (children) => {
  const processedChildren = React.Children.toArray(children).map((child) => {
    if (typeof child === 'string') {
      const singleLineString = child.replace(/\\n/g, '\\\\n');
      return processor.processSync(singleLineString).result;
    } else {
      return child;
    }
  });

  return processedChildren;
};

const DevDocsCard = React.forwardRef(({ className, children, ...props }, ref) => (
  <Card>
    <CardHeader>
        <CardTitle>
          {props.title}
        </CardTitle>
        <CardDescription>
          {props.description}
        </CardDescription>
    </CardHeader>
    <CardContent>
      {processChildren(children)}
    </CardContent>
    <CardFooter>
      {props.footer}
    </CardFooter>
</Card>
))

export { DevDocsCard, Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }