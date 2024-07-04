---
slug: /VS-Code-Commands/Generate-Documentation-From-Mappings
---

# Generate Documentation From Mappings

This VS Code extension command allows you to generate documentation for your codebase based on predefined mappings specified in the `dev-docs.json` configuration file. The mappings define which files or folders correspond to specific sections or categories of your documentation.

## Why should I use this VS Code Extension Command?

By using this command, you can easily organize and structure your documentation according to the logical components or features of your project. It streamlines the process of generating documentation for different parts of your codebase, ensuring that the documentation stays up-to-date and aligned with the actual implementation.

## What are relevant configuration Options in the `dev-docs.json`?

The most relevant configuration option for this command is the `mappings` property under the `ai` object in the `dev-docs.json` file. This property is an array of objects, where each object defines a mapping between files/folders and a corresponding documentation section or category.

Here are the properties that define a mapping:

- `files`: An array of file paths that should be included in the specified documentation section.
- `folder`: An array of folder paths that should be included in the specified documentation section.
- `cloudDir`: The name or path of the documentation section or category in which the files/folders should be documented.

## Example JSON of relevant `dev-docs.json` options

```json
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
```

In this example, the `src/main.ts` file will be documented under the "Getting Started" section, and all files within the `src/components` folder will be documented under the "Components" section.

## Prerequisites

Before using this command, ensure that you have:

1. A `dev-docs.json` configuration file in your project root with the desired mappings defined.
2. An authenticated connection to the Dev-Docs cloud service (if required).

## How do I use this VS Code Extension Command?

To generate documentation from the defined mappings, follow these steps:

1. Open the Visual Studio Code editor with your project.
2. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3. Search for and select the "Generate From Mappings" command.
4. The extension will read the mappings from the `dev-docs.json` file and generate the documentation accordingly, organizing it based on the specified `cloudDir` values.
5. The generated documentation will be available in the appropriate sections or categories within the Dev-Docs cloud service or your local documentation folder, depending on your configuration.

By using this command, you can efficiently maintain and update your documentation in sync with your codebase, ensuring that developers have access to accurate and up-to-date information about different components or features of your project.
  
  