# Dev-Docs Quick Start Guide

This guide will help you get started with Dev-Docs quickly.

## Installation

1. Install the Dev-Docs VS Code extension from the marketplace.
2. Sign in to Dev-Docs in VS Code.

## Generating Documentation

1. Open a code file you want to document.
2. Press Shift+Cmd+D (Mac) or Shift+Ctrl+D (Windows/Linux) to generate documentation.
3. Review and edit the generated docs as needed.

## Customizing Generation

1. Create a `dev-docs.json` file in your project root.
2. Add customization options like:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "contextPrompt": "Generate comprehensive API documentation"
  }
}
```

3. Adjust options to fit your project's needs.

## Using the Web Editor

1. Go to the Dev-Docs web app.
2. Use the rich text editor to create and edit markdown docs.
3. Add images, tables, and other elements easily.

## Next Steps

- Explore more features like auditing docs and generating OpenAPI specs.
- Check out the full documentation for advanced usage.