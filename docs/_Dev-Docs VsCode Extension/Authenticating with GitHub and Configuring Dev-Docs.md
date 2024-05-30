
  
  # **Sign in to Dev-Docs with GitHub**

The `devdocs.getGitHubUser` command is used to authenticate with GitHub and sign in to Dev-Docs Cloud. This is a crucial step to enable the ability to save and sync your documentation across different machines and collaborate with your team members.

## Why should I use this Vs Code Extension Command?

Signing in to Dev-Docs Cloud with your GitHub account provides several benefits:

1. **Centralized Documentation**: Your documentation will be stored securely in the Dev-Docs Cloud, making it accessible from any machine or location.
2. **Collaboration**: You can invite team members to collaborate on the documentation, allowing for better coordination and knowledge sharing.
3. **Version Control**: All changes to your documentation are tracked, enabling you to review the history and revert if necessary.
4. **Backup and Synchronization**: Your documentation is automatically backed up and synchronized across devices, ensuring you always have access to the latest version.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` configuration file contains several options related to the GitHub integration and the Dev-Docs Cloud. Here are the relevant options:

- `ai.branch`: Specifies the Git branch where your documentation will be stored and synchronized.
- `ai.docPath`: The custom path where your documentation will be stored in the Dev-Docs Cloud.
- `ai.mappings`: An array of objects that map your local files or folders to specific directories in the Dev-Docs Cloud.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "branch": "main",
    "docPath": "my-project/docs",
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
  }
}
```

## Prerequisites

Before using the `devdocs.getGitHubUser` command, ensure that you have a GitHub account and that the Dev-Docs extension is properly configured with your GitHub credentials.

## How do I use this Vs Code Extension Command?

To sign in to Dev-Docs Cloud with your GitHub account, follow these steps:

1. Open the Dev-Docs sidebar by clicking on the Dev-Docs icon in the activity bar or by running the `devdocs.turnSidebar` command.
2. In the Dev-Docs sidebar, click the "Sign In" button or run the `devdocs.getGitHubUser` command from the command palette.
3. A new browser window or tab will open, prompting you to authenticate with GitHub.
4. Follow the instructions to sign in with your GitHub account.
5. Once authenticated, the Dev-Docs extension will be authorized to access your GitHub account and store your documentation in the Dev-Docs Cloud.

After successfully signing in, you can start creating, editing, and saving your documentation to the Dev-Docs Cloud. The documentation will be synchronized across devices and accessible to your team members (if shared).
  
  