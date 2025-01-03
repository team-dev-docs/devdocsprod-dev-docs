# Getting Started with Dev-Docs

This guide will help you quickly set up and start using Dev-Docs to generate documentation for your codebase.

## Installation

1. Install the Dev-Docs extension for VS Code from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dev-docs.dev-docs).

2. Open your project in VS Code.

## Configuration

1. Create a `dev-docs.json` file in the root of your project with the following basic structure:

```json
{
  "ai": {
    "contextDirs": ["src"],
    "internalTypeFilters": ["class", "method", "function"],
    "docSubFolder": "docs"
  }
}
```

Customize the options as needed for your project.

## Generating Documentation

### For a single file:

1. Open the file you want to document.
2. Press `Shift + Cmd + D` (Mac) or `Shift + Ctrl + D` (Windows/Linux).
3. The generated documentation will appear in the `docs` folder.

### For multiple files:

1. Right-click on a folder in the VS Code Explorer.
2. Select "Generate High Level Context for the Folder".
3. A summary document will be created in the `docs` folder.

### For API documentation:

1. Open your server file containing API routes.
2. Press `Shift + Cmd + A` (Mac) or `Shift + Ctrl + A` (Windows/Linux).
3. Dev-Docs will generate an OpenAPI specification file.

## Viewing and Editing Documentation

1. Navigate to the `docs` folder in your project.
2. Open the generated Markdown files to review and edit as needed.

## Next Steps

- Explore the Dev-Docs VS Code extension commands for more advanced features.
- Customize your `dev-docs.json` file to fine-tune the documentation generation process.
- Set up the Dev-Docs GitHub App for automatic documentation updates on commits.

For more detailed information, refer to the [Dev-Docs documentation](https://docs.dev/).