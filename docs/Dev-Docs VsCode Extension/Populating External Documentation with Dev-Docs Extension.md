
  
  # **Populate External Docs**

The `devdocs.generateExternalDocs` command is used to generate documentation for external files and folders that are not part of the main codebase. This is useful when you want to provide additional context or reference material for your documentation.

## What does this Vs Code Extension Command do?

This command scans the project directory and identifies files and folders specified in the `dev-docs.json` configuration file. It then generates Markdown documentation for these external sources, which can include code samples, descriptions, and other relevant information. The generated documentation is intended to supplement the main documentation for the codebase, providing additional context and reference material.

## Why should I use this Vs Code Extension Command?

Using this command is beneficial when you want to:

1. **Provide Additional Context**: Sometimes, your main codebase may rely on external libraries, utilities, or helper functions that are not part of the core codebase. By including documentation for these external resources, you can provide a more comprehensive understanding of how your application works and how different components interact.

2. **Enhance Discoverability**: By documenting external files and folders, you make it easier for developers to discover and understand the purpose and usage of these resources, which can improve code maintainability and collaboration.

3. **Centralize Documentation**: Instead of having separate documentation for external resources, this command allows you to integrate them into your main documentation, providing a single source of truth for your project's documentation.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant for this command:

- `ai.importFolders`: An array of folder paths (relative to the project root) that should be included in the external documentation.
- `ai.importFiles`: An array of file paths (relative to the project root) that should be included in the external documentation.
- `ai.importTypeFilters`: An array of symbol types (e.g., `class`, `method`, `function`) to include from the imported files and folders.
- `ai.importCodeFilters`: An array of code patterns (e.g., `async function`, `export default`) to filter symbols in the imported files and folders.
- `ai.importNameFilters`: An array of name patterns (e.g., `handleSubmit`, `render`) to filter symbols in the imported files and folders.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "importFolders": ["src/utils", "src/helpers"],
    "importFiles": ["src/config.ts", "src/constants.js"],
    "importTypeFilters": ["class", "function"],
    "importCodeFilters": ["export default"],
    "importNameFilters": ["utils", "helpers"]
  }
}
```

## Prerequisites

Before using this command, ensure that:

1. You have a `dev-docs.json` file in your project root directory.
2. The `importFolders`, `importFiles`, and related filters are configured correctly in the `dev-docs.json` file.

## How do I use this Vs Code Extension Command?

To use the `devdocs.generateExternalDocs` command, follow these steps:

1. Open your project in Visual Studio Code.
2. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3. Search for "Populate External Docs" and select the `devdocs.generateExternalDocs` command.
4. The extension will scan your project directory, identify the specified external files and folders, and generate Markdown documentation for them.
5. The generated documentation will be saved in the location specified by the `ai.docSubFolder` configuration option in the `dev-docs.json` file (default is `api-reference`).

By including external documentation, you can provide a more comprehensive understanding of your project, making it easier for developers to understand and maintain the codebase. Additionally, by centralizing all documentation in one place, you can improve discoverability and reduce the need to search for information across multiple sources.
  
  