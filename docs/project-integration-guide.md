# Dev-Docs Project Integration Guide

This guide explains how to integrate Dev-Docs into various project workflows.

## Using Dev-Docs with GitHub

To integrate Dev-Docs with your GitHub repository:

1. Install the Dev-Docs GitHub App on your repository
2. Configure the `dev-docs.json` file in your repo root:

```json
{
  "gitHubApp": {
    "workflows": ["generateDocs", "generateChangelog"]
  }
}
```

3. Push changes to trigger automatic doc generation

## Integrating with VS Code

1. Install the Dev-Docs VS Code extension
2. Use the command palette to access Dev-Docs features:
   - "Generate Documentation" 
   - "Populate External Docs"
   - "Generate High Level Context for the Folder"

## Using with Continuous Integration

1. Add the following to your CI workflow:

```yaml  
- name: Generate Docs
  uses: dev-docs/generate-action@v1
  with:
    api-key: ${{ secrets.DEVDOCS_API_KEY }}
```

2. Configure options in `dev-docs.json`

## Customizing Documentation Generation

Modify `dev-docs.json` to customize doc generation:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method"],
    "contextPrompt": "Generate API documentation",
    "docSubFolder": "api/"
  }
}
```

See the full configuration reference for more options.