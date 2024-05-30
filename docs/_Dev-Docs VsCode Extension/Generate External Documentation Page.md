
  
  # **Generate an External Doc Page**

The `devdocs.createExternalDoc` command is used to generate an external documentation page for the current code file or selection. This command is particularly useful when you want to create a separate documentation page that can be viewed and maintained independently from the source code.

## Why should I use this Vs Code Extension Command?

Creating an external documentation page can be beneficial in several scenarios:

1. **Separation of Concerns**: By separating the documentation from the source code, you can maintain a clear distinction between the implementation details and the documentation. This can make it easier to manage and update the documentation without directly modifying the code.

2. **Improved Readability**: External documentation pages can provide a more organized and structured way of presenting information, making it easier for developers and stakeholders to understand the purpose, functionality, and usage of the code.

3. **Collaborative Documentation**: External documentation pages can be shared and edited by multiple team members, fostering collaboration and ensuring that the documentation remains up-to-date and accurate.

4. **Integration with External Tools**: External documentation pages can be integrated with various tools and platforms, such as wikis, documentation generators, or static site generators, allowing for better organization, formatting, and publishing of the documentation.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant to the `devdocs.createExternalDoc` command:

- `ai.docPath`: This option specifies the path or directory where the generated external documentation files will be stored.
- `ai.branch`: This option allows you to specify the Git branch where the external documentation changes should be committed and pushed.
- `ai.components.template`: This option specifies the path to a Markdown file that serves as a template for the external documentation page.
- `ai.mappings`: This option allows you to define mappings between source code files or folders and the corresponding external documentation directories in the cloud.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "docPath": "docs/external",
    "branch": "main",
    "components": {
      "template": "docs/templates/component.md"
    },
    "mappings": [
      {
        "files": ["src/main.ts"],
        "cloudDir": "Getting Started"
      },
      {
        "folder": ["src/components"],
        "cloudDir": "Components"
      }
    ]
  }
}
```

## Prerequisites

Before using the `devdocs.createExternalDoc` command, ensure that you have:

1. Configured the necessary authentication credentials (e.g., GitHub tokens) to allow the extension to write to the specified repository.
2. Set up the `dev-docs.json` configuration file with the relevant options for external documentation generation.

## How do I use this Vs Code Extension Command?

To use the `devdocs.createExternalDoc` command, follow these steps:

1. Open the file or select the code for which you want to generate external documentation.
2. Press the configured keyboard shortcut (e.g., `alt+cmd+d` on macOS) or navigate to the command palette (`Cmd+Shift+P` or `Ctrl+Shift+P`) and search for "Generate an External Doc Page".
3. The extension will analyze the current code or selection and generate an external documentation page based on the configured options in the `dev-docs.json` file.
4. The generated documentation will be stored in the specified `docPath` directory and committed to the configured `branch`.

By separating the documentation from the source code, the `devdocs.createExternalDoc` command allows you to maintain a more organized and accessible documentation repository. This can improve collaboration, readability, and overall maintainability of your project's documentation.
  
  