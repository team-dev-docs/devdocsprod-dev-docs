# Dev-Docs Search Extension

## What does this VS Code Extension Command do?

The `devdocs.showSearchResults` command in the provided code allows users to search for specific content within the documentation files (`.md` files) present in the `dev-docs` directory of their project. When triggered, the command prompts the user to enter a search query and then performs a full-text search across all the `.md` files, excluding the `reference.md` file(s). The search results are then displayed within VS Code, providing easy access to the relevant documentation sections.

## Why should I use this VS Code Extension Command?

This command is particularly useful when working on large codebases with extensive documentation. It allows developers to quickly find information related to specific topics, classes, methods, or concepts without having to manually browse through multiple files. By enabling efficient searching within the documentation, this command can significantly improve productivity and make it easier to understand and navigate the codebase.

## Prerequisites

To use the `devdocs.showSearchResults` command, the following prerequisites must be met:

1. The project must have a `dev-docs` directory (or a directory specified in the configuration) containing the documentation files (`.md` files).
2. The VS Code extension that provides this command must be installed and enabled.
3. The project must be opened in VS Code, and the workspace must be properly configured.

## How do I use this VS Code Extension Command?

To use the `devdocs.showSearchResults` command, follow these steps:

1. Open the project in VS Code.
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette.
3. Type "Dev-Docs Search" or the exact command name (`devdocs.showSearchResults`) and select it from the list of commands.
4. When prompted, enter the search query you want to use to find relevant documentation.
5. The extension will perform a full-text search across the documentation files and display the search results within VS Code.
6. Navigate through the search results to find the relevant documentation sections, and click on the result to open the corresponding file and navigate to the section.

By using this command, developers can quickly access the documentation they need, reducing the time spent searching for information and improving overall productivity.
  
  