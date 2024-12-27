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

Find or create Your `dev-docs.json`, it should be at the root of your VS Code workspace. Here we are going to add AI functionality
by editing this JSON to add the `ai` object with the `API` key set to true. Look at this code for reference:

```json
{
     "ai": {
        "onSave": false,
        "API": true
    },
}
```

### Customizing AI Settings

You can further customize the AI-generated documentation by adjusting the following settings in your `dev-docs.json`:

- `"onSave"`: Set to `true` to automatically generate documentation when you save your code files.
- `"language"`: Specify the preferred language for the generated documentation (e.g., "en" for English).
- `"style"`: Choose a documentation style (e.g., "concise" or "detailed").

Example:

```json
{
     "ai": {
        "onSave": true,
        "API": true,
        "language": "en",
        "style": "detailed"
    },
}
```

## Step 3: Generate the API Config

In your VS Code Editor, find a code file with visible API Routes. Then run <code>shift command a</code>

![](/img/use_ai_to_generate_api_documentation/step_13.png)

### Best Practices for AI-Generated Documentation

1. **Review thoroughly**: Always carefully review the AI-generated content for accuracy and completeness.
2. **Provide context**: Ensure your code is well-commented to help the AI generate more accurate documentation.
3. **Iterate**: Generate documentation multiple times and compare results to find the best output.

## Step 4: Check the Config

After a couple of minutes you should see two files create `dev-docs-collection.json` and the `dev-docs-openapi-collection.yaml`.

**Post Collection**

![](/img/use_ai_to_generate_api_documentation/step_20.png)


**Openapi Yaml**
![](/img/use_ai_to_generate_api_documentation/step_22.png)

### Troubleshooting Tips

If you encounter issues with the AI-generated documentation:

1. **Check file permissions**: Ensure VS Code has write access to create the output files.
2. **Verify API visibility**: Make sure your API routes are clearly defined and visible in your code.
3. **Update Dev-Docs extension**: Keep your Dev-Docs extension up-to-date for the latest AI features.

## Step 5: Edit and Refine

After generating the documentation, it's crucial to review and refine the content:

1. **Accuracy check**: Verify that all endpoints, parameters, and responses are correctly documented.
2. **Add examples**: Enhance the documentation with practical usage examples.
3. **Clarify ambiguities**: Provide additional context where the AI-generated content may be unclear.
4. **Consistency**: Ensure naming conventions and terminology are consistent throughout the documentation.

Remember, AI-generated documentation is a starting point. Your expertise in refining and expanding the content is key to creating comprehensive and user-friendly API documentation.