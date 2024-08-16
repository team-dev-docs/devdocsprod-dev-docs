

  # Using GitHub Actions with Dev-Docs

GitHub Actions is a powerful tool that can be leveraged to automate your documentation workflow with Dev-Docs. This guide will walk you through setting up a GitHub Action to automatically update your documentation when changes are pushed to your repository.

## Setting Up the GitHub Action

1. Navigate to your repository on GitHub.
2. Click on the "Actions" tab.
3. Click on "New workflow" and then "set up a workflow yourself".
4. Name your workflow file, for example, `dev-docs-update.yml`.

## The Workflow File

Here's an example of a GitHub Action workflow that updates your Dev-Docs documentation:

```yaml
name: Update Dev-Docs

on:
  push:
    branches:
      - main
    paths:
      - '**.md'

jobs:
  update-dev-docs:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Update Dev-Docs
        run: |
          TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
          API_KEY=${{ secrets.DEV_DOCS_API_KEY }}
          REPO_GH_PAT=${{ secrets.GITHUB_TOKEN }}
          GITHUB_REPOSITORY="${{ github.repository }}"
          GITHUB_ACTOR="${{ github.actor }}"
          
          curl -X POST -H "Content-Type: application/json" \
               -H "X-API-KEY: $API_KEY" \
               -d '{"apiKey": "'$API_KEY'", "repo_gh_pat": "'$REPO_GH_PAT'", "timestamp": "'$TIMESTAMP'", "githubRepository": "'$GITHUB_REPOSITORY'", "githubActor": "'$GITHUB_ACTOR'"}' \
               "https://api.devdocsapp.com/update"

        env:
          DEV_DOCS_API_KEY: ${{ secrets.DEV_DOCS_API_KEY }}
```

## How It Works

1. The workflow triggers on pushes to the `main` branch that include changes to Markdown files.
2. It checks out your repository.
3. It then sends a POST request to the Dev-Docs API with the necessary information to update your documentation.

## Setting Up Secrets

For this workflow to function, you need to set up two secrets in your GitHub repository:

1. `DEV_DOCS_API_KEY`: Your Dev-Docs API key.
2. `GITHUB_TOKEN`: This is automatically provided by GitHub Actions.

To add the `DEV_DOCS_API_KEY`:

1. Go to your repository settings.
2. Click on "Secrets" in the left sidebar.
3. Click "New repository secret".
4. Name it `DEV_DOCS_API_KEY` and paste in your Dev-Docs API key.

## Customization

You can customize this workflow to fit your specific needs:

- Change the trigger conditions (e.g., run on pull requests, specific branches, etc.).
- Add additional steps before or after the Dev-Docs update.
- Modify the file path conditions to include or exclude certain documentation files.

By implementing this GitHub Action, you ensure that your Dev-Docs documentation stays up-to-date with your codebase, improving your development workflow and maintaining accurate documentation for your team and users.

  