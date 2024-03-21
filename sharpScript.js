const sharp = require('sharp');

sharp("/Users/andrewvanbeek/dev-docs-work/clients/us/devdocsprod-dev-docs/static/img/dev-docs-assets/ClippedHeroBg.png")
  .resize(1000, 1000)
  .toFile('/Users/andrewvanbeek/dev-docs-work/clients/us/devdocsprod-dev-docs/static/img/dev-docs-assets/HeroBg.png', (err, info) => {
    console.log(err)
    console.log(info)
  });