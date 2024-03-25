
  
  # **Create External Documentation Command**

## What does this Vs Code Extension Command do?

This command allows you to generate external documentation for the code you have written in your current workspace. It analyzes the code you have selected or the file you have open, and automatically generates comprehensive documentation that explains the purpose, usage, and available methods/classes within the code.

## Why should I use this Vs Code Extension Command?

Writing documentation can be a time-consuming and tedious task, especially for complex codebases. This command simplifies the process by automating the generation of documentation based on your actual code. It saves you valuable time and ensures that your documentation is always up-to-date and consistent with your codebase.

## Relevant Configuration Options in the `dev-docs.json`

The `dev-docs.json` file in your workspace can include the following configuration options related to this command:

1. **`ai.externalDocPrompt`**: This option allows you to provide a custom prompt for generating the external documentation. If specified, the command will use this prompt instead of the default one.

2. **`ai.editing`**: This option allows you to configure additional editing instructions for the generated documentation. It can include file-specific, folder-specific, or general prompts for modifying the documentation.

## Prerequisites

To use this command effectively, make sure you have the following prerequisites:

1. A valid `devdocs_id_token` and `devdocs_refresh_token` stored in your workspace preferences. These tokens are required for authentication with the DevDocs service.

2. A specified `default_org` in your workspace preferences, which represents the organization where the external documentation will be created.

3. A properly configured `dev-docs.json` file in your workspace, with the necessary options set according to your requirements.

## How do I use this Vs Code Extension Command?

To use the `Create External Documentation` command, follow these steps:

1. Open the file or select the code you want to generate documentation for in your Visual Studio Code editor.

2. Press the keyboard shortcut or navigate to the command palette and search for `DevDocs: Create External Documentation`.

3. The extension will analyze your code, generate the documentation based on the configuration settings, and create an external documentation page on the DevDocs platform for your organization.

4. Once the process is complete, you will receive a notification with a link to the generated documentation page.

The generated documentation will include a comprehensive overview of the main code object or class, a list of its public methods with code examples, and any additional information specified in the configuration or custom prompts.
  
  