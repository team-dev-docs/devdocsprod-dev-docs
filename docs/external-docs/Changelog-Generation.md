# Automatic Changelog Generation

Dev-Docs now includes an automatic changelog generation feature. This feature allows you to easily create and maintain a changelog for your project based on your git commit history.

## How to Use

To generate a changelog, use the following command:

```
vscode.commands.executeCommand('devdocs.changelog')
```

This command will:

1. Fetch the most recent git commits
2. Analyze the commit messages and changed files
3. Generate a formatted changelog

## What Information is Provided

The generated changelog includes:

- Commit messages
- Files changed in each commit
- A summary of changes categorized into:
  - Added
  - Changed
  - Deprecated
  - Removed
  - Fixed
  - Security

## Configuration

The changelog generation feature uses the settings defined in your `dev-docs.json` file. You can customize the behavior by modifying the following properties:

- `ai.acceptedExtensions`: An array of file extensions to include in the changelog
- `ai.excludedExpressions`: An array of patterns to exclude from the changelog

## Important Notes

- The feature currently analyzes the last 10 commits.
- It filters out third-party files and dependencies to focus on your project's core changes.
- The changelog is generated using AI, so it provides a human-readable summary of changes.

By using this feature, you can keep your project's changelog up-to-date with minimal effort, providing clear and concise information about your project's evolution to both contributors and users.