

  # Generate Onboarding Docs at Github Commit

## Step 1: Navigate to the Actions tab

On your repo's page click on the "Actions" tab to open the Actions page.


![](/img/generate_onboarding_docs_at_github_commit/step_1.png)


## Step 2: Click New Workflow Button

On the Actions page, click the "New workflow" button to begin creating a new workflow.


![](/img/generate_onboarding_docs_at_github_commit/step_2.png)

## Step 3: Click on "set up a workflow yourself" link

On the "Actions" page, click on the "set up a workflow yourself" link to create a new workflow.


![](/img/generate_onboarding_docs_at_github_commit/step_3.png)


## Step 4: Enter a File Name

In the file name text box, type the name for your file. For example, "gen_onboarding_docs.yml".


![](/img/generate_onboarding_docs_at_github_commit/step_6.png)


## Step 5: Copy and paste the this Github actions code

```

name: Gen Onboarding Docs
on:
  push:
    branches:
      - main
    paths:
      - '/*.js'
jobs:
  dev-docs-app:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2
      - name: Send Update to DevDocs
        run: |
          TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
          API_KEY=${{ secrets.API_KEY }}
          REPO_GH_PAT=${{secrets.REPO_GH_PAT}}
          GITHUB_REPOSITORY="${{ github.repository }}"
          GITHUB_ACTOR="${{ github.actor }}"
          curl -X POST -H "Content-Type: application/json" \
               -H "X-API-KEY: $API_KEY" \
               -d '{"apiKey": "'$API_KEY'", "repo_gh_pat": "'$REPO_GH_PAT'", "timestamp": "'$TIMESTAMP'", "githubRepository": "'$GITHUB_REPOSITORY'", "githubActor": "'$GITHUB_ACTOR'"}' \
               "${{ secrets.GENERATE_ENDPOINT_URL }}"
        env:
          API_KEY: ${{ secrets.API_KEY }}

```

![](/img/generate_onboarding_docs_at_github_commit/step_9.png)


## Step 6: Click on Commit changes button

Click on the "Commit changes..." button to commit the changes.


![](/img/generate_onboarding_docs_at_github_commit/step_11.png)

## Step 7: Commit changes

Click on the "Commit changes" text link.


![](/img/generate_onboarding_docs_at_github_commit/step_12.png)


## Step 8: Click on the Settings icon

Click on the gear icon to open the Settings page.


![](/img/generate_onboarding_docs_at_github_commit/step_14.png)

## Step 9: Click on the Secrets and variables button

Click on the icon button for Secrets and variables to open the menu.

![](/img/generate_onboarding_docs_at_github_commit/step_15.png)

## Step 10: Click on Actions

Click on the link with the text "Actions".


![](/img/generate_onboarding_docs_at_github_commit/step_16.png)


![](/img/generate_onboarding_docs_at_github_commit/step_19.png)

## Step 11: Create New Repository Secrets

Click on the "New repository secret" span to create a new repository secret. `GENERATE_ENDPOINT_URL` is the specific endpoint we need to add for this workflow. Additionally make sure you add the Dev-Docs API-KEY and Github PAT with permissions to read commits, pull requests, and read and write permissions to commits.



[Link to create the Dev-Docs API-Key](/docs/Generating%20an%20API%20Key)




[Link to how to create Github PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)


![](/img/generate_onboarding_docs_at_github_commit/step_20.png)

## Step 12: Add GENERATE_ENDPOINT_URL

For the secret name name it `GENERATE_ENDPOINT_URL` and for the value provide your dev-docs base url with the path of `https://api.devdocsapp.com/company/{your org}/generate_onboarding_docs`


![](/img/generate_onboarding_docs_at_github_commit/step_22.png)


Finally click the **Add secret** button to open the form to add a new secret.

## Step 13: Verify Workflow

After setting up the workflow, it's crucial to verify that it's working correctly. You can do this by making a small change to a JavaScript file in your main branch and pushing it to GitHub. This should trigger the workflow.

## Step 14: Monitor Workflow Execution

Go to the Actions tab in your GitHub repository to monitor the execution of your workflow. You should see your newly created workflow listed, and you can click on it to view the details of each run.

## Step 15: Check Generated Onboarding Docs

Once the workflow has run successfully, check your DevDocs application to ensure that the onboarding documentation has been generated or updated as expected. This step is crucial to confirm that the entire process is working end-to-end.

  