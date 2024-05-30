# Generate Documentation

The `devdocs.generateDocumentation` command is used to automatically generate documentation for your codebase. It leverages the power of AI to analyze your code and produce comprehensive documentation, making it easier for developers to understand and maintain the codebase.

## Why should I use this Vs Code Extension Command?

Generating documentation manually can be a time-consuming and error-prone process, especially for large codebases. This command automates the documentation process, saving you valuable time and ensuring that the documentation is always up-to-date with the latest changes in your code.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant for the `devdocs.generateDocumentation` command:

- `ai.variablesAndFunctions`: This option allows you to specify prompts for documenting variables and functions in your code.
- `ai.components.template`: The path to the Markdown template file used for generating the documentation.
- `ai.internalTypeFilters`: An array of types to include or exclude when generating documentation.
- `ai.codeFilters`: An array of code patterns to filter when generating documentation.
- `ai.nameFilters`: An array of name patterns to filter when generating documentation.
- `ai.populateDoc`: The path to the Markdown file where the generated documentation will be written.
- `ai.docSubFolder`: The subdirectory where the generated documentation will be stored.
- `ai.contextDirs`: An array of directories to include when generating context for the documentation.
- `ai.mappings`: An array of mappings between files/folders and their corresponding documentation sections in the cloud.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "variablesAndFunctions": {
      "myFunction": {
        "prompts": [
          {
            "title": "What does this function do?",
            "question": "Explain the purpose and functionality of the myFunction function.",
            "documentation": "This function..."
          }
        ]
      }
    },
    "components": {
      "template": "docs/template.md"
    },
    "internalTypeFilters": ["function", "class"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "populateDoc": "docs/generated.md",
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
    ]
  }
}
```

## Prerequisites

Before using the `devdocs.generateDocumentation` command, ensure that you have:

1. Installed the Dev-Docs VSCode extension.
2. Configured the `dev-docs.json` file with the appropriate options for your project.
3. Set up any required authentication or integration with external services (e.g., GitHub, cloud storage).

## How do I use this Vs Code Extension Command?

To generate documentation using the `devdocs.generateDocumentation` command, follow these steps:

1. Open the command palette in VSCode (Ctrl+Shift+P or Cmd+Shift+P).
2. Search for and select the "Generate Documentation" command.
3. The extension will analyze your codebase based on the configured options in `dev-docs.json`.
4. The generated documentation will be written to the specified file or location.

Additionally, you can bind this command to a keyboard shortcut for easier access. The shortcut for this command is `Shift+Cmd+D` on macOS, `Shift+Ctrl+D` on Windows and Linux.

The generated documentation will provide a comprehensive overview of your codebase, including detailed information about functions, classes, and other relevant components. This documentation can be particularly useful for onboarding new developers, maintaining existing code, and serving as a reference for future development.
  
  