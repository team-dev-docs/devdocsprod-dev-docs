
  
  # **Open Dev-Docs Markdown**

The `devdocs.openFromMd` command is used to open the Dev-Docs Markdown file associated with the currently open file in the editor. This command is particularly useful when you have a Markdown file open and want to view or edit the corresponding documentation for the code associated with that file.

## Why should I use this VS Code Extension Command?

Using this command can be beneficial in several scenarios:

1. **Seamless Documentation Editing**: If you're working on a codebase and need to update the documentation alongside making code changes, this command allows you to quickly access the relevant Markdown file for editing without navigating through multiple folders or files.

2. **Code and Documentation Synchronization**: By providing a direct link between code files and their associated documentation, this command helps maintain synchronization between your codebase and its documentation, ensuring that changes to the code are reflected in the corresponding documentation and vice versa.

3. **Efficient Workflow**: Instead of manually searching for the correct documentation file or opening multiple file explorers, this command streamlines your workflow by directly opening the relevant Markdown file, saving time and effort.

## Relevant Configuration Options in the `dev-docs.json`

The following configuration options in the `dev-docs.json` file are relevant to this command:

- `ai.components.template` (string): Specifies the path to the Markdown template file used for generating documentation.
- `ai.docPath` (string): Sets the custom path where the generated documentation files will be stored.
- `ai.branch` (string): Specifies the Git branch where the documentation will be pushed (default: "main").
- `ai.populateDoc` (string): Defines the path to the Markdown template file used for populating documentation.
- `ai.docSubFolder` (string): Specifies the subfolder within the `ai.docPath` where the documentation files will be stored (default: "api-reference").

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "components": {
      "template": "path/to/markdown/template.md"
    },
    "docPath": "docs/api",
    "branch": "documentation",
    "populateDoc": "docs/template.md",
    "docSubFolder": "my-project-docs"
  }
}
```

## Prerequisites

To use this command effectively, you should have the following prerequisites in place:

1. A Markdown file associated with the currently open code file.
2. The `dev-docs.json` configuration file properly set up with the relevant options mentioned above.

## How do I use this VS Code Extension Command?

To open the Dev-Docs Markdown file associated with the currently open file, follow these steps:

1. Open the code file you want to document in the VS Code editor.
2. With the file open, either use the command palette (Ctrl+Shift+P or Cmd+Shift+P) and search for "Open Devdocs Markdown," or use the keyboard shortcut associated with the command (if configured).
3. The extension will locate the corresponding Markdown file based on the configured settings and open it in a new editor tab or split view.

Once the Markdown file is open, you can edit and update the documentation as needed. Any changes made to the Markdown file will be reflected in the documentation section associated with the corresponding code file.

It's important to note that this command assumes a proper mapping between code files and their associated Markdown documentation files. The mapping configuration should be set up correctly in the `dev-docs.json` file, either through file or folder mappings, to ensure that the correct Markdown file is opened for the corresponding code file.
  
  