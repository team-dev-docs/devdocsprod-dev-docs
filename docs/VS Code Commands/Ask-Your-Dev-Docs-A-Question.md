---
slug: /VS-Code-Commands/Asking-Your-Dev-Docs-A-Question
---

# Asking Your Dev-Docs A Question

The `devdocs.askYourDevDocsAQuestion` command allows you to ask natural language questions about your codebase, and receive responses from an AI assistant. This command leverages the power of natural language processing and machine learning to provide you with relevant information and insights based on your code.

## What does this VS Code Extension Command do?

This command opens an input box where you can enter your question related to your codebase. The AI assistant then analyzes your question, processes the relevant code files, and provides an appropriate response based on its understanding of your codebase's context.

## Why should I use this VS Code Extension Command?

Using this command can be beneficial in several ways:

1. **Code Comprehension**: If you're new to a codebase or working on a complex project, you can ask questions to quickly understand specific parts of the code, their functionality, and their purpose.

2. **Debugging Assistance**: When encountering issues or bugs, you can ask the AI assistant for help in understanding the root cause or potential solutions.

3. **Code Documentation**: If you're working on documenting your codebase, you can ask questions to obtain detailed explanations of functions, classes, or modules, which can be incorporated into your documentation.

4. **Knowledge Sharing**: This command facilitates knowledge sharing within a team, as developers can ask questions and receive responses based on the collective understanding of the codebase.

## What are relevant configuration Options in the `dev-docs.json`?

The relevant configuration options for this command in the `dev-docs.json` file are:

1. `ai.variablesAndFunctions`: This section contains prompts and documentation for various variables and functions in your codebase, which the AI assistant can use to provide more accurate and relevant responses.

2. `ai.components.template` (optional): This option specifies a path to a Markdown file that serves as a template for the AI assistant's responses.

3. `ai.docPath` (optional): This option allows you to specify a custom path for storing the AI assistant's generated documentation.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "variablesAndFunctions": {
      "myFunction": {
        "prompts": [
          {
            "title": "What does myFunction do?",
            "question": "Explain the purpose and functionality of the myFunction.",
            "documentation": "myFunction is a utility function that performs..."
          }
        ]
      }
    },
    "components": {
      "template": "docs/ai-response-template.md"
    },
    "docPath": "docs/ai-generated"
  }
}
```

## Prerequisites

Before using this command, make sure you have configured the necessary prompts and documentation in the `dev-docs.json` file. This will ensure that the AI assistant has access to the relevant information required to provide accurate responses.

## How do I use this VS Code Extension Command?

To use the `devdocs.askYourDevDocsAQuestion` command, follow these steps:

1. Open the command palette in Visual Studio Code (Ctrl+Shift+P on Windows/Linux, Cmd+Shift+P on macOS).
2. Search for and select the "Ask DevDocs A Question" command.
3. An input box will appear. Enter your question related to your codebase.
4. The AI assistant will process your question and provide a response based on the available information and the configured prompts and documentation.

The response from the AI assistant will be displayed in a message box or a dedicated documentation panel, depending on your configuration. You can review the response and incorporate any relevant information into your codebase or documentation as needed.

By leveraging the power of AI and natural language processing, this command can significantly enhance your understanding of your codebase, facilitate knowledge sharing, and streamline the documentation process.
  
  