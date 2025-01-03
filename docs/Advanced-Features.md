# Advanced Features

This guide covers more advanced features and use cases for the Dev-Docs VS Code extension.

## Customizing AI Generation

You can customize how the AI generates documentation by modifying the `dev-docs.json` file in your project root:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "contextPrompt": "Custom prompt or path to prompt template",
    "defaultLength": "3-5 Sentences"
  }
}
```

Key options:
- `internalTypeFilters`: Specify which code elements to document
- `codeFilters`: Filter for specific code patterns 
- `nameFilters`: Target specific function/method names
- `contextPrompt`: Custom prompt for AI generation
- `defaultLength`: Desired length of generated docs

## Generating API Documentation

Use the `devdocs.generateAPIDocumentation` command to automatically generate API docs:

1. Analyzes codebase to identify API routes
2. Creates Postman Collection JSON file
3. Generates OpenAPI/Swagger spec

Configure in `dev-docs.json`:

```json
{
  "ai": {
    "openapi": {
      "file": "src/api/openapi.yaml"
    }
  }
}
```

## Multi-Document Context Generation  

The `devdocs.generateMultiContext` command generates high-level context for multiple files/folders:

1. Right-click folder in Explorer
2. Select "Generate Context for Multiple Documents" 
3. Review generated context in Output panel

Useful for understanding project structure and component purposes.

## Finding Missing Documentation

Use `devdocs.findMissingDocs` to identify gaps in documentation:

1. Analyzes existing docs and code
2. Suggests new documentation topics
3. Creates GitHub issues for missing docs

Helps maintain comprehensive documentation coverage.

## Ask AI Questions About Your Code

The `devdocs.askYourDevDocsAQuestion` command allows you to ask natural language questions:

1. Open Command Palette 
2. Run "Ask Your Dev-Docs A Question"
3. Enter your question
4. View AI-generated response

Leverages your codebase and docs to provide contextual answers.

## In-Editor Markdown Documentation

Enable Markdown mode for writing docs alongside code:

1. Run "Turn on Markdown Mode" command
2. Write documentation in special comment blocks
3. Use Markdown syntax for formatting

Keeps docs close to relevant code while maintaining separation.