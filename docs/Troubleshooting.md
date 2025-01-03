# Troubleshooting Guide

This guide covers common issues you may encounter when using Dev-Docs and how to resolve them.

## Authentication Issues

If you're having trouble authenticating:

1. Ensure you have a valid Dev-Docs account
2. Check that your authentication tokens are up-to-date
3. Try clearing your tokens using the "Clear Dev-Docs Tokens" command (devdocs.resetTokens)
4. Sign in again through the VS Code extension

## Configuration Problems

If Dev-Docs is not working as expected:

1. Verify your dev-docs.json file exists in the project root
2. Check that all required fields are filled out correctly
3. Ensure file paths specified in the config are valid
4. Try regenerating the dev-docs.json file

## Command Not Found

If VS Code can't find Dev-Docs commands:

1. Make sure the Dev-Docs extension is installed
2. Try reloading the VS Code window
3. Check for any error messages in the Dev-Docs output channel
4. Reinstall the extension if issues persist

## Generated Docs Missing Content

If your generated documentation is incomplete:

1. Review your dev-docs.json configuration
2. Check that you've specified the correct directories to scan
3. Verify that your code follows expected patterns/conventions
4. Try running the generation command again

## Performance Issues

If Doc generation is slow:

1. Limit the scope of directories being analyzed
2. Use more specific filters in your configuration
3. Ensure you have a stable internet connection
4. Consider breaking up large codebases into smaller chunks

For any issues not covered here, please check our [GitHub Issues](https://github.com/dev-docs/dev-docs/issues) page or reach out to support@dev-docs.com.