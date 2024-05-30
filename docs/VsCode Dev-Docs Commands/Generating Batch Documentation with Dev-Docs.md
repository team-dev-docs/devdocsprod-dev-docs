
  
  # **Dev-Docs Batch Documentation**

The `devdocs.generateBatchDocumentation` command is used to generate documentation for multiple files or directories at once in a batch process. This command can be helpful when you need to update or create documentation for a large codebase or multiple components simultaneously.

## Why should I use this Vs Code Extension Command?

Generating documentation for an entire project or large parts of a codebase can be a time-consuming and tedious task if done manually. The `devdocs.generateBatchDocumentation` command automates this process, saving you time and effort. It allows you to quickly generate documentation for multiple files or directories in a single step, ensuring consistency and reducing the chances of missing important documentation.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant for the `devdocs.generateBatchDocumentation` command:

- `ai.components.template`: Specifies the path to the Markdown template file used for generating the documentation.
- `ai.docPath`: Defines the custom path where the generated documentation files will be saved.
- `ai.branch`: Specifies the Git branch where the generated documentation will be committed and pushed.
- `ai.internalTypeFilters`: Allows you to filter the types of code elements (e.g., classes, functions, variables) that should be included in the generated documentation.
- `ai.codeFilters`: Provides an array of strings to filter the code elements based on specific patterns or keywords.
- `ai.nameFilters`: Allows you to filter the code elements based on their names, useful for including or excluding specific functions or methods.
- `ai.docSubFolder`: Specifies the subfolder within the `docPath` where the generated documentation files will be saved.
- `ai.contextDirs`: An array of directories that should be included when generating the documentation context.
- `ai.mappings`: Defines the mappings between code files or folders and the corresponding documentation sections or directories in the cloud.

## Example JSON of relevant Dev-Docs.json options

Here's an example JSON configuration with the minimum required options to use the `devdocs.generateBatchDocumentation` command:

```json
{
  "ai": {
    "components": {
      "template": "path/to/markdown/template.md"
    },
    "docPath": "docs",
    "branch": "main",
    "internalTypeFilters": [
      "function",
      "class"
    ]
  }
}
```

## Prerequisites

Before using the `devdocs.generateBatchDocumentation` command, ensure that you have:

1. A valid `dev-docs.json` configuration file in your project root directory.
2. A Markdown template file specified in the `ai.components.template` configuration option.
3. The necessary permissions to write documentation files to the specified `docPath`.

## How do I use this Vs Code Extension Command?

To use the `devdocs.generateBatchDocumentation` command, follow these steps:

1. Open your project in Visual Studio Code.
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) to open the Command Palette.
3. Search for "Batch Document" and select the `devdocs.generateBatchDocumentation` command.

Alternatively, you can use the keyboard shortcut configured for this command (if available). By default, it is not assigned to any keyboard shortcut.

After executing the command, the extension will analyze your codebase based on the specified configuration options and generate documentation files for the selected code elements. The generated documentation files will be saved in the specified `docPath` and `docSubFolder`.

**Why and How?**

The `devdocs.generateBatchDocumentation` command is designed to streamline the documentation process for large codebases or multiple components. By automating the generation of documentation files, it saves time and effort, ensuring consistent and up-to-date documentation across your project.

The command works by analyzing your codebase based on the specified configuration options, such as `internalTypeFilters`, `codeFilters`, and `nameFilters`. It then generates documentation files for the selected code elements using the provided Markdown template. The generated documentation files are saved in the specified `docPath` and `docSubFolder`, organized according to the defined `mappings` (if applicable).

This command is particularly useful when you need to update documentation after making changes to your codebase or when onboarding new team members who need to understand the codebase quickly. By automating the documentation generation process, you can ensure that your documentation remains up-to-date and consistent with the latest code changes.
  
  