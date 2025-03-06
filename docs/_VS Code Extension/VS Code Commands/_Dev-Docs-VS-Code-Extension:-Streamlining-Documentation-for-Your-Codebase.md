# Dev-Docs VS Code Extension: Streamlining Documentation for Your Codebase

The Dev-Docs VS Code extension helps developers streamline the process of creating and managing documentation for their codebase. This guide provides an overview of key features and how to use them.

## Key Features

### Automatic Documentation Generation

![Auto-generate docs](https://example.com/auto-generate-docs.png)

The extension can automatically generate documentation by analyzing your code and extracting relevant information.

### AI-Assisted Editing 

![AI editing](https://example.com/ai-editing.png)

Get AI-powered suggestions and auto-completion as you write documentation to improve quality and consistency.

### External Documentation Management

![External docs](https://example.com/external-docs.png)

Easily manage external documentation separate from your code while keeping it in sync.

### Version Control Integration

![Version control](https://example.com/version-control.png)

Documentation changes are tracked alongside code changes in your version control system.

## Using the Extension

1. Install the Dev-Docs extension from the VS Code marketplace
2. Open your project in VS Code 
3. Access Dev-Docs commands via:
   - Command palette (Cmd/Ctrl + Shift + P)
   - Context menu (right-click)
   - Dev-Docs sidebar

![Accessing commands](https://example.com/accessing-commands.png)

4. Configure options in dev-docs.json file
5. Use commands like "Generate Docs" to create documentation

## Configuration Options

Key options in dev-docs.json:

```json
{
  "ai": {
    "components": {
      "template": "path/to/template.md"  
    },
    "docPath": "docs/api",
    "branch": "main"
  }
}
```

Customize settings to fit your project's documentation needs.