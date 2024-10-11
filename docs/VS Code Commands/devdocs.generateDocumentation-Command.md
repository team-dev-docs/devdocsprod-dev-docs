---
slug: /VS-Code-Commands/Generate-Documentation-for-the-Current-File
---

# Generate Documentation for the Current File

The `devdocs.generateDocumentation` command is a powerful feature of the Dev-Docs VS Code extension that allows you to generate documentation for the current file you have open in the editor. This command leverages the power of AI to analyze your code and automatically create a comprehensive documentation file with detailed explanations, code snippets, and relevant information.

## What Does This VS Code Extension Command Do?

The `devdocs.generateDocumentation` command scans the current file, understands its structure, and generates a new Markdown file with documentation. It covers the following aspects:

<br></br>

1. **Function Documentation**: Detailed explanations for each function, including its purpose, parameters, return values, and examples.
2. **Class Documentation**: Comprehensive documentation for any classes found in the file, covering properties, methods, and constructor details.
3. **Variable Documentation**: Explanations for global variables, constants, and their usage.
4. **Code Snippets**: Relevant code snippets are included to illustrate the usage of functions, classes, and variables.
5. **Context and Usage**: The generated documentation provides context on how the documented components fit into the overall codebase and how they should be used.

## Why Should I Use This VS Code Extension Command?

Generating documentation manually can be a tedious and time-consuming task, especially for large codebases or when working on complex projects. The `devdocs.generateDocumentation` command streamlines this process, saving you valuable time and effort. Here are some key benefits:

<br></br>

1. **Consistency**: The AI-generated documentation ensures a consistent style and level of detail across all documented components.
2. **Accuracy**: By analyzing the code directly, the documentation remains accurate and up-to-date, reducing the chances of outdated or incorrect information.
3. **Productivity**: Instead of spending time writing documentation, you can focus on writing code, knowing that the documentation will be automatically generated.
4. **Onboarding**: Well-documented code makes it easier for new team members or contributors to understand and work with the codebase.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` file contains various configuration options that control the behavior of the Dev-Docs extension, including the documentation generation process. Some relevant options for the `devdocs.generateDocumentation` command include:

<br></br>

1. **ai.internalTypeFilters**: An array of strings specifying which types of code elements (e.g., classes, functions, variables) should be included in the generated documentation.
2. **ai.codeFilters**: An array of strings used to filter out specific code patterns that should not be included in the documentation.
3. **ai.nameFilters**: An array of strings used to filter out specific function or variable names that should not be included in the documentation.
4. **ai.populateDoc**: The path to a Markdown template file that should be used as the basis for the generated documentation.
5. **ai.docSubFolder**: The name of the subfolder within the project where the generated documentation files should be saved.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function", "variable"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "populateDoc": "docs/template.md",
    "docSubFolder": "api-reference"
  }
}
```

## Prerequisites

To use the `devdocs.generateDocumentation` command, you need to have the Dev-Docs VS Code extension installed and configured correctly. Additionally, make sure you have the necessary permissions to create and write files in the project directory.

## How Do I Use This VS Code Extension Command?

Using the `devdocs.generateDocumentation` command is straightforward:

<br></br>

1. Open the file you want to generate documentation for in the VS Code editor.
2. Press the configured keyboard shortcut for the command (e.g., `Shift+Cmd+D` on macOS, `Shift+Ctrl+D` on Windows/Linux), or navigate to the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and search for "Generate Documentation."
3. The extension will analyze the current file and generate a new Markdown file with the documentation in the specified `docSubFolder` location.
4. Once the documentation file is generated, it will be stored as a new Markdown file in the dev-docs folder wher eyou can review and make any necessary adjustments or additions.

<br></br>

By using the `devdocs.generateDocumentation` command, you can ensure that your codebase is well-documented, making it easier for others (and your future self) to understand and maintain the code. Additionally, the generated documentation can serve as a valuable reference for developers working on the project, improving collaboration and productivity.
  
  