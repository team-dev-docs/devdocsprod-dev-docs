# Customizing AI-Generated Documentation

The AI-powered documentation generator allows users to customize the output using a configuration file named `dev-docs.json`. This file provides options to tailor the generated documentation to your project's specific needs.

## Configuration Options

To customize the AI-generated documentation, create a `dev-docs.json` file in the root directory of your project. The following options are available:

- `includePatterns`: An array of glob patterns to specify which files should be included in the documentation generation process.
- `excludePatterns`: An array of glob patterns to specify which files should be excluded from the documentation generation process.
- `outputFormat`: The desired output format for the generated documentation (e.g., "markdown", "html").
- `outputDirectory`: The directory where the generated documentation files will be saved.
- `templatePath`: Path to a custom template file for formatting the generated documentation.

## Example Configuration

Here's an example of a `dev-docs.json` file:

```json
{
  "includePatterns": ["src/**/*.js", "lib/**/*.js"],
  "excludePatterns": ["**/*.test.js", "**/*.spec.js"],
  "outputFormat": "markdown",
  "outputDirectory": "./docs",
  "templatePath": "./custom-template.md"
}
```

This configuration will include all JavaScript files in the `src` and `lib` directories, exclude test files, generate markdown output in the `./docs` directory, and use a custom template for formatting.

By utilizing the `dev-docs.json` file, you can fine-tune the documentation generation process to better suit your project's structure and requirements.