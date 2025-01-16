

  # How to Customize dev-docs.json for Branch-Specific Documentation

## Overview
This guide explains how to modify the `dev-docs.json` file to configure the GitHub app to listen for pushes on specific branches and generate documentation in the `dev-docs` folder.

## Steps

1. Locate the dev-docs.json file
   - File should be in the root of your repository

2. Edit the dev-docs.json file
   - Add or modify the `gitHubApp` section

3. Specify branches to monitor
   - Add a `branches` array under `gitHubApp`

4. Configure workflows
   - Add a `workflows` array under `gitHubApp`

5. Set up changelog location (optional)
   - Add a `changelog` object under `gitHubApp`

## Code Example

```json
{
  "gitHubApp": {
    "branches": ["main", "develop", "feature"],
    "workflows": ["generateDocs"]
  }
}
```

## Notes

- The app checks the `branches` array in `dev-docs.json` to determine which pushes to process.
- If `branches` is not specified, it defaults to the repository's default branch.
- The `workflows` array determines which documentation generation processes to run.

  