# Dev-Docs Troubleshooting Guide

This guide covers common issues you may encounter when using Dev-Docs and how to resolve them.

## Installation Issues

### VS Code Extension Not Installing

If you're having trouble installing the Dev-Docs VS Code extension:

1. Make sure you have an active internet connection
2. Try restarting VS Code
3. Clear your VS Code extensions cache:
   - On Windows: Delete `%USERPROFILE%\.vscode\extensions`
   - On macOS/Linux: Delete `~/.vscode/extensions`
4. Retry installing the extension

## Configuration Issues

### dev-docs.json Not Being Recognized

If Dev-Docs is not picking up your `dev-docs.json` configuration:

1. Ensure the file is in the root directory of your project
2. Check that the file is named exactly `dev-docs.json` (case-sensitive)
3. Validate your JSON syntax using a JSON linter

### AI-Generated Content Not Matching Expectations

If the AI-generated content is not what you expected:

1. Review your prompts and make sure they are clear and specific
2. Adjust the `internalTypeFilters`, `codeFilters`, and `nameFilters` in your `dev-docs.json`
3. Try regenerating the content after making changes

## Command Execution Issues

### Generate Documentation Command Not Working

If the "Generate Documentation" command is not functioning:

1. Ensure you have a valid authentication token (try clearing and re-authenticating)
2. Check your VS Code console for any error messages
3. Verify that your `dev-docs.json` is properly configured

### Context Generation Failing

If you're unable to generate context for files or folders:

1. Check that the selected files/folders are within the specified `contextDirs`
2. Ensure you have sufficient permissions to read the files
3. Try running the command on a smaller subset of files to isolate the issue

## Sync Issues

### Unable to Sync to Dev-Docs Cloud

If you're having trouble syncing your documentation to Dev-Docs Cloud:

1. Verify your internet connection
2. Ensure you're logged in with a valid account
3. Check that your repository is properly linked to your Dev-Docs account
4. Review any error messages in the VS Code output panel for Dev-Docs

## Performance Issues

### Slow Generation Times

If documentation generation is taking too long:

1. Reduce the scope of files being processed by adjusting your `contextDirs`
2. Optimize your prompts to be more specific
3. Ensure your machine meets the minimum system requirements

## Still Having Issues?

If you're still experiencing problems after trying these troubleshooting steps, please:

1. Check our [GitHub Issues](https://github.com/your-repo/issues) page to see if it's a known issue
2. Review our [FAQ](https://docs.dev-docs.io/faq) for more information
3. Reach out to our support team at support@dev-docs.io with details about your issue

Remember to include your `dev-docs.json` configuration (with any sensitive information removed) and relevant error messages when seeking help.