# Frontend Integration Guide for Dev-Docs

This guide covers how to integrate Dev-Docs with popular frontend frameworks and libraries.

## React Integration

To use Dev-Docs with React:

1. Install the Dev-Docs React package:

```
npm install @dev-docs/react
```

2. Import and use the Dev-Docs components in your React app:

```jsx
import { DocViewer, DocSearch } from '@dev-docs/react';

function App() {
  return (
    <div>
      <DocViewer docId="getting-started" />
      <DocSearch />
    </div>
  );
}
```

## Vue Integration

For Vue apps:

1. Install the Vue plugin:

```
npm install @dev-docs/vue
```

2. Use Dev-Docs components:

```vue
<template>
  <div>
    <doc-viewer doc-id="api-reference"></doc-viewer>
    <doc-search></doc-search>
  </div>
</template>

<script>
import { DocViewer, DocSearch } from '@dev-docs/vue'

export default {
  components: {
    DocViewer,
    DocSearch
  }
}
</script>
```

## Angular Integration

To integrate with Angular:

1. Install the Angular module:

```
npm install @dev-docs/angular
```

2. Import the module and use components:

```typescript
import { DevDocsModule } from '@dev-docs/angular';

@NgModule({
  imports: [DevDocsModule],
  // ...
})
export class AppModule { }
```

```html
<dev-docs-viewer docId="tutorials"></dev-docs-viewer>
<dev-docs-search></dev-docs-search>
```

## Vanilla JavaScript

For plain JavaScript apps, use the Dev-Docs CDN:

```html
<script src="https://cdn.dev-docs.com/dev-docs.js"></script>

<dev-docs-viewer doc-id="reference"></dev-docs-viewer>
<dev-docs-search></dev-docs-search>
```

Refer to the full API documentation for more details on customizing and configuring Dev-Docs in your frontend application.