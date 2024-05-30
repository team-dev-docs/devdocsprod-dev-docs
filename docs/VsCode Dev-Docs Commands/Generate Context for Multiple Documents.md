
  
  # **Generate Context for Multiple Documents**

The `devdocs.generateMultiContext` command is used to generate high-level context for multiple code files or directories within the current workspace. This command is particularly useful when you have a project with multiple files or folders, and you want to generate a brief overview or summary for each of them.

## Why should I use this Vs Code Extension Command?

Creating high-level context for multiple files or directories can be a time-consuming and repetitive task, especially in large projects. By using this command, you can automate the process of generating context, saving you time and effort. Additionally, having a concise overview of each file or directory can help you better understand the structure and purpose of your project, making it easier to navigate and maintain.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant for this command:

- `ai.contextDirs`: An array of directories to generate high-level context for. By default, it includes `["src/utils", "src/helpers"]`.
- `customRoot`: The custom root directory for your project, relative to the workspace root. This option helps the extension find the correct files and directories.
- `workspaceRoot`: The absolute path to the root directory of your workspace.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "contextDirs": ["src/utils", "src/helpers"]
  },
  "customRoot": "packages/my-package",
  "workspaceRoot": "/path/to/project"
}
```

## Prerequisites

Before using this command, make sure you have:

1. A `dev-docs.json` file configured with the relevant options mentioned above.
2. Code files or directories for which you want to generate context.

## How do I use this Vs Code Extension Command?

To use the `devdocs.generateMultiContext` command, follow these steps:

1. Open the Command Palette in Visual Studio Code (`Ctrl+Shift+P` or `Cmd+Shift+P`).
2. Search for `Generate Context for Multiple Documents` and select the command.
3. The extension will scan your workspace for the specified code files and directories based on the `dev-docs.json` configuration.
4. For each file or directory, the extension will attempt to generate a high-level context summary.
5. The generated context will be displayed in the output panel or a new editor tab, depending on the extension's settings.

The generated context aims to provide a brief overview of the purpose, functionality, and any relevant information about the code file or directory. This can help you quickly understand the role of each component within your project, facilitating better code comprehension and maintenance.

It's important to note that the quality and accuracy of the generated context may vary depending on the complexity of your code and the capabilities of the AI model used by the extension. Additionally, the extension's behavior and output format may be subject to change or improvements in future updates.
  
  