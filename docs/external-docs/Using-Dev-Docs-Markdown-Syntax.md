---
sidebar_position: 7
---

# Using Dev-Docs Markdown Syntax

## Dev-Docs Markdown

If you want to use extra Dev-Docs functionality but write your documentation in a code editor, then this is the right option for you. Dev-Docs' markdown gives you the same familiarity with regular markdown, but with three main benefits:

- Custom Dev-Docs Components
- Custom Styling and Classes
- Don't need to leverage React

Just go to add any MD file to your <code>docs</code> folder and use the VS Code command: <code>Use Dev Docs Syntax</code>. It creates the simple shorthand to write your markdown. From there you should be good to go.

## Custom Components

Dev-Docs provides several custom components to enhance your documentation. Here are a few examples:

### Tabs

You can create tabbed content using the following syntax:

```markdown
:::tabs
::tab{label="JavaScript"}
```javascript
console.log("Hello from JavaScript!");
```
::

::tab{label="Python"}
```python
print("Hello from Python!")
```
::
:::
```

### Admonitions

Admonitions are callout boxes that help highlight important information:

```markdown
:::note
This is a note admonition.
:::

:::warning
This is a warning admonition.
:::

:::danger
This is a danger admonition.
:::
```

## Custom Styling

Dev-Docs allows you to apply custom styles to your markdown content. Here's an example:

```markdown
:::{.custom-class}
This content will have a custom class applied to it.
:::

:::{style="color: blue; font-weight: bold;"}
This text will be blue and bold.
:::
```

These custom components and styling options make your documentation more interactive and visually appealing, while still allowing you to work within the familiar markdown syntax.