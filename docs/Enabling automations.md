---
sidebar_position: 5
---



# Configuring code to doc automation

This guide explains how to configure the `dev-docs.json` file with the GitHub app to enable automatic documentation modification and generation when your code changes.

## Prereqs

* Have an account created on https\://app.docs.dev

## File Location

The `dev-docs.json` file should be placed in the root directory of your repository.

## Configuration Fields

### Required Fields

* `gitHubApp`: Object containing GitHub-related configurations

  * `approvalWorkflow`: Boolean, enables or disables the approval workflow

  * `userDocsWorkflows`: Array of strings, specifies which documentation workflows to run

  * `issueNotifications`: Array of strings, GitHub usernames to notify on issue creation

## Example Configuration

```json
{
  "gitHubApp": {
    "approvalWorkflow": true,
    "userDocsWorkflows": ["generateUserDocs"],
    "issueNotifications": ["user1", "user2"],
    "issues": true
  }
}
```

## Field Descriptions

1. `gitHubApp.approvalWorkflow`: When set to `true`, creates an approval issue before generating documentation. This is recommended so your team decides when to actually attempt to generate documentation as your code changes.

2. `gitHubApp.userDocsWorkflows`: Specifies which documentation workflows to run:

* `"generateUserDocs"`: Automatically generates and updates documentation files

* `"generateDocsIssue"`: Creates issues to track documentation changes

3. `gitHubApp.issues`: Optional but recommend field that is a boolean that allows the GitHub app to create issues on the project

4. `gitHubApp.issueNotifications`: List of GitHub usernames to be notified when documentation-related issues are created.

5. `gitHubApp.connectedOrg`: Optional field, if you have multiple orgs can you can set what org is associated to your repo

6. `gitHubApp.branches`: Optional field that is an array of branches you specificy the GitHub App to listen, such as or `['branch_a', 'branch_b']` or you can use `['*']` to listen for all branch changes. If omitted the GitHub app will only listen for changes on the default branch.

## Usage

1. Make sure you have a docs.dev account, have installed the GitHub App on your docs repo, and the codebase you want to document.

2. Create a `dev-docs.json` file in your repository's root directory.

3. Configure the fields according to your documentation needs.

4. Commit and push the file to your repository.

The system will now use these settings to automatically generate and update documentation based on your code changes.
