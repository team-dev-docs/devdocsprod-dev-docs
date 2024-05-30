
  
  # **Turn on Markdown Mode**

This VS Code extension command allows you to switch to a markdown writing mode within your editor, enabling you to write and edit markdown files with ease.

## What does this VS Code Extension Command do?

The `devdocs.turnMarkdownOn` command activates a markdown mode in your VS Code editor. This mode provides a dedicated writing environment tailored for creating and editing markdown files. It enhances the editing experience by offering features such as syntax highlighting, preview rendering, and other markdown-specific functionalities.

## Why should I use this VS Code Extension Command?

Using the `devdocs.turnMarkdownOn` command is beneficial if you frequently work with markdown files or need to document your code using markdown syntax. It streamlines the writing process by providing a specialized environment that makes it easier to structure your content, format text, insert links, images, and other markdown elements. Additionally, the preview feature allows you to see a rendered version of your markdown content as you write, ensuring that the final output looks as intended.

## What are relevant configuration options in the `dev-docs.json`?

The `dev-docs.json` configuration file does not appear to have any options directly related to the `devdocs.turnMarkdownOn` command. However, it does contain options that may affect the overall documentation and writing experience, such as:

- `ai.components.template`: Specifies the path to a markdown file that serves as a template for documentation generation.
- `ai.populateDoc`: Defines the default location for generated markdown documentation files.
- `ai.docSubFolder`: Specifies the subfolder within the project where documentation files should be stored.

## Example JSON of relevant `dev-docs.json` options

Here's an example of how the relevant `dev-docs.json` options might be configured:

```json
{
  "ai": {
    "components": {
      "template": "docs/template.md"
    },
    "populateDoc": "docs/generated.md",
    "docSubFolder": "api-reference"
  }
}
```

In this example, the template for documentation generation is located at `docs/template.md`, and the generated markdown files will be saved to `docs/generated.md` within the `api-reference` subfolder of the project.

## Prerequisites

To use the `devdocs.turnMarkdownOn` command, you need to have the Dev-Docs VS Code extension installed and enabled in your editor.

## How do I use this VS Code Extension Command?

To turn on the markdown mode, follow these steps:

1. Open your VS Code editor.
2. Press the keyboard shortcut `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the command palette.
3. Type "Turn on Markdown Mode" and select the `devdocs.turnMarkdownOn` command from the list.
4. Alternatively, you can navigate to the Dev-Docs submenu in the editor's context menu or use the configured keyboard shortcut (if available) to trigger the command directly.

Once the markdown mode is activated, you can start writing or editing your markdown files within the specialized environment. The editor will provide syntax highlighting, preview rendering, and other markdown-specific features to enhance your writing experience.
  
  