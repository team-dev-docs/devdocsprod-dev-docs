# Use AI to generate API Documentation


## Step 1:

In your VsCode Editor, click on the Dev-Docs button.
![](/img/use_ai_to_generate_api_documentation/step_1.png)

### Step 2

In your VsCode Editor, click the **Sign In** button.
![](/img/use_ai_to_generate_api_documentation/step_2.png)

### Step 3: In your VsCode Editor

- Select your org from the dropdown.
![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_8.png)


## Step 4

Find or create Your `dev-docs.json`, it should be at the root of your VsCode workspace.
![](/img/use_ai_to_generate_api_documentation/step_9.png)


## Step 5

Add edit this JSON to add the `ai` object with the `API` key set to true. Look at this code for reference

```json

{
     "ai": {
        "onSave": false,
        "API": true
    },
}

```

## Step 6

In your VsCode Editor, find a code file with visbible API Routes.

![](/img/use_ai_to_generate_api_documentation/step_12.png)

## Step 6

In your VsCode Editor, find the text "from django.http import HttpResponse" and click on it.
![](/img/use_ai_to_generate_api_documentation/step_13.png)

## Step 7

- In your VsCode Editor, find the text "dev-docs.json" and click on it. And hit `shift command a` to generate API Documentation
![](/img/use_ai_to_generate_api_documentation/step_15.png)

After a couple of minutes you should see two files create `dev-docs-collection.json` and the `dev-docs-openapi-collection.yaml`.


**Post Collection**
![](/img/use_ai_to_generate_api_documentation/step_20.png)


**Openapi Yaml**
![](/img/use_ai_to_generate_api_documentation/step_22.png)


