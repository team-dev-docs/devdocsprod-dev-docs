
  
# Automatic Documentation Generation

## What does this extension command do?

This extension command, triggered by the `devdocs.generateDocumentation` command, is responsible for generating documentation for code symbols (variables, functions, classes, etc.) in the current open file or specified file. It leverages an AI service to provide concise explanations and additional details based on configurable prompts defined in the `dev-docs.json` file.

## Why should I use this extension command?

Generating documentation for code can be a time-consuming and tedious task, especially for large codebases or complex functions. This extension automates the process, saving developers time and effort. It can be particularly useful in scenarios where documentation is lacking or outdated, or when onboarding new team members who need to quickly understand the codebase.

## What are relevant configuration options in the `dev-docs.json`?

The `dev-docs.json` file contains configuration options that control the behavior of the documentation generation process. Some relevant options include:

- `quickDoc.variablesAndFunctions.prompts`: An array of prompts that will be used to generate additional context and explanations for each code symbol.
- `ai.internalTypeFilters`: An array of strings representing the types of code symbols to include in the documentation generation (e.g., `variable`, `function`, `class`).
- `customRoot`: A custom root directory for the project, if different from the workspace root.
- `workspaceRoot`: The root directory of the current workspace.

## Example JSON of relevant `dev-docs.json` options

```json
{
  "quickDoc": {
    "variablesAndFunctions": {
      "prompts": [
        {
          "title": "When should this be used?",
          "question": "When should ${symbol.name} be used?"
        },
        {
          "title": "Examples",
          "question": "Can you provide some examples of how to use ${symbol.name}?"
        }
      ]
    }
  },
  "ai": {
    "internalTypeFilters": [
      "variable",
      "function"
    ]
  },
  "customRoot": "/path/to/custom/root",
  "workspaceRoot": "/path/to/workspace/root"
}
```

## Prerequisites

- This extension requires an active connection to an AI service for generating documentation content.
- The `dev-docs.json` configuration file should be present in the workspace root directory.

## How do I use this extension command?

1. Open a file or directory in Visual Studio Code that contains the code you want to generate documentation for.
2. Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on macOS).
3. Search for and select the `DevDocs: Generate Documentation` command.
4. The extension will analyze the code symbols in the current file or specified file, and generate documentation based on the configured prompts and AI service responses.
5. The generated documentation will be displayed in the output panel or saved to a separate file, depending on the extension's configuration.

By automating the documentation generation process, this extension aims to improve code maintainability, facilitate knowledge sharing, and streamline the overall development workflow.
  
  