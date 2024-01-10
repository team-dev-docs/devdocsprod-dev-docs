
  
   ## What does this Vs Code Extension Command do?

The `devdocs.generateMultiContext` command generates high-level context for multiple files in the workspace. It does this by extracting the title of each file and using that as the context for the file. If a context document already exists for the file, the command will extract the high-level context from the document and add it to the context string. If a context document does not exist for the file, the command will generate a new context document using the code in the file.

## Why should I use this Vs Code Extension Command?

The `devdocs.generateMultiContext` command can be useful for quickly generating context for multiple files in a workspace. This can be helpful for creating documentation for a new project or for updating documentation for an existing project.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options are relevant to the `devdocs.generateMultiContext` command:

* `devdocs.context.includeCode`: This option controls whether or not code should be included in the context document. The default value is `true`.
* `devdocs.context.includeComments`: This option controls whether or not comments should be included in the context document. The default value is `true`.
* `devdocs.context.includeLinks`: This option controls whether or not links should be included in the context document. The default value is `true`.

## Prequsites

To use the `devdocs.generateMultiContext` command, you must have the following installed:

* The Visual Studio Code extension for DevDocs
* A DevDocs account

## How do I use this Vs Code Extension Command?

To use the `devdocs.generateMultiContext` command, follow these steps:

1. Open the Visual Studio Code extension for DevDocs.
2. Click on the **Generate Context** button.
3. Select the files for which you want to generate context.
4. Click on the **Generate** button.

The command will generate context for the selected files and save the context documents to the workspace.
  
  