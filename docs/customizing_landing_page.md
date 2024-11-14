

  # Customizing the Landing Page

This guide will walk you through the process of customizing the landing page of your documentation site, including modifying content and layout.

## Overview

The landing page is typically the first page visitors see when they come to your documentation site. In this project, the landing page is controlled by two main files:

1. `/src/pages/index.tsx`
2. `/src/components/LandingPage.jsx`

## Modifying the Landing Page Content

### Using the LandingPage Component

The main content of the landing page is defined in the `LandingPage.jsx` file. This component uses a JSON-like structure to define the content and layout.

To modify the content:

1. Open `/src/components/LandingPage.jsx`
2. Locate the `data` object near the top of the file
3. Modify the content within this object to change text, headings, and structure

Example:

```javascript
export const data = {
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": {"level": 1},
      "content": [{"type": "text", "text": "Welcome to Our Docs"}]
    },
    {
      "type": "paragraph",
      "content": [{"type": "text", "text": "Explore our documentation to learn more."}]
    }
    // Add more elements as needed
  ]
};
```

### Customizing Layout

The layout is defined using a combination of columns and draggable items. To adjust the layout:

1. Modify the `columnBlock` and `column` elements in the `data` object
2. Adjust the `draggableItem` elements to change individual content blocks

Example of a two-column layout:

```javascript
{
  "type": "columnBlock",
  "content": [
    {
      "type": "column",
      "content": [
        // Content for the first column
      ]
    },
    {
      "type": "column",
      "content": [
        // Content for the second column
      ]
    }
  ]
}
```

## Customizing the Page Structure

To make more substantial changes to the landing page structure:

1. Open `/src/pages/index.tsx`
2. This file controls the overall structure of the landing page

Currently, the page is set to redirect to the `/docs` route:

```typescript
export default function Home(): JSX.Element {
  return (
    <Redirect to="/docs" />
  );
}
```

To use a custom landing page instead of redirecting:

1. Remove the `Redirect` component
2. Add your custom JSX to render the desired landing page content

Example:

```typescript
export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <LandingPage />
      </main>
    </Layout>
  );
}
```

## Adding Custom Styles

To add custom styles to your landing page:

1. Create or modify the CSS module file: `/src/pages/index.module.css`
2. Add your custom styles
3. Import and use these styles in your `index.tsx` file

Example:

```css
/* In index.module.css */
.customHero {
  background-color: #f0f0f0;
  padding: 4rem 0;
  text-align: center;
}
```

```typescript
// In index.tsx
import styles from './index.module.css';

// ...

<div className={styles.customHero}>
  {/* Your hero content */}
</div>

```

By following these instructions, you can fully customize the content, layout, and style of your documentation site's landing page to best suit your project's needs.

  