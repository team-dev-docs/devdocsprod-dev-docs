# GitHub Integration Setup Guide

This guide will walk you through the process of setting up GitHub integration for Dev-Docs.

## Prerequisites

- A GitHub account
- Admin access to the repository you want to integrate

## Steps

1. Navigate to the Dev-Docs dashboard and click on "Integrations" in the left sidebar.

2. Click on "Add Integration" and select "GitHub" from the list of available integrations.

3. Click "Authorize Dev-Docs" to begin the GitHub OAuth flow.

4. Select the GitHub organization and repository you want to integrate.

5. Choose the permissions you want to grant Dev-Docs:
   - Read access to code and metadata
   - Write access to content and file paths
   - Read and write access to pull requests

6. Click "Install" to complete the integration.

7. Back in the Dev-Docs dashboard, you should now see your GitHub repository listed under "Integrated Repositories".

8. Configure your `dev-docs.json` file in the root of your repository:

```json
{
  "gitHubApp": {
    "workflows": ["generateDocs", "generateChangelog"]
  }
}
```

9. Commit and push the `dev-docs.json` file to your repository.

10. Dev-Docs will now automatically generate documentation and changelogs based on your code changes.

## Troubleshooting

If you encounter any issues during setup, please check the following:

- Ensure you have admin access to the GitHub repository
- Verify that the `dev-docs.json` file is properly formatted
- Check that the necessary permissions have been granted to the Dev-Docs GitHub App

For additional help, please contact our support team.