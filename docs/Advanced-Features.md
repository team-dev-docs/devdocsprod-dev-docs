# Advanced Features

This document covers more advanced features and use cases for the Dev-Docs VS Code extension.

## Customizing AI Generation

You can customize how the AI generates documentation by modifying the `dev-docs.json` file in your project root. Some key options include:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "contextPrompt": "your custom prompt or path to prompt template",
    "defaultLength": "3-5 Sentences"
  }
}
```

- `internalTypeFilters`: Specify which code elements to include in documentation
- `codeFilters`: Filter for specific code patterns
- `nameFilters`: Target specific function or method names  
- `contextPrompt`: Provide a custom prompt for AI generation
- `defaultLength`: Set desired length of generated documentation

## Generating API Documentation

The extension can automatically generate API documentation from your codebase:

1. Open the Command Palette (Cmd+Shift+P / Ctrl+Shift+P)
2. Search for "Generate API Documentation" and select the command
3. The extension will analyze your code and generate:
   - A Postman Collection JSON file with all detected API routes
   - An OpenAPI (Swagger) specification file

You can configure the output location in `dev-docs.json`:

```json
{
  "ai": {
    "openapi": {
      "file": "src/api/openapi.yaml"
    }
  }
}
```

## Multi-File Context Generation

Generate high-level context for multiple files or folders at once:

1. Right-click on a folder in the Explorer view
2. Select "Generate High Level Context for the Folder"
3. The extension will analyze all files and generate a summary document

Configure which directories to include:

```json
{
  "ai": {
    "contextDirs": ["src", "lib", "utils"]
  }
}
```

## AI-Powered Documentation Gap Analysis

Use AI to identify missing documentation:

1. Run the "Find Missing Documentation" command
2. The extension will analyze your codebase and existing docs
3. It will suggest new documentation topics and create GitHub issues for each

## Integration with Continue

Dev-Docs integrates with the Continue AI code assistant:

1. Install both Dev-Docs and Continue extensions
2. Generate context documentation using Dev-Docs
3. In Continue, use @dev-docs to reference the generated documentation when asking questions

This allows for more intelligent, context-aware responses from Continue based on your project's documentation.

By leveraging these advanced features, you can create a powerful, AI-assisted documentation workflow tailored to your project's specific needs.