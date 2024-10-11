---
slug: /VS-Code-Commands/Generate-Documentation-for-a-Folder
---

# Generate Documentation for a Folder

The command `devdocs.folderDocument` allows you to create documentation for the current folder you have open in your workspace. This command is particularly useful when you want to generate high-level documentation for a specific directory in your project, providing an overview of the folder's contents and its purpose.

## Why Should I Use This VS Code Extension Command?

Using the `devdocs.folderDocument` command can be beneficial in several ways:

1. **Improved Project Organization**: By documenting each folder, you can maintain a well-structured and organized codebase, making it easier for other developers (or your future self) to understand the project's structure and navigate through different components.

2. **Better Context for Files**: When you generate documentation for a folder, you can provide context for the files within that directory, explaining their relationships, interdependencies, and overall purpose within the project.

3. **Collaboration and Onboarding**: Comprehensive folder-level documentation can facilitate collaboration among team members and streamline the onboarding process for new developers joining the project.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant for generating documentation for a folder:

- `contextDirs`: This option specifies the directories that should be considered for generating context information. By default, it is set to `["src/utils", "src/helpers"]`, but you can modify it to include the directories you want to document.

- `mappings`: This option allows you to map specific files or folders to cloud directories, which can be useful for organizing your documentation in a structured manner.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "contextDirs": ["src/components", "src/utils"],
  "mappings": [
    {
      "folder": ["src/components"],
      "cloudDir": "UI Components"
    },
    {
      "folder": ["src/utils"],
      "cloudDir": "Utility Functions"
    }
  ]
}
```

In this example, the `contextDirs` option is set to include the `src/components` and `src/utils` directories for generating context information. Additionally, the `mappings` option maps the `src/components` folder to the "UI Components" cloud directory and the `src/utils` folder to the "Utility Functions" cloud directory.

## Prerequisites

Before using the `devdocs.folderDocument` command, ensure that you have:

1. Installed the Dev-Docs extension in your Visual Studio Code instance.
2. Configured the necessary settings in your `dev-docs.json` file, such as `contextDirs` and `mappings`.

## How Do I Use This VS Code Extension Command?

To generate documentation for a folder, follow these steps:

1. Open your project in Visual Studio Code.
2. Navigate to the folder you want to document in the Explorer panel.
3. Right-click on the folder and select the "Create Document for current folder" option from the context menu.

Alternatively, you can use the command palette:

1. Open the command palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
2. Type "Dev-Docs: Create Document for current folder" and select the command from the list.

After executing the command, Dev-Docs will generate documentation for the selected folder, providing an overview of its contents and purpose. The generated documentation will be saved in the location specified by your configuration settings.

By following these steps, you can efficiently create and maintain documentation for different folders in your project, improving the overall organization and comprehension of your codebase.
  
  