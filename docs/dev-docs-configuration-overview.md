

  # Overview of the dev-docs.json Configuration

The `dev-docs.json` file is a crucial configuration file for the Dev-Docs VS Code extension. It allows you to customize various aspects of the documentation generation process and control how the extension interacts with your codebase. Here's an overview of the key configuration options:

## Structure

The `dev-docs.json` file is structured as a JSON object with several top-level properties:

```json
{
  "ai": {
    // AI-related configuration options
  },
  "quickDoc": {
    // Quick documentation generation options
  },
  "customRoot": "path/to/custom/root",
  "workspaceRoot": "/absolute/path/to/workspace"
}
```

## Key Configuration Options

| Option | Description | Example |
|--------|-------------|---------|
| `ai.internalTypeFilters` | Specifies types of code elements to include in documentation | `["class", "function", "interface"]` |
| `ai.codeFilters` | Filters code elements based on specific patterns | `["async function", "export default"]` |
| `ai.nameFilters` | Filters code elements based on their names | `["handleSubmit", "render"]` |
| `ai.docPath` | Sets the custom path for storing generated documentation | `"docs/api-reference"` |
| `ai.branch` | Specifies the Git branch for documentation changes | `"main"` |
| `ai.components.template` | Path to the markdown template for documentation | `"docs/templates/component.md"` |
| `ai.openapi.file` | Path to the OpenAPI YAML file for API documentation | `"src/api/openapi.yaml"` |
| `quickDoc.variablesAndFunctions` | Configures prompts for quick documentation | (see example below) |
| `customRoot` | Specifies the custom root directory for the project | `"packages/my-package"` |
| `workspaceRoot` | Sets the absolute path to the workspace root | `"/path/to/project"` |

## Example Configuration

Here's a more comprehensive example of a `dev-docs.json` file:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "function", "interface"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "docPath": "docs/api-reference",
    "branch": "main",
    "components": {
      "template": "docs/templates/component.md"
    },
    "openapi": {
      "file": "src/api/openapi.yaml",
      "x-codeSamples": {
        "langs": ["javascript", "python", "ruby"]
      }
    },
    "variablesAndFunctions": {
      "myFunction": {
        "prompts": [
          {
            "title": "What does this function do?",
            "question": "Explain the purpose and functionality of the `myFunction` function.",
            "documentation": "This function performs a specific task..."
          }
        ]
      }
    }
  },
  "quickDoc": {
    "variablesAndFunctions": {
      "prompts": [
        {
          "title": "Describe the variable/function",
          "question": "What does this variable/function do?"
        }
      ]
    }
  },
  "customRoot": "packages/my-package",
  "workspaceRoot": "/path/to/project"
}
```

This configuration file provides a comprehensive setup for the Dev-Docs extension, allowing you to fine-tune the documentation generation process, specify file locations, and customize the behavior of various commands within the extension.

  