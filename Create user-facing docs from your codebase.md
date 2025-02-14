# How to Use and Customize the "Populate External Docs" Command in the VS Code Extension

## Step 1: Access the Command

1. Open your VS Code workspace
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) to open the command palette
3. Type "Populate External Docs" and select the command

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

- `internalTypeFilters`: Specify which code elements to document
- `docSubFolder`: Set the output folder for generated docs
- `merge`: Combine multiple elements into a single document
- `externalDocPrompt`: Customize the AI prompt for doc generation

The `generateBySymbols` function in `src/AiServices.ts` uses these settings to generate documentation.

## Step 3: Review and Edit

After running the command:

1. Check the `docs` folder (or your specified `docSubFolder`) for generated files
2. Review and edit the generated content as needed
3. Commit changes to your repository

## Step 4: Refine and Iterate

To improve the quality of generated documentation:

1. Analyze the initial output and identify areas for improvement
2. Adjust the `externalDocPrompt` in `dev-docs.json` to provide more specific guidance
3. Re-run the "Populate External Docs" command to generate updated documentation
4. Repeat this process until you achieve the desired level of detail and accuracy

By following these steps and customizing the `dev-docs.json`, you can efficiently generate, manage, and refine external documentation for your project using the VS Code extension.