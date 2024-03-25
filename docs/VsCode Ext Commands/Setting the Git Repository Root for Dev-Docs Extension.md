
  
  # **Set Github Root Command**

## What does this Visual Studio Code Extension Command do?

The `setGithubRoot` command allows the user to select the root directory of a Git repository that the Dev-Docs extension will read from and write to. This command is essential for ensuring that the Dev-Docs extension can properly locate and interact with the relevant codebase and documentation files.

## Why should I use this Visual Studio Code Extension Command?

Using the `setGithubRoot` command is crucial for the proper functioning of the Dev-Docs extension within your project. By explicitly specifying the root directory of your Git repository, you ensure that the extension can accurately locate and manage your codebase and associated documentation files. This command helps to streamline the documentation process and maintain consistency between your code and its accompanying documentation.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` configuration file may contain options related to the Git repository root directory, such as:

- `gitroot`: This option specifies the path to the root directory of the Git repository that the Dev-Docs extension should target.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "gitroot": "/path/to/your/git/repository/root"
}
```

## Prerequisites

Before using the `setGithubRoot` command, ensure that:

1. You have a valid Git repository set up for your project.
2. The Dev-Docs extension is installed and configured correctly in your Visual Studio Code environment.

## How do I use this Visual Studio Code Extension Command?

To use the `setGithubRoot` command, follow these steps:

1. Open your Visual Studio Code editor.
2. Navigate to the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3. Type "Dev-Docs: Set Github Root" and select the command from the list.
4. A quick pick menu will appear, displaying a list of available Git repositories.
5. Select the repository root directory that you want the Dev-Docs extension to target.
6. The selected Git repository root will be stored in the Dev-Docs configuration, and the extension will now interact with the specified codebase and documentation files.

By using the `setGithubRoot` command, you ensure that the Dev-Docs extension has the correct context and can accurately manage your project's documentation in tandem with your codebase.
  
  