# Configuring Dev-Docs: Setting Up the Dev-Docs.JSON

This guide will walk you through the configuration options available in the `dev-docs.json` file for the Dev-Docs extension.

## Step 1: Locate the Configuration File

Find or create the `dev-docs.json` file in your project's root directory.

## Step 2: Understanding the Structure

The `dev-docs.json` file has two main sections:

1. `quickDoc`
2. `ai`

## Step 3: Configuring quickDoc

The `quickDoc` section is used for quick documentation prompts. Here's an example:

```json
{
  "quickDoc": {
    "variablesAndFunctions": {
      "prompts": [
        {
          "question": "Does this code use a third-party library?",
          "title": "Third-Party Libraries"
        }
      ]
    }
  }
}
```

## Step 4: Configuring AI

The `ai` section contains various settings for AI-assisted documentation. Here's an example with common options:

```json
{
  "ai": {
    "docPath": "docs",
    "codeSummaryPrompt": "Provide 3 bullet points on what this code does",
    "defaultLength": "3-5 Sentences",
    "branch": "main",
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "contextDirs": ["src/utils", "src/helpers"],
    "openapi": {
      "file": "src/api/openapi.yaml",
      "x-codeSamples": {
        "langs": ["javascript", "python", "ruby"]
      }
    }
  }
}
```

## Step 5: Configuration Options Table

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `quickDoc.variablesAndFunctions.prompts` | Array | Quick documentation prompts | See example |
| `ai.docPath` | String | Custom path for documentation | "some custom path" |
| `ai.codeSummaryPrompt` | String | Prompt for code summaries | "3 Bullet points on what the code does" |
| `ai.defaultLength` | String | Default response length | "3-5 Sentences" |
| `ai.branch` | String | Git branch for documentation | "main" |
| `ai.internalTypeFilters` | Array | Filters for code types | ["file", "module", "class", ...] |
| `ai.codeFilters` | Array | Filters for code patterns | ["async function", "export default"] |
| `ai.nameFilters` | Array | Filters for function names | ["handleSubmit", "render"] |
| `ai.contextDirs` | Array | Directories for context generation | ["src/utils", "src/helpers"] |
| `ai.openapi.file` | String | Path to OpenAPI specification | "src/api/openapi.yaml" |
| `ai.openapi.x-codeSamples.langs` | Array | Languages for code samples | ["javascript", "python", "ruby"] |

## Step 6: Advanced Configuration

For more advanced use cases, you can configure folder-specific prompts:

```json
{
  "ai": {
    "variablesAndFunctions": {
      "src/components": {
        "prompts": [
          {
            "title": "Component Props",
            "question": "What props does this component accept?",
            "documentation": "List the props with their types and descriptions."
          }
        ]
      }
    }
  }
}
```

By following these steps and using the provided examples and table, you can effectively configure the Dev-Docs extension to suit your project's documentation needs.

  