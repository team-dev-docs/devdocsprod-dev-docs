

  # Getting Started with Dev-Docs

This guide will walk you through setting up and customizing the Dev-Docs template for your project documentation.

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

## Step 1: Installation

1. Clone the Dev-Docs template repository:
   ```
   git clone https://github.com/your-dev-docs-repo.git
   cd your-dev-docs-repo
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or if you use yarn:
   ```
   yarn install
   ```

## Step 2: Configuration

1. Open `docusaurus.config.js` in your favorite text editor.

2. Update the following fields:
   - `title`: Set your documentation site title
   - `tagline`: Add a brief description
   - `url`: Set your production URL
   - `organizationName`: Your GitHub username or organization
   - `projectName`: Your repository name

3. Customize the navbar in the `navbar` section:
   - Update `title`
   - Change `logo` source
   - Modify `items` array for navigation links

4. Adjust the footer in the `footer` section:
   - Customize `links` array for footer columns and links
   - Update `copyright` message

## Step 3: Content Creation

1. Navigate to the `docs` folder.
2. Create or edit Markdown (.md) files for your documentation.
3. Use the frontmatter to set metadata:
   ```yaml
   ---
   id: page-id
   title: Page Title
   sidebar_label: Sidebar Label
   ---
   ```

4. Organize your documentation structure using the `sidebars.js` file.

## Step 4: Customization

1. Theme customization:
   - Edit `src/css/custom.scss` for global styles
   - Use Tailwind CSS classes in your MDX files for component styling

2. Add custom React components:
   - Create components in `src/components`
   - Import and use them in your MDX files

3. Configure plugins:
   - Add or modify plugins in the `plugins` array in `docusaurus.config.js`

## Step 5: Running Locally

Start the development server:
```
npm run start
```
or with yarn:
```
yarn start
```

Your site should now be running at `http://localhost:3000`.

## Step 6: Building for Production

Generate static files for deployment:
```
npm run build
```
or with yarn:
```
yarn build
```

The built files will be in the `build` directory.

## Next Steps

- Explore the [Docusaurus documentation](https://docusaurus.io/docs) for advanced features
- Customize your search functionality using the @orama/plugin-docusaurus-v3
- Add API documentation using OpenAPI specifications
- Set up continuous deployment with your preferred hosting platform

Congratulations! You now have a basic Dev-Docs site up and running. Continue to add content and customize it to fit your project's needs.

  