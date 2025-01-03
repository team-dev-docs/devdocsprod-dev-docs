# Getting Started with Dev-Docs

Welcome to Dev-Docs! This guide will help you quickly set up and start using Dev-Docs to generate documentation for your codebase.

## Installation

1. Install the Dev-Docs extension for VS Code:
   - Open VS Code
   - Go to the Extensions view (Ctrl+Shift+X)
   - Search for "Dev-Docs"
   - Click "Install"

2. Sign in to Dev-Docs:
   - Click the Dev-Docs icon in the VS Code sidebar
   - Click "Sign In" and follow the prompts

## Basic Usage

1. Open your project in VS Code

2. Configure Dev-Docs:
   - Create a `dev-docs.json` file in your project root
   - Add basic configuration:
     ```json
     {
       "ai": {
         "contextDirs": ["src"],
         "docSubFolder": "docs"
       }
     }
     ```

3. Generate documentation:
   - Right-click a file or folder in the Explorer
   - Select "Generate Documentation" 
   - Or use the keyboard shortcut: 
     - Mac: Shift + Cmd + D
     - Windows/Linux: Shift + Ctrl + D

4. View generated docs in the `docs` folder

## Next Steps

- Customize AI generation in `dev-docs.json`
- Try other commands like "Generate High Level Context for Folder"
- Explore external documentation generation
- Check out the full documentation at [docs.dev](https://docs.dev) for advanced features

Start documenting your codebase with ease using Dev-Docs!