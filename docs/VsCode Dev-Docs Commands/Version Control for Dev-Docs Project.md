# Initialize Dev-Docs

This Vs Code Extension Command allows you to initialize and set up version control for your Dev-Docs project. It enables you to keep track of changes made to your documentation files and collaborate with others on the project.

## Why should I use this Vs Code Extension Command?

Using version control for your Dev-Docs project offers several benefits:

1. **Track Changes**: You can track all changes made to your documentation files, making it easier to revert to previous versions if needed.
2. **Collaboration**: Multiple team members can work on the same documentation files simultaneously, merging their changes without conflicts.
3. **Branching and Merging**: You can create separate branches for new features or bug fixes, and merge them into the main branch once they are complete and tested.
4. **Code Reviews**: Version control systems like Git allow for code reviews, ensuring that changes made to the documentation are reviewed and approved before being merged.
5. **Backup and Restore**: Your documentation files are backed up in a remote repository, allowing you to restore them in case of data loss or accidental deletion.

## What are relevant configuration Options in the `dev-docs.json`?

The relevant configuration options in the `dev-docs.json` file for version control are:

1. **`ai.branch`**: Specifies the default branch name for your Dev-Docs project. The default value is `"main"`.
2. **`customRoot`**: Specifies the root directory for your Dev-Docs project, relative to the workspace root. The default value is `"packages/my-package"`.
3. **`workspaceRoot`**: Specifies the absolute path to the root directory of your project workspace. The default value is `"/path/to/project"`.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "branch": "main"
  },
  "customRoot": "packages/my-package",
  "workspaceRoot": "/path/to/project"
}
```

## Prerequisites

Before using this command, ensure that you have the following prerequisites:

1. Git installed on your local machine.
2. A remote repository (e.g., GitHub, GitLab, or Bitbucket) where you want to host your Dev-Docs project.

## How do I use this Vs Code Extension Command?

To initialize version control for your Dev-Docs project, follow these steps:

1. Open the VS Code Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
2. Search for and select the "Initialize Dev-Docs" command.
3. Follow the prompts to set up your Git repository and configure the necessary settings.
4. Once the setup is complete, you can start committing and pushing your changes to the remote repository.

After the initial setup, you can use the standard Git commands within the integrated terminal or the Source Control view in VS Code to manage your Dev-Docs project's version control.

It's important to note that version control is a crucial aspect of any software project, including documentation projects like Dev-Docs. By using this command, you can ensure that your documentation is properly versioned, backed up, and easy to collaborate on with your team members.
  
  