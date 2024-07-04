---
slug: /VS-Code-Commands/Managing-Documentation-Dev-Docs-VS-Code-Extension
---

# Creating and Managing Documentation with the Dev-Docs VS Code Extension

The Dev-Docs VS Code extension is a powerful tool that helps developers create, manage, and maintain documentation for their codebase directly within Visual Studio Code. This extension leverages AI technologies to generate high-quality documentation automatically, making it easier for developers to keep their documentation up-to-date and in sync with their code changes.

## What does this VS Code Extension do?

The Dev-Docs VS Code extension provides a range of features to streamline the documentation process, including:

1. **Automatic Documentation Generation**: The extension can analyze your codebase and generate comprehensive documentation for various elements, such as functions, classes, and modules, using AI-powered natural language generation.

2. **Outline and Context Generation**: Dev-Docs can generate outlines and high-level context for specific files or entire folders, helping you understand the structure and purpose of your code more easily.

3. **External Documentation Management**: In addition to generating internal documentation within your codebase, Dev-Docs allows you to create and manage external documentation pages, which can be hosted on platforms like Dev-Docs Cloud or GitHub Pages.

4. **AI-Assisted Editing**: The extension provides AI-powered code completion and text generation capabilities, making it easier to write and edit documentation directly within VS Code.

5. **Version Control Integration**: Dev-Docs integrates with Git, allowing you to track changes to your documentation and collaborate with your team more effectively.

## Why should I use this VS Code Extension?

Maintaining up-to-date and comprehensive documentation is crucial for software development projects, but it can be a time-consuming and tedious task. The Dev-Docs VS Code extension helps alleviate this burden by automating many aspects of the documentation process, saving you valuable time and effort. Additionally, by leveraging AI technologies, Dev-Docs ensures that your documentation is accurate, consistent, and aligned with your codebase.

## What are relevant configuration options in the `dev-docs.json`?

The `dev-docs.json` file is the central configuration file for the Dev-Docs extension. Here are some of the most relevant configuration options:

1. **quickDoc**: Configures the prompts and behavior for generating quick documentation for variables and functions.
2. **ai**: Defines the prompts, templates, and filters for AI-assisted documentation generation.
   - **variablesAndFunctions**: Configures prompts for documenting variables and functions in specific code files and directories.
   - **components**: Specifies the template file for generating documentation for components.
   - **docPath**: Sets the custom path for storing generated documentation.
   - **internalTypeFilters**: Filters the types of code elements to include in the generated documentation.
   - **codeFilters**: Filters code elements based on specific patterns in the code.
   - **nameFilters**: Filters code elements based on their names.
   - **openapi**: Configures the OpenAPI specification file and code sample languages for API documentation.
3. **customRoot**: Specifies the custom root directory for your project.
4. **workspaceRoot**: Sets the workspace root directory for your project.

## Example JSON of relevant `dev-docs.json` options

```json
{
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
  "ai": {
    "variablesAndFunctions": {
      "yourfilename.js": {
        "prompts": [
          {
            "title": "Describe the variable/function",
            "question": "What does this variable/function do?",
            "documentation": "Provide a brief description of the purpose and functionality of the variable or function."
          }
        ]
      }
    },
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"]
  }
}
```

## Prerequisites

Before using the Dev-Docs VS Code extension, make sure you have the following prerequisites:

1. Visual Studio Code installed on your machine.
2. The Dev-Docs VS Code extension installed and enabled.
3. A `dev-docs.json` configuration file in your project root (optional but recommended for advanced usage).

## How do I use this VS Code Extension?

Using the Dev-Docs VS Code extension is straightforward and can be done in several ways:

1. **Command Palette**: Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and search for the desired Dev-Docs command, such as "Generate Documentation" or "Create External Doc Page".

2. **Context Menu**: Right-click on a file or folder in the Explorer pane and select the relevant Dev-Docs command from the context menu.

3. **Keyboard Shortcuts**: Use the predefined keyboard shortcuts for common Dev-Docs commands. For example, `Shift+Cmd+D` (Mac) or `Shift+Ctrl+D` (Windows/Linux) to generate documentation for the current file or selection.

4. **Dev-Docs View**: Open the Dev-Docs view in the Activity Bar and interact with the available commands and options directly from the view.

When generating documentation, Dev-Docs will analyze your code and present you with prompts or templates to provide additional context or descriptions. Once the documentation is generated, you can review and edit it directly within VS Code.

For external documentation, Dev-Docs provides commands to create new pages, manage existing ones, and publish your documentation to platforms like Dev-Docs Cloud or GitHub Pages.

Remember, the power of Dev-Docs lies in its ability to streamline the documentation process and keep your documentation in sync with your codebase. By leveraging AI technologies and integrating with your development workflow, Dev-Docs aims to make maintaining high-quality documentation a more efficient and enjoyable experience.
