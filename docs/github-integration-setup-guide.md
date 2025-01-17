# GitHub Integration Setup Guide

This guide will walk you through the process of setting up GitHub integration for Dev-Docs.

## Prerequisites

- A GitHub account
- Admin access to your GitHub repository
- A Dev-Docs account

## Steps

1. Sign in to your Dev-Docs account

2. Go to Settings > Integrations

3. Click "Connect GitHub Account"

4. Authorize Dev-Docs to access your GitHub account

5. Select the repository you want to integrate

6. Configure permissions:
   - Read access to code
   - Write access to pull requests
   - Write access to issues (optional)

7. Click "Connect Repository"

8. In your GitHub repository, add a `dev-docs.json` file to the root directory with the following content:

   ```json
   {
     "gitHubApp": {
       "workflows": ["generateDocs"]
     }
   }
   ```

9. Commit and push the `dev-docs.json` file

10. Back in Dev-Docs, go to your project and click "Sync with GitHub"

11. Dev-Docs will now automatically generate documentation when changes are pushed to your repository

## Troubleshooting

- If integration is not working, check that the `dev-docs.json` file is properly formatted
- Ensure you have granted the necessary permissions to the Dev-Docs GitHub App
- Check the GitHub App settings in your repository to verify the integration is active

For additional help, please contact Dev-Docs support.