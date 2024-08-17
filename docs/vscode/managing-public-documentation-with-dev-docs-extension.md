

  # Managing Public Documentation with Dev-Docs Extension

The Dev-Docs VS Code extension provides powerful tools to help you manage and maintain your public documentation sites, such as those powered by Docusaurus or other markdown-based platforms. One of the key features is the 'Populate External Docs' command, along with several other commands that streamline the documentation process.

## Populate External Docs

The `devdocs.populateExternalDocs` command is designed to automatically generate and update your external documentation based on your codebase and configuration settings.

### How to use:

1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P)
2. Search for "Dev-Docs: Populate External Docs" and select it
3. The extension will analyze your codebase and generate documentation according to your `dev-docs.json` configuration

### Configuration:

In your `dev-docs.json` file, you can specify mappings to determine how your codebase corresponds to documentation sections:

```json
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
```

## Additional Commands for Managing Public Docs

### Generate API Documentation

Use `devdocs.generateAPIDocumentation` to create API documentation and configuration files:

1. Open the Command Palette
2. Search for "Generate API Documentation"
3. The extension will generate a Postman Collection JSON and OpenAPI specification

### Generate High-Level Context

The `devdocs.generateFolderContext` command provides a high-level overview of a folder or directory:

1. Right-click on a folder in the Explorer view
2. Select "Generate High Level Context for the Folder"

### Audit Documentation

Use `devdocs.auditDocs` to check your documentation for issues:

1. Open the Command Palette
2. Search for "Dev-Docs: Audit Your Docs"
3. The extension will analyze your Markdown files and provide suggestions for improvements

## Integration with Markdown-Powered Sites

The Dev-Docs extension works seamlessly with markdown-based documentation sites like Docusaurus. Here's how you can leverage it:

1. **Automatic Updates**: Use the 'Populate External Docs' command to keep your documentation in sync with your codebase
2. **Structure Preservation**: The extension respects your existing documentation structure, making it ideal for maintaining Docusaurus sites
3. **Version Control**: Generated documentation can be easily integrated into your version control workflow
4. **Customization**: Use the `dev-docs.json` configuration to tailor the documentation generation process to your specific needs

By utilizing these commands and features, you can efficiently manage and maintain your public documentation, ensuring it remains up-to-date and aligned with your codebase.

  