
  
  # **Generate an External Doc Page**

The `devdocs.createExternalDoc` command allows you to generate an external documentation page for your project. This can be useful for creating documentation for concepts, tutorials, sample applications, or any other content that is not directly related to the codebase.

## What does this Vs Code Extension Command do?

This command prompts you to select the type of external documentation you want to create (e.g., blogs, concepts, sample apps, or tutorials). After selecting the type, it will ask you to provide a name for the new external file. Once you enter the name, the command will open the Dev-Docs interface and create a new Markdown file for you to start writing your external documentation.

## Why should I use this Vs Code Extension Command?

Using this command can be beneficial if you want to create supplementary documentation for your project that goes beyond just documenting the code itself. External documentation can include:

1. **Conceptual Guides**: Explain the high-level concepts and principles behind your project.
2. **Tutorials**: Step-by-step guides to help users understand how to use your project.
3. **Sample Applications**: Provide sample applications or code snippets to demonstrate how to use your project in various scenarios.
4. **Blog Posts**: Write blog posts or articles related to your project, such as announcements, updates, or technical deep dives.

By separating this external documentation from your codebase, you can keep your project's documentation organized and focused on different audiences or use cases.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant to this command:

- **`ai.docPath`**: This option specifies the custom path where the external documentation files will be generated.
- **`ai.mappings`**: This option allows you to define mappings between specific files or folders in your codebase and their corresponding documentation directories in the cloud. You can use this to organize your external documentation files.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "docPath": "docs/external",
    "mappings": [
      {
        "cloudDir": "Tutorials",
        "folder": ["tutorials"]
      },
      {
        "cloudDir": "Concepts",
        "folder": ["concepts"]
      },
      {
        "cloudDir": "Sample Apps",
        "folder": ["examples"]
      }
    ]
  }
}
```

In this example, the `docPath` is set to `docs/external`, which means that external documentation files will be generated in the `docs/external` directory. The `mappings` option defines three mappings: one for tutorials, one for concepts, and one for sample applications. This mapping helps organize the external documentation files in their respective directories.

## Prerequisites

Before using this command, make sure you have the following:

1. A valid Dev-Docs configuration file (`dev-docs.json`) in your project.
2. The necessary permissions to create and write files in the configured `docPath` directory.

## How do I use this Vs Code Extension Command?

To generate an external documentation page, follow these steps:

1. Open the Visual Studio Code editor with your project.
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the command palette.
3. Search for "Generate an External Doc Page" and select the `devdocs.createExternalDoc` command.
4. Select the type of external documentation you want to create (e.g., blogs, concepts, sample apps, or tutorials).
5. Enter a name for your new external documentation file when prompted.
6. The Dev-Docs interface will open, and a new Markdown file will be created for you to start writing your external documentation.

By using this command, you can easily create and organize external documentation files for your project, keeping them separate from your codebase while still leveraging the power of Dev-Docs for writing and managing documentation.
  
  