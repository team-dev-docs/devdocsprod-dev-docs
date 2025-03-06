---
sidebar_position: 2
---



# Generate and manage docs with AI

Docs.dev AI can be used to generate new drafts directly from your existing docs and public codebases, as well as to manage your docs as a whole. You can access these advanced features by selecting **AI Tools** in the top right of the editor and selecting the functionality you'd like from the dropdown.

Refer to the guides below to learn how to learn how you can use AI to help you generate and maintain your docs.

## Audit docs

**Audit docs** allows you to have AI scan your existing docs based on any prompt of your choosing. Examples of how to use it include spelling and grammar checks across your docs or making broad sweeping changes across all your docs, such as changing names or links. Follow the steps below to audit your existing docs:

* select **AI tools** in the top right hand corner of the web editor and navigate to **Audit docs** in the drop down menu.

* Select which docs or folders you would like to check against. If you would like for the AI to also check your docs against your codebase, you can select the checkbox. Selecting this will bring the codebases you have connected to the GitHub App into the same drop down menu.

* Add any prompt you choose into the **Describe what you want to audit field**.

* Select **Submit** once you have your prompt ready and let the AI go to work.

When complete, you will see a table of suggested changes when finished. Select which docs you would like it automatically generate. Everything generated here will go back into the web editor so you can edit as you see fit and then push to the GitHub branch of your choosing when ready.

## Analyze docs

The **Analyze docs** feature allows you to analyze the quality of your existing documentation as a whole. Note that this doesn't check against individual docs but instead your entire docs repo. Follow the steps below to analyze your existing docs:

* Select **AI tools** in the top right hand corner of the web editor and navigate to **Analyze docs** in the drop down menu.

* Once selected the AI will go to work and will start to analyze your docs.

When finished you'll see a list of personas that have grades against them. These are the personas that the AI believes your docs are intended to be positioned towards, as well as a grade for how effective they are at speaking to that persona. Below you'll see the AI suggest some docs that it believes will be helpful to add to your docs site to improve the effectiveness for a given persona. Select which files you'd like to generate and let the AI create some drafts for you.

Everything generated here will go back into the web editor so you can edit as you see fit and then push to the GitHub branch of your choosing when ready.

## Generate content

The **Generate content** feature allows you to generate new docs from your existing documentation and other connected codebases. Follow the steps below to generate a new doc:

* Select **AI tools** in the top right hand corner of the web editor and navigate to **Generate content** in the drop down menu.

* Select which docs you would like to use as context.

* (Optional) You can also check the checkbox to use your other connected codebases as context.

* Once you have all your context selected, insert your prompt into the text field and hit submit to get a new doc page.

Everything generated here will go back into the web editor so you can edit as you see fit and then push to the GitHub branch of your choosing when ready.

## Generate docs from code objects

This feature allows you to generate net new docs from code objects in your codebase or SDK. The AI will search your selected codebase for relevant code objects and recommend which it believes should have docs on them. Follow the steps below to generate docs from code objects:

* Select the **AI tools** drop down in the top right hand corner of the web editor and select **Code objects** in the drop down menu. Once selected, go through the drop down menus to select which code files the code object's are defined in and then which files have relevant context (if any) for those code objects. Then enter in which types of objects you would like the AI to search for and suggest docs for. When ready, select **Submit** and the AI will go into the selected codebase(s) to find the relevant objects it believes will be helpful to document.

When finished, you will see a table of suggested docs where you can select which docs you would like to generate. Everything generated here will go back into the web editor so you can edit as you see fit and then push to GitHub when ready.

Note: the files in the drop down menus are from the codebases you connected to our GitHub app. If you do not see the relevant code files you can go into our GitHub App settings within GitHub to connect additional repos.

## Generate complete docs

The Generate complete docs feature is meant for those without any existing documentation footprint. Using this feature will have the AI scan your selected codebase and suggest multiple documentation pages that it believes will help a user leverage your product. You can then select which pages you want it to create. To do this select **AI tools** in the top right hand corner of the web editor and navigate to **Generate complete docs** in the drop down menu. From there, select which codebase you would like to generate docs for and then select **Generate documentation**.

Watch the AI go to work and generate a new set of docs for your project. Once generated, everything generated will go back into the web editor so you can edit as you see fit and then push to the GitHub branch of your choosing when ready.
