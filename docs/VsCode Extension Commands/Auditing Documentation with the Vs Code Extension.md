
  
  # **Audit Docs Command**

## What does this Vs Code Extension Command do?

The `devdocs.auditDocs` command is responsible for analyzing the markdown files within the `docs` directory of a project. It utilizes an AI service to identify potential issues or areas for improvement in the content of these markdown files. The identified issues are then compiled into a single file named `_audit.md` within the `docs` directory.

## Why should I use this Vs Code Extension Command?

This command can be particularly useful in maintaining the quality and consistency of documentation within a project. By leveraging AI capabilities, it can help identify grammatical errors, unclear or unhelpful content, and areas where the documentation can be enhanced for better readability and aesthetics. This can save time and effort in manually reviewing and improving documentation, especially for large codebases with extensive documentation.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` file seems to contain configuration options related to the AI service used for auditing the documentation. Specifically, it appears to include an `ai` object with an `auditTasks` array. This array likely holds additional custom tasks or criteria that should be checked during the auditing process, allowing for customization based on project-specific requirements.

## Prerequisites

To use this command effectively, the following prerequisites should be met:

1. The project should have a `docs` directory containing markdown files.
2. The necessary AI service credentials (e.g., `devdocs_id_token` and `default_org`) should be configured and stored in the storage manager.
3. The `baseUrl` for the AI service should be set in the storage manager.

## How do I use this Vs Code Extension Command?

To use the `devdocs.auditDocs` command, follow these steps:

1. Open your project in Visual Studio Code.
2. Ensure that the necessary prerequisites are met (as mentioned above).
3. Open the command palette (Ctrl/Cmd + Shift + P) and search for the `devdocs.auditDocs` command.
4. Execute the command.

The command will then analyze the markdown files in the `docs` directory, identify potential issues, and create or update the `_audit.md` file with the compiled suggestions and issues. Additionally, it will create individual issues on the AI service for each markdown file, making it easier to track and address the identified problems.
  
  