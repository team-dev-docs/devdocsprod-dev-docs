# AI Configuration Options in dev-docs.json

This document provides a comprehensive explanation of all AI-related configuration options available in the `dev-docs.json` file. These options allow you to fine-tune how AI processes and generates documentation for your project.

## Configuration Options

### internalTypeFilters

The `internalTypeFilters` option allows you to specify which internal types should be included or excluded from AI processing. This can be useful for focusing the AI on specific parts of your codebase.

Example:
```json
"internalTypeFilters": ["include:MyNamespace.*", "exclude:*.Internal"]
```

### codeFilters

`codeFilters` enable you to define patterns for including or excluding specific code elements from AI analysis. This can help in tailoring the documentation to focus on the most relevant parts of your codebase.

Example:
```json
"codeFilters": ["include:src/**/*.cs", "exclude:test/**/*.cs"]
```

### nameFilters

The `nameFilters` option allows you to specify patterns for including or excluding elements based on their names. This can be particularly useful for focusing on specific naming conventions or excluding certain patterns.

Example:
```json
"nameFilters": ["include:*Service", "exclude:*Helper"]
```

### contextPrompt

`contextPrompt` is used to provide additional context or instructions to the AI when generating documentation. This can help in achieving more tailored and accurate results.

Example:
```json
"contextPrompt": "This project is a web application using ASP.NET Core. Focus on controller actions and service interfaces."
```

### defaultLength

The `defaultLength` option sets the default length for AI-generated content. This helps in maintaining consistency across the documentation.

Example:
```json
"defaultLength": 150
```

By carefully configuring these options in your `dev-docs.json` file, you can significantly improve the relevance and quality of the AI-generated documentation for your project.