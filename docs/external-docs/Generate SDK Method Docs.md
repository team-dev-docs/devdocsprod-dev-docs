## Step 1: Edit the dev-docs.json file

Open your project in VS Code and locate the `dev-docs.json` file. Modify it to target functions, folders, or files:

![VS Code interface showing dev-docs.json](/img/generate_sdk_method_docs/step_3.png)

In the image, you can see the `dev-docs.json` file open in the editor. Set the `internalTypeFilters` to include the types you want to document (e.g., `["function", "folder", "file"]`) under the "ai" section.

## Step 2: Configure AI-powered documentation settings

In the `dev-docs.json` file, you can now specify folders or files for documentation generation:

```json
{
  "ai": {
    "folders": ["src/utils", "src/components"],
    "files": ["src/main.ts", "src/config.ts"]
  }
}
```

This allows you to generate documentation for entire folders or specific files in addition to individual functions.

## Step 3: Run the "Populate External Docs" command

Open the VS Code command palette (usually with Ctrl+Shift+P or Cmd+Shift+P). Type and select "Dev-docs: Populate External Docs" from the list of commands.

![VS Code interface showing dev-docs.json](/img/generate_sdk_method_docs/step_5.png)

The AI-powered documentation generator will now process the specified folders, files, and functions based on your configuration.

## Step 4: Check the generated documentation in the GitHub repository

After running the command, navigate to your GitHub repository to view the changes:

![GitHub repository branches page](/img/generate_sdk_method_docs/step_9.png)

Go to the "Branches" section of your repository.
Look for the branch "dev-docs-reference" which will contain the newly generated docs. Review the changes, including the documentation for folders and files, edit as needed, and then merge.

## Step 5: Customize AI-generated documentation

If you need to adjust the AI-generated content, you can modify the prompt templates in the `AiServices.ts` file. This allows you to tailor the documentation style and content to your project's specific needs.