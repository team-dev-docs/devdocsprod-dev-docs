# Advanced Features of Dev-Docs

## Customizing AI Generation

The Dev-Docs VS Code extension allows you to customize how AI generates documentation through the `dev-docs.json` configuration file. Some key options include:

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
- `defaultLength`: Set desired documentation length

## Generating API Documentation

Use the `devdocs.generateAPIDocumentation` command to automatically generate API docs:

1. It analyzes your codebase to identify API routes
2. Creates a Postman Collection JSON file of all routes
3. Generates an OpenAPI (Swagger) specification

Configure the output location in `dev-docs.json`:

```json
{
  "ai": {
    "openapi": {
      "file": "src/api/openapi.yaml"
    }
  }
}
```

## Finding Missing Documentation  

The `devdocs.findMissingDocs` command uses AI to:

1. Analyze existing docs and code
2. Identify gaps in documentation coverage  
3. Suggest titles for new doc pages
4. Create GitHub issues for each suggestion

This helps maintain comprehensive documentation as your project grows.

## Asking Questions About Your Code

Use the `devdocs.askDocs` command to ask natural language questions about your codebase and get AI-generated answers. This can help with:

- Code comprehension
- Debugging assistance
- Documentation help
- Knowledge sharing

Configure custom prompts in `dev-docs.json`:

```json
{
  "ai": {
    "variablesAndFunctions": {
      "myFunction": {
        "prompts": [
          {
            "title": "Purpose",
            "question": "What is the purpose of this function?"
          }
        ]
      }
    }
  }
}
```

## Generating Multi-File Context

The `devdocs.generateMultiContext` command generates high-level summaries for multiple files or directories. Useful for:

- Understanding project structure
- Onboarding new team members
- Code reviews

Configure directories to analyze:

```json
{
  "ai": {
    "contextDirs": ["src", "lib"]
  }
}
```

By leveraging these advanced features, you can significantly enhance your documentation workflow and code comprehension using AI-powered assistance.