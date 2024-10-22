

  # Creating a Docusaurus Page for Dev-Docs VSCode Commands

## Step 1: Identify Relevant Commands

1. Open `/package.json`
2. Look for the `commands` array in the `contributes` section

## Step 2: Extract Relevant Commands

Extract commands related to documentation generation:

```javascript
{
  "command": "devdocs.generateDocumentation",
  "title": "generate documentation",
  "category": "dev-docs"
},
{
  "command": "devdocs.generateAPIDocumentation",
  "title": "Generate API Config",
  "category": "dev-docs"
},
{
  "command": "devdocs.generateContext",
  "title": "Generate Context",
  "category": "dev-docs"
},
{
  "command": "devdocs.generateMultiContext",
  "title": "Generate Context for Multiple Documents",
  "category": "dev-docs"
}
```

## Step 3: Implement Command Descriptions

1. Open `/src/extension.ts`
2. Find the corresponding command implementations

Example for `generateDocumentation`:

```typescript
let autoGenerateCommand = vscode.commands.registerCommand(
  'devdocs.generateDocumentation',
  async () => {
    await autoGenerate()
  }
)
```

## Step 4: Create Docusaurus Page

1. Create a new file in your Docusaurus `docs` folder: `vscode-commands.md`
2. Add the following content:

```markdown
# Dev-Docs VSCode Commands

This page lists the most helpful VSCode commands for generating documentation using Dev-Docs.

## Generate Documentation

Command: `devdocs.generateDocumentation`

Generates documentation for the current file or selected code.

## Generate API Documentation

Command: `devdocs.generateAPIDocumentation`

Generates API configuration and documentation.

## Generate Context

Command: `devdocs.generateContext`

Generates context for the current file or selected code.

## Generate Multi-Context

Command: `devdocs.generateMultiContext`

Generates context for multiple documents.

To use these commands, open the command palette (Cmd+Shift+P on Mac, Ctrl+Shift+P on Windows/Linux) and type the command name.
```



  