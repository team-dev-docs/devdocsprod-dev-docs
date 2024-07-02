# Generate an External Doc Page

The `devdocs.createExternalDoc` command allows you to generate an external documentation page for your code or project. This command is particularly useful when you want to create a standalone documentation page that can be hosted separately from your codebase, making it accessible to a wider audience or for reference purposes.

## What does this VS Code Extension Command do?

The `devdocs.createExternalDoc` command generates an external documentation page based on the code you have open in your editor. It analyzes the code, extracts relevant information, and generates a markdown file containing the documentation. This markdown file can then be hosted on a separate platform, such as a GitHub Pages site or a documentation hosting service.

## Why should I use this VS Code Extension Command?

Using the `devdocs.createExternalDoc` command can provide several benefits:

1. **Separation of Concerns**: By creating an external documentation page, you separate the documentation from your codebase, making it easier to maintain and update independently.
2. **Accessibility**: External documentation pages can be easily shared and accessed by team members, stakeholders, or users who may not have direct access to your codebase.
3. **Discoverability**: Hosting your documentation on a separate platform can improve its visibility and discoverability, making it easier for others to find and reference.
4. **Customization**: External documentation pages can be styled and formatted according to your preferences, allowing for a more polished and professional presentation.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant for the `devdocs.createExternalDoc` command:

- `ai.docPath`: This option specifies the path where the generated external documentation files will be stored.
- `ai.branch`: This option specifies the Git branch where the generated documentation files will be committed and pushed.
- `ai.components.template`: This option specifies the path to a markdown template file that will be used as the basis for the generated external documentation.
- `ai.internalTypeFilters`: This option allows you to filter the types of code elements (e.g., functions, classes, variables) that should be included in the generated documentation.
- `ai.codeFilters`: This option allows you to filter the code snippets that should be included in the generated documentation based on specific patterns or keywords.
- `ai.nameFilters`: This option allows you to filter the code elements that should be included in the generated documentation based on their names.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "docPath": "docs/external",
    "branch": "main",
    "components": {
      "template": "templates/external-doc.md"
    },
    "internalTypeFilters": [
      "function",
      "class"
    ],
    "codeFilters": [
      "export default"
    ],
    "nameFilters": [
      "handleSubmit",
      "renderComponent"
    ]
  }
}
```

## Prerequisites

Before using the `devdocs.createExternalDoc` command, make sure you have the following prerequisites:

1. A valid GitHub authentication token set up in your Visual Studio Code environment.
2. A Git repository initialized in your project.
3. The `dev-docs.json` configuration file set up with the relevant options for generating external documentation.

## How do I use this VS Code Extension Command?

To use the `devdocs.createExternalDoc` command, follow these steps:

1. Open the file or project for which you want to generate external documentation in Visual Studio Code.
2. You can trigger the command in one of the following ways:
   - Press the keyboard shortcut `alt+cmd+d` (macOS) or `alt+ctrl+d` (Windows/Linux).
   - Open the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`) and search for "Generate an External Doc Page".
   - Right-click on the file or folder in the Explorer pane and select "Generate an External Doc Page" from the context menu.
3. The command will analyze your code and generate an external documentation page based on the configured options in the `dev-docs.json` file.
4. The generated documentation will be stored in the specified `ai.docPath` location.
5. If the `ai.branch` option is set, the documentation files will be committed and pushed to the specified branch in your Git repository.

By following these steps, you can easily generate an external documentation page for your code or project, making it accessible to others and improving the overall documentation experience.
  
  