

  # Dev-Docs Project Structure

This document provides an overview of the Dev-Docs project structure, focusing on key directories, configuration files, and the src folder organization.

## Project Root

The root directory contains several important configuration files:

- `docusaurus.config.js`: The main configuration file for Docusaurus. It defines site metadata, theming, plugins, and navigation structure.
- `package.json`: Lists project dependencies and scripts.
- `sidebars.js`: Configures the sidebar navigation for documentation pages.

## Main Directories

- `docs/`: Contains the markdown files for documentation pages.
- `src/`: Houses custom React components, pages, and styles.
- `static/`: Stores static assets like images and fonts.

## The `src` Folder

The `src` folder is crucial for customization and typically includes:

### Components

- `src/components/`: Custom React components used throughout the site.

### Pages

- `src/pages/`: React components that represent standalone pages.

### CSS

- `src/css/`: Custom CSS files, including:
  - `custom.css`: Main custom styles
  - `custom.scss`: SASS styles (enabled by `docusaurus-plugin-sass`)

## Configuration Files

### docusaurus.config.js

Key sections in this file include:

- Site metadata (title, tagline, URL)
- Theme configuration
- Navbar and footer structure
- Plugin configuration (e.g., `docusaurus-plugin-sass`, `@orama/plugin-docusaurus-v3`)
- Preset configuration for docs, blog, and theming

### sidebars.js

This file defines the structure of the documentation sidebars. In the current setup, it uses auto-generated sidebars based on the docs folder structure.

### package.json

Notable aspects:

- Defines scripts for starting, building, and deploying the site
- Lists dependencies, including Docusaurus core and various UI libraries (e.g., Radix UI, Tailwind CSS)
- Specifies the required Node.js version (>=18.0)

## Customization

The project uses several customization approaches:

1. **Tailwind CSS**: Integrated for utility-first styling
2. **SASS**: Enabled for more powerful CSS preprocessing
3. **Custom React components**: Allows for unique UI elements and layouts
4. **Plugins**: Extends Docusaurus functionality (e.g., search capabilities with Orama)

By understanding this structure, developers can efficiently navigate, modify, and extend the Dev-Docs project to suit specific documentation needs.

  