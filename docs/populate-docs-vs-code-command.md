

  # Populate Docs VS Code Command

The "Populate Docs" VS Code command is a powerful feature in the Dev-Docs extension that allows you to automatically generate documentation for your codebase. This command can be configured using the `dev-docs.json` file to customize its behavior and output.

## Accessing the Command

To use the Populate Docs command:

1. Open the Command Palette in VS Code (Ctrl+Shift+P or Cmd+Shift+P on Mac).
2. Type "Dev-Docs: Populate External Docs" and select it.

## Configuration Options

The `dev-docs.json` file allows you to fine-tune how the Populate Docs command works. Here are the key configuration options:

### `ai` Section

The `ai` section in `dev-docs.json` contains most of the settings for the Populate Docs command:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": [],
    "nameFilters": [],
    "populateDoc": "path/to/template.md",
    "docSubFolder": "api",
    "importFolders": ["src/utils", "src/helpers"],
    "importFiles": ["config.js", "constants.js"],
    "importTypeFilters": ["class", "method", "function"],
    "importCodeFilters": [],
    "importNameFilters": [],
    "branch": "documentation",
    "contextPrompt": "path/to/prompt.md",
    "externalDocPrompt": "Generate comprehensive documentation for this code...",
    "merge": true
  }
}
```

#### Key Configuration Options:

1. `internalTypeFilters`: Array of symbol types to include (e.g., "class", "method", "function").
2. `codeFilters`: Array of strings to filter code content.
3. `nameFilters`: Array of strings to filter symbol names.
4. `populateDoc`: Path to a template markdown file for generated docs.
5. `docSubFolder`: Subdirectory where generated docs will be saved.
6. `importFolders`: Array of folders to import additional context from.
7. `importFiles`: Array of specific files to import for context.
8. `importTypeFilters`, `importCodeFilters`, `importNameFilters`: Similar to their non-import counterparts, but for imported content.
9. `branch`: Git branch name for committing generated documentation.
10. `contextPrompt`: Path to a markdown file containing custom prompts for context generation.
11. `externalDocPrompt`: Custom prompt for generating external documentation.
12. `merge`: Boolean to enable merging of documentation for files with multiple symbols.

## Advanced Configuration

### Custom Prompts

You can create custom prompts for documentation generation:

1. Create a markdown file (e.g., `custom_prompt.md`).
2. Add your custom instructions in this file.
3. Set the `contextPrompt` in `dev-docs.json` to the path of your custom prompt file.

### Templating

Use the `populateDoc` option to specify a template for generated documentation:

1. Create a markdown template file.
2. Include placeholders like `{{DocumentTitle}}` or `{{CodeExample}}`.
3. Set `populateDoc` in `dev-docs.json` to the path of your template.

### Selective Documentation

Use filters to focus on specific parts of your codebase:

- `internalTypeFilters`: Include only certain types of symbols.
- `codeFilters` and `nameFilters`: Include or exclude based on code content or symbol names.

### Including External Context

Leverage `importFolders` and `importFiles` to bring in additional context from other parts of your project, ensuring comprehensive documentation.

## Best Practices

1. Start with broad filters and narrow down as needed.
2. Use custom prompts to guide the AI in generating documentation that matches your project's style and needs.
3. Regularly review and update your `dev-docs.json` configuration as your project evolves.
4. Utilize the `merge` option for cleaner documentation of files with multiple related symbols.
5. Experiment with different combinations of filters and import options to find the best setup for your project structure.

By effectively configuring the Populate Docs command through `dev-docs.json`, you can automate much of your documentation process, ensuring consistent and comprehensive documentation across your project.

  