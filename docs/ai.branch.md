# Dev-Docs.JSON Configuration

Configuration in most cases are optional but recommended in Dev-Docs
  
  | Configuration Option | Description | Relevant VS Code Commands |
|----------------------|--------------|----------------------------|
| `ai.variablesAndFunctions` | Defines prompts and documentation for variables and functions in specific code files or directories. | `devdocs.generateDocumentation`, `devdocs.addSelected` |
| `ai.components.template` | Specifies the path to a Markdown template file for generating documentation. | `devdocs.generateExternalDocs`, `devdocs.generateDocumentation` |
| `ai.docPath` | Sets a custom path for storing generated documentation. | `devdocs.generateExternalDocs`, `devdocs.generateDocumentation` |
| `ai.branch` | Specifies the Git branch where generated documentation will be committed and pushed. | `devdocs.generateExternalDocs`, `devdocs.outline` |
| `ai.internalTypeFilters` | Filters the types of code elements (e.g., classes, functions) to include in the generated documentation. | `devdocs.generateDocumentation`, `devdocs.outlineForCurrentFile` |
| `ai.codeFilters` | Filters code elements based on specific patterns or snippets. | `devdocs.generateDocumentation`, `devdocs.outlineForCurrentFile` |
| `ai.nameFilters` | Filters code elements based on their names. | `devdocs.generateDocumentation`, `devdocs.outlineForCurrentFile` |
| `ai.populateDoc` | The path to a Markdown template file used to populate the documentation content. | `devdocs.generateExternalDocs` |
| `ai.docSubFolder` | The subdirectory within the documentation site where generated documentation pages will be placed. | `devdocs.generateExternalDocs`, `devdocs.generateDocumentation` |
| `ai.contextDirs` | An array of directories to generate high-level context for. | `devdocs.generateContext`, `devdocs.generateMultiContext` |
| `ai.mappings` | Defines how generated documentation should be organized and mapped to specific folders or files. | `devdocs.generateFromMappings`, `devdocs.outline` |
| `ai.openapi` | Configures the OpenAPI specification file and code sample languages for API documentation. | `devdocs.generateAPIDocumentation`, `devdocs.modifyAPIYAMLDocumentation` |
  
  
