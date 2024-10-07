

  ---
slug: /VS-Code-Commands/Generate-High-Level-Context-for-the-Folder
---

# Generate High Level Context for the Folder

This VS Code extension command allows you to generate a high-level overview or context for the entire folder or directory. It analyzes all the code files within the folder and provides a comprehensive summary of what the folder's purpose is and what it does from a high-level perspective.

## Why should I use this VS Code Extension Command?

Generating a high-level context for a folder can be extremely useful when working on large codebases or projects with multiple files and directories. It helps you understand the overall purpose and functionality of a specific folder without having to dive into each individual file. This can be particularly beneficial when onboarding new team members, reviewing code, or documenting a project's architecture.

## What are relevant configuration Options in the `dev-docs.json`?

The relevant configuration options for generating a high-level context for a folder in the `dev-docs.json` file are:

1. **`ai.contextDirs`**: An array of directory paths that should be considered for context generation. By default, it includes `["src/utils", "src/helpers"]`.
2. **`ai.onboardingTypeFilters`**: An array of types or elements that should be included in the context generation process. This option helps tailor the output for onboarding purposes.
3. **`customRoot`**: A string that specifies the custom root directory for your project. This can be useful if your project is located within a monorepo or a specific subdirectory.
4. **`workspaceRoot`**: A string that represents the absolute path to your project's root directory.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "contextDirs": ["src/utils", "src/helpers"],
    "onboardingTypeFilters": [
      "file",
      "module",
      "namespace",
      "package",
      "class",
      "method",
      "property",
      "field",
      "constructor",
      "enum",
      "interface",
      "function",
      "variable",
      "constant"
    ]
  },
  "customRoot": "packages/my-package",
  "workspaceRoot": "/path/to/project"
}
```

## Prerequisites

Before using the `devdocs.generateFolderContext` command, make sure you have the following prerequisites:

1. A valid `dev-docs.json` configuration file in your project's root directory.
2. The folder or directory for which you want to generate the high-level context must be within the specified `workspaceRoot` or `customRoot` paths.

## How do I use this VS Code Extension Command?

To generate a high-level context for a folder, follow these steps:

1. Open your project in Visual Studio Code.
2. In the Explorer view, right-click on the folder or directory for which you want to generate the context.
3. From the context menu, select the "Generate High Level Context for the Folder" option.

Alternatively, you can also trigger the command from the Command Palette (Ctrl+Shift+P or Cmd+Shift+P) by typing "Generate High Level Context for the Folder" and selecting the command.

After running the command, the extension will analyze all the code files within the selected folder and generate a high-level context document. This document will provide an overview of the folder's purpose and functionality, helping you understand the code structure and organization better.

## Customizing the Output for Onboarding

The `ai.onboardingTypeFilters` option in the `dev-docs.json` file allows you to tailor the generated context specifically for onboarding purposes. By adjusting this array, you can focus on the most relevant code elements that new team members should understand first. For example, you might want to prioritize high-level structures like classes and interfaces while excluding lower-level details like individual variables or constants.

To optimize the output for onboarding, consider the following tips:

1. Start with a limited set of type filters, focusing on the most important elements for newcomers.
2. Gradually expand the filters as team members become more familiar with the codebase.
3. Include comments in your code that highlight key concepts or design decisions, as these will be captured in the generated context.

By fine-tuning the `ai.onboardingTypeFilters`, you can create a more targeted and effective onboarding experience for new team members, helping them quickly grasp the essential components of your project's architecture.

  