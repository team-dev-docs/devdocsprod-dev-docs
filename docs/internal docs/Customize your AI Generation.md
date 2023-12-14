---
sidebar_position: 5
---




# Customize your AI Generation

## Step 1:

In your VsCode Editor, click on the Dev-Docs button.

![](/img/customize_your_ai_generation/step_1.png)


- In your VsCode Editor, click on the "Sign In" button.

![](/img/customize_your_ai_generation/step_2.png)

## Step 2

From the dropdown select your org

![](/img/customize_your_ai_generation/step_3.png)



## Step 3

Find your `dev-docs.json` file.
![](/img/customize_your_ai_generation/step_5.png)

## Step 4

Now we are going to make dev-docs JSON look similar to the one in the step above.  The goal is have the AI answer custom questions and prompts on our code.  Replace your JSON with JSON below:

```json

{
    "quickDoc": {
        "acceptedExtensions": [".js", ".py"],
        "variablesAndFunctions": {
            "prompts": [
                {
                    "question": "Is this a function, class, or variable",
                    "title": "Code Type",
                    "documentation": ""
                },
                {
                    "question": "Is this code written well?  if so Why?",
                    "title": "Quality of Code",
                    "documentation": ""
                }
            ]
        }
    },
    "ai": {
        "onSave": true
    }
}

```


## Step 5

Open the command palette and click on the text that says: dev-docs: generate documentation or run <code>shift command d</code>
![](/img/generate_documentation_with_ai/step_5.png)

## Step 6

Wait a couple minutes and find the corresponding Dev-Docs markdown file to check if documentation was generated.

![](/img/customize_your_ai_generation/step_13.png)


