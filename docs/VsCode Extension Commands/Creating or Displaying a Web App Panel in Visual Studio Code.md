
  
   # **Create or Show Web App Panel**

## What does this Vs Code Extension Command do?

The `createOrShow` command creates or shows a web app panel in Visual Studio Code. The web app panel is a floating window that can be used to display any type of content, such as HTML, CSS, and JavaScript.

## Why should I use this Vs Code Extension Command?

The `createOrShow` command can be used to display a variety of information to users, such as:

* Help and documentation
* Tutorials and guides
* Interactive demos
* Live data visualizations

## What are relevant configuration Options in the `dev-docs.json`?

The following configuration options are relevant to the `createOrShow` command:

* `dev-docs.webAppPanel.uri`: The URI of the web app panel to be created or shown.
* `dev-docs.webAppPanel.title`: The title of the web app panel.
* `dev-docs.webAppPanel.width`: The width of the web app panel in pixels.
* `dev-docs.webAppPanel.height`: The height of the web app panel in pixels.

## Prequsites

Before using the `createOrShow` command, you must first install the `dev-docs` extension for Visual Studio Code.

## How do I use this Vs Code Extension Command?

To use the `createOrShow` command, simply call the `WebAppPanel.createOrShow` method with the following arguments:

* `context`: The extension context.
* `uri`: The URI of the web app panel to be created or shown.

The following code sample shows how to use the `createOrShow` command:

```typescript
async () => {
  // Create or show a web app panel with the specified URI.
  await WebAppPanel.createOrShow(context.extensionUri)

  // Get the current webview panel.
  let webview = WebAppPanel.currentPanel

  // Return the webview panel.
  return webview
}
```
  
  