
  
  # **Set GitHub Root Command**

## What does this VS Code Extension Command do?

The `setGithubRoot` command allows users to select the Git root directory that the Dev Docs extension will read from and write to. This command is essential for the extension to function correctly, as it needs to know the location of the Git repository it should interact with.

## Why should I use this VS Code Extension Command?

This command is crucial if you want to use the Dev Docs extension with a specific Git repository. Without setting the Git root directory, the extension won't know where to look for files or where to write any changes or documentation updates.

## What are relevant configuration Options in the `dev-docs.json`?

While the provided code does not directly interact with the `dev-docs.json` configuration file, it's likely that this file contains settings related to the Git root directory or other configuration options for the extension. However, without access to the `dev-docs.json` file, it's difficult to provide specific details about relevant configuration options.

## Prerequisites

- The Dev Docs extension must be installed and enabled in Visual Studio Code.
- You must have at least one Git repository open in your workspace.

## How do I use this VS Code Extension Command?

To use the `setGithubRoot` command, follow these steps:

1. Open Visual Studio Code and make sure you have a workspace with a Git repository open.
2. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
3. Type "Set Github Root" and select the `devdocs.setGithubRoot` command from the list.
4. A list of available Git root directories will be displayed. Select the directory you want the Dev Docs extension to use.
5. The selected Git root directory will be saved in the extension's storage, and the Dev Docs extension will now read from and write to that repository.

By setting the Git root directory, you ensure that the Dev Docs extension knows where to look for files and where to store any documentation updates or changes. This is a crucial step in using the extension effectively with your desired Git repository.
  
  