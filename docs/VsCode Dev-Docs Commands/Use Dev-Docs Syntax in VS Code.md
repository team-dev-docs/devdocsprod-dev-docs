
  
  # **Use Dev-Docs Syntax**

**What does this VS Code Extension Command do?**
The `devdocs.turnToExternalMarkdown` command allows you to wrap your current Markdown file with a code block that enables the Dev-Docs syntax for rendering external documentation. It adds the following lines to the beginning and end of your Markdown file:

```markdown
````markdown

````

<Parser />
```

**Why should I use this VS Code Extension Command?**
This command is useful when you want to generate external documentation for your project using the Dev-Docs extension. By enabling the Dev-Docs syntax, you can leverage the extension's features to create and maintain documentation more efficiently. The `<Parser />` component allows the extension to parse and render the Markdown content as external documentation, which can be hosted and shared with your team or users.

**What are relevant configuration Options in the `dev-docs.json`?**
The `dev-docs.json` configuration file contains several options that are relevant to generating external documentation. Here are some key options:

- `ai.components.template`: Specifies the path to the Markdown template file used for rendering external documentation.
- `ai.docPath`: Defines the custom path where the generated documentation will be stored.
- `ai.branch`: Specifies the Git branch where the documentation will be committed and pushed.
- `ai.mappings`: An array of objects that map files or folders to specific directories in the documentation repository or cloud storage.

**Example JSON of relevant Dev-Docs.json options**
```json
{
  "ai": {
    "components": {
      "template": "docs/template.md"
    },
    "docPath": "docs/api-reference",
    "branch": "main",
    "mappings": [
      {
        "files": ["src/main.ts"],
        "cloudDir": "Getting Started"
      },
      {
        "folder": ["src/components"],
        "cloudDir": "Components"
      }
    ]
  }
}
```

**Prerequisites**
Before using the `devdocs.turnToExternalMarkdown` command, make sure you have the following prerequisites:

1. The Dev-Docs extension is installed and configured correctly in your VS Code workspace.
2. You have a Markdown file open in the editor.
3. Your project is set up for generating external documentation (e.g., configured the `dev-docs.json` file, connected to a documentation repository or cloud storage).

**How do I use this VS Code Extension Command?**
To use the `devdocs.turnToExternalMarkdown` command, follow these steps:

1. Open a Markdown file in VS Code.
2. From the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`), search for "Use Dev-Docs Syntax" and select the command.
3. The command will wrap your Markdown content with the necessary code block and add the `<Parser />` component.
4. Save the file.
5. You can now use other Dev-Docs commands or features to generate and manage external documentation based on this Markdown file.

**Why and How**
By using the `devdocs.turnToExternalMarkdown` command, you are preparing your Markdown file to be processed by the Dev-Docs extension for generating external documentation. The added code block and `<Parser />` component allow the extension to parse and render the Markdown content according to the specified configuration options.

This command simplifies the process of setting up your Markdown files for external documentation generation. Instead of manually adding the necessary markup, you can use this command to ensure that your Markdown files are properly formatted and ready to be processed by the Dev-Docs extension.

Once your Markdown file is wrapped with the Dev-Docs syntax, you can leverage other commands or features provided by the extension to generate, update, and manage your external documentation. This might include commands for committing and pushing changes to a documentation repository, generating documentation from code files or API specifications, or creating a structured documentation website or portal.
  
  