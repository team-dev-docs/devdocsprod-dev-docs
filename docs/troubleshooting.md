# Troubleshooting Guide

This guide covers common issues you may encounter when using Dev-Docs and how to resolve them.

## Issues with Documentation Generation

### Documentation not generating

If your documentation is not generating after running the "Generate Documentation" command:

1. Check that you have a valid `dev-docs.json` file in your project root
2. Ensure you have the necessary permissions for the target output folder
3. Try running the command with administrator/sudo privileges
4. Check the Dev-Docs output panel for any error messages

### Generated documentation is incomplete or inaccurate  

If the generated documentation is missing sections or contains errors:

1. Review your `dev-docs.json` settings, especially `internalTypeFilters` and `codeFilters`
2. Ensure your code is properly commented and follows best practices
3. Try adjusting the `contextPrompt` or `defaultLength` settings
4. Run the command on specific files or folders rather than the entire project

## Integration Issues

### GitHub App not detecting changes

If the GitHub App is not detecting changes and generating documentation:

1. Verify that the App is properly installed and configured for your repository
2. Check that your `dev-docs.json` file is properly formatted and includes the `gitHubApp` section
3. Ensure you are pushing changes to the correct branch (usually `main`)
4. Check the GitHub Actions tab for any error messages in the workflow runs

### VS Code extension not working

If you're experiencing issues with the VS Code extension:

1. Ensure you have the latest version of the extension installed
2. Try reloading the VS Code window (Ctrl+R or Cmd+R)
3. Check the Dev-Docs output panel for any error messages
4. Verify that your `dev-docs.json` file is properly formatted

## API Key Issues

If you're encountering problems related to your API key:

1. Verify that you've generated a valid API key in your Dev-Docs account settings
2. Ensure the API key is correctly set in your environment variables or configuration files
3. Check that your API key has the necessary permissions for the actions you're trying to perform
4. Try regenerating your API key and updating it in your project

For any issues not covered in this guide, please refer to our [community forum](https://community.dev-docs.com) or [contact our support team](mailto:support@dev-docs.com).