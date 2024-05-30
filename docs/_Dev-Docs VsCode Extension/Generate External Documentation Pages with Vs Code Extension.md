
  
  # **Generate an External Doc Page**

The `devdocs.createExternalDoc` command in the Visual Studio Code extension allows you to generate and populate an external documentation page for your project. This command is particularly useful when you need to create documentation for topics that are not directly related to your codebase, such as blog posts, tutorials, sample applications, or conceptual overviews.

## What does this Vs Code Extension Command do?

The `devdocs.createExternalDoc` command prompts you to select a category for your external documentation (e.g., blogs, concepts, sample apps, tutorials). Once you've chosen a category, it will ask you to provide a name for the new external file. The command then creates a new Markdown file within your project's documentation directory, ready for you to populate with content.

## Why should I use this Vs Code Extension Command?

This command streamlines the process of creating documentation for external topics that are not directly tied to your codebase. By separating these external documents from your API reference or code documentation, you can maintain a clear separation of concerns and ensure that your core documentation remains focused on your project's functionality.

Additionally, organizing external documentation into categories like blogs, concepts, sample apps, and tutorials can enhance the discoverability and navigation of your documentation for users.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` configuration file does not directly contain options specific to the `devdocs.createExternalDoc` command. However, some relevant options that may affect the behavior or location of the generated external documentation files include:

- `docPath`: Specifies the custom path where the documentation files should be generated.
- `docSubFolder`: Defines the subdirectory within the `docPath` where the external documentation files will be stored (e.g., `external-docs`).

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "docPath": "docs",
    "docSubFolder": "external-docs"
  }
}
```

In this example, the generated external documentation files will be stored in the `docs/external-docs` directory within your project.

## Prerequisites

- Ensure that you have a `dev-docs.json` configuration file set up in your project.
- Verify that the `docPath` and `docSubFolder` options are correctly configured to match your desired documentation structure.

## How do I use this Vs Code Extension Command?

1. Open the Visual Studio Code editor and ensure that your project is open.
2. Press the keyboard shortcut for the `devdocs.createExternalDoc` command (e.g., `alt+cmd+d` on macOS) or navigate to the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`) and search for "Generate an External Doc Page".
3. Select the category for your external documentation from the provided list (e.g., blogs, concepts, sample apps, tutorials).
4. Enter a name for your new external file when prompted.
5. A new Markdown file will be created in the specified `docPath/docSubFolder` directory, ready for you to populate with content.
6. Start writing your external documentation content in the generated Markdown file, following the conventions and guidelines of your project's documentation style.

By using the `devdocs.createExternalDoc` command, you can streamline the process of creating and organizing external documentation for your project, ensuring a consistent structure and separation from your codebase documentation.
  
  