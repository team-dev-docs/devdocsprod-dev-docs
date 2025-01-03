# Troubleshooting Guide

This guide covers common issues you may encounter when using the Dev-Docs VS Code extension and how to resolve them.

## Authentication Issues

If you're having trouble authenticating:

1. Ensure you have a valid GitHub account and are logged in
2. Check that your authentication token is up-to-date
3. Try clearing your authentication tokens and signing in again using the "Clear Dev-Docs Tokens" command

## Documentation Not Generating

If documentation isn't generating as expected:

1. Verify your `dev-docs.json` file is properly configured 
2. Check that you've selected the correct files/folders to document
3. Ensure you have the necessary permissions to write to the output directory

## AI-Generated Content Issues

If you're experiencing problems with AI-generated content:

1. Review your prompts and make sure they are clear and specific
2. Try adjusting the `internalTypeFilters`, `codeFilters`, and `nameFilters` in your configuration
3. Ensure you have an active internet connection for AI requests

## Extension Not Loading

If the extension isn't loading in VS Code:

1. Verify you have the latest version installed
2. Try disabling and re-enabling the extension
3. Restart VS Code

## File Path Issues

If you're encountering file path related errors:

1. Double-check the `customRoot` and `workspaceRoot` settings in your `dev-docs.json`
2. Ensure all file paths are relative to your project root
3. Use forward slashes (/) in file paths, even on Windows

For any persistent issues not covered here, please check our GitHub repository for known issues or to file a new bug report.