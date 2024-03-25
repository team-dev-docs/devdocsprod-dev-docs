
  
  # **Outline Command for DevDocs Extension**

## What does this Vs Code Extension Command do?

The `devdocs.outline` command is responsible for generating an outline or structure for the documentation of a project based on the codebase. It analyzes the project's files, directories, and the existing `dev-docs.json` file to determine which parts of the codebase should be documented and how they should be organized.

## Why should I use this Vs Code Extension Command?

This command is useful for creating a solid foundation for your project's documentation. It streamlines the process of identifying the relevant parts of the codebase that should be included in the documentation, and generates a structured outline based on that analysis. This can save a significant amount of time and effort compared to manually creating the documentation structure from scratch.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` file contains several configuration options that are relevant to the `devdocs.outline` command:

- `ai.contextDirs`: An array of directory paths within the project that should be included as context for documentation generation.
- `ai.mappings`: An array of objects that map files or directories to specific documentation sections or categories.
- `workspaceRoot`: The root directory of the workspace or project.
- `customRoot`: A custom root directory path within the workspace, if different from the default workspace root.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "contextDirs": ["src/utils", "src/helpers"],
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
  },
  "workspaceRoot": "/path/to/project",
  "customRoot": "packages/my-package"
}
```

## Prerequisites

Before running the `devdocs.outline` command, ensure that:

1. Your project has a `dev-docs.json` file at the root level.
2. The `dev-docs.json` file contains the necessary configuration options, such as `ai.contextDirs`, `workspaceRoot`, or `customRoot`.

## How do I use this Vs Code Extension Command?

1. Open your project in Visual Studio Code.
2. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3. Search for the command `DevDocs: Outline` and select it.
4. The extension will analyze your codebase and generate a structured outline based on the files, directories, and the configuration in the `dev-docs.json` file.
5. The generated outline will be saved in the `dev-docs.json` file under the `ai.mappings` property.

The generated outline can be used as a starting point for creating the actual documentation content using the DevDocs extension or other documentation tools.
  
  