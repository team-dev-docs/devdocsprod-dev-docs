
  
   ## **Populate External Docs**

## What does this Vs Code Extension Command do?

The Populate External Docs command generates documentation for your codebase and populates it in your external documentation tool. This allows you to easily document your code and keep your documentation up-to-date.

## Why should I use this Vs Code Extension Command?

Using this command has several benefits:

- **Improved documentation:** By automatically generating documentation, you can ensure that your documentation is always up-to-date and accurate.
- **Reduced time spent on documentation:** You don't have to manually write documentation, which saves you time and effort.
- **Consistent documentation:** The command generates documentation in a consistent format, which makes it easier for users to find the information they need.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options are relevant to the Populate External Docs command:

- `internalTypeFilters`: An array of strings specifying the types of symbols to include in the documentation.
- `codeFilters`: An array of strings specifying the code patterns to include in the documentation.
- `nameFilters`: An array of strings specifying the symbol names to include in the documentation.
- `populateDoc`: A boolean value specifying whether to populate the documentation with the generated content.

## Prequsites

To use this command, you must have the following:

- A valid DevDocs API token.
- A default organization set in the DevDocs settings.
- A `dev-docs.json` file in your project root directory.

## How do I use this Vs Code Extension Command?

To use this command, follow these steps:

1. Open the Command Palette (Ctrl+Shift+P).
2. Type "Populate External Docs" and select the command.
3. The command will generate documentation for your codebase and populate it in your external documentation tool.

## Additional Notes

- The command will only generate documentation for symbols that are exported from your codebase.
- The command will not generate documentation for symbols that are marked as private.
- The command will not generate documentation for symbols that are in a `node_modules` directory.
  
  