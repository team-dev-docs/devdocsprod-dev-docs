# Dev-Docs Quick Start Guide

## Installation

1. Open VS Code
2. Go to Extensions view (Ctrl+Shift+X)
3. Search for "Dev-Docs"
4. Click "Install"

## Setup

1. Open your project in VS Code
2. Create a `dev-docs.json` file in your project root if it doesn't exist
3. Add basic configuration:

```json
{
  "ai": {
    "contextDirs": ["src"],
    "internalTypeFilters": ["class", "method", "function"]
  }
}
```

## Usage

### Generate Documentation

1. Right-click a file in Explorer
2. Select "Generate Documentation"
3. Review generated docs in `docs` folder

### Ask Questions

1. Open Command Palette (Ctrl+Shift+P)
2. Type "Ask Dev-Docs A Question"
3. Enter your question about the codebase

### Generate API Docs

1. Open Command Palette (Ctrl+Shift+P) 
2. Type "Generate API Documentation"
3. Review generated OpenAPI spec and Postman collection

## Next Steps

- Customize `dev-docs.json` further
- Explore other commands like "Generate Context" and "Find Missing Docs"
- Check out full documentation at [dev-docs.io](https://dev-docs.io)