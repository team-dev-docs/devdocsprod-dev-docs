# Integrating Dev-Docs with CI/CD Pipelines

Integrating Dev-Docs with your CI/CD pipeline allows you to automatically generate and update documentation as part of your development workflow. This guide will walk you through the process of setting up Dev-Docs to work with popular CI/CD tools.

## GitHub Actions Integration

To integrate Dev-Docs with GitHub Actions:

1. Create a new workflow file in your repository at `.github/workflows/dev-docs.yml`

2. Add the following content to the file:

```yaml
name: Generate Dev-Docs

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
      - name: Generate Dev-Docs
        run: |
          curl -X POST ${{ secrets.GENERATE_ENDPOINT_URL }} \
          -H "Content-Type: application/json" \
          -d '{
            "timestamp": "${{ github.event.head_commit.timestamp }}",
            "api_key": "${{ secrets.DEV_DOCS_API_KEY }}",
            "personal_access_token": "${{ secrets.GITHUB_TOKEN }}",
            "repo_name": "${{ github.repository }}",
            "actor": "${{ github.actor }}"
          }'
```

3. Configure the necessary secrets in your GitHub repository:
   - `GENERATE_ENDPOINT_URL`: The URL for the Dev-Docs generation service
   - `DEV_DOCS_API_KEY`: Your Dev-Docs API key

4. Commit and push the workflow file to your repository

Now, whenever changes are pushed to JavaScript files in the main branch, Dev-Docs will automatically generate updated documentation.

## GitLab CI Integration

To integrate Dev-Docs with GitLab CI:

1. Create or edit your `.gitlab-ci.yml` file in the root of your repository

2. Add the following job to the file:

```yaml
generate-dev-docs:
  image: curlimages/curl
  script:
    - |
      curl -X POST ${GENERATE_ENDPOINT_URL} \
      -H "Content-Type: application/json" \
      -d '{
        "timestamp": "'"${CI_COMMIT_TIMESTAMP}"'",
        "api_key": "'"${DEV_DOCS_API_KEY}"'",
        "personal_access_token": "'"${CI_JOB_TOKEN}"'",
        "repo_name": "'"${CI_PROJECT_PATH}"'",
        "actor": "'"${GITLAB_USER_NAME}"'"
      }'
  only:
    - main
    - changes:
      - "**.js"
```

3. Configure the necessary variables in your GitLab CI/CD settings:
   - `GENERATE_ENDPOINT_URL`: The URL for the Dev-Docs generation service
   - `DEV_DOCS_API_KEY`: Your Dev-Docs API key

4. Commit and push the changes to your repository

This configuration will trigger Dev-Docs generation when changes are pushed to JavaScript files in the main branch.

## Jenkins Integration

To integrate Dev-Docs with Jenkins:

1. Create a new Jenkins pipeline or edit an existing one

2. Add the following stage to your Jenkinsfile:

```groovy
stage('Generate Dev-Docs') {
  when {
    branch 'main'
    changeset "**.js"
  }
  steps {
    script {
      def payload = [
        timestamp: env.GIT_COMMIT_TIMESTAMP,
        api_key: env.DEV_DOCS_API_KEY,
        personal_access_token: env.GITHUB_TOKEN,
        repo_name: env.GIT_URL.tokenize('/')[3].split('\\.')[0],
        actor: env.GIT_COMMITTER_NAME
      ]
      def response = httpRequest(
        url: env.GENERATE_ENDPOINT_URL,
        httpMode: 'POST',
        contentType: 'APPLICATION_JSON',
        requestBody: groovy.json.JsonOutput.toJson(payload)
      )
      println("Dev-Docs generation status: ${response.status}")
    }
  }
}
```

3. Configure the necessary environment variables in your Jenkins setup:
   - `GENERATE_ENDPOINT_URL`: The URL for the Dev-Docs generation service
   - `DEV_DOCS_API_KEY`: Your Dev-Docs API key
   - `GITHUB_TOKEN`: A GitHub personal access token with appropriate permissions

4. Save and run your pipeline

This configuration will generate Dev-Docs documentation when changes are pushed to JavaScript files in the main branch.

By integrating Dev-Docs with your CI/CD pipeline, you can ensure that your documentation stays up-to-date with your codebase, improving the overall quality and maintainability of your project.