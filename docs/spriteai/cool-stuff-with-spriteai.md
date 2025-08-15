# Cool Stuff with SpriteAI

## Introduction

SpriteAI is a powerful tool for generating game assets using AI. This guide will walk you through some of the cool features and capabilities of SpriteAI, demonstrating how you can create various game sprites and assets with ease.

## Generating Character Spritesheets

One of the coolest features of SpriteAI is its ability to generate character spritesheets. This is perfect for creating animated characters for your games.

### Basic Usage

Here's how you can generate a character spritesheet:

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';

const result = await generateCharacterSpritesheet('a medieval knight', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  style: 'pixel-art',
  direction: 'right'
});

console.log(result.spritesheet); // Base64 encoded spritesheet
console.log(result.metadata); // Metadata about the generated spritesheet
```

This will create a pixel-art spritesheet of a medieval knight with four animation states: idle, walk, run, and attack.

### Customization Options

You can customize various aspects of the character generation:

- `states`: An array of animation states (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames for each animation state (default: 6)
- `size`: Output size of the spritesheet (default: '1024x1024')
- `style`: Art style of the character (default: 'pixel-art')
- `padding`: Padding between sprites (default: 1)
- `direction`: Base direction of the character (default: 'right')

## Creating Environment Sprites

SpriteAI also allows you to generate environment sprites, perfect for creating game backgrounds and tilesets.

### Basic Usage

Here's how you can generate environment sprites:

```javascript
import { generateEnvironmentSprites } from 'spriteAI';

const result = await generateEnvironmentSprites('forest', {
  elements: 6,
  style: 'pixel-art',
  theme: 'fantasy'
});

console.log(result.tileset); // Base64 encoded tileset
console.log(result.metadata); // Metadata about the generated tileset
```

This will create a pixel-art tileset of a fantasy forest environment with 6 different elements.

### Customization Options

You can customize various aspects of the environment generation:

- `elements`: Number of distinct environment pieces (default: 4)
- `size`: Output size of the tileset (default: '1024x1024')
- `style`: Art style of the environment (default: 'pixel-art')
- `padding`: Padding between sprites (default: 1)
- `theme`: Theme of the environment (default: 'fantasy')

## Generating Item Sprites

SpriteAI can also generate item sprites, which are great for creating inventory icons or pickups in your game.

### Basic Usage

Here's how you can generate item sprites:

```javascript
import { generateItemSprites } from 'spriteAI';

const result = await generateItemSprites('magical potions', {
  itemCount: 4,
  style: 'pixel-art',
  itemType: 'equipment'
});

console.log(result.itemSheet); // Base64 encoded item sheet
console.log(result.metadata); // Metadata about the generated items
```

This will create a pixel-art sheet of 4 magical potion items.

### Customization Options

You can customize various aspects of the item generation:

- `itemCount`: Number of items to generate (default: 4)
- `size`: Output size of the item sheet (default: '1024x1024')
- `style`: Art style of the items (default: 'pixel-art')
- `padding`: Padding between items (default: 1)
- `itemType`: Type of items to generate (default: 'equipment')
- `background`: Background color of the item sheet (default: 'white')

## Conclusion

SpriteAI provides a powerful set of tools for generating various game assets using AI. Whether you need character spritesheets, environment tilesets, or item sprites, SpriteAI has you covered. Experiment with different options and unleash your creativity in game asset creation!