# Getting Started with Dev-Docs

This guide will help you quickly set up and start using Dev-Docs to generate documentation for your codebase.

## Installation

1. Install the Dev-Docs extension for VS Code from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=dev-docs.dev-docs).

2. Open your project in VS Code.

## Configuration

1. Create a `dev-docs.json` file in the root of your project. This file will contain configuration options for Dev-Docs.

2. Add basic configuration to `dev-docs.json`:

```json
{
  "ai": {
    "contextDirs": ["src", "lib"],
    "internalTypeFilters": ["class", "method", "function"],
    "docSubFolder": "api/"
  }
}
```

Adjust the `contextDirs` to match your project structure.

## Generating Documentation

### For a Single File

1. Open the file you want to document.
2. Press `Shift + Cmd + D` (Mac) or `Shift + Ctrl + D` (Windows/Linux).
3. Dev-Docs will generate documentation for the file.

### For Multiple Files

1. Right-click on a folder in the VS Code Explorer.
2. Select "Generate High Level Context for the Folder".
3. Dev-Docs will analyze the folder and generate documentation.

### For External Documentation

1. Open the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`).
2. Type "Populate External Docs" and select the command.
3. Follow the prompts to generate external documentation.

## Viewing Generated Documentation

Generated documentation will be saved in the `docs` folder (or the folder specified by `docSubFolder` in your configuration).

## Using AI-Powered Features

1. To ask questions about your codebase:
   - Open the Command Palette.
   - Type "Ask Dev-Docs A Question" and select the command.
   - Enter your question when prompted.

2. To find missing documentation:
   - Open the Command Palette.
   - Type "Find Missing Documentation" and select the command.
   - Dev-Docs will analyze your project and suggest areas that need documentation.

## Next Steps

- Explore the [VS Code Commands](docs/VS%20Code%20Commands) documentation for more advanced features.
- Customize your `dev-docs.json` file to tailor the documentation generation to your project's needs.
- Use the "Generate API Documentation from Codebase" command to automatically create API documentation.

For more detailed information on each feature, refer to the specific command documentation in the [docs](docs/) folder.