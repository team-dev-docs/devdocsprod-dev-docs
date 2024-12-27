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

Find or create Your `dev-docs.json`, it should be at the root of your VS Code workspace.  Here we are going to add AI functionality
by editing this JSON to add the `ai` object with the `API` key set to true. Look at this code for reference

```json

{
     "ai": {
        "onSave": false,
        "API": true
    },
}

```

## Step 3: Generate the API Config

In your VS Code Editor, find a code file with visible API Routes. Then use the Dev-Docs AI-powered generation feature by running the command <code>shift command a</code>. This command activates the Dev-Docs AI integration, which will analyze your code and automatically generate API documentation.

![](/img/use_ai_to_generate_api_documentation/step_13.png)

The AI will scan your codebase, identify API endpoints, and create comprehensive documentation based on the structure and comments in your code. This process leverages machine learning to understand your API's structure and generate accurate documentation.

## Step 4:  Check the Generated Config

After the AI completes its analysis (usually within a couple of minutes), you should see two new files created in your workspace:

1. `dev-docs-collection.json`: This file contains a structured representation of your API endpoints, suitable for import into API testing tools like Postman.
2. `dev-docs-openapi-collection.yaml`: This file is an OpenAPI (formerly Swagger) specification of your API, which can be used for both documentation and code generation.

**Post Collection**

![](/img/use_ai_to_generate_api_documentation/step_20.png)

The Post Collection file provides a detailed breakdown of your API endpoints, including request methods, URLs, headers, and example payloads.

**Openapi Yaml**
![](/img/use_ai_to_generate_api_documentation/step_22.png)

The OpenAPI YAML file offers a standardized description of your API, which can be used to generate interactive documentation, client SDKs, and server stubs in various programming languages.

These AI-generated files serve as a starting point for your API documentation. You can further refine and customize them as needed to ensure they accurately represent your API's functionality and meet your project's documentation standards.