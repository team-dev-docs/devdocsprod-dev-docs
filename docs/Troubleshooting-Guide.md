# Dev-Docs Troubleshooting Guide

This guide covers common issues you may encounter when using the Dev-Docs VS Code extension and how to resolve them.

## Extension Not Loading

If the Dev-Docs extension is not loading in VS Code:

1. Check that you have the latest version installed from the VS Code Marketplace
2. Try reloading the VS Code window (Ctrl+R or Cmd+R) 
3. Ensure your VS Code version meets the minimum requirements

## Authentication Errors

If you're having trouble authenticating:

1. Check that your GitHub credentials are valid
2. Clear cached tokens using the "Clear Dev-Docs Tokens" command
3. Sign out and sign back in to refresh your authentication

## Documentation Not Generating

If AI documentation generation is failing:

1. Verify your dev-docs.json file is properly configured
2. Check that the specified files/folders exist in your project
3. Ensure you have an active internet connection for AI processing
4. Try regenerating documentation for a smaller code sample first

## Context Generation Issues

If high-level context is not generating correctly:

1. Review the contextDirs setting in dev-docs.json
2. Ensure the selected folder contains valid code files
3. Try generating context for individual files instead of full folders

## OpenAPI/Swagger Generation Failing

If API documentation is not generating:

1. Verify your server code follows standard API patterns
2. Check the openapi configuration in dev-docs.json
3. Ensure the specified output file path is valid

## Command Not Found

If Dev-Docs commands are missing from the Command Palette:

1. Verify the extension is enabled in VS Code
2. Try uninstalling and reinstalling the extension
3. Check for any error messages in the Dev-Docs output channel

## Performance Issues

If the extension is running slowly:

1. Limit the scope of documentation generation to smaller codebases
2. Increase the AI processing timeout in settings if needed
3. Ensure your machine meets the recommended system requirements

For any persistent issues, please check our GitHub repository for known problems or file a new issue with details about your setup and the problem you're experiencing.