
  
  # **Open Dev Docs from Current File**

## What does this command do?

This Visual Studio Code extension command opens the Dev Docs application, which is a tool for documenting code and managing documentation. The command analyzes the currently open file in the editor and extracts relevant symbols (functions, classes, variables, etc.) based on the configured filters in the `dev-docs.json` file. It then launches the Dev Docs application, passing the extracted symbols and a list of undocumented files as parameters.

## Why should I use this command?

Using this command streamlines the process of documenting code within the Dev Docs application. Instead of manually navigating to the relevant sections or files, the command automatically identifies the symbols that need documentation and presents them to the user in the Dev Docs interface. This saves time and effort, especially when working on large codebases with many files and symbols.

Additionally, by providing a list of undocumented files, the command helps ensure that no files are missed during the documentation process. This can improve the overall completeness and consistency of the project's documentation.

## What are relevant configuration options in the `dev-docs.json`?

The `dev-docs.json` file contains several configuration options that affect the behavior of the Dev Docs extension and the command. The relevant options for this command are:

1. `ai.internalTypeFilters`: This option specifies the types of symbols (e.g., classes, functions, variables) that should be included or excluded from the documentation process.
2. `ai.codeFilters`: This option allows you to define regular expressions or string patterns to filter symbols based on their code content.
3. `ai.nameFilters`: This option allows you to filter symbols based on their names, using regular expressions or string patterns.

These filters control which symbols are extracted from the current file and passed to the Dev Docs application.

## Prerequisites

To use this command effectively, you should have the following prerequisites in place:

1. Visual Studio Code installed with the Dev Docs extension enabled.
2. A `dev-docs.json` configuration file set up in your project, with the appropriate filters and settings.
3. At least one file open in the Visual Studio Code editor.

## How do I use this command?

To use the "Open Dev Docs from Current File" command, follow these steps:

1. Open a file in Visual Studio Code that you want to document.
2. Navigate to the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3. Type "Open Dev Docs" and select the "Open Dev Docs from Current File" command.
4. The Dev Docs application will launch, displaying the extracted symbols from the current file and a list of undocumented files.
5. Within the Dev Docs interface, you can navigate to the relevant sections or symbols and add or update documentation as needed.

By using this command, you can quickly initiate the documentation process for the code you're currently working on, saving valuable time and ensuring consistency in your project's documentation.
  
  