
  
  ## The `dev-docs.json` Configuration File

The `dev-docs.json` file is a configuration file used by the Dev-Docs extension to control various aspects of its behavior, such as documentation generation, AI integration, and project settings. This file allows you to customize the extension's functionality to suit your project's requirements.

### `quickDoc` Object

The `quickDoc` object in the JSON schema defines configuration options related to generating quick documentation for variables and functions.

| Configuration Option | Description | Relevant VS Code Commands |
| -------------------- | ----------- | -------------------------- |
| `quickDoc.variablesAndFunctions.prompts` | An array of objects defining prompts for generating documentation for variables and functions. Each object has `title` and `question` properties. | `devdocs.generateDocumentation`, `devdocs.addSelected` |

### Dev-Docs VS Code Commands

| Command Title | Description |
| ------------- | ----------- |
| `Ask DevDocs A Question` | Allows you to ask questions about your codebase and receive AI-generated answers. |
| `Audit Your Docs` | Analyzes and audits your Markdown documentation files for improvements. |
| `Batch Document` | Generates documentation for functions in a code file in a batch process. |
| `Find Missing Docs` | Identifies potential gaps in your documentation and suggests new documentation topics. |
| `Generate API Config` | Generates API documentation in the form of a Postman Collection and OpenAPI specification. |
| `Generate Context` | Generates high-level context documentation for a specific file or document. |
| `Generate Context for Multiple Documents` | Generates high-level context documentation for multiple files or directories within the workspace. |
| `Generate From Mappings` | Generates documentation based on predefined mappings between files/folders and documentation sections. |
| `Generate Missing Docs` | Generates missing documentation based on the suggestions provided by the `Find Missing Docs` command. |
| `generate documentation` | Generates documentation for the current file based on the configuration settings. |
| `Modify Yaml` | Allows you to modify the documentation for API routes defined in an OpenAPI YAML file. |
| `Open Dev-doc for current file` | Opens a document for the current file, allowing you to add or edit documentation. |
| `Open Devdocs Markdown` | Opens a Markdown file within the Dev-Docs environment for editing and documentation purposes. |
| `Open Docs on Code` | Generates documentation for the selected code and displays it in a new editor tab or panel. |
| `Populate External Docs` | Generates external documentation for your codebase, specifically for methods, classes, and functions. |
| `Set Where Dev-Docs will read and write to` | Sets the root directory for the Dev-Docs extension to read and write documentation files. |
| `Sign into Devdocs with GitHub` | Allows you to sign in to the Dev-Docs extension using your GitHub account. |
| `Use Dev Docs Syntax` | Enables the Dev-Docs custom Markdown syntax for writing documentation with additional styling and components. |
| `Use Dev-Docs AI to replace Selected` | Replaces the selected text in your editor with AI-generated content. |

Please note that this is not an exhaustive list, and there may be additional commands or configuration options available in the Dev-Docs extension.
  
  