# Dev-Docs Quick Start Guide

## Installation

1. Install the Dev-Docs VS Code extension from the marketplace

2. Sign up for a Dev-Docs account at <https://dev-docs.com>

## Basic Usage

1. Open your project in VS Code

2. Right-click on a file or folder and select "Generate Documentation"

3. Review and edit the generated documentation

4. Commit the new docs to your repository

## Configuration

1. Create a `dev-docs.json` file in your project root

2. Add configuration options like:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "docSubFolder": "docs/",
    "merge": true
  }
}
```

3. Customize the AI prompts and other settings as needed

## Next Steps

* Explore more advanced features like changelog generation

* Set up automated doc generation with the GitHub App

* Check out the full documentation at <https://docs.dev-docs.com>
