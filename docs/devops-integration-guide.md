# DevOps Integration Guide for Dev-Docs

This guide covers how to integrate Dev-Docs with common DevOps workflows and tools.

## Continuous Integration

### GitHub Actions

To automatically generate documentation on each commit:

1. Create a `.github/workflows/generate-docs.yml` file with the following:

```yaml
name: Generate Docs
on: [push]
jobs:
  generate-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Generate Docs
        run: |
          npm install @dev-docs/cli
          npx dev-docs generate
      - name: Commit changes
        uses: EndBug/add-and-commit@v7
        with:
          author_name: GitHub Actions
          author_email: actions@github.com
          message: 'Auto-generate documentation'
          add: 'docs/*'
```

2. Commit this file to enable automatic doc generation on push.

### GitLab CI

Add the following to your `.gitlab-ci.yml`:

```yaml
generate-docs:
  image: node:latest
  script:
    - npm install @dev-docs/cli
    - npx dev-docs generate
  artifacts:
    paths:
      - docs/
```

## Deployment

### Netlify

1. Connect your Git repository to Netlify
2. Set the build command to: `npm run build && npx dev-docs generate`
3. Set the publish directory to: `docs`

### Vercel

Add the following to your `vercel.json`:

```json
{
  "buildCommand": "npm run build && npx dev-docs generate",
  "outputDirectory": "docs"
}
```

## Docker

To use Dev-Docs in a Docker workflow:

1. Add to your Dockerfile:

```dockerfile
RUN npm install -g @dev-docs/cli
RUN dev-docs generate
```

2. Mount your code directory and run:

```
docker run -v $(pwd):/app dev-docs generate
```

By integrating Dev-Docs into your CI/CD pipelines, you can ensure documentation stays up-to-date with each code change.