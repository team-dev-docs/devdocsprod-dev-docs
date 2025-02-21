# Integrating Dev-Docs with CI/CD Pipelines

Dev-Docs can be seamlessly integrated into your CI/CD pipelines to automate documentation generation and updates. This guide will walk you through the process of setting up Dev-Docs in your CI/CD workflow.

## Prerequisites

* A GitHub repository with Dev-Docs installed

* A CI/CD platform (e.g. GitHub Actions, Jenkins, GitLab CI)

## Step 1: Configure dev-docs.json

Ensure your `dev-docs.json` file is properly configured to enable automated workflows:

```json
{
  "gitHubApp": {
    "workflows": ["generateDocs", "generateChangelog"]
  }
}
```

## Step 2: Set up CI/CD job

Add a new job to your CI/CD configuration that triggers Dev-Docs documentation generation. Here's an example using GitHub Actions:

```yaml
name: Generate Docs
on:
  push:
    branches: [main]
    paths:
      - '**.js'

jobs:
  dev-docs-app:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Generate Docs
        run: |
          curl -X POST ${{ secrets.GENERATE_ENDPOINT_URL }} \
          -H "Content-Type: application/json" \
          -d '{
            "timestamp": "${{ github.event.head_commit.timestamp }}",
            "apiKey": "${{ secrets.DEV_DOCS_API_KEY }}",
            "githubToken": "${{ secrets.GITHUB_TOKEN }}",
            "repo": "${{ github.repository }}",
            "actor": "${{ github.actor }}"
          }'
```

## Step 3: Add necessary secrets

In your repository or CI/CD platform settings, add the following secrets:

* `DEV_DOCS_API_KEY`: Your Dev-Docs API key

* `GENERATE_ENDPOINT_URL`: The URL for the Dev-Docs generation service

## Step 4: Commit and push

Commit the changes to your CI/CD configuration and push to your repository. The documentation generation will now run automatically on every push to the main branch that includes changes to JavaScript files.

By integrating Dev-Docs with your CI/CD pipeline, you ensure that your documentation stays up-to-date with your codebase, improving collaboration and reducing manual documentation efforts.
