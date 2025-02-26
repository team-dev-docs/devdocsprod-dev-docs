# Troubleshooting Guide

## Common Issues and Solutions

### 1. Documentation Not Generating

**Issue:** The "Generate Documentation" command is not producing any output.

**Possible Solutions:**
- Ensure you have the latest version of the Dev-Docs extension installed
- Check that you have a valid `dev-docs.json` file in your project root
- Verify that you have the necessary permissions to write files in your project directory

### 2. AI-Generated Content is Inaccurate

**Issue:** The AI-generated documentation contains errors or inconsistencies.

**Possible Solutions:**
- Review and adjust the `contextPrompt` in your `dev-docs.json` file
- Provide more specific `internalTypeFilters` or `codeFilters` to focus the AI on relevant code
- Always review and edit AI-generated content before publishing

### 3. GitHub App Integration Failing

**Issue:** The GitHub App is not automatically generating documentation on commits.

**Possible Solutions:**
- Verify that the GitHub App is properly installed and configured for your repository
- Check that your `dev-docs.json` file includes the correct `workflows` configuration
- Ensure your GitHub Personal Access Token has the necessary permissions

### 4. Performance Issues with Large Codebases

**Issue:** Documentation generation is slow or times out for large projects.

**Possible Solutions:**
- Use more specific `contextDirs` in your `dev-docs.json` to limit the scope of analysis
- Break down large documentation tasks into smaller, more focused generations
- Upgrade your Dev-Docs plan if you're hitting API rate limits

### 5. Markdown Rendering Issues

**Issue:** Generated Markdown is not rendering correctly in your documentation platform.

**Possible Solutions:**
- Check for syntax errors in the generated Markdown
- Ensure your documentation platform supports all Markdown features used
- Adjust the `defaultLength` setting in `dev-docs.json` if content is too long

If you continue to experience issues after trying these solutions, please contact our support team at support@dev-docs.io for further assistance.