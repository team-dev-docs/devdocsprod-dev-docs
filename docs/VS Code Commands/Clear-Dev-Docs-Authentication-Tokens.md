---
slug: /VS-Code-Commands/Clear-Dev-Docs-Tokens
---

# Clear Dev-Docs Tokens

This command clears the Dev-Docs authentication tokens stored locally on your machine. It removes the GitHub access token and refresh token used to authenticate with the Dev-Docs Cloud service.

## What does this VS Code Extension Command do?

The `devdocs.resetTokens` command removes the locally stored Dev-Docs authentication tokens from your machine. It essentially logs you out of the Dev-Docs Cloud service, revoking access to your account and any associated documentation repositories.

## Why should I use this VS Code Extension Command?

You might want to use this command in the following scenarios:

1. **Sign Out**: If you want to sign out of your Dev-Docs Cloud account on the current machine, running this command will revoke access and clear your stored credentials.

2. **Token Expiration/Revocation**: If your Dev-Docs authentication tokens have expired or been revoked for security reasons, running this command will ensure the old tokens are removed before generating new ones.

3. **Switching Accounts**: If you need to switch between different Dev-Docs Cloud accounts on the same machine, running this command will clear the existing tokens, allowing you to sign in with a new account.

4. **Troubleshooting**: In case of authentication issues or other token-related problems, clearing the existing tokens can help resolve the issue by starting with a clean slate.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` configuration file does not have any options directly related to the `devdocs.resetTokens` command. This command operates on the locally stored authentication tokens and does not require any specific configuration options.

## Example JSON of relevant Dev-Docs.json options

Since this command does not require any configuration options in the `dev-docs.json` file, there is no example JSON to provide.

## Prerequisites

To use the `devdocs.resetTokens` command, you must have previously authenticated with the Dev-Docs Cloud service using the `devdocs.getGitHubUser` command or an equivalent authentication flow.

## How do I use this VS Code Extension Command?

To clear your Dev-Docs authentication tokens, follow these steps:

1. Open the Visual Studio Code Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
2. Type "Dev-Docs" and select the "Clear dev-docs tokens" command from the list.
3. Alternatively, you can navigate to the Dev-Docs view in the Activity Bar and click the "Sign Out" link when logged in.

After running the command, your Dev-Docs authentication tokens will be removed from your local machine. You will need to re-authenticate with the `devdocs.getGitHubUser` command to regain access to the Dev-Docs Cloud service.
  
  