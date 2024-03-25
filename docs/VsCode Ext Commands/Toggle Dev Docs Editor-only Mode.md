
  
  # **Toggle Dev Docs Editor-only Mode**

## What does this VS Code Extension Command do?

This command allows you to toggle the Dev Docs editor-only mode, which restricts the functionality of the VS Code editor to only display documentation files. When this mode is enabled, you can focus on writing and editing documentation without any distractions from other code files or functionalities.

## Why should I use this VS Code Extension Command?

Using this command can be beneficial in the following scenarios:

1. **Dedicated Documentation Workspace**: If you primarily work on documentation and want to create a dedicated workspace for writing and editing documentation files, this command can help you achieve that by hiding all other code files and features that are not relevant to documentation.

2. **Improved Focus and Productivity**: By removing distractions and limiting the editor to documentation files, you can improve your focus and productivity when working on documentation tasks.

3. **Simplified User Interface**: With the editor-only mode enabled, the VS Code user interface becomes streamlined, displaying only the essential features and tools required for documentation work.

## What are relevant configuration options in the `dev-docs.json`?

The `dev-docs.json` file is likely used to configure the Dev Docs extension and its behavior. While the provided code does not directly reference any configuration options, some relevant options that could be present in the `dev-docs.json` file include:

- `enableEditorOnlyMode`: A boolean option that controls whether the editor-only mode is enabled or disabled by default.
- `excludedFilePatterns`: An array of file patterns or glob patterns that specify which files should be hidden or excluded when the editor-only mode is enabled.
- `includedFilePatterns`: An array of file patterns or glob patterns that specify which files should be visible and included when the editor-only mode is enabled.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "enableEditorOnlyMode": true,
  "excludedFilePatterns": [
    "**/*.{js,ts,jsx,tsx,vue,html,css,scss,sass}",
    "!**/*.md"
  ],
  "includedFilePatterns": [
    "**/*.md"
  ]
}
```

In this example, the `enableEditorOnlyMode` is set to `true`, which means the editor-only mode is enabled by default. The `excludedFilePatterns` option hides all files except Markdown (`.md`) files, while the `includedFilePatterns` option ensures that Markdown files are always visible, even in editor-only mode.

## Prerequisites

Before using this command, ensure that you have the Dev Docs extension installed and configured properly in your VS Code environment.

## How do I use this VS Code Extension Command?

To use this command, follow these steps:

1. Open the VS Code Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
2. Type "Toggle Dev Docs Editor-only Mode" and select the corresponding command from the list.
3. A quick pick menu will appear, presenting you with two options: "yes" and "no".
4. Select "yes" to enable the editor-only mode, which will hide all non-documentation files and features.
5. Select "no" to disable the editor-only mode and restore the standard VS Code editor experience.

By following these instructions, you can easily toggle the Dev Docs editor-only mode on or off, depending on your current workflow and documentation needs.
  
  