
  
  # **Audit Your Documentation**

The `devdocs.auditDocs` command is a powerful feature that allows you to audit your existing documentation for potential errors, inconsistencies, or areas for improvement. This command leverages the power of AI to analyze your Markdown files and provide suggestions on how to enhance the quality and clarity of your documentation.

## Why should I use this Vs Code Extension Command?

Maintaining high-quality documentation is crucial for any project, as it helps ensure that users, developers, and stakeholders can easily understand and navigate the codebase. However, manually reviewing and auditing documentation can be a time-consuming and error-prone process. The `devdocs.auditDocs` command automates this process, saving you time and effort while improving the overall quality of your documentation.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant to the `devdocs.auditDocs` command:

- `ai.variablesAndFunctions`: This section allows you to define custom prompts and documentation for specific variables and functions within your codebase. These prompts and documentation will be used by the AI to provide more contextual and relevant suggestions during the audit process.

- `ai.auditTasks`: This is an array where you can specify additional tasks or criteria for the AI to consider during the audit process. For example, you could add specific guidelines or conventions that your documentation should adhere to.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "variablesAndFunctions": {
      "myFunction": {
        "prompts": [
          {
            "title": "What is myFunction?",
            "question": "Can you explain what the myFunction does?",
            "documentation": "myFunction is a utility function that performs xyz..."
          }
        ]
      }
    },
    "auditTasks": [
      "Ensure code examples are up-to-date and consistent with the latest codebase.",
      "Check for broken links or outdated references."
    ]
  }
}
```

## Prerequisites

Before running the `devdocs.auditDocs` command, make sure you have the following prerequisites in place:

1. A properly configured `dev-docs.json` file in your project's root directory.
2. Existing Markdown files containing your documentation.

## How do I use this Vs Code Extension Command?

To use the `devdocs.auditDocs` command, follow these steps:

1. Open your project in Visual Studio Code.
2. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3. Type "Dev-Docs: Audit Your Docs" and press Enter.
4. The extension will analyze your Markdown files and provide suggestions for improving your documentation.
5. Review the suggestions and make the necessary changes to your documentation files.

The `devdocs.auditDocs` command is designed to help you maintain high-quality documentation by identifying potential issues and areas for improvement. By leveraging the power of AI, you can ensure that your documentation is clear, consistent, and up-to-date, making it easier for users and developers to understand and work with your codebase.
  
  