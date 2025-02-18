# Dev-Docs Quick Start Guide

## 1. Install the VS Code Extension

Install the [Dev-Docs VS Code extension](https://marketplace.visualstudio.com/items?itemName=dev-docs.dev-docs) from the Visual Studio Code Marketplace.

## 2. Set Up Your Repository

1. Open your project in VS Code
2. Click the Dev-Docs icon in the Activity Bar
3. Click "Setup my repo"
4. Click "Generate Context" to create initial documentation

## 3. Generate Documentation

### From VS Code:
1. Right-click in a code file
2. Select "Generate Documentation" 
3. Or use the shortcut: 
   - Mac: `Shift + Command + D`
   - Windows/Linux: `Shift + Ctrl + D`

### From GitHub:
1. Install the Dev-Docs GitHub App
2. Configure your `dev-docs.json` file:

```json
{
  "gitHubApp": {
    "workflows": ["generateDocs"]
  }
}
```

3. Commit and push changes to trigger automatic doc generation

## 4. Customize Generation

Edit `dev-docs.json` to customize AI-powered doc generation:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "contextPrompt": "Generate comprehensive API documentation",
    "defaultLength": "3-5 Sentences"
  }
}
```

## 5. View and Edit Documentation

1. Check the `docs` folder for generated Markdown files
2. Use the web editor to make changes and add content
3. Leverage AI features like "Generate Content from Existing Content"

For more details, see the [full documentation](https://dev-docs.io/docs).