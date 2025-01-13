# Dev-Docs Troubleshooting Guide

This guide covers common issues you may encounter when using Dev-Docs and how to resolve them.

## Authentication Errors

If you encounter authentication errors when trying to use Dev-Docs:

1. Ensure you are signed in to your Dev-Docs account in VS Code
2. Try clearing your authentication tokens (Cmd+Shift+P > "Clear Dev-Docs Tokens")
3. Sign out and sign back in to Dev-Docs

## Generation Fails

If documentation generation is failing:

1. Check that your `dev-docs.json` file is properly configured
2. Ensure you have the necessary permissions for the target directories
3. Try running the command with fewer files/folders selected

## Markdown Rendering Issues 

If generated Markdown is not rendering properly:

1. Verify the Markdown syntax is correct
2. Check for any unsupported Markdown features
3. Try regenerating the documentation

## Performance Problems

If Dev-Docs is running slowly:

1. Select fewer files/folders when generating documentation
2. Increase the `ai.maxTokens` value in `dev-docs.json` 
3. Close other resource-intensive applications

## Extension Not Working

If the Dev-Docs extension stops working entirely:

1. Reload the VS Code window 
2. Uninstall and reinstall the extension
3. Check for conflicts with other extensions

For any other issues, please check our [GitHub issues page](https://github.com/dev-docs/dev-docs/issues) or contact support@dev-docs.com.