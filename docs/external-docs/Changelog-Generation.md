# Automatic Changelog Generation

This document explains the automatic changelog generation feature implemented in the Visual Studio Code extension.

## Overview

The automatic changelog generation feature allows users to easily create and update changelogs based on Git commit history. It provides a structured way to document changes made to the project over time.

## How to Use

1. Open the command palette in VS Code (Ctrl+Shift+P or Cmd+Shift+P).
2. Type "Generate Changelog" and select the command.
3. Choose the desired time range for the changelog (e.g., since last tag, last week, or custom date range).
4. The extension will analyze the Git commit history and generate a formatted changelog.

## Information Provided

The generated changelog includes:

- Commit messages grouped by type (e.g., feat, fix, docs)
- Author names and commit dates
- Links to related issues or pull requests (if available in the commit message)

## Configuration

You can customize the changelog generation by modifying the extension settings:

- `changelogGeneration.includeTypes`: Array of commit types to include in the changelog
- `changelogGeneration.excludeAuthors`: Array of author names to exclude from the changelog
- `changelogGeneration.dateFormat`: Format string for displaying dates in the changelog

## Troubleshooting

If you encounter any issues with changelog generation:

1. Ensure you have Git installed and configured properly.
2. Check that your project has a valid Git repository.
3. Verify that you have the necessary permissions to access the Git history.

For more information on the implementation details, refer to the `src/GitServices.ts` and `src/extension.ts` files in the extension source code.