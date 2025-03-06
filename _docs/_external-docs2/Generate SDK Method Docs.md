
## Step 1: Edit the dev-docs.json file

Open your project in VS Code and locate the `dev-docs.json` file. Modify it to target only functions:

![VS Code interface showing dev-docs.json](/img/generate_sdk_method_docs/step_3.png)

In the image, you can see the `dev-docs.json` file open in the editor. Make sure to set the `internalTypeFilters` to `["function"]` or whatever you want to document under the "ai" section.
## Step 2: Run the "Populate External Docs" command

Open the VS Code command palette (usually with Ctrl+Shift+P or Cmd+Shift+P).  Type and select "Dev-docs: Populate External Docs" from the list of commands.

![VS Code interface showing dev-docs.json](/img/generate_sdk_method_docs/step_5.png)
## Step 3: Check the generated documentation in the GitHub repository

After running the command, navigate to your GitHub repository to view the changes:

![GitHub repository branches page](/img/generate_sdk_method_docs/step_9.png)

Go to the "Branches" section of your repository.
Look for the branch "dev-docs-reference" which might contain the newly generated docs.  Review the changes, edit as you wish and then merge.

  
