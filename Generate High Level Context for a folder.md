# Using the "Generate High Level Context for the Folder" Command

## Overview

The "Generate High Level Context for the Folder" command is a powerful feature in Dev-Docs that allows you to automatically generate high-level documentation for an entire folder in your project. This guide will walk you through how to use this command and customize its behavior using the `dev-docs.json` configuration file.

## Step-by-Step Guidea

### 1. Right-Click on a Folder

In your VS Code file explorer, right-click on the folder you want to document.

### 2. Select the Command

From the context menu, choose "Generate High Level Context for the Folder".

### 3. Wait for Processing

The extension will analyze the folder contents and generate documentation. This may take a moment depending on the folder size and complexity.

### 4. Review Generated Documentation

Once complete, a new Markdown file will be created in your `dev-docs` folder, containing the high-level context for the selected folder.

## Customizing with dev-docs.json

You can customize the behavior of this command by modifying the `dev-docs.json` file in your project root. Here are some key configurations:

### 1. Customizing the Context Prompt

```json
{
  "ai": {
    "contextPrompt": "your_custom_prompt_here"
  }
}
```

This allows you to specify a custom prompt for generating the context. You can also use a Markdown file for more complex prompts:

```json
{
  "ai": {
    "contextPrompt": "dev-docs/prompt.md"
  }
}
```

### 2. Specifying Context Directories

```json
{
  "ai": {
    "contextDirs": ["src", "lib", "utils"]
  }
}
```

This limits the context generation to specific directories, which is useful for large projects.
