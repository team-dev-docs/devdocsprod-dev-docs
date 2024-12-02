

  ---
slug: /VS-Code-Commands/Audit-Docs
---

# Audit Docs

## What Does This VS Code Extension Command Do?

The `devdocs.auditDocs` command is used to audit the existing documentation files in the project. It analyzes the Markdown files and identifies potential issues or areas for improvement, such as grammar or spelling errors, unclear or unhelpful content, and opportunities to enhance the aesthetic appeal of the documentation. Additionally, it can detect inconsistencies in hover text and tooltips throughout your documentation.

## Why Should I Use This VS Code Extension Command?

Maintaining high-quality documentation is crucial for effective communication and collaboration within a project. By using the `devdocs.auditDocs` command, you can ensure that your documentation remains accurate, clear, and visually appealing. This command helps you identify and address any issues or inconsistencies in your documentation, improving its overall quality and usefulness. Moreover, it can help standardize the use of hover text and tooltips, enhancing the user experience of your documentation.

## What Are Relevant Configuration Options in the `dev-docs.json`?

- `ai.auditTasks`: This option allows you to specify additional custom tasks or criteria for auditing the documentation. It is an array of strings, where each string represents a specific task or aspect to be evaluated during the audit process.
- `ai.hoverTextAudit`: This new option enables the command to specifically check for consistency and clarity in hover text and tooltips throughout your documentation.

## Example JSON of Relevant `dev-docs.json` Options
```json
{
  "ai": {
    "auditTasks": [
      "Check sections where code blocks would result in errors",
      "Ensure consistent formatting and styling"
    ],
    "hoverTextAudit": true
  }
}
```

## Prerequisites

Before using the `devdocs.auditDocs` command, make sure you have the following:

1. A `dev-docs.json` configuration file in your project's root directory.
2. The repo contains Markdown files of the documentation you want to audit.
3. Any custom hover text or tooltips are properly implemented in your documentation.

## How Do I Use This VS Code Extension Command?

To use the `devdocs.auditDocs` command, follow these steps:

<br></br>

1. Open your project in VS Code
2. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
3. Type "Dev-Docs: Audit Your Docs" or "devdocs.auditDocs" and select the command from the list.
4. The extension will analyze your Markdown files and identify potential issues based on the configured audit tasks, including hover text and tooltip consistency if enabled.
5. A new Markdown file named `dev-docs_audit.md` will be generated in the `docs` directory, containing the audit results and suggestions for improvements.
6. If any issues are found, the extension will also create GitHub issues for each file with identified problems, providing links to the issues within the `dev-docs_audit.md` file.

<br></br>

By regularly auditing your documentation using the `devdocs.auditDocs` command, you can ensure that your project's documentation remains accurate, clear, and visually appealing, facilitating better understanding and collaboration among team members and users. The added focus on hover text and tooltips further enhances the usability and consistency of your documentation.

  