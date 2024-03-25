
  
  Here is my attempt at updating the documentation based on the code provided:

# **Generate External Docs from Source Code**

## What does this VS Code Extension Command do?

This command scans your codebase for relevant code symbols (classes, methods, functions) based on configured filters. It then generates Markdown documentation pages for each symbol, pulling in code examples and additional context. The generated docs are saved to a `dev-docs.json` file which can be used to publish to an external docs site.

## Why should I use this VS Code Extension Command?

Maintaining up-to-date documentation that accurately reflects your current codebase can be tedious and time-consuming. This extension automates the process of extracting relevant code documentation directly from your source files. This ensures your external documentation stays synchronized with your codebase as it evolves.

## What are relevant configuration options in the `dev-docs.json`?

- `ai.internalTypeFilters`: Code symbol types (e.g. class, method, function) to include in docs
- `ai.codeFilters`: Regex filters to narrow code symbols included
- `ai.nameFilters`: Additional name filters for code symbols
- `ai.populateDoc`: A template Markdown file to use for the generated documentation
- `ai.docSubFolder`: A subfolder in your docs site to place the generated files
- `ai.importFolders`/`importFiles`: Additional folders/files to include code context from

## Prerequisites

- Your codebase must be in a workspace opened in VS Code
- The `dev-docs.json` configuration file must exist in your workspace
- You must have an auth token and default org configured for the external docs site

## How do I use this VS Code Extension Command?

1. Open the VS Code command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Select the "DevDocs: Generate External Docs" command
3. The extension will scan your code and generate docs based on the `dev-docs.json` config
4. A `dev-docs.json` file will be created/updated with the new doc mappings
5. You can then publish these docs to your external site

The generated documentation explains what each code entity does, why you'd want to use it, prerequisites, and a usage guide - all pulled directly from your codebase context.
  
  