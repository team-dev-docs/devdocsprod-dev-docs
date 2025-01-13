# Dev-Docs VS Code Extension Quick-Start Guide

## Installation

1. Open VS Code
2. Go to the Extensions view (Ctrl+Shift+X)
3. Search for "Dev-Docs"
4. Click "Install"

## Setup

1. Open your project folder in VS Code
2. Create a `dev-docs.json` file in the root directory with the following basic structure:

```json
{
  "ai": {
    "contextDirs": ["src", "lib"],
    "docSubFolder": "docs"
  }
}
```

## Usage

### Generate Documentation

1. Right-click on a file or folder in the Explorer
2. Select "Generate Documentation" from the context menu
3. The generated docs will appear in your configured `docSubFolder`

### Ask Questions

1. Open the Command Palette (Ctrl+Shift+P)
2. Type "Ask Dev-Docs a Question" and select it
3. Enter your question about the codebase
4. View the AI-generated response

### Find Missing Docs

1. Open the Command Palette (Ctrl+Shift+P) 
2. Type "Find Missing Documentation" and select it
3. Review the suggested doc titles and created GitHub issues

## Next Steps

- Customize your `dev-docs.json` file further
- Explore other commands like "Generate High Level Context"
- Check out the full documentation at [dev-docs.io](https://dev-docs.io)