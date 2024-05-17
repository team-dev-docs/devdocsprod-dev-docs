import * as React from "react";
import { unified } from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';

import { cn } from "@site/src/utils"

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, { createElement: React.createElement });

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}>
      {processor.processSync(children).result}
  </h3>
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}>
      {children}
    </p>
))
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