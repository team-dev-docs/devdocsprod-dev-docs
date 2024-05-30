
  
  # **Open Dev-Docs for Current File**

The `devdocs.fileDocument` command in this Visual Studio Code extension allows you to open the DevDocs documentation for the currently open file in your project. This command is particularly useful when you want to quickly access or generate documentation for a specific file without having to navigate through different folders or search for the file manually.

## What does this VS Code Extension Command do?

When you execute the `devdocs.fileDocument` command, the extension analyzes the currently open file and performs the following actions:

1. **File Identification**: It identifies the file you have open in your editor, including its path and name.
2. **Documentation Retrieval**: The extension attempts to locate the existing DevDocs documentation for the identified file. If the documentation exists, it will open it for you to view or edit.
3. **Documentation Generation**: If no documentation is found for the file, the extension can generate a new DevDocs documentation file based on the file's content and context.

## Why should I use this VS Code Extension Command?

Using the `devdocs.fileDocument` command provides several benefits:

1. **Convenience**: You can quickly access or generate documentation for the file you're currently working on without having to navigate through different folders or search for the file manually.
2. **Context Awareness**: The command understands the context of the file you're working on, making it easier to generate relevant and accurate documentation.
3. **Time-saving**: By automating the process of locating or generating documentation, you save time and effort, allowing you to focus on writing code and maintaining documentation more efficiently.

## What are relevant configuration options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant to this command:

- `ai.docPath`: Specifies the path where the generated documentation files will be stored.
- `ai.contextDirs`: An array of directories that the extension should consider when generating context for the documentation.
- `ai.mappings`: An array of objects that map specific files or folders to their corresponding documentation locations in the cloud.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "docPath": "docs/api-reference",
    "contextDirs": ["src/utils", "src/helpers"],
    "mappings": [
      {
        "files": ["src/main.ts"],
        "cloudDir": "Getting Started"
      },
      {
        "folder": ["src/components"],
        "cloudDir": "Components"
      }
    ]
  }
}
```

## Prerequisites

To use the `devdocs.fileDocument` command effectively, you should have the following prerequisites:

- A project with source code files that require documentation.
- A `dev-docs.json` configuration file in your project root or a suitable location, with the relevant options configured.

## How do I use this VS Code Extension Command?

To use the `devdocs.fileDocument` command, follow these steps:

1. Open a file in your project that you want to document.
2. With the file open in the editor, navigate to the command palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on macOS).
3. Type "Dev-docs: Open Dev-doc for current file" and select the command from the list.
4. If documentation for the file exists, it will open in a new editor tab or panel. If not, the extension will prompt you to generate new documentation based on the file's content and context.
5. If you choose to generate new documentation, follow the prompts or instructions provided by the extension to complete the process.

By using this command, you can efficiently manage and maintain documentation for individual files within your project, ensuring that your codebase remains well-documented and easier to understand for you and your team.
  
  