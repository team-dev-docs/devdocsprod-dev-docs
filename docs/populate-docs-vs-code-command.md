# Generating User-Facing API and SDK Documentation with Dev-Docs

The "Populate Docs" command in the Dev-Docs VS Code extension is a powerful tool for automatically generating user-facing documentation for your API or SDK. This feature streamlines the process of creating comprehensive, up-to-date documentation for your codebase.

## Accessing the Command

To use the Populate Docs command:

1. Open the Command Palette in VS Code (Ctrl+Shift+P or Cmd+Shift+P on Mac).

2. Type "Dev-Docs: Populate External Docs" and select it.

## Configuring for API and SDK Documentation

The `dev-docs.json` file allows you to tailor the documentation generation process for your API or SDK. Here are key configuration options:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function", "interface"],
    "populateDoc": "path/to/api_template.md",
    "docSubFolder": "api_docs",
    "importFolders": ["src/api", "src/sdk"],
    "externalDocPrompt": "Generate user-friendly API documentation...",
    "merge": true
  }
}
```

### Key Configuration Options for API/SDK Docs:

* `internalTypeFilters`: Include symbol types relevant to your API/SDK (e.g., "class", "method", "function", "interface").

* `populateDoc`: Path to a template markdown file for API/SDK documentation.

* `docSubFolder`: Subdirectory where generated API/SDK docs will be saved.

* `importFolders`: Array of folders containing your API/SDK source code.

* `externalDocPrompt`: Custom prompt for generating user-facing API/SDK documentation.

## Best Practices for API/SDK Documentation

1. **Use Clear Templates**: Create templates that include sections for:

   * Endpoint descriptions

   * Request/Response examples

   * Parameter explanations

   * SDK usage examples

2. **Custom Prompts**: Craft prompts that emphasize:

   * User-friendly language

   * Practical code examples

   * Common use cases

   * Error handling

3. **Consistent Formatting**: Ensure your configuration produces consistently formatted documentation across all API endpoints or SDK functions.

4. **Include Authentication**: If applicable, include sections on authentication methods and requirements.

5. **Version Information**: Clearly indicate the version of the API or SDK the documentation applies to.

6. **Interactive Examples**: Consider including interactive examples or links to API playgrounds where possible.

7. **Error Codes and Responses**: Provide comprehensive information on possible error codes and their meanings.

8. **SDK-Specific Guidelines**: For SDK documentation, include:

   * Installation instructions

   * Quick start guides

   * Language-specific considerations

By effectively configuring the Populate Docs command, you can automate the creation of clear, comprehensive, and user-friendly documentation for your API or SDK, enhancing the developer experience for your users.
