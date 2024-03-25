
  
  # **Modify API YAML Documentation**

## What does this VS Code Extension Command do?

This command allows you to modify the documentation of your API routes defined in an OpenAPI YAML file. It provides a user interface to select a specific API route and the section of the route documentation that you want to update, such as the `tags`, `summary`, `x-codeSamples`, or `description`. The command then calls an AI service to generate the updated content for the selected section based on the existing documentation and the code context.

## Why should I use this VS Code Extension Command?

Maintaining API documentation can be a tedious and time-consuming task, especially when dealing with large and complex APIs. This command leverages the power of AI to automate the process of updating API documentation, making it easier to keep your documentation up-to-date and in sync with your code changes. By using this command, you can save time and effort while ensuring that your API documentation remains accurate and consistent.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` file is used to configure various settings for the extension. The relevant options for this command are:

- `ai`: Configurations related to the AI service used for generating documentation.
- `openapi`: Configurations related to the OpenAPI YAML file.
  - `file`: The path to the OpenAPI YAML file relative to the workspace root.
  - `x-codeSamples`: Code samples for different programming languages.
- `customRoot`: A custom directory path relative to the workspace root where the OpenAPI YAML file is located.
- `workspaceRoot`: Indicates whether to use the workspace root as the base directory for the OpenAPI YAML file.

## Example JSON of relevant `dev-docs.json` options

```json
{
  "ai": {
    "openapi": {
      "file": "src/api/openapi.yaml",
      "x-codeSamples": {
        "langs": ["javascript", "python", "ruby"]
      }
    }
  },
  "customRoot": "api-docs",
  "workspaceRoot": false
}
```

## Prerequisites

To use this command effectively, you need to have the following:

1. A workspace with an OpenAPI YAML file defining your API routes and documentation.
2. A `dev-docs.json` file in your workspace with the appropriate configurations for the AI service and the OpenAPI YAML file.
3. An AI service set up and configured to generate API documentation based on the provided code context.

## How do I use this VS Code Extension Command?

1. Open the command palette in VS Code (`Ctrl+Shift+P` or `Cmd+Shift+P`).
2. Search for the command "Modify API YAML Documentation" and select it.
3. You will be prompted to enter the specific API route you want to modify (e.g., `/users`).
4. Next, you will be asked to choose the section of the route documentation you want to update (e.g., `tags`, `summary`, `x-codeSamples`, `description`).
5. The command will then call the AI service to generate the updated content for the selected section based on the existing documentation and the code context.
6. The updated content will be written back to the OpenAPI YAML file, ensuring that your documentation remains up-to-date with your code changes.

By following these steps, you can leverage the power of AI to streamline the process of maintaining your API documentation, ensuring that it remains accurate, consistent, and aligned with your codebase.
  
  