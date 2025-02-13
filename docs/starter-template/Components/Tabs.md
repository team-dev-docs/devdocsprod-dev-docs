# Tabs Documentation

## Brief Description

Tabs is a customizable component that allows users to organize and switch between different sections of content.

## Parameters

The Tabs component and its subcomponents accept the following props:

* `className` (optional): A string to add custom CSS classes.

* `...props`: Any additional props are passed through to the underlying elements.

## Examples

Here's a basic example of how to use the Tabs component:

````jsx
<Tabs defaultValue="preview">
  <TabsList>
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview">
    <div className="p-4 border rounded">
      A simple tabs example showing how the component works.
    </div>
  </TabsContent>
  <TabsContent value="code">
    ```jsx
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        Content for tab 1
      </TabsContent>
      <TabsContent value="tab2">
        Content for tab 2
      </TabsContent>
    </Tabs>
    ```
  </TabsContent>
</Tabs>
````

## Notes or Considerations

* The Tabs component uses Radix UI's Tabs primitive under the hood, providing accessibility and keyboard navigation out of the box.

* Ensure that the `value` prop on TabsTrigger and TabsContent components match to link them correctly.

* The component is styled using Tailwind CSS classes, which can be customized by modifying the `className` prop or the underlying CSS.

* For the best user experience, make sure the content of each tab is relevant and not too long.
