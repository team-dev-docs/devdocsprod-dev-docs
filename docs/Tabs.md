# Tabs Documentation

## Brief Description

Tabs is a customizable component that allows users to organize and switch between different sections of content.

## Parameters

The Tabs component and its subcomponents accept the following props:

* `className` (optional): A string to add custom CSS classes.

* `...props`: Any additional props are passed through to the underlying elements.

## Examples

Here's a basic example of how to use the Tabs component:

```jsx
<component name="Tabs" original="PFRhYnMgZGVmYXVsdFZhbHVlPSJ0YWIxIj4KICA8VGFic0xpc3Q+CiAgICA8VGFic1RyaWdnZXIgdmFsdWU9InRhYjEiPlRhYiAxPC9UYWJzVHJpZ2dlcj4KICAgIDxUYWJzVHJpZ2dlciB2YWx1ZT0idGFiMiI+VGFiIDI8L1RhYnNUcmlnZ2VyPgogIDwvVGFic0xpc3Q+CiAgPFRhYnNDb250ZW50IHZhbHVlPSJ0YWIxIj5Db250ZW50IGZvciBUYWIgMTwvVGFic0NvbnRlbnQ+CiAgPFRhYnNDb250ZW50IHZhbHVlPSJ0YWIyIj5Db250ZW50IGZvciBUYWIgMjwvVGFic0NvbnRlbnQ+CjwvVGFicz4=" props="eyJkZWZhdWx0VmFsdWUiOiJ0YWIxIiwiY2hpbGRyZW4iOiI8VGFic0xpc3Q+XG4gICAgPFRhYnNUcmlnZ2VyIHZhbHVlPVwidGFiMVwiPlRhYiAxPC9UYWJzVHJpZ2dlcj5cbiAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCJ0YWIyXCI+VGFiIDI8L1RhYnNUcmlnZ2VyPlxuICA8L1RhYnNMaXN0PlxuICA8VGFic0NvbnRlbnQgdmFsdWU9XCJ0YWIxXCI+Q29udGVudCBmb3IgVGFiIDE8L1RhYnNDb250ZW50PlxuICA8VGFic0NvbnRlbnQgdmFsdWU9XCJ0YWIyXCI+Q29udGVudCBmb3IgVGFiIDI8L1RhYnNDb250ZW50PiJ9"></component>
```

## Notes or Considerations

* The Tabs component uses Radix UI's Tabs primitive under the hood, providing accessibility and keyboard navigation out of the box.

* Ensure that the `value` prop on TabsTrigger and TabsContent components match to link them correctly.

* The component is styled using Tailwind CSS classes, which can be customized by modifying the `className` prop or the underlying CSS.

* For the best user experience, make sure the content of each tab is relevant and not too long.
