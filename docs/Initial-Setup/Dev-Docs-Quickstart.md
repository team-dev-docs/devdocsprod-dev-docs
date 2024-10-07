

  ---
sidebar_position: 2
---

# Dev-Docs Quickstart

See Dev-Docs in action! The quickstart requires that you have an account. If you haven't made one yet, see [Create an Account and Org](https://www.dev-docs.dev/docs/Initial-Setup/Create-an-Account-and-Org). If you have then you're ready to go!

<br></br>

To get started open our hello world repo that has a sample `dev-docs.json` file already configured.

<br></br>

[Open and Run in GitHub Codespaces](https://codespaces.new/team-dev-docs/spriteAI)

<br></br>

Once open follow these steps.

## Get Dev-Docs Extension Setup

### Step 1: Install the Extension

Search Dev-Docs and then click install.

![](/img/install_the_vscode_extension/step_4.png)

### Step 2: Sign into Dev-Docs in VS Code

Click on the Dev-Docs extension button in your Github Codespace or VS Code Editor. Select sign in and then follow the steps to select the org you created when you set up your account. 

## Create Onboarding Documentation on a codefile

![](/img/customize_your_ai_generation/step_1.png)

### Step 1: Open the index.js file

Click on the `index.js` file to open it.

![This is the image for DIV with the text: index.js and then clicked](/img/devdocs_quickstart/step_2.png)

### Step 2: Generate Documentation

Right click on `index.js` and find the `dev-docs` submenu and click `generate documentation`.

![This is the image for DIV with the text:  and then clicked](/img/devdocs_quickstart/step_3.png)

### Step 3: Wait and Open your documentation on Your Codefile

Wait for the documentation to generate, and then right click to open the context menu and click `Open Dev-doc for current file`.  And you are done with Onboarding Documentation

![Open Dev-doc and then clicked](/img/devdocs_quickstart/step_4.png)

<br></br>

## Generate User-facing Documentation Site

### Step 1: Click on the 'dev-docs: Populate External Docs' option to generate User-facing SDK Documentation

Open the command palette with `shift cmd P`, and find/click on the 'dev-docs: Populate External Docs' option.

![This is the image for SPAN with the text: dev-docs: Populate External Docs and then clicked](/img/devdocs_quickstart/step_5.png)

### Step 2: Review and Customize User-facing Documentation

After generating the user-facing documentation, take some time to review and customize it. You can add additional explanations, examples, or use cases to make it more helpful for your users.

## How it works

The `dev-docs.json` file in this repo is preconfigured to filter out specific aspects of the codebase for documentation as well as custom options to augment/customize the documentation. This allows you to:

1. Generate comprehensive onboarding documentation for your development team
2. Create user-friendly, external-facing documentation for your SDK or API
3. Customize the documentation output based on your project's specific needs

By leveraging Dev-Docs, you can maintain up-to-date documentation that evolves with your codebase, ensuring both your internal team and external users always have access to accurate and helpful information.

  