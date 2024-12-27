

  # Generating External Facing Documentation with Dev-Docs

Dev-Docs is a powerful VS Code extension that helps developers create and maintain documentation for their projects. This guide will walk you through the process of generating external facing documentation using Dev-Docs.

## Prerequisites

1. Install the Dev-Docs extension in VS Code.
2. Ensure you're signed in to Dev-Docs with your GitHub account.

## Steps to Generate External Documentation

### 1. Initialize Dev-Docs

If you haven't already set up Dev-Docs for your project:

1. Open the command palette (Cmd+Shift+P or Ctrl+Shift+P).
2. Run the command "Dev-Docs: Initialize Dev-Docs".

### 2. Configure Your Project

Create or update the `dev-docs.json` file in your project root to specify external documentation settings:

```json
{
  "ai": {
    "docPath": "docs",
    "branch": "dev_docs_branch",
    "externalDocPrompt": "Create user-friendly documentation for this code."
  }
}
```

### 3. Generate Documentation

There are several ways to generate external documentation:

#### Option A: Generate for All Files

1. Open the command palette.
2. Run "Dev-Docs: Populate External Docs".

This will analyze your entire codebase and generate documentation for all relevant files.

#### Option B: Generate for a Specific File

1. Right-click on a file in the explorer.
2. Select "Dev-Docs" > "Generate Context".

#### Option C: Generate from Current File

1. Open the file you want to document.
2. Use the keyboard shortcut Shift+Cmd+D (Mac) or Shift+Ctrl+D (Windows/Linux).

### 4. Review and Edit

After generation, Dev-Docs will create markdown files in the specified `docPath` directory. Review and edit these files as needed.

### 5. Push to External Repository

To push your documentation to an external repository:

1. Open the command palette.
2. Run "Dev-Docs: Save Docs and Push To Branch".

This will commit your changes and push them to the specified branch in your documentation repository.

## Additional Features

- **Customize Generation**: Modify the `externalDocPrompt` in `dev-docs.json` to tailor the AI's documentation style.
- **API Documentation**: Use Shift+Cmd+A (Mac) or Shift+Ctrl+A (Windows/Linux) to generate API documentation for routes in your code.
- **Search Documentation**: Use the "Dev-Docs: Search Your Dev-Docs" command to quickly find information in your generated docs.

## Best Practices

1. Regularly update your documentation as your code evolves.
2. Use clear and descriptive file names for your markdown documents.
3. Include code examples and explanations in your documentation where appropriate.
4. Leverage Dev-Docs' AI capabilities to maintain consistency across your documentation.

By following these steps and best practices, you can efficiently generate and maintain high-quality, external facing documentation for your project using Dev-Docs.

  