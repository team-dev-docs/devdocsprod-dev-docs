

  # Use AI to Generate API Documentation

## Step 1: Sign in

In your VS Code Editor, click on the Dev-Docs Icon on the left sidebar.
![](/img/use_ai_to_generate_api_documentation/step_1.png)
Find and click the **Sign In** button.

![](/img/use_ai_to_generate_api_documentation/step_2.png)

### In your VS Code Editor

Select your org from the dropdown.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_8.png)


## Step 2: Edit Your Dev-Docs.json

Locate or create your `dev-docs.json` file at the root of your VS Code workspace. We'll add AI functionality by editing this JSON to include the `ai` object with the `API` key set to true. Use this code as a reference:

```json
{
     "ai": {
        "onSave": false,
        "API": true
    },
}
```

## Step 3: Generate the API Config

In your VS Code Editor, find a code file containing visible API Routes. Then execute the command <code>shift command a</code>

![](/img/use_ai_to_generate_api_documentation/step_13.png)

## Step 4: Check the Config

After a few minutes, you should see two new files created: `dev-docs-collection.json` and `dev-docs-openapi-collection.yaml`.

**Post Collection**

![](/img/use_ai_to_generate_api_documentation/step_20.png)

**Openapi Yaml**
![](/img/use_ai_to_generate_api_documentation/step_22.png)

## Step 5: Organize Your Documentation

Move your generated API documentation to the `Onboarding-Docs` folder in your repository. This centralized location will make it easier for new team members to find and access important API information during their onboarding process.

## Step 6: Review and Refine

Take some time to review the automatically generated documentation. While AI does an excellent job, it's always good to double-check for accuracy and completeness. Make any necessary adjustments to ensure the documentation aligns with your team's standards and practices.

Remember, well-organized and up-to-date API documentation is crucial for smooth onboarding and efficient development processes.

  