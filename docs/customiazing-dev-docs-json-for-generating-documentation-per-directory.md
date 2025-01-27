

  # Customizing dev-docs.json for Generating Documentation per Directory

The `dev-docs.json` file is a crucial configuration file for the Dev-Docs VS Code extension. It allows you to customize how documentation is generated for different directories in your project. This guide will show you how to set up your `dev-docs.json` file to generate documentation per directory, with code examples.

## Basic Structure

Here's a basic structure of the `dev-docs.json` file:

```json
{
  "ai": {
    "contextDirs": [],
    "internalTypeFilters": [],
    "codeFilters": [],
    "nameFilters": [],
    "docPath": "",
    "branch": ""
  }
}
```

## Customizing for Directory-Specific Documentation

To generate documentation per directory, you'll primarily use the `contextDirs` option. Here's how you can set it up:

```json
{
  "ai": {
    "contextDirs": [
      "src/components",
      "src/utils",
      "src/api"
    ]
  }
}
```

This configuration tells Dev-Docs to generate documentation for the `components`, `utils`, and `api` directories within the `src` folder.

## Filtering Types of Code Elements

You can use `internalTypeFilters` to specify which types of code elements should be included in the documentation:

```json
{
  "ai": {
    "internalTypeFilters": [
      "class",
      "function",
      "interface",
      "variable"
    ]
  }
}
```

## Filtering by Code Content

Use `codeFilters` to include or exclude code elements based on specific patterns:

```json
{
  "ai": {
    "codeFilters": [
      "export default",
      "async function"
    ]
  }
}
```

## Filtering by Name

`nameFilters` allows you to include or exclude code elements based on their names:

```json
{
  "ai": {
    "nameFilters": [
      "handle",
      "create",
      "update"
    ]
  }
}
```

## Specifying Documentation Output Path

Set the `docPath` to determine where the generated documentation should be saved:

```json
{
  "ai": {
    "docPath": "docs/api-reference"
  }
}
```

## Setting the Git Branch

If you want to push the generated documentation to a specific Git branch, use the `branch` option:

```json
{
  "ai": {
    "branch": "documentation"
  }
}
```

## Complete Example

Here's a complete example that combines all these options:

```json
{
  "ai": {
    "contextDirs": [
      "src/components",
      "src/utils",
      "src/api"
    ],
    "internalTypeFilters": [
      "class",
      "function",
      "interface",
      "variable"
    ],
    "codeFilters": [
      "export default",
      "async function"
    ],
    "nameFilters": [
      "handle",
      "create",
      "update"
    ],
    "docPath": "docs/api-reference",
    "branch": "documentation"
  }
}
```

This configuration will generate documentation for the specified directories, focusing on classes, functions, interfaces, and variables. It will include code that matches the `codeFilters` and `nameFilters`, save the documentation in the `docs/api-reference` directory, and push the changes to the `documentation` branch.

By customizing your `dev-docs.json` file in this way, you can ensure that Dev-Docs generates precisely the documentation you need for each directory in your project.

  