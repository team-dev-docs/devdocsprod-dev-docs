

  ---
slug: /VS-Code-Commands/Generate-User-facing-docs-Documentation
---

# Generate User-facing docs Documentation

The "Populate User-facing docs" command (`devdocs.generateUserFacingDocs`) is a crucial feature of the Dev-Docs VS Code extension that allows you to generate comprehensive documentation for your codebase. This command analyzes your project's files and generates a user-facing documentation website, which serves as a centralized hub for all your project's documentation.

## What does this VS Code Extension Command do?

The "Populate User-facing docs" command performs the following tasks:

1. Scans your project's codebase and identifies relevant code elements (classes, functions, methods, etc.) based on the specified filters (`internalTypeFilters`, `codeFilters`, `nameFilters`).
2. Optionally includes code snippets from other files or folders specified in the configuration (`importFiles`, `importFolders`).
3. Generates documentation for each identified code element, either by using predefined prompts or employing AI-assisted documentation generation.
4. Organizes the generated documentation into a structured format, following the specified mappings (`mappings`) and folder structure (`docSubFolder`).
5. Updates the `dev-docs.json` file with the generated mappings.
6. Optionally, pushes the updated documentation to a specified Git branch (`branch`).
7. Creates user-friendly documentation pages with clear explanations, examples, and usage instructions.

## Why should I use this VS Code Extension Command?

Using the "Populate User-facing docs" command offers several benefits:

1. **Centralized Documentation Hub**: It creates a dedicated website for your project's user-facing documentation, making it easily accessible and shareable with end-users, developers, or stakeholders.
2. **Automated Documentation Generation**: The command automates the documentation process, saving you time and effort by generating user-friendly documentation directly from your codebase.
3. **Consistency and Maintainability**: By tying the documentation to your codebase, you ensure that your user-facing documentation remains up-to-date as your code evolves.
4. **Customizable Configuration**: The `dev-docs.json` configuration file allows you to tailor the documentation generation process to your project's specific needs, including filtering code elements, specifying import paths, and organizing the documentation structure.
5. **Enhanced User Experience**: The generated documentation is designed to be user-friendly, with clear explanations and examples, improving the overall experience for your project's users.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant for the "Populate User-facing docs" command:

- `ai.internalTypeFilters`: An array of strings specifying the types of code elements to include in the documentation (e.g., `["class", "method", "function"]`).
- `ai.codeFilters`: An array of strings used to filter code elements based on specific patterns (e.g., `["async function", "export default"]`).
- `ai.nameFilters`: An array of strings used to filter code elements based on their names (e.g., `["handleSubmit", "render"]`).
- `ai.importFiles`: An array of file paths specifying additional files to include in the documentation.
- `ai.importFolders`: An array of folder paths specifying additional folders to include in the documentation.
- `ai.importTypeFilters`: An array of strings specifying the types of code elements to include from the imported files and folders.
- `ai.importCodeFilters`: An array of strings used to filter code elements from the imported files and folders based on specific patterns.
- `ai.importNameFilters`: An array of strings used to filter code elements from the imported files and folders based on their names.
- `ai.branch`: The Git branch to which the updated documentation will be pushed (default: `"main"`).
- `ai.mappings`: An array of objects specifying how the generated documentation should be organized and mapped to specific folders or files in the user-facing documentation website.
- `ai.userDocsStyle`: A string specifying the preferred style for user-facing documentation (e.g., `"beginner-friendly"`, `"technical"`, `"narrative"`).

## Example JSON of relevant `dev-docs.json` options

Here's an example JSON configuration with the minimum required options to use the "Populate User-facing docs" command:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "branch": "main",
    "mappings": [
      {
        "files": ["src/main.ts"],
        "cloudDir": "Getting Started"
      },
      {
        "folder": ["src/components"],
        "cloudDir": "Components"
      }
    ],
    "userDocsStyle": "beginner-friendly"
  }
}
```

## Prerequisites

Before using the "Populate User-facing docs" command, ensure that you have the following prerequisites in place:

1. A `dev-docs.json` configuration file present in your project's root directory, with the necessary configuration options set.
2. A valid authentication token (`devdocs_id_token`) stored in the VS Code extension's storage, which can be obtained by running the `devdocs.getGitHubUser` command and authenticating with your GitHub account.

## How do I use this VS Code Extension Command?

To use the "Populate User-facing docs" command, follow these steps:

1. Open your project in VS Code.
2. Ensure that the `dev-docs.json` configuration file is properly set up with the relevant options.
3. Open the Command Palette in VS Code (Ctrl+Shift+P or Cmd+Shift+P).
4. Search for the "Populate User-facing docs" command (`devdocs.generateUserFacingDocs`) and select it.
5. The extension will start analyzing your codebase and generating the user-facing documentation based on the configured settings.
6. Once the process is complete, you should see a success message in the VS Code output panel, indicating that the user-facing documentation has been generated and updated.

It's important to note that this command is designed to work seamlessly with the Dev-Docs cloud platform, where your generated user-facing documentation will be hosted and accessible through a dedicated website. Make sure you have the appropriate authentication and configuration set up to ensure a smooth integration with the Dev-Docs cloud platform.

By using the "Populate User-facing docs" command, you can create comprehensive, user-friendly documentation that enhances the overall experience for your project's users and developers alike.

  