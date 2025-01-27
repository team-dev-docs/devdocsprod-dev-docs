

  # Configuring dev-docs.json for Generating Documentation

The `dev-docs.json` file offers various configuration options to customize how Dev-Docs generates documentation for your code files. This guide focuses on the "ai" section of the configuration, which provides powerful features for tailoring the documentation process.

## AI Section Configuration

The "ai" section in `dev-docs.json` allows you to set up specific prompts and filters for different files or directories in your project. Here's an overview of the key configuration options:

### 1. File-Specific Prompts

You can define custom prompts for individual files using the following structure:

```json
"ai": {
  "variablesAndFunctions": {
    "path/to/your/file.js": {
      "prompts": [
        {
          "title": "Function Purpose",
          "question": "What is the main purpose of this function?",
          "documentation": "Explain the function's primary role in the codebase."
        },
        {
          "title": "Input Parameters",
          "question": "What are the input parameters for this function?",
          "documentation": "List and describe each input parameter."
        }
      ]
    }
  }
}
```

### 2. Directory-Specific Prompts

To apply prompts to all files within a specific directory:

```json
"ai": {
  "variablesAndFunctions": {
    "src/components": {
      "prompts": [
        {
          "title": "Component Overview",
          "question": "Provide a brief overview of this component.",
          "documentation": "Describe the component's purpose and main features."
        }
      ]
    }
  }
}
```

### 3. Global Filters

You can set global filters to control which symbols are documented:

```json
"ai": {
  "internalTypeFilters": ["class", "method", "function"],
  "codeFilters": ["async function", "export default"],
  "nameFilters": ["handleSubmit", "render"]
}
```

### 4. Import Handling

Configure how imports are handled in documentation:

```json
"ai": {
  "importFolders": ["src/utils", "src/helpers"],
  "importFiles": ["src/constants.js", "src/types.ts"],
  "importTypeFilters": ["class", "function"],
  "importCodeFilters": ["export const"],
  "importNameFilters": ["util", "helper"]
}
```

### 5. Documentation Output

Customize the output of generated documentation:

```json
"ai": {
  "docPath": "docs/api-reference",
  "docSubFolder": "components",
  "populateDoc": "docs/template.md",
  "branch": "documentation-updates"
}
```

### 6. Context Prompts

Add custom context prompts for more detailed documentation:

```json
"ai": {
  "contextPrompt": "dev-docs/context-prompt-template.md",
  "folderContextPrompt": "dev-docs/folder-context-template.md"
}
```

### 7. Code Summary

Customize the code summary generation:

```json
"ai": {
  "codeSummaryPrompt": "Provide 3 bullet points summarizing the code's functionality",
  "defaultLength": "3-5 Sentences"
}
```

### 8. File Mappings

Define custom mappings for documentation organization:

```json
"ai": {
  "mappings": [
    {
      "files": ["src/main.ts"],
      "cloudDir": "Getting Started"
    },
    {
      "folder": ["src/components"],
      "cloudDir": "Components"
    }
  ]
}
```

### 9. OpenAPI Configuration

Set up OpenAPI documentation generation:

```json
"ai": {
  "openapi": {
    "file": "src/api/openapi.yaml",
    "x-codeSamples": {
      "langs": ["javascript", "python", "ruby"]
    }
  }
}
```

## Best Practices

1. Start with global filters and gradually add file-specific or directory-specific prompts as needed.
2. Use context prompts to provide additional information about your project's structure or conventions.
3. Regularly review and update your `dev-docs.json` configuration as your project evolves.
4. Utilize the `mappings` feature to organize your documentation in a logical structure.
5. Leverage import handling to ensure comprehensive documentation of dependencies and utilities.

By carefully configuring these options in your `dev-docs.json` file, you can create highly tailored and comprehensive documentation for your codebase, enhancing its maintainability and accessibility for developers.

  