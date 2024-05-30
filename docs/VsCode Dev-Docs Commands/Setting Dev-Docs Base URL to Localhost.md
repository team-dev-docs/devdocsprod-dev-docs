
  
  # **Setting Up Dev-Docs Base URL**

The command `devdocs.setLocal` is used to set the base URL for the Dev-Docs extension to `http://localhost:3000`. This command is helpful when you want to run the Dev-Docs application locally on your machine during development or testing.

## What does this Vs Code Extension Command do?

The `devdocs.setLocal` command sets the base URL for the Dev-Docs extension to `http://localhost:3000`. This URL is used by the extension to communicate with the Dev-Docs application running locally on your machine.

## Why should I use this Vs Code Extension Command?

You should use this command when you want to work with the Dev-Docs application running locally on your machine. This is particularly useful during development or testing phases, as you can make changes to the application and immediately see the effects without having to deploy to a remote server.

By setting the base URL to `http://localhost:3000`, you can easily interact with the local instance of the Dev-Docs application from within Visual Studio Code.

## What are relevant configuration Options in the `dev-docs.json`?

The `dev-docs.json` configuration file does not seem to have a specific option for setting the base URL. However, you can use the `storageManager` API provided by the Dev-Docs extension to set the base URL programmatically.

## Example JSON of relevant Dev-Docs.json options

Since there is no specific configuration option for setting the base URL in the `dev-docs.json` file, you can omit this section.

## Prerequisites

Before using the `devdocs.setLocal` command, you need to ensure that the Dev-Docs application is running locally on your machine and listening on `http://localhost:3000`.

## How do I use this Vs Code Extension Command?

To use the `devdocs.setLocal` command, follow these steps:

1. Open Visual Studio Code.
2. Ensure that the Dev-Docs application is running locally on your machine and listening on `http://localhost:3000`.
3. In Visual Studio Code, press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette.
4. Start typing "Dev-Docs" and select the "Set Url to local" command from the list.
5. The base URL for the Dev-Docs extension will be set to `http://localhost:3000`.

Alternatively, you can also set the base URL programmatically by using the `storageManager` API provided by the Dev-Docs extension. In your extension code, you can call `storageManager.setValue('baseUrl', 'http://localhost:3000')` to set the base URL to `http://localhost:3000`.

By setting the base URL to `http://localhost:3000`, you can seamlessly interact with the Dev-Docs application running locally on your machine from within Visual Studio Code. This allows you to test and develop new features, fix bugs, or experiment with the application without the need for deploying to a remote server.
  
  