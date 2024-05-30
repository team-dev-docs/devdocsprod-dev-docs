# Replace Selected Text with AI-Generated Content

## What does this VS Code Extension Command do?

The `devdocs.replaceText` command allows you to use the Dev-Docs AI to replace the currently selected text in your code editor with an AI-generated alternative. This feature can be particularly useful when you want to rephrase or rewrite a section of code or documentation in a more concise or clearer manner.

## Why should I use this VS Code Extension Command?

Using the `devdocs.replaceText` command can be beneficial in several scenarios:

1. **Improving Code Readability**: If you have a complex or verbose code snippet, the AI can suggest a more readable version, making it easier for other developers or your future self to understand the code.

2. **Refactoring**: When you want to refactor a piece of code to follow better coding practices or conventions, the AI can provide suggestions based on its understanding of the context.

3. **Documentation Enhancement**: If you find a section of your documentation unclear or lacking in detail, you can use the AI to generate an improved version, potentially saving time and effort.

4. **Exploring Alternatives**: The AI can offer different perspectives or approaches to solving a problem, allowing you to explore alternative solutions you might not have considered.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant to the `devdocs.replaceText` command:

- `ai.variablesAndFunctions`: This object contains prompts and documentation related to variables and functions in your codebase. The AI uses this information to understand the context of the selected code and generate relevant replacements.
- `ai.codeFilters`: An array of strings that specify patterns to filter the code that the AI should consider for generating documentation or replacements.
- `ai.nameFilters`: An array of strings that specify variable or function names to include or exclude when generating documentation or replacements.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "variablesAndFunctions": {
      "myFunction": {
        "prompts": [
          {
            "title": "What does myFunction do?",
            "question": "Explain the purpose and functionality of the myFunction function.",
            "documentation": "myFunction is a utility function that performs xyz operations..."
          }
        ]
      }
    },
    "codeFilters": [
      "async function",
      "export default"
    ],
    "nameFilters": [
      "handleSubmit",
      "render"
    ]
  }
}
```

In this example, the AI will use the information provided for `myFunction` to understand the context and generate replacements for selected code related to that function. The `codeFilters` and `nameFilters` options further refine the scope of code the AI considers.

## Prerequisites

To use the `devdocs.replaceText` command effectively, you should have the following prerequisites in place:

1. **Dev-Docs Configuration**: Ensure that you have a `dev-docs.json` file in your project with relevant configuration options for the AI to understand your codebase's context.
2. **Code Selection**: You need to have a portion of code selected in your code editor for the AI to generate a replacement.

## How do I use this VS Code Extension Command?

To use the `devdocs.replaceText` command, follow these steps:

1. Open the file you want to modify in your code editor.
2. Select the code snippet or section you want to replace with an AI-generated alternative.
3. Open the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`) and search for "Use Dev-Docs AI to replace Selected".
4. The Dev-Docs AI will analyze the selected code and the context provided in the configuration file.
5. The AI will generate a replacement for the selected code and prompt you to confirm the change.
6. Review the suggested replacement and choose to accept or reject it.

By following these steps, you can leverage the power of the Dev-Docs AI to streamline your coding process, improve code readability, and explore alternative approaches to solving problems.
  
  