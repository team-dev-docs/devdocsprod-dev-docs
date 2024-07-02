# Populate Your External Docs

## What does this VS Code Extension Command do?

This VS Code extension command allows you to generate external documentation for your codebase, specifically for methods, classes, and functions. It analyzes your code, identifies relevant symbols (methods, classes, functions), and generates detailed documentation pages for each symbol. These documentation pages are then published to an external location, such as a documentation website or a cloud storage service.

## Why should I use this VS Code Extension Command?

Maintaining up-to-date documentation is crucial for any software project, especially as the codebase grows in size and complexity. This extension automates the process of generating documentation, saving you time and effort. It ensures that your documentation is always in sync with your codebase, reducing the risk of outdated or incomplete information.

## What are relevant configuration options in the `dev-docs.json`?

The `dev-docs.json` file is used to configure various aspects of the documentation generation process. Here are some relevant options:

- `ai.internalTypeFilters`: An array of strings specifying the types of symbols (e.g., "class", "method", "function") to include in the documentation.
- `ai.codeFilters`: An array of strings representing code snippets that must be present in a symbol's code for it to be included in the documentation.
- `ai.nameFilters`: An array of strings representing names or substrings that a symbol's name must contain for it to be included in the documentation.
- `ai.populateDoc`: The path to a template file used to populate the documentation content.
- `ai.docSubFolder`: The subdirectory within the documentation site where the generated pages will be placed.

## Example JSON of relevant `dev-docs.json` options

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "populateDoc": "docs/template.md",
    "docSubFolder": "api-reference"
  }
}
```

## Prerequisites

- A development workspace with a codebase written in a supported language (e.g., TypeScript, JavaScript, Python).
- A configured `dev-docs.json` file with the desired settings for documentation generation.
- An external location or service to publish the generated documentation pages.

## How do I use this VS Code Extension Command?

1. Open your project in Visual Studio Code.
2. Ensure that the `dev-docs.json` file is correctly configured for your project.
3. Open the Command Palette (Ctrl+Shift+P on Windows/Linux, Cmd+Shift+P on macOS).
4. Search for and select the "Populate Your External Docs" command.
5. The extension will analyze your codebase, identify relevant symbols based on the configured filters, and generate documentation pages using the specified template.
6. The generated documentation pages will be published to the external location specified in the configuration.

Please note that while the command generates documentation based on your codebase, it does not replace the need for human-written explanations, examples, and additional context. The generated documentation should serve as a starting point, which you can further enhance and refine as needed.
  
  