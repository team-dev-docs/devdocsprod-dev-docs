# DevOps Integration Guide for Dev-Docs

This guide provides instructions on integrating Dev-Docs with common DevOps workflows and tools.

## Continuous Integration (CI) Integration

### GitHub Actions

To generate documentation automatically on pushes to your main branch:

1. Create a `.github/workflows/generate-docs.yml` file in your repository
2. Add the following workflow:

```yaml
name: Generate Documentation
on:
  push:
    branches: [main]
    paths: ['**.js']
jobs:
  generate-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Generate Docs
        run: |
          curl -X POST ${{ secrets.GENERATE_ENDPOINT_URL }} \
          -H "Content-Type: application/json" \
          -d '{
            "timestamp": "${{ github.event.head_commit.timestamp }}",
            "api_key": "${{ secrets.DEV_DOCS_API_KEY }}",
            "github_token": "${{ secrets.GITHUB_TOKEN }}",
            "repo_name": "${{ github.repository }}",
            "actor": "${{ github.actor }}"
          }'
```

3. Add your Dev-Docs API key as a repository secret named `DEV_DOCS_API_KEY`
4. Set the `GENERATE_ENDPOINT_URL` secret to the URL provided by Dev-Docs

This will trigger documentation generation on every push to JavaScript files in your main branch.

## Version Control Integration

### GitHub App

To enable automated workflows for internal documentation and changelog generation:

1. Install the Dev-Docs GitHub App on your repository
2. Create or update the `dev-docs.json` file in your repository root:

```json
{
  "gitHubApp": {
    "workflows": ["generateDocs", "generateChangelog"]
  }
}
```

3. Optionally, specify a custom changelog location:

```json
{
  "gitHubApp": {
    "workflows": ["generateDocs", "generateChangelog"],
    "changelogPath": "docs/CHANGELOG.md"
  }
}
```

The GitHub App will automatically detect this configuration and enable the specified workflows.

## Code Editor Integration

### VS Code Extension

Install the Dev-Docs VS Code extension to integrate documentation generation into your development workflow:

1. Install the extension from the VS Code marketplace
2. Use the command palette (Cmd+Shift+P / Ctrl+Shift+P) to access Dev-Docs commands:
   - "Generate Documentation" to create docs for the current file
   - "Populate External Docs" to generate user-facing documentation
3. Customize the extension behavior by creating a `dev-docs.json` file in your project root:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": [],
    "nameFilters": [],
    "docSubFolder": "api/",
    "merge": true,
    "externalDocPrompt": "Generate comprehensive API documentation"
  }
}
```

This configuration allows you to fine-tune which code elements are documented and how the documentation is generated.

By integrating Dev-Docs with these DevOps tools and workflows, you can automate documentation generation and maintenance throughout your development process.