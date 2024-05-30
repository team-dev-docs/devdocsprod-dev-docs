
  
  # **Dev-Docs: VSCode Extension for Documentation**

Dev-Docs is a powerful VSCode extension designed to streamline the documentation process for developers. It provides a comprehensive set of features and commands to generate, manage, and collaborate on documentation directly from within the VSCode environment.

## What does this VSCode Extension do?

The Dev-Docs VSCode extension offers a wide range of functionality, including:

1. **Generate Documentation**: Automatically generate documentation for your code, including functions, variables, classes, and more. This feature uses advanced natural language processing techniques to provide clear and concise documentation.

2. **Document Explorer**: Navigate and explore your project's documentation with ease using the built-in Document Explorer.

3. **Collaborate on Documentation**: Seamlessly collaborate with your team members on documentation by integrating with popular version control systems like Git.

4. **Search Documentation**: Quickly search and find relevant documentation within your project using the powerful search functionality.

5. **External Documentation Generation**: Create and manage external documentation pages for your project, making it easier to share documentation with stakeholders and end-users.

6. **AI-Assisted Documentation**: Leverage the power of artificial intelligence to enhance your documentation with contextual explanations, code examples, and more.

7. **Customizable Templates**: Customize the documentation templates to match your project's style and branding guidelines.

## Why should I use this VSCode Extension?

The Dev-Docs VSCode extension offers several benefits to developers and teams:

1. **Increased Productivity**: By automating the documentation process, developers can save significant time and effort, allowing them to focus on writing code instead of spending hours documenting it.

2. **Consistent Documentation**: Ensure consistent and high-quality documentation across your entire codebase, making it easier for team members and external stakeholders to understand and maintain the project.

3. **Collaboration and Knowledge Sharing**: Foster collaboration and knowledge sharing within your team by providing a centralized location for documentation and enabling real-time collaboration.

4. **Improved Code Maintainability**: Well-documented code is easier to maintain and understand, reducing technical debt and facilitating future development and bug fixes.

5. **Enhanced Developer Experience**: The seamless integration of Dev-Docs into the VSCode environment provides a smooth and efficient developer experience, minimizing context switching and improving overall productivity.

## What are relevant configuration options in the `dev-docs.json`?

The `dev-docs.json` file is the central configuration file for the Dev-Docs extension. It allows you to customize various aspects of the documentation generation process. Some of the relevant configuration options include:

1. **quickDoc**: Configure settings for generating documentation for variables and functions.
2. **ai**: Specify settings related to AI-assisted documentation, such as prompts, templates, and filters.
3. **docPath**: Set the path where generated documentation files should be stored.
4. **branch**: Specify the Git branch where documentation changes should be committed.
5. **internalTypeFilters**: Filter the types of code elements (e.g., classes, functions, variables) for which documentation should be generated.
6. **codeFilters**: Define patterns or keywords to filter code elements based on their content.
7. **nameFilters**: Filter code elements based on their names or patterns.
8. **populateDoc**: Specify the path to the markdown template file used for generating documentation.
9. **docSubFolder**: Set the subfolder within the repository where documentation files should be stored.
10. **contextDirs**: List directories that should be included when generating contextual documentation.
11. **mappings**: Configure mappings between code files/folders and their corresponding documentation locations.
12. **openapi**: Specify settings for generating API documentation from an OpenAPI specification file.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "quickDoc": {
    "variablesAndFunctions": {
      "prompts": [
        {
          "title": "Describe the purpose of this function/variable",
          "question": "What is the purpose of this {{type}} {{name}}?"
        }
      ]
    }
  },
  "ai": {
    "docPath": "docs",
    "branch": "main",
    "internalTypeFilters": ["class", "method", "function", "variable"],
    "codeFilters": ["async function", "export default"],
    "nameFilters": ["handleSubmit", "render"],
    "populateDoc": "docs/template.md",
    "docSubFolder": "api-reference",
    "contextDirs": ["src/utils", "src/helpers"],
    "mappings": [
      {
        "files": ["src/main.ts"],
        "cloudDir": "Getting Started"
      },
      {
        "folder": ["src/components"],
        "cloudDir": "Components"
      }
    ],
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

Before using the Dev-Docs VSCode extension, ensure that you have the following prerequisites in place:

1. **Visual Studio Code**: Make sure you have Visual Studio Code installed on your machine. You can download it from the official website: [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. **Dev-Docs Extension**: Install the Dev-Docs extension from the Visual Studio Code Marketplace or by searching for "Dev-Docs" in the Extensions view within VSCode.

3. **Project Setup**: Open your project in Visual Studio Code. The Dev-Docs extension works best with projects that have a well-structured codebase and follow common coding conventions.

## How do I use this VSCode Extension Command?

To start using the Dev-Docs VSCode extension, follow these steps:

1. **Open the Command Palette**: Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the Command Palette in Visual Studio Code.

2. **Search for Commands**: Type "Dev-Docs" in the Command Palette search box to filter and display the available Dev-Docs commands.

3. **Select a Command**: Choose the command you want to execute from the list. Some commonly used commands include:
   - `Dev-Docs: Generate Documentation`: Generate documentation for your code.
   - `Dev-Docs: Open Dev-doc for Current File`: Open the documentation for the currently active file.
   - `Dev-Docs: Outline Dev-docs for Current File`: Generate an outline for the current file's documentation.
   - `Dev-Docs: Save All Your Dev-Docs`: Save all changes made to your documentation.

4. **Configure Dev-Docs**: If you haven't already, create a `dev-docs.json` file in your project's root directory and configure the settings according to your preferences and project requirements.

5. **Write Documentation**: Once the documentation generation process is complete, you can review and edit the generated documentation files directly in Visual Studio Code.

6. **Collaborate and Share**: If you're working in a team, you can commit your changes to a version control system like Git and collaborate with your team members on the documentation. Additionally, you can generate external documentation pages to share with stakeholders and end-users.

By following these steps, you can leverage the power of the Dev-Docs VSCode extension to streamline your documentation process, improve code maintainability, and foster collaboration within your team.
  
  