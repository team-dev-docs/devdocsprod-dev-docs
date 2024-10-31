---
sidebar_position: 2
---


# Quickstart

See Dev-Docs in action in just a under five minutes! First, you'll need an account. If you haven't made one yet, head to [dev-docs.io](https://www.dev-docs.io/) to create a free account in just a few clicks by logging in with your GitHub (no cc required). If you already have one then you're ready to go! Woohoo! 

<br></br>

To get started, open our hello world repo that has a sample `dev-docs.json` file already configured.

<br></br>

[Open our sample repo in GitHub Codespaces](https://codespaces.new/team-dev-docs/spriteAI)

<br></br>

Once open follow these steps.

## Get Dev-Docs Extension Setup

### Step 1: Install the Extension

Search for Dev-Docs in the extensions tab and install it.

![](/img/install_the_vscode_extension/step_4.png)

### Step 2: Sign into Dev-Docs in VS Code

Click on the Dev-Docs extension button in your GitHub Codespace or VS Code Editor. Select sign in and then follow the steps to select the org you created when you set up your account. 

## Create Onboarding Docs on a codefile

![](/img/customize_your_ai_generation/step_1.png)

### Step 1: Open the index.js file

Open the `index.js` file.

![This is the image for DIV with the text: index.js and then clicked](/img/devdocs_quickstart/step_2.png)

### Step 2: Generate Documentation

Right click on `index.js` and find the `dev-docs` submenu and click `generate documentation`.

![This is the image for DIV with the text:  and then clicked](/img/devdocs_quickstart/step_3.png)

### Step 3: Open up the documentation 

Wait for the documentation to generate, and then right click to open the context menu and click `Open Dev-doc for current file`.  Boom! You are done. What you're seeing is our VS Code extension rich text editor allowing you to view and edit the content directly from your IDE and next to the codebase. The output gets stored as a markdown file in the automatically created dev-docs folder in your repo. 

![Open Dev-doc and then clicked](/img/devdocs_quickstart/step_4.png)

<br></br>

## Generate user-facing documentation

### Step 1: Click on the 'dev-docs: Populate External Docs' option to generate user-facing content for your public docs

Open the command palette with `shift cmd P`, and find/click on the 'dev-docs: Populate External Docs' option.

![This is the image for SPAN with the text: dev-docs: Populate External Docs and then clicked](/img/devdocs_quickstart/step_5.png)

## How it works

This codebase has the `dev-docs.json` preconfigured to filter out specific aspects of the codebase to documentation as well as custom options to augment/customize the documentation. When using Dev-Docs, you'll always have full control over what gets documented, what format you want it in, and where the output gets pushed to. Of course, you have final editing powers as well.
  
  
