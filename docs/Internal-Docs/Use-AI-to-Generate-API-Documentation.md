

  # Use AI to generate API documentation

## Step 1: Sign in

In your VS Code Editor, click on the Dev-Docs Icon on the left sidebar.
![](/img/use_ai_to_generate_api_documentation/step_1.png)
Find and click the **Sign In** button.

![](/img/use_ai_to_generate_api_documentation/step_2.png)

### In your VS Code Editor

Select your org from the dropdown.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_8.png)


## Step 2: Edit your dev-docs.json

Find or create your `dev-docs.json` file, which should be at the root of your VS Code workspace. Here we are going to add AI functionality
by editing this JSON to add the `ai` object with the `API` key set to true. Look at this code for reference:

```json
{
     "ai": {
        "onSave": false,
        "API": true
    },
}
```

## Step 3: Generate the API config

In your VS Code Editor, find a code file with visible API routes. Then run <code>shift command a</code> to initiate the API documentation generation process.

![](/img/use_ai_to_generate_api_documentation/step_13.png)

## Step 4: Check the config

After a couple of minutes, you should see two files created: `dev-docs-collection.json` and `dev-docs-openapi-collection.yaml`.

**Post Collection**

![](/img/use_ai_to_generate_api_documentation/step_20.png)


**OpenAPI YAML**
![](/img/use_ai_to_generate_api_documentation/step_22.png)

## Step 5: Review and refine

Once the AI has generated the initial API documentation, take some time to review the output. Check for accuracy and completeness, and make any necessary adjustments. The AI-generated content serves as a great starting point, but human oversight ensures the documentation meets your specific needs and standards.

## Step 6: Integrate with your existing documentation

After reviewing and refining the AI-generated API documentation, integrate it with your existing documentation system. This may involve copying the content into your preferred documentation tool or using the generated files directly in your project.

Remember to keep your API documentation up-to-date as your project evolves. Regularly run the AI generation process to capture any changes and additions to your API routes.

  