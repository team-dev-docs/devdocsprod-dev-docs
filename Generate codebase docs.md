# How to Use the "Generate Documentation" Command in Dev-Docs VS Code Extension

## Using the Command

### From the Context Menu

1. Right-click in your code file.

2. Select "Generate Documentation" from the context menu.

### Using the Shortcut

* On Mac: Press `Shift + Command + D`

* On Windows/Linux: Press `Shift + Ctrl + D`

## Customizing AI Generation

To customize the AI generation of the "Generate Documentation" command, you can modify the `dev-docs.json` file in your project root.

1. Open `dev-docs.json` in your project root.

2. Locate the `ai` section in the JSON.

3. Customize the following properties:

```json
{
  "ai": {
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "contextPrompt": "your custom prompt or path to prompt template",
    "defaultLength": "3-5 Sentences"
  }
}
```

### Key Properties:

* `internalTypeFilters`: Array of symbol types to include in documentation.

* `codeFilters`: Array of code patterns to filter for documentation.

* `nameFilters`: Array of function or method names to specifically target.

* `contextPrompt`: Custom prompt for AI generation or path to a prompt template file.

* `defaultLength`: Desired length of generated documentation.

By adjusting these properties, you can fine-tune the AI-generated documentation to better suit your project's needs.
