

  # Customizing the Dev-Docs Template

This guide will walk you through the process of customizing your Dev-Docs template, including modifying the theme, adding new components, and updating configuration files.

## Modifying the Theme

The Dev-Docs template uses SCSS for styling. To modify the theme:

1. Navigate to `/src/css/custom.scss`.
2. This file imports various SCSS modules that control different aspects of the theme.
3. To change colors, fonts, or other design elements, edit the corresponding SCSS files:
   - `design-preferences.scss` for primary design choices
   - `secondaryColors.scss` for secondary color schemes
   - `root-and-body.scss` for overall page structure
   - `headings-and-paragraphs.scss` for typography

Example:
```scss
// In design-preferences.scss
$primaryColor: #3498db;
$secondaryColor: #2ecc71;
```

## Adding New Components

To add new components:

1. Create a new React component in the `/src/components` directory.
2. Import and use the component in your desired location.
3. If needed, add styles for your component in a new SCSS file and import it in `custom.scss`.

Example:
```jsx
// NewComponent.js
import React from 'react';

const NewComponent = () => {
  return <div className="new-component">New Component Content</div>
;
};

export default NewComponent;
```

## Updating Configuration Files

### Docusaurus Configuration

The main configuration file is `docusaurus.config.js`. Here's how to update key areas:

1. **Site Metadata**: Update the `title`, `tagline`, and `url` at the top of the file.

2. **Navbar**: Modify the `navbar` object in the `themeConfig` section:
   ```javascript
   navbar: {
     title: 'Your Site Title',
     logo: {
       alt: 'Your Logo Alt Text',
       src: 'path/to/logo.png',
     },
     items: [
       // Add or modify navbar items here
     ],
   },
   ```

3. **Footer**: Update the `footer` object in the `themeConfig` section:
   ```javascript
   footer: {
     style: 'dark',
     links: [
       // Add or modify footer links here
     ],
     copyright: `Copyright © ${new Date().getFullYear()} Your Name`,
   },
   ```

4. **Plugins**: Add or remove plugins in the `plugins` array:
   ```javascript
   plugins: [
     'docusaurus-plugin-sass',
     "@orama/plugin-docusaurus-v3",
     // Add more plugins here
   ],
   ```

### Sidebar Configuration

To modify the sidebar structure:

1. Open `sidebars.js` in the root directory.
2. Update the sidebar object to reflect your desired structure:
   ```javascript
   module.exports = {
     mySidebar: [
       {
         type: 'category',
         label: 'Getting Started',
         items: ['intro', 'installation'],
       },
       // Add more categories or items
     ],
   };
   ```

## Customizing Styles

For more granular style customizations:

1. Use Tailwind CSS classes directly in your components for quick styling.
2. For custom styles, add them to the appropriate SCSS file in `/src/css/`.
3. If you need to override Docusaurus default styles, use more specific selectors or the `!important` flag cautiously.

Remember to rebuild your site after making changes to see the updates reflected.

  