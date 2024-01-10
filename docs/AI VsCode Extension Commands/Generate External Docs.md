
  
   ## **Generate External Docs**

## What does this Vs Code Extension Command do?

The `Generate External Docs` command in the Vs Code extension allows you to automatically generate external documentation for your code symbols, such as classes, methods, and functions. This documentation is stored in a separate JSON file, which can then be used to populate external documentation sites or tools.

## Why should I use this Vs Code Extension Command?

Using the `Generate External Docs` command can save you time and effort in creating and maintaining external documentation for your code. It allows you to easily generate documentation for multiple symbols at once, and it ensures that your documentation is always up-to-date with your code.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` file contains various configuration options that control how the `Generate External Docs` command works. Some of the relevant options include:

- `internalTypeFilters`: This option allows you to specify which types of symbols to include in the generated documentation. For example, you can choose to only include classes or only methods.
- `codeFilters`: This option allows you to specify which code files to include in the generated documentation. For example, you can choose to only include files in a specific directory.
- `nameFilters`: This option allows you to specify which symbols to include in the generated documentation based on their names. For example, you can choose to only include symbols that start with a certain letter.
- `populateDoc`: This option allows you to specify whether to populate the generated documentation with content from the code comments.

## Prequsites

Before using the `Generate External Docs` command, you must have the following prerequisites:

- A valid DevDocs API token.
- A default organization set in the Vs Code extension.
- A `dev-docs.json` file in your project root directory.

## How do I use this Vs Code Extension Command?

To use the `Generate External Docs` command, follow these steps:

1. Open the Vs Code extension.
2. Click on the **Generate External Docs** button in the toolbar.
3. Select the symbols you want to include in the generated documentation.
4. Click on the **Generate** button.

The generated documentation will be saved in the `dev-docs.json` file in your project root directory. You can then use this file to populate external documentation sites or tools.
  
  