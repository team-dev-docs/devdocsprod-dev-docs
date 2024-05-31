# Dev-Docs Batch Documentation

The `devdocs.generateBatchDocumentation` command is used to generate documentation for a codefile's functions in a batch process. This command can be helpful when you want to quickly document all the functions in a codefile.

## Why should I use this Vs Code Extension Command?

Generating documentation for an entire project or large parts of a codebase can be a time-consuming and tedious task if done manually. The `devdocs.generateBatchDocumentation` command automates this process, saving you time and effort. It allows you to quickly generate documentation for a codefile.

## What are relevant configuration options in the `dev-docs.json`?

The `dev-docs.json` file is the central configuration file for the Dev-Docs extension. Here are some of the most relevant configuration options:

1. **quickDoc**: Configures the prompts and behavior for generating quick documentation for variables and functions.
2. **ai**: Defines the prompts, templates, and filters for AI-assisted documentation generation.
   - **variablesAndFunctions**: Configures prompts for documenting variables and functions in specific code files and directories.
   - **components**: Specifies the template file for generating documentation for components.
   - **docPath**: Sets the custom path for storing generated documentation.
   - **internalTypeFilters**: Filters the types of code elements to include in the generated documentation.
   - **codeFilters**: Filters code elements based on specific patterns in the code.
   - **nameFilters**: Filters code elements based on their names.
   - **openapi**: Configures the OpenAPI specification file and code sample languages for API documentation.
3. **customRoot**: Specifies the custom root directory for your project.
4. **workspaceRoot**: Sets the workspace root directory for your project.

## Example JSON of relevant `dev-docs.json` options

```json
{
  "quickDoc": {
    "variablesAndFunctions": {
      "prompts": [
        {
          "title": "Describe the variable/function",
          "question": "What does this variable/function do?"
        }
      ]
    }
  },
  "ai": {
    "variablesAndFunctions": {
      "yourfilename.js": {
        "prompts": [
          {
            "title": "Describe the variable/function",
            "question": "What does this variable/function do?",
            "documentation": "Provide a brief description of the purpose and functionality of the variable or function."
          }
        ]
      }
    },
    "internalTypeFilters": ["class", "method", "function"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"]
  }
}
```

## Prerequisites

Before using the `devdocs.generateBatchDocumentation` command, ensure that you have:

1. A valid `dev-docs.json` configuration file in your project root directory.
2. A Markdown template file specified in the `ai.components.template` configuration option.
3. The necessary permissions to write documentation files to the specified `docPath`.

## How do I use this Vs Code Extension Command?

To use the `devdocs.generateBatchDocumentation` command, follow these steps:

1. Open your project in Visual Studio Code.
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) to open the Command Palette.
3. Search for "Batch Document" and select the `devdocs.generateBatchDocumentation` command.

After executing the command, the extension will analyze your codebase based on the specified configuration options and generate documentation files for the selected code elements. The generated documentation files will be saved in the specified `docPath` and `docSubFolder`.


  
  