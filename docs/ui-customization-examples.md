# UI Customization Examples

This guide provides detailed examples of how to customize the UI of the Dev-Docs extension and web app.

## VS Code Extension

### Custom Sidebar Icon
You can customize the sidebar icon by modifying the `icon` property in your `package.json`:

```json
"icon": "path/to/custom-icon.svg" 
```

### Custom Welcome View
To customize the welcome view, modify the `welcomeView` property in your `package.json`:

```json
"contributes": {
  "views": {
    "dev-docs": [
      {
        "id": "welcomeView",
        "name": "Welcome",
        "when": "config.devDocs.showWelcomeView"
      }
    ]
  }
}
```

Then create a `welcomeView.ts` file to define the content:

```typescript
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const provider = new WelcomeViewProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(WelcomeViewProvider.viewType, provider)
  );
}

class WelcomeViewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = 'dev-docs.welcomeView';

  constructor(
    private readonly _extensionUri: vscode.Uri,
  ) { }

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken,
  ) {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [
        this._extensionUri
      ]
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dev-Docs Welcome</title>
      </head>
      <body>
        <h1>Welcome to Dev-Docs!</h1>
        <p>Start documenting your code with AI assistance.</p>
      </body>
      </html>`;
  }
}
```

## Web App

### Custom Styling
You can customize the styling of the web app by modifying the `src/styles/custom.css` file:

```css
/* Example custom styles */
body {
  font-family: 'Your Custom Font', sans-serif;
}

.navbar {
  background-color: #3498db;
}

.btn-primary {
  background-color: #2ecc71;
  border-color: #27ae60;
}
```

### Custom React Components
Create custom React components in the `src/components` directory:

```jsx
// src/components/CustomHeader.jsx
import React from 'react';

const CustomHeader = ({ title }) => {
  return (
    <header className="custom-header">
      <h1>{title}</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/docs">Docs</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default CustomHeader;
```

Then use the custom component in your pages:

```jsx
// src/pages/index.js
import React from 'react';
import CustomHeader from '../components/CustomHeader';

const HomePage = () => {
  return (
    <div>
      <CustomHeader title="Dev-Docs" />
      <main>
        <h2>Welcome to Dev-Docs</h2>
        <p>Start documenting your code with AI assistance.</p>
      </main>
    </div>
  );
};

export default HomePage;
```

These examples demonstrate how to customize various aspects of the Dev-Docs UI in both the VS Code extension and web app. Adjust the code and styles to fit your specific requirements and branding needs.