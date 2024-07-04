---
slug: /VS-Code-Commands/Find-Missing-Documentation
---

# Find Missing Documentation

The `devdocs.findMissingDocs` command is a powerful feature of the Dev-Docs VS Code extension that helps you identify gaps in your project's documentation. By analyzing the existing documentation and code, this command suggests titles for new documentation pages that could improve the overall understanding and experience for developers working with your codebase.

## What does this VS Code Extension Command do?

The `devdocs.findMissingDocs` command performs the following tasks:

1. **Analyzes Existing Documentation**: The command reads and processes all the existing documentation files in your project, gathering information about the covered topics and concepts.

2. **Scans Project Code**: It scans your project's codebase, including files with accepted extensions defined in the `dev-docs.json` configuration file.

3. **Identifies Missing Documentation Topics**: By comparing the existing documentation with the code, the command leverages AI capabilities to identify potential gaps or areas that could benefit from additional documentation pages.

4. **Suggests Documentation Titles**: The command generates a list of suggested titles for new documentation pages that could fill the identified gaps. These titles are designed to be relevant to the existing documentation's goals and writing styles.

5. **Updates `dev-docs.json`**: The suggested titles are added to the `ai.missing_docs` property in the `dev-docs.json` configuration file.

6. **Creates GitHub Issues**: For each suggested title, the command creates a new GitHub issue explaining why adding a page with that title would be helpful. These issues can serve as a starting point for documenting the missing topics.

## Why should I use this VS Code Extension Command?

Maintaining comprehensive and up-to-date documentation is crucial for any software project, but it can be challenging to identify gaps or areas that need more coverage manually. The `devdocs.findMissingDocs` command helps streamline this process by leveraging AI capabilities to analyze your codebase and existing documentation, ensuring that your documentation remains relevant and helpful for developers.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant for the `devdocs.findMissingDocs` command:

- `ai.acceptedExtensions`: An array of file extensions that should be included in the code analysis process.
- `ai.codeFilters`: An array of strings used to filter code files based on specific patterns or keywords.
- `ai.nameFilters`: An array of strings used to filter code elements (e.g., functions, variables) based on their names.
- `ai.missing_docs` (output): The suggested titles for missing documentation pages will be added to this property after running the command.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "acceptedExtensions": [".js", ".ts", ".tsx"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "missing_docs": []
  }
}
```

## Prerequisites

Before running the `devdocs.findMissingDocs` command, ensure that:

1. You have a valid GitHub authentication token set up in the Dev-Docs extension.
2. Your project has existing documentation files and a `dev-docs.json` configuration file.
3. The `ai` configuration section in `dev-docs.json` is properly set up with the desired filters and options.

## How do I use this VS Code Extension Command?

To use the `devdocs.findMissingDocs` command, follow these steps:

1. Open your project in Visual Studio Code.
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the Command Palette.
3. Type "Find Missing Docs" and select the `devdocs.findMissingDocs` command.
4. The command will analyze your codebase and existing documentation, and then generate a list of suggested documentation titles.
5. The suggested titles will be added to the `ai.missing_docs` property in the `dev-docs.json` file.
6. For each suggested title, a new GitHub issue will be created, explaining why adding a page with that title would be helpful.
7. Review the suggested titles and issues, and start documenting the missing topics as needed.

By regularly running the `devdocs.findMissingDocs` command, you can ensure that your project's documentation stays up-to-date and covers all relevant topics, improving the overall developer experience and making it easier for new contributors to understand and work with your codebase.
  
  