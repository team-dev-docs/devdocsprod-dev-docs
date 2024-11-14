

  # Using the CodeSnippets Component

The CodeSnippets component allows you to display multiple code snippets in different languages using a tabbed interface. This is useful for showing equivalent code examples across multiple programming languages or contexts.

## Basic Usage

To use the CodeSnippets component, wrap your code blocks with the `<CodeSnippets>` tag:

```jsx
import CodeSnippets from '@site/src/components/CodeSnippets';

<CodeSnippets>
  {/* Your code blocks go here */}
</CodeSnippets>
```

## Supported Languages and Formatting

The CodeSnippets component supports any language that can be represented in a ````
` block with syntax highlighting. The language and optional context are specified in the `className` attribute of the `<pre>` element.

### Syntax

The format for specifying language and context is:

```
language-[language]::[context]
```

Where:
- `[language]` is the programming language identifier
- `[context]` is an optional descriptor for the code snippet (e.g. "client", "server", etc.)

### Examples

Here are some examples of how to format your code blocks:

```jsx
<CodeSnippets>
  <pre className="language-javascript::client">
    {`
    // JavaScript client-side code
    fetch('/api/data')
      .then(response => response.json())
      .then(data => console.log(data));
    `}
  
```

  ```

    {`
    # Python server-side code
    @app.route('/api/data')
    def get_data():
        return jsonify({'message': 'Hello from the server!'})
    `}
  
```

</CodeSnippets>
```

This will create a tabbed interface with two tabs: "javascript client" and "python server".

## Customization

The CodeSnippets component uses the `Tabs` component from the UI library for its tabbed interface. You can customize the appearance by modifying the CSS classes applied to the component.

Key customization points include:

- The outer `<div>` has a class of `mt-[1em]` for margin-top spacing
- The `<TabsContent>` elements have a class of `mt-2` for spacing between the tabs and content

To further customize the appearance, you can modify the `CodeSnippets.jsx` file or override the styles in your CSS.

## Limitations and Considerations

- The component expects `<pre>` elements as direct children or nested within its children.
- Each code block must have a unique combination of language and context to function as separate tabs.
- The first tab is selected by default. You can change this by modifying the `defaultValue` prop of the `<Tabs>` component in the source code.

By using the CodeSnippets component, you can create more interactive and language-specific documentation that allows users to easily switch between different code examples.

  