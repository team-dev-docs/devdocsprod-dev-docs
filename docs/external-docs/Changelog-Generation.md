# Changelog Generation

VSCode Gitmoji Changelog offers the ability to automatically generate changelogs based on your gitmoji commit history.

## How it works

The extension scans your git commit history and looks for commits that use gitmoji in their messages. It then categorizes these commits based on the emojis used and generates a formatted changelog.

## Generating a changelog

To generate a changelog:

1. Open the command palette (Ctrl+Shift+P)
2. Search for and select "Gitmoji: Generate Changelog"
3. Choose the version range you want to include
4. The extension will create a new file with the generated changelog

## Customizing the output

You can customize the changelog format and categories in the extension settings. This allows you to tailor the output to your project's needs.

## Integration with CI/CD

The changelog generation feature can be easily integrated into your CI/CD pipelines to automate release notes creation.

For more details on using and configuring the changelog generation, please refer to the [Changelog Configuration](changelog-config.md) section.