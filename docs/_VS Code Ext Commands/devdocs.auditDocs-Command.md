# Audit Markdown Documents

## What Does This VS Code Extension Command Do?

This Visual Studio Code extension command, `devdocs.auditDocs`, is designed to analyze and audit the markdown files in a project's documentation directory. It leverages the power of AI to identify and suggest improvements for various aspects of the documentation, including grammar, spelling, clarity, and aesthetics.

The command performs the following tasks:

1. It locates the documentation directory (`docs`) within the project's root directory.
2. It reads the contents of the `dev-docs.json` file to retrieve any predefined audit tasks or configurations.
3. It iterates through all the markdown files (`.md`) found in the documentation directory.
4. For each markdown file, it creates an array of prompts based on the predefined audit tasks and the file's content.
5. It sends these prompts to an AI service for analysis and suggestion generation.
6. The AI service responds with suggestions for improving the documentation.
7. The suggestions for each file are collected and formatted into a new markdown document named `_audit.md`, which is saved in the documentation directory.
8. Additionally, the command creates GitHub issues for each file, including the suggestions from the AI service.

## Why Should I Use This VS Code Extension Command?

Maintaining high-quality documentation is crucial for any project, but it can be a time-consuming and tedious task. This extension command automates the process of auditing and improving documentation, leveraging the capabilities of AI to identify areas for improvement and provide suggestions. By using this command, you can:

1. **Ensure Consistency**: The AI analysis helps identify inconsistencies in writing style, tone, and terminology across your documentation, allowing you to maintain a cohesive and professional-looking documentation set.
2. **Improve Readability**: The command can identify areas where the documentation may be unclear, confusing, or lacking in clarity, and provide suggestions to improve readability and understanding for your users.
3. **Enhance Grammar and Spelling**: With its AI-powered analysis, the command can catch grammatical errors, spelling mistakes, and other language-related issues that might have gone unnoticed during manual review.
4. **Optimize Aesthetics**: The command can suggest improvements to the visual appearance and formatting of your documentation, ensuring a pleasing and consistent look across all files.
5. **Save Time and Effort**: By automating the auditing process, you can save significant time and effort that would otherwise be spent manually reviewing and editing your documentation.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` file allows you to configure various aspects of the extension's behavior. The relevant configuration options for the `devdocs.auditDocs` command include:

1. **`ai.auditTasks`**: This option allows you to specify additional custom audit tasks that the AI should consider when analyzing your documentation. These tasks can be specific to your project or domain, ensuring that the AI focuses on the areas most relevant to your documentation.
2. **`workspaceRoot`**: If set, this option specifies the root directory of your project, overriding the default behavior of using the workspace's root directory.
3. **`customRoot`**: If set, this option allows you to specify a subdirectory within your project as the root for the documentation directory. This can be useful if your documentation files are organized in a specific subdirectory.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "auditTasks": [
      "Check for compliance with project-specific style guides.",
      "Ensure technical accuracy and correctness of code examples."
    ]
  }
}
```

In this example:

- The `ai.auditTasks` array specifies two additional audit tasks: checking for compliance with project-specific style guides and ensuring the technical accuracy of code examples.
- The `workspaceRoot` option overrides the default workspace root directory and sets it to `/path/to/your/project/root`.
- The `customRoot` option specifies that the documentation files are located in the `docs` subdirectory within the project root.

## Prerequisites

To use the `devdocs.auditDocs` command effectively, you should have the following prerequisites in place:

1. **Visual Studio Code**: You need to have Visual Studio Code installed on your machine.
2. **Dev-Docs Extension**: The Dev-Docs extension, which provides the `devdocs.auditDocs` command, must be installed and enabled in your Visual Studio Code environment.
3. **AI Service Integration**: The extension must be configured to communicate with an AI service capable of analyzing and suggesting improvements for your documentation. This may require setting up credentials or API keys for the AI service.
4. **Documentation Directory**: Your project should have a dedicated directory for storing documentation files, typically named `docs`.

## How Do I Use This VS Code Extension Command?

To use the `devdocs.auditDocs` command, follow these steps:

1. Open your project in Visual Studio Code.
2. Ensure that your project has a `docs` directory (or the directory specified in the `dev-docs.json` configuration) containing the markdown files you want to audit.
3. Open the Command Palette in Visual Studio Code by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
4. Search for and select the `Dev-Docs: Audit Docs` command.
5. The extension will analyze your documentation files and generate an `_audit.md` file in the `docs` directory, containing suggestions for improving your documentation.
6. Additionally, the extension will create GitHub issues for each file, including the suggestions from the AI service.

After running the command, review the `_audit.md` file and the created GitHub issues to understand the suggested improvements. You can then manually apply these improvements to your documentation files, ensuring that your documentation remains up-to-date, clear, and consistent.
  
  