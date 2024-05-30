
  
  # **Generate Batch Documentation**

**What does this VS Code Extension Command do?**
The `devdocs.generateBatchDocumentation` command is used to generate documentation for multiple files or folders in a single batch. This command leverages the configuration options specified in the `dev-docs.json` file to determine which files or folders should be documented and how the documentation should be generated.

**Why should I use this VS Code Extension Command?**
This command is particularly useful when you have a large codebase and need to generate documentation for multiple files or folders at once. Instead of generating documentation for each file or folder individually, you can use this command to streamline the process and generate documentation in a batch.

**What are relevant configuration options in the `dev-docs.json`?**
The following configuration options in the `dev-docs.json` file are relevant for this command:

1. `ai.mappings`: This option specifies the files or folders for which documentation should be generated, and the corresponding directory in the Dev-Docs Cloud where the documentation should be stored.
2. `ai.docPath`: This option specifies the custom path where the generated documentation files should be stored locally.
3. `ai.branch`: This option specifies the Git branch to which the generated documentation should be pushed.
4. `ai.internalTypeFilters`: This option specifies the types of code elements (e.g., classes, functions, variables) that should be included in the generated documentation.
5. `ai.codeFilters`: This option specifies code patterns or keywords that should be included or excluded from the generated documentation.
6. `ai.nameFilters`: This option specifies the names of functions or methods that should be included or excluded from the generated documentation.

**Example JSON of relevant Dev-Docs.json options**
```json
{
  "ai": {
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
    "docPath": "docs/api-reference",
    "branch": "main",
    "internalTypeFilters": [
      "class",
      "method",
      "function"
    ],
    "codeFilters": [
      "async function"
    ],
    "nameFilters": [
      "handleSubmit"
    ]
  }
}
```

**Prerequisites**
Before using this command, ensure that you have:
1. Configured the `dev-docs.json` file with the appropriate options for your project.
2. Set up the necessary Git authentication and remote repository for pushing the generated documentation.

**How do I use this VS Code Extension Command?**
To use the `devdocs.generateBatchDocumentation` command, follow these steps:

1. Open the VS Code Command Palette (Ctrl+Shift+P on Windows/Linux, Cmd+Shift+P on macOS).
2. Search for "Batch Document" and select the "Dev-Docs: Batch Document" command.
3. The extension will read the configuration options from the `dev-docs.json` file and generate documentation for the specified files or folders.
4. The generated documentation files will be stored locally in the specified `docPath` directory.
5. If configured, the generated documentation will also be pushed to the specified Git branch.

**Why and How?**
By using this command, you can streamline the process of generating documentation for your codebase, saving time and effort. Instead of manually generating documentation for each file or folder, you can leverage the power of the Dev-Docs extension to automate the process based on your configuration settings.

The command reads the `dev-docs.json` configuration file, which specifies the files or folders to document, the types of code elements to include, and any filters or patterns to apply. It then uses the Dev-Docs AI to generate documentation for each specified file or folder, taking into account the provided configuration options.

The generated documentation files are stored locally in the specified `docPath` directory, making it easy to review and edit the documentation as needed. Additionally, if configured, the documentation can be pushed to a Git branch, enabling collaboration and version control for your project's documentation.

Overall, the `devdocs.generateBatchDocumentation` command simplifies the documentation process, allowing you to generate comprehensive and up-to-date documentation for your codebase with minimal effort.
  
  