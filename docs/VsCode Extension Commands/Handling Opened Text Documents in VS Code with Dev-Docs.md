
  
   ## Handling Opened Text Documents in VS Code with Dev-Docs

## What does this Vs Code Extension Command do?

The `vscode.workspace.onDidOpenTextDocument` event is fired whenever a text document is opened in the editor. This event handler checks if the opened document is a JavaScript file and if it is, it checks if there is a corresponding Dev-Docs file for it. If there is no Dev-Docs file, it prompts the user to create one.

## Why should I use this Vs Code Extension Command?

This event handler is useful for ensuring that there is a Dev-Docs file for every JavaScript file in the workspace. This makes it easier for developers to find information about the code they are working on.

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options are relevant to this event handler:

* `notifications`: This option controls whether or not the user is prompted to create a Dev-Docs file if one is missing.
* `langs`: This option specifies which languages the event handler should check for.

## Prequsites

To use this event handler, you must have the Dev-Docs extension installed.

## How do I use this Vs Code Extension Command?

To use this event handler, simply add the following code to your extension's `package.json` file:

```json
{
  "activationEvents": [
    "onDidOpenTextDocument"
  ]
}
```

This will cause the event handler to be registered when the extension is activated.
  
  