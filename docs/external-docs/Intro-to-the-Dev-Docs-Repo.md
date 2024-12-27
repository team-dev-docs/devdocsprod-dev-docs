---
sidebar_position: 2
---

# Intro to the Dev-Docs Repo

## Dev-Docs Repo File Structure

In the repo there are a lot of configuration files you can customize and extend, but with Dev-Docs you will not likely need to modify them. Instead you should focus on three main folders: <code>docs</code>, <code>blog</code>, and <code>pages</code> folder.

## Docs Folder

This is where you be writing the bulk of your documentation. You just need to add a markdown file to start creating content or use Dev-Docs to create this for you by right clicking a file and selecting "Open Devdocs Markdown."

### Generating Documentation with Dev-Docs

Dev-Docs makes it easy to generate documentation directly from your codebase. Here's how to get started:

1. Install the Dev-Docs extension in your IDE.
2. Right-click on a file or folder in your project.
3. Select "Generate Dev-Docs" from the context menu.
4. Choose the type of documentation you want to generate (e.g., API docs, function descriptions, etc.).
5. Dev-Docs will analyze your code and create markdown files in the `docs` folder.

### Integrating with Existing Codebases

To integrate Dev-Docs with an existing project:

1. Initialize Dev-Docs in your project root: `dev-docs init`
2. Configure your `.dev-docs.yml` file to specify which folders to document.
3. Run `dev-docs generate` to create initial documentation.
4. Commit the generated files to your repository.

### Best Practices for Organizing Generated Docs

- Group related documentation into subfolders (e.g., `docs/api`, `docs/guides`).
- Use consistent naming conventions for generated files.
- Regularly update generated docs as your codebase evolves.
- Combine generated docs with hand-written content for comprehensive documentation.

## Blog

Any markdown files placed here will automatically become blog posts. Consider using the blog to announce updates to your documentation or new features in your project.

## Src/pages

At the moment the only page you have to worry about here is <code>_landing_page.md</code>. This can be used as a landing page for your docs if you'd like. So don't be afraid to make it awesome!

Remember, Dev-Docs is designed to streamline your documentation process. By leveraging its code analysis features, you can maintain up-to-date documentation with minimal effort, allowing you to focus on building great software.