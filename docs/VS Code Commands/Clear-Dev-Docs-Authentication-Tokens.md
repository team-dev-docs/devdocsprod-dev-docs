

  ---
slug: /VS-Code-Commands/Clear-Dev-Docs-Tokens
---

# Clear Dev-Docs Tokens

This command clears the Dev-Docs authentication tokens stored locally on your machine. It removes the GitHub access token and refresh token used to authenticate with the Dev-Docs Cloud service.

## What Does This VS Code Extension Command Do?

The `devdocs.resetTokens` command removes the locally stored Dev-Docs authentication tokens from your machine. It essentially logs you out of the Dev-Docs Cloud service, revoking access to your account and any associated documentation repositories.

## Why Should I Use This VS Code Extension Command?

You might want to use this command in the following scenarios:

<br></br>

1. **Sign Out**: If you want to sign out of your Dev-Docs Cloud account on the current machine, running this command will revoke access and clear your stored credentials.

2. **Token Expiration/Revocation**: If your Dev-Docs authentication tokens have expired or been revoked for security reasons, running this command will ensure the old tokens are removed before generating new ones.

3. **Switching Accounts**: If you need to switch between different Dev-Docs Cloud accounts on the same machine, running this command will clear the existing tokens, allowing you to sign in with a new account.

4. **Troubleshooting**: In case of authentication issues or other token-related problems, clearing the existing tokens can help resolve the issue by starting with a clean slate.

5. **Enhanced Security**: Regularly clearing tokens can improve your account's security by minimizing the risk of unauthorized access through potentially compromised tokens.

## Prerequisites

To use the `devdocs.resetTokens` command, you must have previously authenticated with the Dev-Docs Cloud service using the `devdocs.getGitHubUser` command or an equivalent authentication flow.

## How Do I Use This VS Code Extension Command?

To clear your Dev-Docs authentication tokens, follow these steps:

<br></br>

1. Open the VS Code Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
2. Type "Dev-Docs: Clear tokens" in the search bar to quickly locate the command.
3. Select the "Dev-Docs: Clear dev-docs tokens" command from the list of results.
4. Alternatively, you can navigate to the Dev-Docs view in the Activity Bar and click the "Sign Out" link when logged in.

<br></br>

After running the command, your Dev-Docs authentication tokens will be removed from your local machine. You will need to sign in and re-authenticate with the `devdocs.getGitHubUser` command to regain access to the Dev-Docs Cloud service.

## Best Practices

To maintain optimal security and smooth operation of the Dev-Docs extension:

<br></br>

- Regularly clear your tokens, especially on shared or public machines.
- Always sign out (clear tokens) when you're done working on a non-personal device.
- If you suspect any unauthorized access to your account, clear your tokens immediately and change your GitHub password.
- Keep your VS Code and Dev-Docs extension up to date to ensure you have the latest security features and improvements.

  