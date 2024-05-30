
  
  # **Generate Dev-Docs Configuration**

The `devdocs.generateDocumentation` command in the VS Code extension is used to generate documentation for your codebase based on the configuration specified in the `dev-docs.json` file. This command analyzes your code and creates documentation files following the specified structure and settings.

## Why should I use this VS Code Extension Command?

Generating documentation for your codebase can be a tedious and time-consuming task, especially for large projects. This command automates the process of creating documentation, saving you time and effort. It ensures that your documentation stays up-to-date with your code changes, improving the maintainability and understandability of your project.

## What are relevant configuration options in the `dev-docs.json`?

The `dev-docs.json` file contains various configuration options that control the behavior of the documentation generation process. Some of the relevant options are:

1. `ai.variablesAndFunctions`: Configures the prompts for generating documentation for variables and functions.
2. `ai.components.template`: Specifies the path to the markdown template file used for generating documentation.
3. `ai.docPath`: Sets the custom path for storing generated documentation files.
4. `ai.internalTypeFilters`: Filters the types of code elements (e.g., classes, functions, interfaces) to include in the documentation.
5. `ai.codeFilters`: Filters code elements based on specific code patterns (e.g., `async function`, `export default`).
6. `ai.nameFilters`: Filters code elements based on their names (e.g., `handleSubmit`, `render`).
7. `ai.docSubFolder`: Specifies the subfolder within the documentation directory where generated files will be stored.
8. `ai.contextDirs`: Specifies directories to include when generating context information for the documentation.
9. `ai.mappings`: Defines mappings between code files/folders and the corresponding documentation sections in the cloud.
10. `ai.openapi`: Configures settings for generating API documentation based on an OpenAPI specification file.

## Example JSON of relevant Dev-Docs.json options

Here's an example JSON configuration with some of the relevant options:

```json
{
  "ai": {
    "variablesAndFunctions": {
      "myFunction": {
        "prompts": [
          {
            "title": "What does myFunction do?",
            "question": "Explain the purpose and behavior of the myFunction function.",
            "documentation": "myFunction is a utility function that..."
          }
        ]
      }
    },
    "components": {
      "template": "docs/templates/component.md"
    },
    "docPath": "docs/api-reference",
    "internalTypeFilters": ["function", "class", "interface"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "docSubFolder": "api-reference",
    "contextDirs": ["src/utils", "src/helpers"],
    "mappings": [
      {
        "files": ["src/main.ts"],
        "cloudDir": "Getting Started"
      },
      {
        "folder": ["src/components"],
        "cloudDir": "Components"
      }
    ],
    "openapi": {
      "file": "src/api/openapi.yaml",
      "x-codeSamples": {
        "langs": ["javascript", "python"]
      }
    }
  }
}
```

## Prerequisites

Before using the `devdocs.generateDocumentation` command, make sure you have:

1. Installed the Dev-Docs VS Code extension.
2. Created a `dev-docs.json` configuration file in your project root directory or specified a custom path in the extension settings.
3. Configured the desired options in the `dev-docs.json` file according to your project's requirements.

## How do I use this VS Code Extension Command?

To generate documentation using the `devdocs.generateDocumentation` command, follow these steps:

1. Open your project in VS Code.
2. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3. Search for "Generate Documentation" and select the `devdocs.generateDocumentation` command.
4. The extension will analyze your codebase based on the specified configuration and generate the documentation files in the configured location.

Alternatively, you can use the keyboard shortcut `Shift+Cmd+D` (macOS) or `Shift+Ctrl+D` (Windows/Linux) to trigger the command directly.

The generated documentation files will follow the structure and formatting defined in the configuration, making it easier to navigate and understand your codebase. You can customize the documentation templates and styles to match your project's branding and requirements.
  
  