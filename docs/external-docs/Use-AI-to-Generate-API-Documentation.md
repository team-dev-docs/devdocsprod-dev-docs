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

## Step 3: Generate the API Config

In your VS Code Editor, find a code file with visible API Routes. Then run <code>shift command a</code> to initiate the AI-powered API documentation generation process.

![](/img/use_ai_to_generate_api_documentation/step_13.png)

The extension will analyze your codebase and identify all API routes across multiple files. It uses advanced AI techniques to understand the structure and purpose of each route.

## Step 4: Check the Generated Documentation

After a couple of minutes, you should see two files created:

1. `dev-docs-collection.json`: This file contains a Postman-like collection of your API routes.
2. `dev-docs-openapi-collection.yaml`: This file is an OpenAPI (formerly Swagger) specification of your API.

**Postman Collection**

The `dev-docs-collection.json` file provides a structured representation of your API endpoints, including details such as HTTP methods, request parameters, and example responses.

![](/img/use_ai_to_generate_api_documentation/step_20.png)

**OpenAPI Specification**

The `dev-docs-openapi-collection.yaml` file is a machine-readable API description that follows the OpenAPI Specification. This format is widely used for documenting RESTful APIs and can be easily consumed by various API documentation tools.

![](/img/use_ai_to_generate_api_documentation/step_22.png)

## Step 5: Review and Refine

Take some time to review the generated documentation. The AI-powered system aims to provide accurate descriptions and examples, but it's always a good idea to verify the content and make any necessary adjustments.

You can use these generated files to:
- Import the Postman collection into Postman for easy API testing
- Use the OpenAPI specification to generate interactive API documentation using tools like Swagger UI
- Share the documentation with your team or integrate it into your development workflow

Remember, as you make changes to your API, you can re-run the documentation generation process to keep your documentation up-to-date.