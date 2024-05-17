import { cva } from "class-variance-authority";
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
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

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

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props} />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props} />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props} />
))
AlertDescription.displayName = "AlertDescription"

const DevDocsAlert = React.forwardRef(({ className, children, customIcon: CustomIcon, ...props }, ref) => (
  <Alert variant={props.variant}>
  {CustomIcon && <CustomIcon className="w-6 h-6 mr-2" />}
  <AlertTitle>{props.title}</AlertTitle>
  <AlertDescription>
    {processChildren(children)}
  </AlertDescription>
</Alert>
))

export { Alert, AlertTitle, AlertDescription, DevDocsAlert }
