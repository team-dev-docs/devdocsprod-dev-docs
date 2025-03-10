# Getting Started with SpriteAI

This guide will help you set up and start using SpriteAI, a powerful tool for generating game sprites and landscapes using AI.

## Installation

1. Ensure you have Node.js installed on your system. If not, download and install it from [nodejs.org](https://nodejs.org/).

2. Clone the SpriteAI repository:
   ```
   git clone https://github.com/team-dev-docs/spriteAI.git
   ```

3. Navigate to the project directory:
   ```
   cd spriteAI
   ```

4. Install the required dependencies:
   ```
   npm install
   ```

## Configuration

Before using SpriteAI, you need to set up your OpenAI API key:

1. Sign up for an OpenAI account at [openai.com](https://openai.com/) if you haven't already.
2. Generate an API key in your OpenAI dashboard.
3. Set the API key as an environment variable:
   ```
   export OPENAI_API_KEY='your-api-key-here'
   ```

## Basic Usage

SpriteAI provides two main functions: `generateCharacterSpritesheet` and `generateLandscapeSprite`.

### Generating a Character Spritesheet

```javascript
import { generateCharacterSpritesheet } from './index.js';

const result = await generateCharacterSpritesheet('a medieval knight', {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 4,
  size: '1024x1024',
  style: 'pixel-art',
  save: true
});

console.log(result.spritesheet); // Base64 encoded spritesheet
console.log(result.metadata); // Metadata about the generated spritesheet
```

### Generating a Landscape Sprite

```javascript
import { generateLandscapeSprite } from './index.js';

const result = await generateLandscapeSprite('a lush forest with a river', {
  size: '1024x1024',
  style: 'pixel-art',
  timeOfDay: 'sunset',
  weather: 'clear',
  perspective: 'side-scrolling',
  save: true
});

console.log(result.landscape); // Base64 encoded landscape sprite
console.log(result.metadata); // Metadata about the generated landscape
```

## Advanced Options

Both functions accept additional options to customize the output. Refer to the inline documentation in `index.js` for a complete list of available options.

## Saving Generated Images

By default, generated images are returned as Base64 encoded strings. To save them as files, set the `save` option to `true` when calling the functions. Images will be saved in an `assets` folder in your current working directory.

## Further Documentation

For more detailed information on SpriteAI's capabilities and advanced usage, please refer to the following resources:

- [API Reference](./api_reference.md)
- [Examples](./examples.md)
- [Troubleshooting](./troubleshooting.md)

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/team-dev-docs/spriteAI).