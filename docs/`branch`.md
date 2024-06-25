
  
  # Dev-Docs.JSON Configuration

The `dev-docs.json` file is a configuration file used by the Dev-Docs extension to customize various aspects of its behavior, such as documentation generation, AI integration, and code analysis. It follows the JSON format and adheres to a predefined schema.

## The `ai` Object

The `ai` object within the `dev-docs.json` schema contains several configuration options that control the behavior of the AI-assisted documentation generation and code analysis features provided by the Dev-Docs extension.

| Configuration Option | Description | Relevant VS Code Commands |
| --- | --- | --- |
| `variablesAndFunctions` | Defines prompts and documentation for variables and functions in specific code files or directories. | `devdocs.generateDocumentation`, `devdocs.addSelected` |
| `components.template` | Specifies the path to a Markdown template file for generating documentation. | `devdocs.generateExternalDocs`, `devdocs.generateDocumentation` |
| `docPath` | Sets a custom path for storing generated documentation. | `devdocs.generateExternalDocs`, `devdocs.generateDocumentation` |
| `branch` | Specifies the Git branch where generated documentation will be committed and pushed. | `devdocs.generateExternalDocs`, `devdocs.outline` |
| `internalTypeFilters` | Filters the types of code elements (e.g., classes, functions) to include in the generated documentation. | `devdocs.generateDocumentation`, `devdocs.outlineForCurrentFile` |
| `codeFilters` | Filters code elements based on specific patterns or snippets. | `devdocs.generateDocumentation`, `devdocs.outlineForCurrentFile` |
| `nameFilters` | Filters code elements based on their names. | `devdocs.generateDocumentation`, `devdocs.outlineForCurrentFile` |
| `populateDoc` | The path to a Markdown template file used to populate the documentation content. | `devdocs.generateExternalDocs` |
| `docSubFolder` | The subdirectory within the documentation site where generated documentation pages will be placed. | `devdocs.generateExternalDocs`, `devdocs.generateDocumentation` |
| `contextDirs` | An array of directories to generate high-level context for. | `devdocs.generateContext`, `devdocs.generateMultiContext` |
| `mappings` | Defines how generated documentation should be organized and mapped to specific folders or files. | `devdocs.generateFromMappings`, `devdocs.outline` |
| `openapi` | Configures the OpenAPI specification file and code sample languages for API documentation. | `devdocs.generateAPIDocumentation`, `devdocs.modifyAPIYAMLDocumentation` |

## Other Configuration Options

The `dev-docs.json` schema also includes the following configuration options:

- `quickDoc`: Configures the prompts and behavior for generating quick documentation for variables and functions.
- `customRoot`: Specifies the custom root directory for your project, relative to the workspace root.
- `workspaceRoot`: Sets the workspace root directory for your project.
  
  