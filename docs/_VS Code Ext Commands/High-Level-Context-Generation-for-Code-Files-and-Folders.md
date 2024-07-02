# Generating High-Level Context for Code Files and Folders

## What does this VSCode Extension Command do?

This command generates a high-level overview or context for individual code files or entire folders. For code files, it analyzes the code and provides a summary of the main object or class, including a description, a list of methods with code examples, and explanations for each public method. For folders, it recursively generates high-level overviews for each code file within the folder and then creates a comprehensive overview that describes the purpose and functionality of the folder as a whole.

## Why should I use this VSCode Extension Command?

Generating high-level context documentation is essential for understanding and maintaining codebases, especially in large projects or when working with unfamiliar code. This command automates the process of creating documentation, saving developers time and effort. Additionally, having up-to-date and accurate documentation can improve code readability, facilitate knowledge sharing, and make it easier for new team members or contributors to onboard.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` file contains configuration options that control the behavior of the context generation process. The relevant options are:

- `ai`: This object contains settings related to the AI model used for generating the documentation, such as the URL and any prompts or instructions.
- `workspaceRoot`: If set, this option specifies the root directory of the workspace for which the documentation should be generated.
- `customRoot`: If set, this option specifies a custom root directory within the workspace for which the documentation should be generated.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "contextPrompt": "Generate a high-level overview of the code, focusing on the main functionality and data structures."
  }
}
```

## Prerequisites

Before using this command, ensure that you have the following:

1. A valid authentication token and organization ID for the AI service.
2. The `dev-docs.json` file configured with the desired settings.
3. A supported code file or folder within the workspace.

## How do I use this VSCode Extension Command?

To generate high-level context documentation for a code file or folder, follow these steps:

1. Open the command palette in VSCode (`Ctrl+Shift+P` or `Cmd+Shift+P`).
2. Search for and select the "Generate Folder Context" or "Generate High-Level Context" command.
3. If prompted, select the code file or folder for which you want to generate the documentation.
4. Wait for the command to complete. The generated documentation will be displayed in the output panel or a new file will be created with the documentation content.
  
  