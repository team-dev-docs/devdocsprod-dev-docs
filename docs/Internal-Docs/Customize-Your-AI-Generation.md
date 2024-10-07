

  ---
sidebar_position: 5
---

# Customize Your AI Generation

## Step 1: Sign into Dev-Docs in VS Code

In your VS Code Editor, click on the Dev-Docs button.

![](/img/customize_your_ai_generation/step_1.png)


Click on the **Sign In** button.

![](/img/customize_your_ai_generation/step_2.png)

## Step 2: Select Your Org

From the dropdown select your org.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_8.png)


## Step 3: `dev-docs.json`

Find your `dev-docs.json` file.
![](/img/customize_your_ai_generation/step_5.png)

## Step 4: Customize the JSON

Now we are going to make your Dev-Docs JSON look similar to the one in the step above. The goal is to have the AI answer custom questions and prompts on our code. Replace your JSON with the JSON below:

```json

{
    "quickDoc": {
        "acceptedExtensions": [".js", ".py", ".ts", ".jsx", ".tsx"],
        "variablesAndFunctions": {
            "prompts": [
                {
                    "question": "Is this a function, class, or variable",
                    "title": "Code Type",
                    "documentation": ""
                },
                {
                    "question": "Is this code written well? If so, why?",
                    "title": "Quality of Code",
                    "documentation": ""
                },
                {
                    "question": "What are the potential improvements for this code?",
                    "title": "Improvement Suggestions",
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

You can customize the questions you want the AI to answer about your code by adjusting the questions in the JSON or adding new ones. The title can be thought of as a header within your documentation. Here you can also set the AI to run every time you save by keeping the "onSave" prompt as true. Alternatively, you can turn the auto-generate on save feature off by setting the "onSave" prompt to false.

## Step 5: Run the AI on Code File of Choice

Make sure you are signed in and then select the file you wish to be documented. From there, open the command palette, search and select **dev-docs: generate documentation** or run <code>shift command d</code>.
![](/img/Onboarding/generate_documentation_with_ai/step_5.png)

## Step 6: Review and Refine

After the AI generates the documentation, review it for accuracy and completeness. You may need to make minor adjustments or add additional context that the AI might have missed. This step ensures that the generated documentation aligns with your project's standards and provides valuable insights to your team members.

  