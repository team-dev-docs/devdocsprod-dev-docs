import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { useColorMode } from '@docusaurus/theme-common'

import { cn } from "@site/src/utils"
import { buttonVariants } from "@site/src/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}>
    {children}
  </AlertDialogPrimitive.Overlay>
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { colorMode } = useColorMode();
  const contentStyle = {
    backgroundColor: colorMode === 'dark' ? '#0A0A0A' : 'white',
    border: colorMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.30), 0px 12px 24px 0px rgba(0, 0, 0, 0.20)'
  };

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={ref}
        style={contentStyle}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        {...props}>
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
  )
})
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}>
    {children}
  </div>
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
    {...props}>
    {children}
  </div>
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef(({ className, children, ...props }, ref) => {
  const { colorMode } = useColorMode();
  const titleStyle = {
    color: colorMode === 'dark' ? '#FFFFFF' : '#000000'
  };

  return (
    <AlertDialogPrimitive.Title 
      ref={ref} 
      style={titleStyle}
      className={cn("text-lg font-semibold", className)} 
      {...props}>
      {children}
    </AlertDialogPrimitive.Title>
  )
})
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef(({ className, children, ...props }, ref) => {
  const { colorMode } = useColorMode();
  const descriptionStyle = {
    color: colorMode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
  };

  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      style={descriptionStyle}
      className={cn("text-sm", className)}
      {...props}>
      {children}
    </AlertDialogPrimitive.Description>
  )
})
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Action 
    ref={ref} 
    className={cn(buttonVariants({ variant: "outline" }), "min-w-[80px]", className)} 
    {...props}>
    {children}
  </AlertDialogPrimitive.Action>
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "min-w-[80px]", className)}
    {...props}>
    {children}
  </AlertDialogPrimitive.Cancel>
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
