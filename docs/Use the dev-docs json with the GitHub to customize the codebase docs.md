# Customizing dev-docs.json for Internal Documentation Generation

## Overview

This guide explains how to configure the `dev-docs.json` file to interact with the GitHub App for generating internal documentation.

## File Location

The `dev-docs.json` file should be placed in the root directory of your repository.

## Configuration Steps

1. Create a `dev-docs.json` file in your repository's root.

2. Add the following structure to the file:

```json
{
  "quickDoc": {
    "variablesAndFunctions": {
      "prompts": []
    }
  },
  "ai": {
    "contextPrompt": "",
    "contextDirs": []
  },
  "gitHubApp": {
    "workflows": ["generateDocs"],
  },
  "integrations": []
}
```

3. Customize the configuration:

### Prompts

Add custom prompts to influence documentation content:

```json
"prompts": [
  {
    "title": "Usage Example",
    "question": "Can you provide a usage example for this function?"
  }
]
```

### Context Prompt

Set a custom prompt for generating high-level context:

```json
"contextPrompt": "Provide a high-level overview of this file's purpose and its role in the project."
```

### Context Directories

Specify directories to include in documentation generation:

```json
"contextDirs": ["src", "lib"]
```

### Integrations

Add integration options for pushing documentation:

```json
"integrations": ["google_drive", "notion"]
```



  
