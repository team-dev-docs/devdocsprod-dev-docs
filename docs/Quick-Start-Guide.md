# Dev-Docs Quick Start Guide

This guide will help you get started with Dev-Docs in about 5 minutes.

## Installation

1. Install the [Dev-Docs VS Code extension](https://marketplace.visualstudio.com/items?itemName=dev-docs.dev-docs) from the VS Code marketplace.

2. Open your project in VS Code.

## Setup

1. Open the Command Palette (Cmd+Shift+P on Mac, Ctrl+Shift+P on Windows/Linux).

2. Type "Dev-Docs: Setup my repo" and run the command.

3. This will create a `dev-docs.json` file in your project root.

## Generate Documentation

1. Right-click on a file or folder in the VS Code Explorer.

2. Select "Generate Documentation" from the context menu.

3. The generated documentation will appear in the `docs` folder.

## Customize Generation

Edit the `dev-docs.json` file to customize documentation generation:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "docSubFolder": "api/",
    "merge": true
  }
}
```

## Ask Questions

1. Open the Command Palette.

2. Type "Ask Dev-Docs A Question" and run the command.

3. Enter your question about the codebase.

4. View the AI-generated answer in VS Code.

For more detailed information, check out the [full documentation](https://docs.dev/).