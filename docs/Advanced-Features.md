# Advanced Features of Dev-Docs

## Custom AI Prompts

You can customize the AI prompts used to generate documentation by modifying the `ai.variablesAndFunctions` section of your `dev-docs.json` file:

```json
{
  "ai": {
    "variablesAndFunctions": {
      "myCustomPrompt": {
        "prompts": [
          {
            "title": "Purpose",
            "question": "What is the main purpose of this code?",
            "documentation": "Describe the high-level purpose in 2-3 sentences."
          },
          {
            "title": "Usage", 
            "question": "How is this code used?",
            "documentation": "Provide a brief example of how to use this code."
          }
        ]
      }
    }
  }
}
```

## OpenAPI Integration  

Dev-Docs can automatically generate OpenAPI specifications from your API code. Configure the OpenAPI options in your `dev-docs.json`:

```json
{
  "ai": {
    "openapi": {
      "file": "src/api/openapi.yaml",
      "x-codeSamples": {
        "langs": ["javascript", "python", "ruby"]
      }
    }
  }
}
```

## Multi-File Context Generation

Generate high-level context for multiple files or folders at once using the `devdocs.generateMultiContext` command. This is useful for understanding the structure of large projects.

## Custom Documentation Templates

Specify custom Markdown templates for generated documentation:

```json 
{
  "ai": {
    "components": {
      "template": "path/to/custom/template.md"  
    }
  }
}
```

## Automated Missing Docs Detection

Use the `devdocs.findMissingDocs` command to automatically detect gaps in your documentation and create GitHub issues for missing sections.

## Integration with Continue

Dev-Docs integrates seamlessly with the Continue AI code assistant. Use the `@dev-docs` tag in Continue to leverage your generated documentation when asking questions about your codebase.

## Custom Root Directory

For monorepo setups, specify a custom root directory:

```json
{
  "customRoot": "packages/my-package"
}
```

This allows Dev-Docs to properly locate and generate documentation for specific packages or subprojects.