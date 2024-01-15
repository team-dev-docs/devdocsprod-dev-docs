# Populate External Docs

## What does this Vs Code Extension Command do?

The `Populate External Docs` command in the VS Code extension allows you to automatically generate external documentation for your code symbols, such as classes, methods, and functions. This documentation is stored in a separate JSON file, which can then be used to populate external documentation sites or tools.

## Why should I use this Vs Code Extension Command?

Using the `Populate External Docs` command can save you time and effort in creating and maintaining external documentation for your code. It allows you to easily generate documentation for multiple symbols at once, and it ensures that your documentation is always up-to-date with your code.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` file contains various configuration options that control how the `Populate External Docs` command works. Some of the relevant options include:

- `internalTypeFilters`: This option allows you to specify which types of symbols to include in the generated documentation. For example, you can choose to only include classes or only methods.
- `codeFilters`: This option allows you to specify which code files to include in the generated documentation. For example, you can choose to only include files in a specific directory.
- `nameFilters`: This option allows you to specify which symbols to include in the generated documentation based on their names. For example, you can choose to only include symbols that start with a certain letter.
- `populateDoc`: This option allows you to specify whether to populate the generated documentation with content from the code comments.

Here is an example of JSON configuration:

```json

{
  "ai": {
    "contextDirs": [
      "src"
    ],
    "populateDoc": "dev-docs/populate.md",
    "importFiles": [
      "src/AiServices.ts"
    ],
    "internalTypeFilters": [
      "function"
    ],
    "docSubFolder": "AI VsCode Extension Commands",
    "codeFilters": [
      "ai?",
      "callMultiAiService"
    ],
    "nameFilters": [
      "vscode.commands"
    ],
    "mappings": [
      {
        "files": [
          "src/your_code.ts"
        ],
        "folder": [],
        "prompt": "",
        "cloudDir": "YourDocumentFilePathOnGithub.md"
      },
         {
        "files": [
          "src/your_code_two.ts"
        ],
        "folder": [],
        "prompt": "",
        "cloudDir": "YourDocumentFilePathTwoOnGithub.md"
      },
    ]
  }
}

```

## Prequsites

Before using the `Populate External Docs` command, you must have the following prerequisites:

- You are Signed into Dev-Docs in VS Code.
- A default organization set in the VS Code extension.
- A `dev-docs.json` file in your project root directory.
- Make sure you have External Docs set up, where you can learn more about [here](/docs/external%20docs/How%20to%20Get%20Started%20With%20External%20Docs).

## How do I use this VS Code Extension Command?

To use the `Populate External Docs` command, follow these steps:


1. Make sure you are Signed into Dev-Docs in VsCode. 
2. Click on the `Command Palette` (Ctrl+Shift+P) and type `Populate External Docs`, and select the command.


The generated documentation will then be populated to your Dev-Docs Repo file in your project root directory. You can then use this file to populate external documentation sites or tools.


