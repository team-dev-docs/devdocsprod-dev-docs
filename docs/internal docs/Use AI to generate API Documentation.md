# Use AI to generate API Documentation

## Step 1: 

In your VsCode Editor, click on the Dev-Docs button.**
![use_ai_to_generate_api_documentation/step_1](/img/use_ai_to_generate_api_documentation/step_1.png)

### Step 2
In your VsCode Editor, click the **Sign In** button.
![use_ai_to_generate_api_documentation/step_2](/img/use_ai_to_generate_api_documentation/step_2.png)

### Step 3: In your VsCode Editor

- Select your org from the dropdown.
![use_ai_to_generate_api_documentation/step_3](/img/use_ai_to_generate_api_documentation/step_3.png)


## Step 4
Find or create Your `dev-docs.json`, it should be at the root of your VsCode workspace.
![use_ai_to_generate_api_documentation/step_9](/img/use_ai_to_generate_api_documentation/step_9.png)


## Step 5

Add edit this JSON to add the `ai` object with the `API` key set to true.  Look at this code for reference

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

![use_ai_to_generate_api_documentation/step_12](/img/use_ai_to_generate_api_documentation/step_12.png)

## Step 6

In your VsCode Editor, find the text "from django.http import HttpResponse" and click on it.
![use_ai_to_generate_api_documentation/step_13](/img/use_ai_to_generate_api_documentation/step_13.png)

## Step 7

- In your VsCode Editor, find the text "dev-docs.json" and click on it.  And hit `shift command a` to generate API Documentation
![use_ai_to_generate_api_documentation/step_15](/img/use_ai_to_generate_api_documentation/step_15.png)

After a couple of minutes you should see two files create `dev-docs-collection.json` and the `dev-docs-openapi-collection.yaml`.


**Post Collection**
![use_ai_to_generate_api_documentation/step_20](/img/use_ai_to_generate_api_documentation/step_20.png)


**Openapi Yaml**
![use_ai_to_generate_api_documentation/step_22](/img/use_ai_to_generate_api_documentation/step_22.png)
  
  