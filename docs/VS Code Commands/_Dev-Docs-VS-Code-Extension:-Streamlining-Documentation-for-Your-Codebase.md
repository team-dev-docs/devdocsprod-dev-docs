# How to Use and Customize the "Populate External Docs" Command in the VS Code Extension

## Step 1: Access the Command fsafdsafd4sa

1. Open your VS Code workspace

2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) to open the command palette

3. Type "Populate External Docs" and select the command

![Command Palette](https://docs.dev/img/populate-external-docs-command.png)

## Step 2: Customizing Generation with dev-docs.json

To customize the documentation generation, modify the `dev-docs.json` file in your project root:

1. Create or open `dev-docs.json`

2. Add an `ai` object with customization options

Example `dev-docs.json`:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": [],
    "nameFilters": [],
    "docSubFolder": "api/",
    "merge": true,
    "externalDocPrompt": "Generate comprehensive API documentation"
  }
}
```

Key customization options:

![Customization Options](https://docs.dev/img/dev-docs-json-options.png)

* `internalTypeFilters`: Specify which code elements to document

* `docSubFolder`: Set the output folder for generated docs

* `merge`: Combine multiple elements into a single document

* `externalDocPrompt`: Customize the AI prompt for doc generation

## Step 3: Review and Edit

After running the command:

1. Check the `docs` folder (or your specified `docSubFolder`) for generated files

2. Review and edit the generated content as needed

3. Commit changes to your repository

![Generated Docs](https://docs.dev/img/generated-docs-folder.png)

By following these steps and customizing the `dev-docs.json`, you can efficiently generate and manage external documentation for your project using the VS Code extension.
