
  
  # **Generating Multi-File High-Level Context**

## What does this command do?

This VS Code extension command (`devdocs.generateMultiContext`) helps generate high-level context documentation for multiple code files within a workspace. It scans the workspace for specified files and directories, retrieves existing context documents if available, and generates new high-level context documentation for files without existing context.

## Why should I use this command?

Having high-level context documentation can greatly aid in understanding the purpose and functionality of code files, especially when working on large codebases or inheriting legacy code. This command automates the process of generating this documentation, saving time and effort.

## Relevant configuration options in `dev-docs.json`

- `ai.contextPrompt`: A custom prompt to guide the AI in generating the high-level context documentation.
- `ai.editing`: Configuration options for editing the generated context documentation.
  - `onGenerate`: Indicates whether to apply editing after generating the context documentation.
  - `files`, `folders`, `general`: Editing prompts specific to individual files, folders, or general cases.
- `customRoot`: A custom directory path within the workspace to consider for context generation.
- `workspaceRoot`: Indicates whether to use the entire workspace directory for context generation.
- `contextDirs`: An array of directory paths within the workspace to consider for context generation.

## Example JSON of relevant `dev-docs.json` options

```json
{
  "ai": {
    "contextPrompt": "Provide a high-level overview of the purpose and functionality of this code file.",
    "editing": {
      "onGenerate": true,
      "files": [
        {
          "src/utils.ts": "Improve the documentation for utility functions by providing more examples and edge cases."
        }
      ],
      "folders": [
        {
          "components/": "Enhance the documentation for React components by adding information about props and state management."
        }
      ],
      "general": {
        "prompt": "Improve the overall clarity and readability of the documentation."
      }
    }
  },
  "customRoot": "src",
  "workspaceRoot": false,
  "contextDirs": ["core", "utils"]
}
```

## Prerequisites

- A VS Code workspace with code files and a `dev-docs.json` configuration file.
- The necessary dependencies and services for generating and editing context documentation (e.g., AI service, version control).

## How do I use this command?

1. Open your VS Code workspace containing the code files you want to generate context documentation for.
2. Ensure that the `dev-docs.json` file is correctly configured with the desired options.
3. Open the Command Palette (Ctrl+Shift+P on Windows/Linux, Cmd+Shift+P on macOS) and search for `devdocs.generateMultiContext`.
4. Execute the command, and it will start scanning the workspace for files and generating or retrieving high-level context documentation.
5. The generated context documentation will be displayed in the output panel or integrated into your version control system, depending on your configuration.

By using this command, you can quickly generate high-level context documentation for multiple code files within your workspace, improving code understanding and maintainability.
  
  