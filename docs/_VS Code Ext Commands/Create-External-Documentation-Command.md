
# Create External Documentation Command

## What does this VS Code Extension Command do?

This command allows you to generate external documentation for your code snippets or entire files directly from within Visual Studio Code. It leverages the power of AI to understand your code and automatically generate helpful documentation, making it easier for developers to document their codebase.

## Why should I use this VS Code Extension Command?

Writing documentation can be a tedious and time-consuming task, especially for complex codebases. This command streamlines the process by automatically generating documentation based on your code. It saves you time and effort, allowing you to focus on coding while still maintaining a well-documented codebase!!!

## What are the relevant configuration options in the `dev-docs.json`?

The `dev-docs.json` file allows you to customize the behavior of the external documentation generation process. Here are some relevant options:

- **ai.externalDocPrompt**: This option allows you to provide a custom prompt for generating external documentation. The AI will use this prompt to guide the documentation generation process.
- **ai.editing.onGenerate**: If set to `true`, this option enables an additional editing step after the initial documentation is generated. The AI will use the specified prompts to refine and improve the generated documentation.
- **ai.editing.files**, **ai.editing.folders**, and **ai.editing.general**: These options allow you to specify custom editing prompts based on file paths, folder paths, or general prompts, respectively. The AI will use these prompts during the editing step.

## Example JSON of relevant `dev-docs.json` options

```
json
{
  "ai": {
    "externalDocPrompt": "Generate detailed documentation for the createExternalDoc command, explaining its purpose, configuration options, and usage examples.",
    "editing": {
      "onGenerate": true,
      "files": [
        {
          "extension.ts": "Improve the documentation by adding more code examples and clarifying any confusing sections."
        }
      ],
      "folders": [
        {
          "src/": "Ensure the documentation follows best practices and is consistent with the project's documentation style guide."
        }
      ],
      "general": {
        "prompt": "Review the entire documentation and make any necessary improvements to enhance its clarity and usefulness for developers."
      }
    }
  }
}

```

## Prerequisites

- Visual Studio Code
- The DevDocs extension installed and configured

## How do I use this VS Code Extension Command?

1. Open your project in Visual Studio Code.
2. In the editor, select the code snippet or file you want to generate documentation for.
3. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the command palette.
4. Search for and select the "DevDocs: Create External Documentation" command.
5. The extension will process your code and generate external documentation based on the configuration options specified in the `dev-docs.json` file.
6. The generated documentation will be displayed in a new tab or window, depending on your configuration.

By using this command, you can quickly generate high-quality documentation for your code, making it easier for other developers to understand and maintain your codebase.


