
  
  # **Outline and Documentation Generator**

## What does this Vs Code Extension Command do?

This Visual Studio Code extension command helps you generate an outline and documentation for your codebase. It analyzes the symbols (variables, functions, classes, etc.) in your code files and provides a structured representation of them. Additionally, it allows you to document these symbols by prompting you with relevant questions based on the configuration in your `dev-docs.json` file.

## Why should I use this Vs Code Extension Command?

Using this extension command can significantly improve the maintainability and understanding of your codebase. By generating an outline, you can quickly grasp the structure and organization of your code, making it easier to navigate and understand. The documentation feature helps you capture important details about your code elements, such as their purpose, usage, and any relevant examples or edge cases. This documentation can be invaluable for future reference, collaboration, and onboarding new team members.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` file allows you to customize the behavior of the extension command. Here are some relevant configuration options:

- `quickDoc.variablesAndFunctions.prompts`: An array of prompts that will be presented for each symbol to help you document it. Each prompt should have a `question` and a `title`.
- `excludedExpressions`: An array of regular expressions that specify code patterns to be excluded from the outline and documentation.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "quickDoc": {
    "variablesAndFunctions": {
      "prompts": [
        {
          "question": "What does this function/variable do?",
          "title": "Description"
        },
        {
          "question": "What are the input parameters and their purpose?",
          "title": "Input Parameters"
        },
        {
          "question": "What is the expected output or return value?",
          "title": "Output/Return Value"
        }
      ]
    }
  },
  "excludedExpressions": [
    "/.test.js/",
    "/node_modules/"
  ]
}
```

## Prerequisites

- Visual Studio Code
- This extension installed and enabled

## How do I use this Vs Code Extension Command?

1. Open a folder in Visual Studio Code that contains the codebase you want to document.
2. Ensure you have a `dev-docs.json` file in the root directory of your workspace, with the desired configuration options.
3. Open the Command Palette in Visual Studio Code (Ctrl+Shift+P or Cmd+Shift+P).
4. Search for and run the command `Dev Docs: Generate Outline and Documentation`.
5. The extension will analyze your code files and present you with a list of symbols (variables, functions, classes, etc.).
6. For each symbol, you will be prompted with the questions defined in the `dev-docs.json` file under `quickDoc.variablesAndFunctions.prompts`.
7. Provide the documentation for each symbol by answering the prompts.
8. Once you have documented all the desired symbols, the extension will generate a markdown file with the outline and documentation.

By following these steps, you can quickly generate a comprehensive outline and documentation for your codebase, improving its maintainability and understanding for yourself and your team.
  
  