# Dev-Docs Quick-Start Guide

This guide will help you get started with the Dev-Docs VS Code extension in about 5 minutes.

## Installation

1. Open VS Code
2. Go to the Extensions view (Ctrl+Shift+X)
3. Search for "Dev-Docs"
4. Click Install

## Basic Usage

1. Open a project in VS Code
2. Right-click on a file in the Explorer
3. Select "Generate Documentation" from the context menu
4. The extension will analyze the file and generate documentation

## Configuration

1. Create a `dev-docs.json` file in your project root
2. Add basic configuration:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "docSubFolder": "docs/"
  }
}
```

3. Customize options as needed (see full docs for details)

## Key Features

- Generate documentation for individual files
- Create high-level context for folders
- Populate external docs site
- Ask AI questions about your codebase

## Next Steps

- Explore the Dev-Docs sidebar for more features
- Check out the full documentation at [docs.dev](https://docs.dev) for advanced usage