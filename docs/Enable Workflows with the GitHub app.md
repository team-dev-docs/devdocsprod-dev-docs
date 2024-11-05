

  # How to Enable Generate Internal Docs and Changelog Endpoints

## Overview

This guide explains how to enable the `generate_internal_docs` and `changelog` using the Dev-Docs.json configuration file.

## Steps

1. Locate the Dev-Docs.json file
- This file should be in the root directory of your repository

2. Edit the Dev-Docs.json file
- Add or modify the `gitHubApp` section

3. Configure the workflows
- Use the `Workflow` enum to specify which workflows to enable

4. Set up changelog location (optional)
- Specify the location for generated changelogs

## Configuration Example

Here's an example of how to configure the Dev-Docs.json file:

```
json
{
  "gitHubApp": {
    "workflows": ["generateDocs", "generateChangelog"],
    "changelog": {
      "location": "docs/changelog"
    }
  }
}

```

## Enabling Workflows

- Set `workflows` to include `generateDocs` for internal documentation generation
- Set `workflows` to include `generateChangelog` for changelog generation

## Changelog Location

- Use the `changelog.location` property to specify where changelogs should be generated

## Important Notes

- Ensure the Dev-Docs.json file is properly formatted JSON
- The GitHub App will automatically detect and use these settings
- No additional API calls are needed to trigger these workflows


  
