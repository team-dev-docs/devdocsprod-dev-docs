import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { unified } from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';

import { cn } from "@site/src/utils"

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, { createElement: React.createElement });

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-2 font-medium transition-al text-sm hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}>
      {processor.processSync(children).result}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const processedChildren = React.Children.toArray(children).map((child) => {
      if (typeof child === 'string') {
        console.log("this is the child processed", child)
        const singleLineString = child.replace(/\\n/g, '\\\\n');
        console.log(processor.processSync(singleLineString).result)
        return processor.processSync(singleLineString).result
      } else {
        return child;
      }
    });
    return (
      <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
      >
        <div className={cn("pb-4 pt-0", className)}>{processedChildren}</div>
      </AccordionPrimitive.Content>
    );
  }
);

const DevDocsAccordion = React.forwardRef(({ className, children, ...props }, ref) => (
  <Accordion type="single" collapsible>
    <AccordionItem value="first-accordion-section">
        <AccordionTrigger>{props.title}</AccordionTrigger>
        <AccordionContent>
        {children}
        </AccordionContent>
    </AccordionItem>
</Accordion>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { DevDocsAccordion, Accordion, AccordionItem, AccordionTrigger, AccordionContent }