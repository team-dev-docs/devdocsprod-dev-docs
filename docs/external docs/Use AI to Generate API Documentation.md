

# Use AI to Generate API Documentation

## Step 1: Sign into Dev-Docs in VS Code

In your VS Code Editor, click on the Dev-Docs button.
![](/img/use_ai_to_generate_api_documentation/step_1.png)

Click the **Sign In** button and select your org from the drop down. 
![](/img/use_ai_to_generate_api_documentation/step_2.png)
![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_8.png)

## Step 2: Find `dev-docs.json`

Find or create your `dev-docs.json`, it should be at the root of your VS Code workspace.
![](/img/use_ai_to_generate_api_documentation/step_9.png)

## Step 3: Edit `dev-docs.json`

Edit this JSON to add the `ai` object with the `API` key set to true. Look at this code for reference

```json

{
     "ai": {
        "onSave": false,
        "API": true
    },
}

```

## Step 4: 

In your VS Code Editor, find a code file with visbible API Routes.

![](/img/use_ai_to_generate_api_documentation/step_12.png)

## Step 5

In your VS Code Editor, find the text "from django.http import HttpResponse" and click on it.
![](/img/use_ai_to_generate_api_documentation/step_13.png)

## Step 6

In your VsCode Editor, find the text `dev-docs.json` and click on it. And hit `shift command a` to generate API Documentation
![](/img/use_ai_to_generate_api_documentation/step_15.png)

After a couple of minutes you should see two files create `dev-docs-collection.json` and the `dev-docs-openapi-collection.yaml`.


### **Post Collection**
![](/img/use_ai_to_generate_api_documentation/step_20.png)


### **Openapi Yaml**
![](/img/use_ai_to_generate_api_documentation/step_22.png)


