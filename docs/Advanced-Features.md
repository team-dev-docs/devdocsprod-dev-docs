# Advanced Features

## AI-Powered Documentation Generation

Dev-Docs leverages advanced AI capabilities to automatically generate comprehensive documentation for your codebase. Some key features include:

- Intelligent analysis of code structure and patterns
- Natural language summaries of functions, classes and modules  
- Automatic generation of code examples and usage instructions
- Ability to ask questions about your code and receive AI-generated answers

To customize the AI generation, you can modify options in your `dev-docs.json` file:

```json
{
  "ai": {
    "contextDirs": ["src", "lib"],
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "contextPrompt": "Generate comprehensive API documentation"
  }
}
```

## Multi-File Context Generation 

Generate high-level context summaries for entire folders or multiple files at once using the "Generate Context for Multiple Documents" command. This is useful for quickly understanding the purpose and structure of different parts of your project.

## OpenAPI Specification Generation

Automatically generate OpenAPI (Swagger) specifications from your API code using the `devdocs.generateAPIDocumentation` command. This creates a Postman collection and OpenAPI spec to document your API endpoints.

## Markdown Documentation Mode

Enable Markdown mode to write documentation directly alongside your code while keeping it visually separate. Use the "Turn on Markdown Mode" command to activate this feature.

## Missing Documentation Detection

The "Find Missing Documentation" command uses AI to analyze your existing docs and codebase to identify potential documentation gaps. It will suggest new documentation topics and create GitHub issues for each suggestion.

## Cloud Sync and Collaboration

Sync your Dev-Docs to the Dev-Docs Cloud to enable team collaboration on documentation. Use the Dev-Docs web application to manage your documentation wiki across your organization.

## Customizable Documentation Templates

Create custom documentation templates to standardize the structure and formatting of your generated docs. Specify template locations in your `dev-docs.json`:

```json
{
  "ai": {
    "components": {
      "template": "docs/templates/component.md"
    }
  }
}
```

## Integration with CI/CD 

Integrate Dev-Docs into your CI/CD pipelines to automatically generate and update documentation on every code change or release. This ensures your docs always stay in sync with your codebase.

For more details on these advanced features, refer to the specific command documentation or reach out to Dev-Docs support.