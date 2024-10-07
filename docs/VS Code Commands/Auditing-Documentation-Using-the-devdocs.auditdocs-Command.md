

  ---
slug: /VS-Code-Commands/Audit-Docs
---

# Audit Docs

**What does this VS Code Extension Command do?**
The `devdocs.auditDocs` command is used to audit the existing documentation files in the project. It analyzes the Markdown files and identifies potential issues or areas for improvement, such as grammar or spelling errors, unclear or unhelpful content, and opportunities to enhance the aesthetic appeal of the documentation.

**Why should I use this VS Code Extension Command?**
Maintaining high-quality documentation is crucial for effective communication and collaboration within a project. By using the `devdocs.auditDocs` command, you can ensure that your documentation remains accurate, clear, and visually appealing. This command helps you identify and address any issues or inconsistencies in your documentation, improving its overall quality and usefulness.

**What are relevant configuration Options in the `dev-docs.json`?**
The following configuration options in the `dev-docs.json` file are relevant to the `devdocs.auditDocs` command:

- `ai.auditTasks`: This option allows you to specify additional custom tasks or criteria for auditing the documentation. It is an array of strings, where each string represents a specific task or aspect to be evaluated during the audit process.

**Example JSON of relevant Dev-Docs.json options**
```json
{
  "ai": {
    "auditTasks": [
      "Check sections where code blocks would result in errors",
      "Ensure consistent formatting and styling",
      "Verify cross-references and links are up-to-date"
    ]
  }
}
```

**Prerequisites**
Before using the `devdocs.auditDocs` command, make sure you have the following:

1. A `dev-docs.json` configuration file in your project's root directory.
2. Markdown files containing the documentation you want to audit.
3. You are using it in a dev-docs documentation repo.

**How do I use this VS Code Extension Command?**
To use the `devdocs.auditDocs` command, follow these steps:

1. Open your project in Visual Studio Code.
2. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
3. Type "Dev-Docs: Audit Your Docs" or "devdocs.auditDocs" and select the command from the list.
4. The extension will analyze your Markdown files and identify potential issues based on the configured audit tasks.
5. A new Markdown file named `dev-docs_audit.md` will be generated in the `docs` directory, containing the audit results and suggestions for improvements.
6. If any issues are found, the extension will also create GitHub issues for each file with identified problems, providing links to the issues within the `dev-docs_audit.md` file.

**Best Practices for Documentation Audits**
To get the most out of the `devdocs.auditDocs` command, consider the following best practices:

1. Run audits regularly, such as before major releases or documentation updates.
2. Review and prioritize the issues identified by the audit.
3. Address high-priority issues promptly to maintain documentation quality.
4. Use the audit results as a learning opportunity to improve your documentation practices.
5. Collaborate with team members to review and implement suggested improvements.

By regularly auditing your documentation using the `devdocs.auditDocs` command and following these best practices, you can ensure that your project's documentation remains accurate, clear, and visually appealing, facilitating better understanding and collaboration among team members and users.

  