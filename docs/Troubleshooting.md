# Dev-Docs Troubleshooting Guide

This guide covers common issues you may encounter when using Dev-Docs and how to resolve them.

## Authentication Issues

If you're having trouble signing in to Dev-Docs:

1. Ensure you have a valid Dev-Docs account
2. Check that you're using the correct email and password
3. Try clearing your browser cache and cookies
4. If issues persist, use the "Clear Dev-Docs Tokens" command in VS Code to reset authentication

## Configuration Problems

If Dev-Docs isn't working as expected:

1. Verify your `dev-docs.json` file exists in the project root
2. Check that the JSON is valid and properly formatted  
3. Ensure all required fields are populated
4. Try reloading the VS Code window after making changes

## Generation Failures

If documentation isn't generating properly:

1. Check your `dev-docs.json` configuration, especially file paths and filters
2. Ensure you have write permissions for the output directories
3. Try running the command on a smaller subset of files first
4. Check the Dev-Docs output panel in VS Code for any error messages

## Integration Issues

If Dev-Docs isn't integrating properly with other tools:

1. Verify you have the latest versions of Dev-Docs and any integrated extensions
2. Check that API keys and access tokens are valid and have proper permissions
3. Ensure firewalls or security settings aren't blocking connections

## Performance Problems

If Dev-Docs is running slowly:

1. Try generating documentation for smaller parts of your codebase at a time
2. Check your `dev-docs.json` filters to ensure you're not processing unnecessary files
3. Verify you have sufficient system resources (CPU, RAM) available

For any persistent issues not covered here, please consult our [official documentation](https://docs.dev/) or [contact support](mailto:support@dev-docs.io).