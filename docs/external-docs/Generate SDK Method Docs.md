## Why Generate SDK Method Docs?

Generating SDK method documentation is crucial for maintaining up-to-date and accurate references for developers using your library. It ensures that:

1. Users have access to the latest information about function signatures, parameters, and return types.
2. Documentation stays in sync with code changes, reducing confusion and potential errors.
3. Developers can quickly understand and implement your SDK's functionality.

## When to Generate SDK Method Docs

It's recommended to generate SDK method docs:

1. After significant code changes or additions to your SDK.
2. Before releasing a new version of your SDK.
3. As part of your continuous integration process to keep documentation current.

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

## Customizing Output

To customize the generated documentation:

1. Modify the `dev-docs.json` file to include specific formatting or content requirements.
2. Use JSDoc comments in your code to provide additional context and examples.
3. Create custom templates for different types of functions or classes.

## Best Practices for Maintaining Generated Documentation

1. Regularly review and update the generated docs to ensure accuracy.
2. Implement a review process for documentation changes before merging.
3. Use consistent naming conventions and formatting across your codebase and documentation.
4. Encourage team members to contribute to documentation improvements.
5. Set up automated checks to ensure documentation coverage for new code additions.

By following these practices, you can maintain high-quality, up-to-date SDK method documentation that enhances the developer experience and promotes adoption of your SDK.