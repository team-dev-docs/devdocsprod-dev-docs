# Modify YAML Documentation Command

The `devdocs.modifyAPIYAMLDocumentation` command is a Visual Studio Code extension command that allows you to modify the documentation for your API routes defined in an OpenAPI (Swagger) YAML file. It provides a user-friendly interface to update specific sections of your API documentation, such as tags, summaries, code samples, and descriptions.

## Why should I use this VS Code Extension Command?

Maintaining accurate and up-to-date API documentation is crucial for developers who work on projects with APIs. This command streamlines the process of updating API documentation by leveraging the power of AI to generate or modify the content based on the existing YAML file and your input. It saves time and effort compared to manually editing the YAML file, especially when dealing with large and complex API specifications.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant for this command:

- `ai.openapi.file`: The path to your OpenAPI YAML file (e.g., `src/api/openapi.yaml`).
- `ai.openapi.x-codeSamples.langs`: An array of programming languages for which code samples should be generated (e.g., `["javascript", "python", "ruby"]`).

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "openapi": {
      "file": "src/api/openapi.yaml",
      "x-codeSamples": {
        "langs": ["javascript", "python", "ruby"]
      }
    }
  }
}
```

## Prerequisites

Before using the `devdocs.modifyAPIYAMLDocumentation` command, ensure that you have:

1. An OpenAPI (Swagger) YAML file that defines your API routes and documentation.
2. The `dev-docs.json` file properly configured with the path to your OpenAPI YAML file and the desired programming languages for code samples.

## How do I use this VS Code Extension Command?

To use the `devdocs.modifyAPIYAMLDocumentation` command, follow these steps:

1. Open Visual Studio Code and navigate to the workspace containing your API project.
2. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3. Type "Modify Yaml" and select the "Modify Yaml" command from the list.
4. You will be prompted to enter the specific API route you want to modify (e.g., `/api/users`).
5. Next, you will be asked to select the section of the documentation you want to update (e.g., tags, summary, x-codeSamples, description).
6. Based on your selection, the extension will generate or modify the corresponding section of the documentation using AI, taking into account the existing documentation and your API specification.
7. Review the generated or modified documentation, and make any necessary adjustments.
8. Once you are satisfied with the changes, the OpenAPI YAML file will be updated with the new documentation.

By using this command, you can streamline the process of maintaining accurate and up-to-date API documentation without the need for manual editing. The AI-powered generation and modification capabilities ensure that your documentation remains consistent with your API specification, saving you time and effort.
  
  