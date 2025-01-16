# Advanced Features

This document covers some of the more advanced features and capabilities of our product.

## Custom AI Prompts

You can customize the AI prompts used for documentation generation by modifying the `contextPrompt` field in your `dev-docs.json` file:

```json
{
  "ai": {
    "contextPrompt": "Generate comprehensive API documentation focusing on usage examples and edge cases"
  }
}
```

## Filtering Generated Content

Use the `internalTypeFilters`, `codeFilters`, and `nameFilters` options to control what code elements are included in generated docs:

```json 
{
  "ai": {
    "internalTypeFilters": ["class", "method"],
    "codeFilters": ["async function"],
    "nameFilters": ["handle", "process"]
  }
}
```

## Custom Output Locations

Specify custom output folders for generated docs using the `docSubFolder` option:

```json
{
  "ai": {
    "docSubFolder": "api-docs/"
  }
}
```

## Merging Multiple Elements

Enable merging of multiple code elements into a single document with the `merge` option:

```json
{
  "ai": {
    "merge": true
  }
}
```

## Integrating with CI/CD

You can integrate doc generation into your CI/CD pipelines by using our GitHub Actions workflow. See the [CI/CD Integration Guide](ci-cd-integration.md) for details.

## Extending with Plugins

Our plugin system allows you to extend the core functionality. Check out the [Plugin Development Guide](plugin-dev.md) to learn how to create custom plugins.