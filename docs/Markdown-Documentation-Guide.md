# Markdown Documentation Guide for Dev-Docs

This guide provides an overview of using Markdown to create documentation with Dev-Docs.

## Basic Markdown Syntax

### Headers

Use `#` symbols to create headers:

```
# Header 1
## Header 2
### Header 3
```

### Emphasis

*Italics*: Surround text with single asterisks or underscores
**Bold**: Use double asterisks or underscores

### Lists

Unordered lists use asterisks, plus signs, or hyphens:

* Item 1
* Item 2
  * Subitem 2.1

Ordered lists use numbers:

1. First item
2. Second item

### Links

[Link text](URL)

### Images

![Alt text](image-url)

### Code

Inline code uses backticks: `code`

Code blocks use triple backticks:

```
function example() {
  console.log("Hello world");
}
```

## Dev-Docs Specific Features

### Custom Components

Use triple curly braces to insert custom Dev-Docs components:

{{{component-name}}}

### Variables

Reference variables defined in your dev-docs.json file:

{{variable-name}}

### Code Snippets

Insert code snippets from your project:

{{{code path/to/file.js}}}

## Best Practices

- Use clear, descriptive headers
- Include code examples where relevant
- Link to other docs when referencing related topics
- Use images and diagrams to illustrate complex concepts
- Keep documentation up-to-date as code changes

For more details on Markdown syntax, refer to the [official Markdown guide](https://www.markdownguide.org/).