# Quick Start Guide

Welcome to Dev-Docs! Follow these steps to get started:

1. Install the Dev-Docs VS Code extension
2. Open your project in VS Code
3. Right-click on a file and select "Generate Documentation" from the context menu
4. View the generated documentation in the `docs` folder
5. Customize generation by modifying `dev-docs.json` in your project root:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "docSubFolder": "api/",
    "merge": true,
    "externalDocPrompt": "Generate comprehensive API documentation"
  }
}
```

6. Use the command palette (Cmd+Shift+P) and search for "Populate External Docs" to generate full documentation
7. Review and edit the generated docs as needed

For more details, see the full documentation at [dev-docs.io](https://dev-docs.io).