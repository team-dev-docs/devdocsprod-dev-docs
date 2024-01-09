---
sidebar_position: 5
---





# Customize your AI Generation

## Step 1: Sign into Dev-Docs in VS Code

In your VS Code Editor, click on the Dev-Docs button.

![](/img/customize_your_ai_generation/step_1.png)


Click on the "Sign In" button.

![](/img/customize_your_ai_generation/step_2.png)

## Step 2: Select Your Org

From the dropdown select your org

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_8.png)


## Step 3: `dev-docs.json`

Find your `dev-docs.json` file.
![](/img/customize_your_ai_generation/step_5.png)

## Step 4: Customize the JSON

Now we are going to make  the dev-docs JSON look similar to the one in the step above. The goal is to have the AI answer custom questions and prompts on our code. Replace your JSON with JSON below:

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

## Step 5: Run the AI on Code File of Choice

Select the file you wish to be documented. From there, open the command palette, search and select dev-docs: generate documentation or run <code>shift command d</code>
![](/img/generate_documentation_with_ai/step_5.png)

## Step 6: Review the AI Generated Documentation

Wait a couple minutes and find the corresponding Dev-Docs markdown file to check if documentation was generated.

![](/img/customize_your_ai_generation/step_13.png)


