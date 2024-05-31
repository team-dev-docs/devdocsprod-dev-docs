# Sign Into Dev-Docs with GitHub

The `devdocs.getGitHubUser` command allows you to sign into the Dev-Docs extension using your GitHub account. This is a crucial step to take advantage of the cloud-based features of Dev-Docs, such as saving and sharing your documentation across multiple projects and devices.

## Why should I use this Vs Code Extension Command?

Signing into Dev-Docs with GitHub provides several benefits:

1. **Cloud Synchronization**: By linking your GitHub account, you can seamlessly sync your documentation across multiple devices and projects. This ensures that your documentation is always up-to-date and accessible from anywhere.

2. **Collaboration**: With the ability to save your documentation to the Dev-Docs Cloud, you can easily collaborate with team members and share your work with others.

3. **Backup and Version Control**: Your documentation is securely backed up and versioned in the Dev-Docs Cloud, providing a reliable way to track changes and revert to previous versions if needed.

4. **Seamless Integration**: Dev-Docs integrates seamlessly with GitHub, allowing you to leverage your existing GitHub workflows and access your documentation directly from your code repositories.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` configuration file contains several options that are relevant to the `devdocs.getGitHubUser` command:

1. `ai.branch` (optional): Specifies the branch where your documentation will be saved and synced. The default value is `"main"`.

2. `ai.docPath` (optional): Specifies the path where your documentation will be stored in the Dev-Docs Cloud. The default value is `"some custom path"`.

3. `customRoot` (optional): Specifies the custom root directory for your project, if it differs from the default project structure. The default value is `"packages/my-package"`.

4. `workspaceRoot` (optional): Specifies the absolute path to your project's root directory. The default value is `"/path/to/project"`.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "branch": "main",
    "docPath": "my-project-docs"
  },
  "customRoot": "src",
  "workspaceRoot": "/Users/yourname/projects/my-project"
}
```

## Prerequisites

Before using the `devdocs.getGitHubUser` command, ensure that you have:

1. A GitHub account.
2. The Dev-Docs extension installed in Visual Studio Code.
3. A project opened in Visual Studio Code.

## How do I use this Vs Code Extension Command?

To sign into Dev-Docs with your GitHub account, follow these steps:

1. Open the Command Palette in Visual Studio Code by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
2. Type "Dev-Docs: Sign into Devdocs with GitHub" and select the `devdocs.getGitHubUser` command from the list.
3. You will be prompted to authenticate with GitHub in your default web browser. Grant the necessary permissions to allow Dev-Docs to access your GitHub account.
4. After successful authentication, you will be able to use the cloud-based features of Dev-Docs, such as saving and sharing your documentation.

By signing into Dev-Docs with your GitHub account, you unlock the full potential of this powerful documentation tool, enabling seamless collaboration, synchronization, and version control for your project's documentation.
  
  