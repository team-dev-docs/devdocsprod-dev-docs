# Configuring dev-docs.json for GitHub App Documentation Generation

This guide will walk you through the process of configuring the `dev-docs.json` file to enable automatic documentation generation using the Dev-Docs GitHub App.

## Step 1: Locate the dev-docs.json file

The `dev-docs.json` file should be located in the root directory of your repository.

## Step 2: Basic Structure

Ensure your `dev-docs.json` file has the following basic structure:

```json
{
  "gitHubApp": {
    "workflows": []
  }
}
```

## Step 3: Configure Workflows

To enable documentation generation and changelog creation, add the `generateDocs` and `generateChangelog` workflows to the `workflows` array:

```json
{
  "gitHubApp": {
    "workflows": ["generateDocs", "generateChangelog"]
  }
}
```

Note: The `workflows` array accepts specific enum values. Currently, the supported values are:

- `generateDocs`: Enables automatic documentation generation
- `generateChangelog`: Enables automatic changelog generation

### Understanding the generateChangelog Workflow

The `generateChangelog` workflow is designed to automatically create and maintain a changelog for your project. This feature:

- Analyzes commits and pull requests
- Categorizes changes (e.g., features, bug fixes, breaking changes)
- Generates a formatted changelog file
- Updates the changelog with each new release or on a specified schedule

By including this workflow, you can ensure that your project's changelog is always up-to-date and consistent, saving time and reducing manual errors in tracking changes.

## Step 4: Additional Configuration (Optional)

Depending on your project's needs, you may want to add more configuration options. For example:

```json
{
  "ai":{
    "contextDirs": ["src", "lib"],
  },
  "gitHubApp": {
    "workflows": ["generateDocs", "generateChangelog"]
  }
}
```

## Step 5: Commit and Push

After configuring your `dev-docs.json` and installing the GitHub app, commit the changes and push them to your repository. The Dev-Docs GitHub App will then start generating documentation and changelogs based on your configuration.