
  
  # **Generate Documentation from Code**

This VSCode extension command allows you to generate documentation directly from your codebase. It analyzes your code and generates comprehensive documentation, including descriptions, parameters, return values, and examples for functions, classes, and other code elements.

## Why should I use this VSCode Extension Command?

Generating documentation directly from code has several advantages:

1. **Accuracy**: The documentation is derived from the actual code, ensuring that it is always up-to-date and accurate.
2. **Consistency**: The documentation follows a consistent format, making it easier to read and understand.
3. **Time-saving**: Manually writing documentation can be time-consuming and prone to errors. This command automates the process, saving you valuable time and effort.
4. **Maintainability**: When you make changes to your code, the documentation can be easily regenerated to reflect those changes.

## What are relevant configuration Options in the `dev-docs.json`?

The relevant configuration options in the `dev-docs.json` file are:

1. **ai.variablesAndFunctions**: This option allows you to configure prompts for documenting variables and functions.
2. **ai.components.template**: Specifies the path to a markdown file that serves as a template for the generated documentation.
3. **ai.docPath**: Defines the custom path where the generated documentation will be stored.
4. **ai.branch**: Specifies the Git branch where the generated documentation will be committed and pushed.
5. **ai.internalTypeFilters**: Filters the types of code elements (e.g., classes, functions, variables) to be included in the documentation.
6. **ai.codeFilters**: Filters the code elements based on specific patterns (e.g., `async function`, `export default`).
7. **ai.nameFilters**: Filters the code elements based on their names (e.g., `handleSubmit`, `render`).
8. **ai.populateDoc**: Specifies the path to the template file used for generating the documentation.
9. **ai.docSubFolder**: Defines the subfolder where the generated documentation will be stored.
10. **ai.contextDirs**: Specifies directories to be included in the documentation generation process.
11. **ai.mappings**: Defines mappings between files/folders and their corresponding documentation locations.
12. **ai.openapi.file**: Specifies the path to the OpenAPI specification file for generating API documentation.
13. **ai.openapi.x-codeSamples.langs**: Defines the programming languages for which code samples should be generated in the API documentation.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "variablesAndFunctions": {
      "myFunction": {
        "prompts": [
          {
            "title": "What does myFunction do?",
            "question": "Explain the purpose and functionality of the myFunction function.",
            "documentation": "myFunction is a utility function that performs xyz..."
          }
        ]
      }
    },
    "components": {
      "template": "docs/template.md"
    },
    "docPath": "docs/generated",
    "branch": "main",
    "internalTypeFilters": ["function", "class"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "populateDoc": "docs/template.md",
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

Before using this command, ensure that you have the following prerequisites:

1. The VSCode extension "Dev-Docs" installed and configured.
2. A `dev-docs.json` configuration file present in your project root directory, with the relevant options set according to your requirements.
3. Your codebase is structured in a way that can be analyzed by the extension (e.g., following common coding conventions and practices).

## How do I use this VSCode Extension Command?

To generate documentation from your code using the "Dev-Docs" extension, follow these steps:

1. Open your project in Visual Studio Code.
2. Navigate to the desired file or directory for which you want to generate documentation.
3. From the Command Palette (Ctrl+Shift+P on Windows/Linux, or Cmd+Shift+P on macOS), search for and select the "Generate Documentation" command.
4. If prompted, select the specific code elements (e.g., functions, classes) for which you want to generate documentation.
5. The extension will analyze your code and generate documentation based on the configuration options specified in the `dev-docs.json` file.
6. The generated documentation will be saved in the location specified by the `ai.docPath` and `ai.docSubFolder` configuration options.

By following this process, you can easily keep your documentation up-to-date and consistent with your codebase, saving valuable time and effort. Additionally, the "Dev-Docs" extension provides various other commands and features to enhance your documentation workflow, such as generating API documentation, auditing existing documentation, and more.
  
  