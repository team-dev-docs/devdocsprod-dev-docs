
  
  # **Turn to External Markdown Command**

## What does this VS Code Extension Command do?

The `devdocs.turnToExternalMarkdown` command is designed to modify the active Markdown document in the VS Code editor. It appends a markdown code block (`````markdown`) and a `<Parser />` element to the end of the document's content.

## Why should I use this VS Code Extension Command?

This command can be useful when you want to integrate an external Markdown parser or renderer into your Markdown document. By adding the `<Parser />` element, you can potentially enable rendering or processing the Markdown content using an external library or tool.

## What are relevant configuration Options in the `dev-docs.json`?

There are no specific configuration options related to this command in the `dev-docs.json` file based on the provided code.

## Example JSON of relevant Dev-Docs.json options

Not applicable, as there are no relevant configuration options for this command.

## Prerequisites

To use this command, you need to have:

1. A Markdown file open in the VS Code editor.
2. The `devdocs.turnToExternalMarkdown` command available in your VS Code extension.

## How do I use this VS Code Extension Command?

To use the `devdocs.turnToExternalMarkdown` command, follow these steps:

1. Open a Markdown file in the VS Code editor.
2. In the Command Palette (Ctrl+Shift+P on Windows/Linux, Cmd+Shift+P on macOS), search for the command `devdocs.turnToExternalMarkdown` and select it.
3. The command will append a markdown code block (`````markdown`) and a `<Parser />` element to the end of the current Markdown document.

The purpose of adding the `<Parser />` element is to potentially enable rendering or processing the Markdown content using an external library or tool. However, the specific implementation details and the library or tool used for rendering or processing are not provided in the given code.
  
  