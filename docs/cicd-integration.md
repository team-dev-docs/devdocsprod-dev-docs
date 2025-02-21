# Integrating Dev-Docs with CI/CD Pipelines

Dev-Docs can be seamlessly integrated into your CI/CD workflows to automate documentation generation and updates. This guide covers how to set up Dev-Docs with popular CI/CD tools.

## GitHub Actions Integration

You can use GitHub Actions to automatically generate internal documentation when commits are pushed to your repository. Here's how to set it up:

1. Create a new workflow file in your repository at `.github/workflows/generate-docs.yml`

2. Add the following content to the file:

```yaml
name: Generate Internal Docs

on:
  push:
    branches:
      - main
    paths:
      - '**.js'

jobs:
  dev-docs-app:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Update DevDocs
        run: |
          curl -X POST ${{ secrets.GENERATE_ENDPOINT_URL }} \
          -H "Content-Type: application/json" \
          -d '{
            "timestamp": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'",
            "apiKey": "${{ secrets.DEV_DOCS_API_KEY }}",
            "githubToken": "${{ secrets.GITHUB_TOKEN }}",
            "repo": "${{ github.repository }}",
            "actor": "${{ github.actor }}"
          }'
```

3. Add the following secrets to your repository:
   - `GENERATE_ENDPOINT_URL`: The URL for the Dev-Docs service
   - `DEV_DOCS_API_KEY`: Your Dev-Docs API key

4. Commit and push the workflow file to your repository

Now, whenever JavaScript files are pushed to the main branch, the workflow will trigger and generate updated internal documentation.

## Jenkins Integration

To integrate Dev-Docs with Jenkins:

1. Install the HTTP Request Plugin in Jenkins

2. Create a new Jenkins job or modify an existing one

3. Add a build step to send a POST request to the Dev-Docs service:

```groovy
httpRequest url: 'https://your-dev-docs-endpoint.com/generate',
            httpMode: 'POST',
            contentType: 'APPLICATION_JSON',
            requestBody: """{
                "timestamp": "${new Date().format("yyyy-MM-dd'T'HH:mm:ss'Z'", TimeZone.getTimeZone("UTC"))}",
                "apiKey": "${DEV_DOCS_API_KEY}",
                "repo": "${env.GIT_URL}",
                "actor": "${env.BUILD_USER_ID}"
            }"""
```

4. Set up the `DEV_DOCS_API_KEY` as a Jenkins credential

5. Configure the job to run on your desired trigger (e.g., after successful builds or merges to main)

## GitLab CI Integration

To integrate Dev-Docs with GitLab CI:

1. Add the following job to your `.gitlab-ci.yml` file:

```yaml
generate_docs:
  stage: deploy
  image: curlimages/curl
  script:
    - |
      curl -X POST ${GENERATE_ENDPOINT_URL} \
      -H "Content-Type: application/json" \
      -d '{
        "timestamp": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'",
        "apiKey": "'${DEV_DOCS_API_KEY}'",
        "repo": "'${CI_PROJECT_URL}'",
        "actor": "'${GITLAB_USER_LOGIN}'"
      }'
  only:
    - main
```

2. Set up the following CI/CD variables in your GitLab project:
   - `GENERATE_ENDPOINT_URL`: The URL for the Dev-Docs service
   - `DEV_DOCS_API_KEY`: Your Dev-Docs API key

3. Commit and push the updated `.gitlab-ci.yml` file

This job will run whenever changes are pushed to the main branch, generating updated documentation.

By integrating Dev-Docs with your CI/CD pipeline, you can ensure that your documentation stays up-to-date with your codebase, improving collaboration and reducing manual documentation efforts.