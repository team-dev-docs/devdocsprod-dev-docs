---
slug: /ai.branch
---


# Further Dev-Docs.JSON Configurations

The `dev-docs.json` file is a configuration file used by the Dev-Docs extension to customize various aspects of its behavior, such as documentation generation, AI integration, and code analysis. It follows the JSON format and adheres to a predefined schema.  For most commands configuration is optional but recommended.

## `quickDoc` Object

The `quickDoc` object in the JSON schema defines configuration options related to generating quick documentation for variables and functions.

<br></br>

| Configuration Option | Description | Relevant VS Code Commands |
| -------------------- | ----------- | -------------------------- |
| `quickDoc.variablesAndFunctions.prompts` | An array of objects defining prompts for generating documentation for variables and functions. Each object has `title` and `question` properties. | `generate documentation` |

## The `ai` Object

The `ai` object within the `dev-docs.json` schema contains several configuration options that control the behavior of the AI-assisted documentation generation and code analysis features provided by the Dev-Docs extension.

| Configuration Option | Description | Relevant VS Code Commands |
| --- | --- | --- |
| `variablesAndFunctions` | Defines prompts and documentation for variables and functions in specific code files or directories. | `generate documentation` |
| `components.template` | Specifies the path to a Markdown template file for generating documentation. | `Populate External Docs` |
| `docPath` | Sets a custom path for storing generated documentation. | `Populate External Docs` |
| `branch` | Specifies the Git branch where generated documentation will be committed and pushed. | `Populate External Docs` |
| `internalTypeFilters` | Filters the types of code elements (e.g., classes, functions) to include in the generated documentation. | `generate documentation`, `Outline Dev-docs for Current File`, `Populate External Docs` |
| `codeFilters` | Filters code elements based on specific patterns or snippets. | `generate documentation`, `Outline Dev-docs for Current File`, `Populate External Docs` |
| `nameFilters` | Filters code elements based on their names. | `generate documentation`, `Outline Dev-docs for Current File`, `Populate External Docs` |
| `populateDoc` | The path to a Markdown template file used to populate the documentation content. | `Populate External Docs` |
| `docSubFolder` | The subdirectory within the documentation site where generated documentation pages will be placed. | `Populate External Docs`, `generate documentation` |
| `contextDirs` | An array of directories to generate high-level context for. | `Generate Context`, `Generate Context for Multiple Documents` |
| `mappings` | Defines how generated documentation should be organized and mapped to specific folders or files. | `Generate From Mappings` |
| `openapi` | Configures the OpenAPI specification file and code sample languages for API documentation. | `Generate API Config`, `Modify Yaml` |

## Other Configuration Options

The `dev-docs.json` schema also includes the following configuration options:

- `quickDoc`: Configures the prompts and behavior for generating quick documentation for variables and functions.

<br></br>

- `customRoot`: Specifies the custom root directory for your project, relative to the workspace root.

<br></br>

- `workspaceRoot`: Sets the workspace root directory for your project.
