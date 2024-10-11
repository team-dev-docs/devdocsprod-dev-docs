---
slug: /VS-Code-Commands/Turn-On-Markdown-Mode
---

# Turn On Markdown Mode

This VS Code extension command allows you to switch to a markdown mode within your code editor, enabling you to write documentation directly within your codebase using the familiar Markdown syntax.

## Why Should I Use This VS Code Extension Command?

Writing documentation alongside your code has several advantages:

1. **Code-Documentation Proximity**: Keeping your documentation close to the code it describes improves maintainability and reduces the likelihood of documentation becoming outdated as the codebase evolves.

2. **Streamlined Workflow**: Instead of switching between different tools or repositories for writing code and documentation, you can handle both tasks within your code editor, providing a more seamless experience.

3. **Version Control**: Since your documentation resides within the same codebase, it can be version-controlled alongside your code, ensuring that changes to the documentation are tracked and can be easily reviewed or reverted if necessary.

## What are relevant configuration Options in the `dev-docs.json`?

The relevant configuration options for enabling the markdown mode in the `dev-docs.json` file are:

- `ai.components.template`: Specifies the path to the markdown file template used for generating documentation.
- `ai.docPath`: Defines the custom path where the generated documentation will be stored.
- `ai.branch`: Specifies the Git branch where the documentation changes will be committed.

## Example JSON of relevant Dev-Docs.json options

```json
{
  "ai": {
    "components": {
      "template": "path/to/markdown/template.md"
    },
    "docPath": "docs/api-reference",
    "branch": "main"
  }
}
```

## Prerequisites

Before using this command, ensure that you have set up the necessary configurations in your `dev-docs.json` file, such as the template file path, documentation path, and Git branch.

## How Do I Use This VS Code Extension Command?

To turn on the markdown mode, follow these steps:

1. Open the Command Palette in VS Code by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
2. Search for and select the "Turn on Markdown Mode" command.
3. You will be prompted with a confirmation message. Select "Yes" to enable the markdown mode.

Once enabled, you can start writing documentation within your code files using Markdown syntax. The documentation will be generated and stored in the specified location, and any changes will be committed to the configured Git branch.

It's important to note that while writing documentation in Markdown provides convenience, it's still essential to maintain clear separation between code and documentation. Follow best practices and keep your documentation concise, relevant, and up-to-date to ensure it remains a valuable asset for your project.
  
  