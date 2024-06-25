
  
  Certainly, here's the response in Markdown format:

---
title: "Welcome to Dev-Docs"
sidebar_position: 1
---

# Getting Started

Welcome to Dev-Docs, a tool to help developers more efficiently generate and maintain technical documentation. Dev-Docs has two main use cases:

## External Documentation (Public Facing)

External docs are meant for users, customers, developers, partners, or anyone that would use your APIs, SDKs, or applications. These docs help with developer experience and can also act as self-service implementation and support guides.

## Internal Documentation

Internal docs are meant for internal software engineering orgs, or anyone who contributes to your codebase. These docs help organizations share knowledge, maintain consistency, collaborate, and onboard new team members. This type of documentation can also be helpful in reminding developers why certain decisions were made and how the codebase works.

# Audit Markdown

## What does this VS Code Extension Command do?

The `Audit Markdown` command helps you identify and fix issues in your Markdown documentation. It checks for grammar and spelling errors, nonsensical paragraphs or sentences, unhelpful content, and aesthetic improvements.

## Why should I use this Vs Code Extension Command?

Using the `Audit Markdown` command can help you improve the quality and readability of your Markdown documentation, making it more useful and engaging for your readers.

## Prequsites

To use the `Audit Markdown` command, you must have the following prerequisites:

- You are Signed into Dev-Docs in VS Code.
- A default organization set in the VS Code extension.
- A `dev-docs.json` file in your project root directory.
- Make sure you have External Docs set up, where you can learn more about [here](/docs/external%20docs/How%20to%20Get%20Started%20With%20External%20Docs).

## How do I use this VS Code Extension Command?

To use the `Audit Markdown` command, follow these steps:

1. Open the Markdown file you want to audit in VS Code.
2. Click on the `Command Palette` (Ctrl+Shift+P) and type `Audit Markdown`.
3. Select the `Audit Your Docs` command from the list.
4. The command will run and display the audit results in the Output panel. The audit results will include a list of issues found in the Markdown file `docs/_audit.md`, along with suggestions on how to fix them. You can then use these suggestions to improve the quality of your Markdown documentation.

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
    "contextDirs": ["src"],
    "populateDoc": "dev-docs/populate.md",
    "importFiles": ["src/AiServices.ts"],
    "internalTypeFilters": ["function"],
    "docSubFolder": "AI VsCode Extension Commands",
    "codeFilters": ["ai?", "callMultiAiService"],
    "nameFilters": ["vscode.commands"],
    "mappings": [
      {
        "files": ["src/your_code.ts"],
        "folder": [],
        "prompt": "",
        "cloudDir": "YourDocumentFilePathOnGithub.md"
      },
      {
        "files": ["src/your_code_two.ts"],
        "folder": [],
        "prompt": "",
        "cloudDir": "YourDocumentFilePathTwoOnGithub.md"
      }
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
  
  