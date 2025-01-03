# Troubleshooting Guide

This guide provides solutions to common issues you may encounter when using Dev-Docs.

## Authentication Issues

If you're having trouble signing in:

1. Ensure you have a valid Dev-Docs account
2. Clear your authentication tokens using the "Clear Dev-Docs Tokens" command (Cmd+Shift+P / Ctrl+Shift+P and search for "Clear Dev-Docs Tokens")
3. Try signing in again

## Configuration Problems

If commands aren't working as expected:

1. Check that your `dev-docs.json` file is properly configured
2. Ensure the file is in the root directory of your project
3. Validate the JSON syntax for any errors

## Documentation Generation Fails

If documentation isn't generating:

1. Verify you have the necessary permissions for the target directories
2. Check your `dev-docs.json` configuration, especially file paths and filters
3. Ensure you have a stable internet connection for AI-powered features

## Context Generation Issues

If context generation produces unexpected results:

1. Review your `contextDirs` settings in `dev-docs.json`
2. Check that specified directories exist and contain relevant files
3. Try regenerating context for specific folders or files

## VS Code Extension Not Working

If the Dev-Docs extension seems unresponsive:

1. Ensure you have the latest version installed
2. Try disabling and re-enabling the extension
3. Restart VS Code

## OpenAPI Generation Fails

If you're having issues generating OpenAPI documentation:

1. Verify your server code follows expected patterns for route definitions
2. Check the `ai.openapi.file` setting in your `dev-docs.json`
3. Ensure you have write permissions for the target OpenAPI file location

For any persistent issues not covered here, please visit our [support forum](https://devdocs.io/support) or [open an issue](https://github.com/dev-docs/dev-docs/issues) on our GitHub repository.