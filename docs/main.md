
  
  # Dev-Docs VS Code Extension Quick Start Guide

This guide will help you get started with the Dev-Docs VS Code Extension, a powerful tool for creating and managing documentation for your codebase.

## Prerequisites

1. VS Code installed on your machine
2. A Dev-Docs account (If you don't have one, [create an account and org here](https://www.dev-docs.dev/docs/Initial-Setup/Create-an-Account-and-Org))

## Installation

1. Open VS Code
2. Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X)
3. Search for "Dev-Docs"
4. Click Install

## Setup

1. Click on the Dev-Docs extension button in your VS Code Editor
2. Select "Sign In" and follow the steps to authenticate
3. Choose the organization you created during account setup

## Creating Documentation

### For a Single File

1. Open the file you want to document (e.g., `index.js`)
2. Right-click on the file
3. Navigate to the `dev-docs` submenu
4. Click `Generate Documentation`
5. Wait for the documentation to generate
6. Right-click again and select `Open Dev-doc for current file` to view the generated documentation

### For External/Public Documentation

1. Open the Command Palette (Shift+Cmd+P or Ctrl+Shift+P)
2. Search for and select 'dev-docs: Populate External Docs'
3. This will generate public SDK documentation based on your configuration

## Configuration

The extension uses a `dev-docs.json` file in your project root to customize its behavior. This file allows you to:

- Filter specific aspects of your codebase for documentation
- Set custom options to augment and customize the documentation process

## Additional Features

- **AI-Powered Documentation**: The extension can use AI to generate high-quality documentation automatically
- **Batch Documentation**: Generate documentation for multiple files at once
- **API Documentation**: Automatically generate API documentation from your codebase
- **Interactive Tutorials**: Create and distribute interactive coding tutorials

For more detailed information on these features and advanced usage, please refer to the full documentation on the [Dev-Docs website](https://www.dev-docs.dev/).
  
  