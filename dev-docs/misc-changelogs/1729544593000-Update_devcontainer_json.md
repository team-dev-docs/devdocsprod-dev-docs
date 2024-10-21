

  # Changelog

## [Unreleased]

### Changed
- Modified `.devcontainer/devcontainer.json`:
  - Removed the `postCreateCommand` that was running `npm install`

This change may affect the setup process for developers using the dev container. The automatic installation of dependencies upon container creation has been removed, which might require manual intervention or a different approach to set up the development environment.

  