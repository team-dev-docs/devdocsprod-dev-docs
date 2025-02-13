---
sidebar_position: 2
---

# Setting up the VS Code Extension

Dev-Docs is a powerful VS Code extension that helps you generate and manage documentation for your codebase. This guide will walk you through the basic setup and usage to get you up and running quickly.

## Installation

1. Open VS Code
2. Go to the Extensions view (Ctrl+Shift+X)
3. Search for "Dev-Docs"
4. Click "Install"

## Initial Setup

1. Open your project folder in VS Code
2. Press Ctrl+Shift+P to open the Command Palette
3. Type "Dev-Docs: Initialize" and select it
4. This will create a `dev-docs.json` file in your project root

## Generating Documentation

1. Open a code file you want to document
2. Press Shift+Cmd+D (Mac) or Shift+Ctrl+D (Windows/Linux)
3. Dev-Docs will analyze your code and generate documentation

## Customizing Generation

Edit the `dev-docs.json` file to customize how Dev-Docs generates documentation:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "docSubFolder": "api/",
    "contextPrompt": "Generate comprehensive API documentation"
  }
}
```

## Viewing Documentation

Generated docs will be saved in your project's `docs` folder (or the folder specified in `docSubFolder`).

## Next Steps

- Explore other commands like "Generate High Level Context" and "Find Missing Documentation"
- Check out the full documentation at https://dev-docs.ai for advanced features and customization options

With these basic steps, you're ready to start using Dev-Docs to streamline your documentation process!