# Dev-Docs Configuration Guide

This document outlines the configuration options available in the `dev-docs.json` file, which is used to customize the behavior of the Dev-Docs tool.

## AI Settings

The `ai` section of the configuration file contains various settings for AI-powered documentation generation:

### Variables and Functions

- `variablesAndFunctions`: Defines custom prompts for analyzing variables and functions.
  - `prompts`: An array of objects, each containing a `title`, `question`, and `documentation` field.

### Components

- `components.template`: Specifies the path to a markdown file template for component documentation.

### General Settings

- `docPath`: Custom path for generated documentation.
- `codeSummaryPrompt`: Prompt for generating code summaries (default: "3 Bullet points on what the code does").
- `defaultLength`: Default length for generated content (default: "3-5 Sentences").
- `branch`: Git branch to use for documentation (default: "main").

### Filters

- `internalTypeFilters`: Array of internal types to include in documentation.
- `codeFilters`: Array of code patterns to filter (default includes "async function" and "export default").
- `nameFilters`: Array of function names to filter (default includes "handleSubmit" and "render").

### Documentation Generation

- `populateDoc`: Path to the template for populating documentation (default: "docs/template.md").
- `docSubFolder`: Subfolder for API reference documentation (default: "api-reference").
- `contextPrompt`: Custom prompt or template for generating context.
- `folderContextPrompt`: Custom prompt or template for folder-level context.
- `contextDirs`: Array of directories to include for context generation.

### File Mappings

- `mappings`: Array of objects defining how files or folders should be mapped to cloud directories.

### OpenAPI Configuration

- `openapi.file`: Path to the OpenAPI specification file.
- `openapi.x-codeSamples.langs`: Array of languages for generating code samples in OpenAPI documentation.

## Custom Root

- `customRoot`: Specifies a custom root directory for the project (e.g., "packages/my-package").

## Workspace Root

- `workspaceRoot`: Defines the root path of the workspace (e.g., "/path/to/project").

These configuration options allow you to fine-tune the Dev-Docs tool to suit your project's specific documentation needs and structure.