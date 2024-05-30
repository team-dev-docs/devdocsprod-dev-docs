
  
  # **Replace Selected Text with AI Generated Content**

## What does this Vs Code Extension Command do?

This command allows you to select text within a file and use the Dev-Docs AI to generate replacement content for the selected text. It prompts you to enter the text you want to use as a basis for generating the replacement content, and then replaces the selected text with the AI-generated content.

## Why should I use this Vs Code Extension Command?

This command can be useful when you need to expand upon or clarify a specific section of code or documentation. By selecting the relevant text and providing a prompt, the AI can generate more detailed or contextual content to replace the selected text. This can help improve the quality and comprehensiveness of your code documentation or explanations.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` configuration file does not contain any specific options directly related to the "Replace Selected Text" command. However, some general options that may affect the AI's behavior or the formatting of the generated content include:

- `ai.components.template`: Specifies the path to a Markdown template file that may be used to format the generated content.
- `ai.docPath`: Specifies the path where generated documentation files should be stored.
- `ai.branch`: Specifies the Git branch where generated documentation should be committed.

## Example JSON of relevant Dev-Docs.json options

Since there are no specific options directly related to the "Replace Selected Text" command, we'll provide an example of the general `ai` configuration object:

```json
"ai": {
  "components": {
    "template": "docs/templates/default.md"
  },
  "docPath": "docs/generated",
  "branch": "main"
}
```

## Prerequisites

To use the "Replace Selected Text" command, you must have the following:

1. An active text editor with a file open in Visual Studio Code.
2. Text selected within the open file.

## How do I use this Vs Code Extension Command?

To use the "Replace Selected Text" command, follow these steps:

1. Open a file in Visual Studio Code and select the text you want to replace.
2. Press the keyboard shortcut for the command (by default, `Shift+Cmd+X` on macOS or `Shift+Ctrl+X` on Windows/Linux).
3. An input box will appear, prompting you to enter the text you want to use as a basis for generating the replacement content.
4. Type in your prompt or description of the desired content, and press Enter.
5. The Dev-Docs AI will generate replacement content based on your prompt, and the selected text will be replaced with the generated content.

It's important to note that the quality and relevance of the generated content will depend on the prompt you provide and the AI's understanding of the context within your codebase. You may need to refine your prompt or make additional edits to the generated content to ensure it accurately reflects your intended meaning.
  
  