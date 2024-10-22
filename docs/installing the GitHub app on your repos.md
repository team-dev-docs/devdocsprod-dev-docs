

  ## Step 1: Initiate GitHub Login

Click on the "Login with GitHub" button to begin the authentication process.

![This is the image for BUTTON with the text:  Login with GitHub  and then clicked](/img/installing_the_github_app_on_your_repos/step_3.png)
## Step 2: Start the Onboarding Journey

On the Dev-Docs dashboard, locate and click on the "Start effortlessly generating documentation" section.

![This is the image for DIV with the text: Start effortlessly generating documentationYour onboarding journey and then clicked](/img/installing_the_github_app_on_your_repos/step_4.png)
## Step 3: Begin GitHub App Setup

Click on the "Get started" button to initiate the GitHub App setup process.

![This is the image for BUTTON with the text: Get started and then clicked](/img/installing_the_github_app_on_your_repos/step_5.png)
## Step 4: Review GitHub App Details

Review the information about setting up the Dev-Docs GitHub App and the GitHub Action options.

![This is the image for DIV with the text: Setup the Dev-Docs GitHub AppOne minute, one click set up to make using Dev-Docs with your GitHub a breezeInstall Github AppORSetup a GitHub ActionUse the Github Action to generate documentation from your CI/CDGenerate a Dev-Docs API KeyDev-Docs API KeyYou have one API Key in useReplace and create new API KeyCopy The Github Actions Code to add To Your RepoGenerate Internal DocsAudit ContentGenerate new docsCreate IssuesGenerate Internal DocsCopy  name: Generate Internal Docs on: push: branches: - main paths: - '**/*.js' jobs: dev-docs-app: runs-on: ubuntu-latest steps: - name: Checkout Repository uses: actions/checkout@v2 - name: Send Update to DevDocs run: | TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ") API_KEY=${{ secrets.API_KEY }} REPO_GH_PAT=${{secrets.REPO_GH_PAT}} GITHUB_REPOSITORY="${{ github.repository }}" GITHUB_ACTOR="${{ github.actor }}" curl -X POST -H "Content-Type: application/json" \ -H "X-API-KEY: $API_KEY"                -d '{"apiKey": "'$API_KEY'", "repo_gh_pat": "'$REPO_GH_PAT'", "timestamp": "'$TIMESTAMP'", "githubRepository": "'$GITHUB_REPOSITORY'", "githubActor": "'$GITHUB_ACTOR'"}' \ "https://api.devdocsapp.com/company/coolguy/generate_internal_docs" env: API_KEY: ${{ secrets.API_KEY }} REPO_GH_PATH: ${{ secrets.REPO_GH_PATH}}  Audit ContentCopy  name: Generate Internal Docs on: push: branches: - main paths: - '**/*.js' jobs: dev-docs-app: runs-on: ubuntu-latest steps: - name: Checkout Repository uses: actions/checkout@v2 - name: Send Update to DevDocs run: | TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ") API_KEY=${{ secrets.API_KEY }} REPO_GH_PAT=${{secrets.REPO_GH_PAT}} GITHUB_REPOSITORY="${{ github.repository }}" GITHUB_ACTOR="${{ github.actor }}" curl -X POST -H "Content-Type: application/json" \ -H "X-API-KEY: $API_KEY"                -d '{"apiKey": "'$API_KEY'", "repo_gh_pat": "'$REPO_GH_PAT'", "timestamp": "'$TIMESTAMP'", "githubRepository": "'$GITHUB_REPOSITORY'", "githubActor": "'$GITHUB_ACTOR'"}' \ "https://api.devdocsapp.com/company/coolguy/generate_internal_docs" env: API_KEY: ${{ secrets.API_KEY }} REPO_GH_PATH: ${{ secrets.REPO_GH_PATH}}  Generate new docsCopy  name: Generate Internal Docs on: push: branches: - main paths: - '**/*.js' jobs: dev-docs-app: runs-on: ubuntu-latest steps: - name: Checkout Repository uses: actions/checkout@v2 - name: Send Update to DevDocs run: | TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ") API_KEY=${{ secrets.API_KEY }} REPO_GH_PAT=${{secrets.REPO_GH_PAT}} GITHUB_REPOSITORY="${{ github.repository }}" GITHUB_ACTOR="${{ github.actor }}" curl -X POST -H "Content-Type: application/json" \ -H "X-API-KEY: $API_KEY"                -d '{"apiKey": "'$API_KEY'", "repo_gh_pat": "'$REPO_GH_PAT'", "timestamp": "'$TIMESTAMP'", "githubRepository": "'$GITHUB_REPOSITORY'", "githubActor": "'$GITHUB_ACTOR'"}' \ "https://api.devdocsapp.com/company/coolguy/generate_internal_docs" env: API_KEY: ${{ secrets.API_KEY }} REPO_GH_PATH: ${{ secrets.REPO_GH_PATH}}  Create IssuesCopy  name: Generate Internal Docs on: push: branches: - main paths: - '**/*.js' jobs: dev-docs-app: runs-on: ubuntu-latest steps: - name: Checkout Repository uses: actions/checkout@v2 - name: Send Update to DevDocs run: | TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ") API_KEY=${{ secrets.API_KEY }} REPO_GH_PAT=${{secrets.REPO_GH_PAT}} GITHUB_REPOSITORY="${{ github.repository }}" GITHUB_ACTOR="${{ github.actor }}" curl -X POST -H "Content-Type: application/json" \ -H "X-API-KEY: $API_KEY"                -d '{"apiKey": "'$API_KEY'", "repo_gh_pat": "'$REPO_GH_PAT'", "timestamp": "'$TIMESTAMP'", "githubRepository": "'$GITHUB_REPOSITORY'", "githubActor": "'$GITHUB_ACTOR'"}' \ "https://api.devdocsapp.com/company/coolguy/generate_internal_docs" env: API_KEY: ${{ secrets.API_KEY }} REPO_GH_PATH: ${{ secrets.REPO_GH_PATH}}  and then clicked](/img/installing_the_github_app_on_your_repos/step_6.png)

## Step 6: Configure GitHub App

On the GitHub App page, click the "Configure" button to set up the app for your repositories.

![This is the image for SPAN with the text: Configure and then clicked](/img/installing_the_github_app_on_your_repos/step_8.png)
## Step 7: Select GitHub Account

Choose the GitHub account where you want to install the Dev-Docs GitHub App.

![This is the image for A with the text:    docstestingdemo and then clicked](/img/installing_the_github_app_on_your_repos/step_9.png)
## Step 8: Review Permissions

Click on the icon to review and confirm the permissions requested by the Dev-Docs GitHub App.

![This is the image for path with the text:  and then clicked](/img/installing_the_github_app_on_your_repos/step_10.png)
## Step 9: Confirm Installation Settings

Review the installation settings, including repository access and permissions, then proceed with the installation.

![This is the image for MAIN with the text:     Install Dev-Docs GitHub App   Install on your personal account docstestingdemo            for these repositories:       All repositories   This applies to all  current and future repositories owned by the resource owner.   Also includes public repositories (read-only).      Only select repositories   Select at least one repository.   Also includes public repositories (read-only).      Select repositories            docstestingdemo/nextra Simple, powerful and flexible site generation framework with everything you love from Next.js.  No repositories found.   Selected 1 repository.   Finish installing to select more than 100 repositories.   Select at least one repository.             docstestingdemo/nextra          with these permissions:      Read access to metadata    Read and write access to code, issues, and pull requests    Install Cancel   Next: you'll be directed to the GitHub App's site to complete setup.   and then clicked](/img/installing_the_github_app_on_your_repos/step_11.png)
## Step 10: Choose Repositories

Select the repositories you want to associate with the Dev-Docs GitHub App.

![This is the image for DETAILS with the text:   Select repositories            docstestingdemo/nextra Simple, powerful and flexible site generation framework with everything you love from Next.js.  No repositories found.  and then clicked](/img/installing_the_github_app_on_your_repos/step_12.png)
## Step 11: Complete Installation

Click the "Installing" button to finalize the GitHub App installation process.

![This is the image for BUTTON with the text: Installing and then clicked](/img/installing_the_github_app_on_your_repos/step_13.png)
## Step 12: Associate Organization with Repository

In the Dev-Docs interface, associate your organization with the selected repository.

![This is the image for DIV with the text: Associate your Org in Dev-Docs to your repo and then clicked](/img/installing_the_github_app_on_your_repos/step_14.png)
## Step 13: Confirm Association

Verify the association between your Dev-Docs organization and the GitHub repository.

![This is the image for DIV with the text: Associate your Org in Dev-Docs to your repo and then clicked](/img/installing_the_github_app_on_your_repos/step_15.png)
## Step 14: Review Final Setup

Review the final setup details for your Dev-Docs GitHub App integration.

![This is the image for DIV with the text: Associate your Org in Dev-Docs to your repodocstestingdemo/nextra coolguy Complete Github App Setup  and then clicked](/img/installing_the_github_app_on_your_repos/step_16.png)
## Step 15: Finish GitHub App Setup

Click the "Complete Github App Setup" button to finalize the installation and setup process.

![This is the image for BUTTON with the text:  Complete Github App Setup  and then clicked](/img/installing_the_github_app_on_your_repos/step_17.png)

  