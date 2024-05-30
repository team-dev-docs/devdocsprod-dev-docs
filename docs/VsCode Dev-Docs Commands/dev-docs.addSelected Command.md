
  
  # **Add Selected**

**What does this VS Code Extension Command do?**
The `devdocs.addSelected` command allows you to generate documentation for the selected code in your editor. It analyzes the selected code and provides relevant documentation, explanations, and context to help you understand and work with that code more effectively.

**Why should I use this VS Code Extension Command?**
This command is useful when you need to quickly understand the purpose, functionality, or usage of a specific piece of code. Instead of manually searching through documentation or sifting through comments, you can simply select the code and let the extension generate the relevant documentation for you. This can save you time and effort, especially when working with complex codebases or unfamiliar libraries.

**What are relevant configuration Options in the `dev-docs.json`?**
The following configuration options in the `dev-docs.json` file are relevant for the `devdocs.addSelected` command:

- `ai.variablesAndFunctions`: This section defines the prompts and documentation for generating documentation for variables and functions.
- `ai.components.template`: This option specifies the path to the markdown template file used for generating documentation.
- `ai.internalTypeFilters`: This array specifies the types of code elements (e.g., classes, interfaces, functions) that should be included in the documentation generation process.
- `ai.codeFilters`: This array contains strings that can be used to filter code elements based on their content (e.g., "async function" to include only async functions).
- `ai.nameFilters`: This array contains strings that can be used to filter code elements based on their names (e.g., "handleSubmit" to include only functions with "handleSubmit" in their name).

**Example JSON of relevant Dev-Docs.json options**
```json
{
  "ai": {
    "variablesAndFunctions": {
      "myFunction": {
        "prompts": [
          {
            "title": "What does this function do?",
            "question": "Explain the purpose and functionality of the `myFunction` function.",
            "documentation": "This function performs a specific task..."
          }
        ]
      }
    },
    "components": {
      "template": "docs/templates/function.md"
    },
    "internalTypeFilters": [
      "function"
    ],
    "codeFilters": [
      "async function"
    ],
    "nameFilters": [
      "handleSubmit"
    ]
  }
}
```

**Prerequisites**
To use the `devdocs.addSelected` command, you need to have the Dev-Docs extension installed and configured in your Visual Studio Code environment. Additionally, you should have a `dev-docs.json` configuration file set up in your project with the relevant options defined.

**How do I use this VS Code Extension Command?**
1. Open the file containing the code you want to document in Visual Studio Code.
2. Select the code you want to generate documentation for.
3. Right-click on the selected code, or open the command palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on macOS).
4. Search for and select the "Open Docs on Code" or "devdocs.addSelected" command.
5. The extension will analyze the selected code and generate the relevant documentation, which will be displayed in a new editor tab or panel.

Alternatively, you can use the keyboard shortcut associated with the `devdocs.addSelected` command (if configured) to trigger the documentation generation process directly.

By using this command, you can quickly access documentation specific to the selected code, which can help you better understand its purpose, usage, and implementation details. This can be particularly useful when working with unfamiliar code or when you need a refresher on the functionality of a specific piece of code.
  
  