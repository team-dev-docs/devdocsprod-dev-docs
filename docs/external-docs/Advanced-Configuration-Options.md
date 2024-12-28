# Advanced Configuration Options

The `dev-docs.json` file allows for advanced configuration options to customize the behavior of the Dev Docs extension. This document outlines some of the key settings available for power users and developers who want to fine-tune their experience.

## Root Directory Settings

- `customRoot`: Specifies a custom root directory for the documentation. This can be useful if you want to store your documentation in a specific location outside of the default workspace.

- `workspaceRoot`: Defines the root of your workspace. This is particularly helpful when working with monorepos or projects with complex directory structures.

## AI-Related Settings

The Dev Docs extension leverages AI capabilities to enhance documentation generation and management. The following settings can be used to configure these features:

- `aiProvider`: Specifies the AI service provider to be used (e.g., "openai", "anthropic").

- `aiModel`: Defines the specific AI model to be used for generating and processing documentation.

- `aiTemperature`: Adjusts the creativity and randomness of AI-generated content. Lower values produce more focused and deterministic outputs, while higher values introduce more variety.

- `aiMaxTokens`: Sets the maximum number of tokens to be used in AI-generated responses.

## Symbol Handling

- `includePrivateSymbols`: When set to `true`, the extension will include private symbols (those prefixed with an underscore) in the documentation.

- `excludePatterns`: An array of glob patterns to exclude certain files or directories from documentation processing.

## Example Configuration

```json
{
  "customRoot": "./docs",
  "workspaceRoot": "./src",
  "aiProvider": "openai",
  "aiModel": "gpt-4",
  "aiTemperature": 0.7,
  "aiMaxTokens": 2000,
  "includePrivateSymbols": false,
  "excludePatterns": ["**/node_modules/**", "**/*.test.ts"]
}
```

These advanced configuration options provide granular control over how Dev Docs processes your codebase and generates documentation. Experiment with these settings to find the optimal configuration for your project's needs.