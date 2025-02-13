---
slug: /VS-Code-Commands/Generate-Context-Command
---

# Generate Context Command

The `devdocs.generateContext` command is a Visual Studio Code extension command that generates high-level context for a specific document or file within your project. It uses artificial intelligence to analyze the code and provide a concise overview of what the file or document is about, its purpose, and how it fits into the overall project structure.

## What Does This VS Code Extension Command Do?

The `devdocs.generateContext` command analyzes the selected file or document and generates a brief, high-level summary that explains its context within the project. This context can be helpful for developers who are new to the project or need a quick refresher on the purpose and role of a particular file or document.

## Why Should I Use This VS Code Extension Command?

Using the `devdocs.generateContext` command can be beneficial in the following scenarios:

<br></br>

1. **Onboarding new team members**: When new developers join your project, this command can provide them with a quick overview of different files and components, helping them understand the codebase more quickly.

2. **Code documentation**: The generated context can be used as a starting point for documenting your code, providing a high-level overview before diving into the detailed documentation.

3. **Code review**: During code reviews, the generated context can help reviewers better understand the purpose and context of the code they are reviewing, leading to more efficient and effective reviews.

4. **Personal reference**: Even for developers who are familiar with the codebase, the generated context can serve as a useful reference, helping them quickly recall the purpose and role of a specific file or document.

## What Are Relevant Configuration Options in the `dev-docs.json`?

The following configuration options in the `dev-docs.json` file are relevant for the `devdocs.generateContext` command:

<br></br>

1. `ai.contextDirs`: An array of directories that the command will analyze to generate context. By default, it includes `src/utils` and `src/helpers`.
2. `ai.internalTypeFilters`: An array of TypeScript entity types (e.g., `class`, `interface`, `function`) that the command should consider when generating context.
3. `ai.codeFilters`: An array of strings that the command uses to filter specific code patterns or structures when generating context.
4. `ai.nameFilters`: An array of strings that the command uses to filter specific function or variable names when generating context.

## Example JSON of Relevant `dev-docs.json` Options

```json
{
  "ai": {
    "contextDirs": ["src/utils", "src/helpers", "src/components"],
    "internalTypeFilters": ["class", "interface", "function"],
    "codeFilters": ["async function", "export default", "export const"],
    "nameFilters": ["handleSubmit", "render", "useEffect"]
  }
}
```

## Prerequisites

Before using the `devdocs.generateContext` command, make sure you have the following:

<br></br>

1. The Dev-Docs Visual Studio Code extension installed and configured correctly.
2. A `dev-docs.json` configuration file in your project root directory, with the relevant options set according to your project's needs.
3. Initialized project with a `dev-docs.json` and `dev-docs` folder 

## How Do I Use This VS Code Extension Command?

To use the `devdocs.generateContext` command, follow these steps:

<br></br>

1. Open Visual Studio Code and navigate to the file or document for which you want to generate context.
2. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3. Type "Generate Context" and select the `devdocs.generateContext` command from the list.
4. The command will analyze the selected file or document and generate a high-level context summary, which will be displayed in the output panel or a new editor tab.

<br></br>

Alternatively, you can assign a keyboard shortcut to the `devdocs.generateContext` command for quicker access. The generated context can be copied and used as a starting point for documenting the file or component, or as a reference for understanding its purpose and role within the project.
  
  