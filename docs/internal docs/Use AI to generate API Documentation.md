# Use AI to generate API Documentation

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

In your VS Code Editor, find a code file with visible API Routes.  Then run <code>shift command a</code>

![](/img/use_ai_to_generate_api_documentation/step_13.png)

## Step 4:  Check the Config

After a couple of minutes you should see two files create `dev-docs-collection.json` and the `dev-docs-openapi-collection.yaml`.

**Post Collection**

![](/img/use_ai_to_generate_api_documentation/step_20.png)


**Openapi Yaml**
![](/img/use_ai_to_generate_api_documentation/step_22.png)
