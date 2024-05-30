
  
  # Set Where Dev-Docs will read and write to

This command allows you to set the root directory for the Dev-Docs extension to read and write documentation files. It is an essential step in configuring the extension to work with your project.

## Why should I use this Vs Code Extension Command?

Setting the root directory is crucial because it tells Dev-Docs where to look for your codebase and where to create or update documentation files. Without setting the correct root directory, the extension may not function properly or may generate documentation in the wrong location.

## What are relevant configuration Options in the `dev-docs.json`?

The most relevant configuration option for this command is the `gitroot` property under the `ai` object. This property is used to store the path to the root directory that you set with this command.

Here's an example of how the `gitroot` property might appear in your `dev-docs.json` file:

```json
{
  "ai": {
    "gitroot": "/path/to/your/project"
  }
}
```

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "gitroot": "/path/to/your/project"
  }
}
```

In this example, the minimum required configuration is the `gitroot` property under the `ai` object. This property should be set to the path of your project's root directory.

## Prerequisites

Before using this command, make sure you have:

1. Opened your project in Visual Studio Code.
2. Installed the Dev-Docs extension.

## How do I use this Vs Code Extension Command?

To set the root directory for Dev-Docs, follow these steps:

1. Open the Command Palette in Visual Studio Code by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
2. Type "Set Where Dev-Docs will read and write to" and select the command from the list.
3. A list of available repositories or directories will be displayed. Choose the root directory of your project.
4. The selected root directory will be saved in the `dev-docs.json` configuration file under the `gitroot` property.

After setting the root directory, Dev-Docs will be able to locate your codebase and generate or update documentation files within your project. This is a crucial step to ensure that the extension functions correctly and generates documentation in the desired location.
  
  