
  
  # **Open Dev-Docs Local Markdown File**

This VS Code extension command allows you to open and edit a local Markdown file within the Dev-Docs environment. It provides a seamless integration between your code and documentation, enabling you to work on both simultaneously.

## Why should I use this VS Code Extension Command?

Using this command streamlines your documentation workflow by eliminating the need to switch between different applications or windows. It allows you to keep your documentation in sync with your codebase, ensuring that any changes you make to the code are reflected in the corresponding documentation.

Additionally, the Dev-Docs environment provides various features and tools tailored for efficient documentation creation and management, such as syntax highlighting, auto-formatting, and integration with version control systems.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant for this command:

1. **`ai.components.template`**: Specifies the path to the Markdown file that serves as the template for your documentation.
2. **`ai.docPath`**: Defines the custom path where your documentation files will be stored.
3. **`ai.branch`**: Specifies the Git branch where your documentation changes will be committed.
4. **`ai.populateDoc`**: Provides the path to the initial Markdown file that will be populated with documentation content.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "components": {
      "template": "path/to/markdown/template.md"
    },
    "docPath": "docs/",
    "branch": "documentation",
    "populateDoc": "docs/initial-doc.md"
  }
}
```

## Prerequisites

Before using this command, ensure that you have the following prerequisites in place:

1. A `dev-docs.json` configuration file set up in your project root directory.
2. A Markdown file specified as the template in the `ai.components.template` configuration option.

## How do I use this VS Code Extension Command?

To open and edit a local Markdown file using the Dev-Docs environment, follow these steps:

1. Open your project in VS Code.
2. Navigate to the file you want to document or select the code you want to document within a file.
3. Either right-click and select the "Open Dev-docs Markdown" command from the context menu or use the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on macOS) and search for "Open Dev-docs Markdown".
4. If prompted, select the file or code snippet you want to generate documentation for.
5. The Dev-Docs environment will open, displaying the Markdown file specified in the `ai.components.template` configuration option.
6. Edit the Markdown file as needed, adding or modifying the documentation content.
7. Save your changes, and the updated documentation will be reflected in the local file system and the specified Git branch (if configured).

By using this command, you can efficiently create and maintain your documentation alongside your codebase, ensuring that your documentation remains up-to-date and relevant to your project's development.
  
  