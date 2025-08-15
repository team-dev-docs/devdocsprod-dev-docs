# Configuring and Using the generateChangelog Workflow

The `generateChangelog` workflow is a powerful feature that automates the process of generating changelogs for your project. This document explains how to set up and utilize this workflow effectively.

## Setup

1. Ensure you have the necessary permissions to modify workflows in your repository.
2. Navigate to the `.github/workflows` directory in your project.
3. Create a new file named `generate-changelog.yml` if it doesn't already exist.

## Configuration

Add the following content to your `generate-changelog.yml` file:

```yaml
name: Generate Changelog

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  generate-changelog:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Generate changelog
        run: npm run generate-changelog
      - name: Commit changes
        uses: EndBug/add-and-commit@v7
        with:
          author_name: GitHub Actions
          author_email: actions@github.com
          message: 'Update CHANGELOG.md'
          add: 'CHANGELOG.md'
```

## Usage

The `generateChangelog` workflow can be triggered in two ways:

1. **Automatically**: It runs on every push to the `main` branch.
2. **Manually**: You can trigger it from the "Actions" tab in your GitHub repository.

When the workflow runs, it performs the following steps:

1. Checks out your repository
2. Sets up Node.js
3. Installs dependencies
4. Generates the changelog
5. Commits the updated CHANGELOG.md file

## Customization

You can customize the changelog generation by modifying the `generate-changelog` script in your `package.json` file. For example:

```json
{
  "scripts": {
    "generate-changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
  }
}
```

This setup uses the `conventional-changelog` tool with the Angular preset. Adjust the parameters as needed for your project's commit style and preferences.

By leveraging this workflow, you can maintain an up-to-date changelog with minimal manual effort, enhancing your project's documentation and release management process.