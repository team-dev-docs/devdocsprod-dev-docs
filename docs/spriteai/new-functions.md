# New Functions in SpriteAI

This document provides an overview of the new functions added to the SpriteAI SDK in the recent update. These functions enhance the capabilities of the SDK, allowing for more diverse sprite generation and asset management.

## Table of Contents

1. [fetchAvailableAnimationStates](#fetchavailableanimationstates)
2. [fetchAvailableSpriteStyles](#fetchavailablespritestyles)
3. [generateEnvironmentSprites](#generateenvironmentsprites)
4. [generateItemSprites](#generateitemsprites)

## fetchAvailableAnimationStates

This function retrieves a list of available animation states for character spritesheets.

### Usage

```javascript
import { fetchAvailableAnimationStates } from './spriteAI/index.js';

const animationStates = await fetchAvailableAnimationStates();
console.log(animationStates);
```

### Returns

An array of strings representing available animation states. For example:

```javascript
['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

## fetchAvailableSpriteStyles

This function retrieves a list of available sprite styles that can be used in sprite generation.

### Usage

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI/index.js';

const spriteStyles = await fetchAvailableSpriteStyles();
console.log(spriteStyles);
```

### Returns

An array of strings representing available sprite styles. For example:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## generateEnvironmentSprites

This function generates environment sprites based on a given description and options.

### Usage

```javascript
import { generateEnvironmentSprites } from './spriteAI/index.js';

const description = 'a fantasy forest';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(description, options);
console.log(result);
```

### Parameters

- `description` (string): A description of the environment to generate.
- `options` (object): Configuration options for the environment sprite generation.
  - `elements` (number, default: 4): Number of different elements in the tileset.
  - `size` (string, default: '1024x1024'): Output image size.
  - `style` (string, default: 'pixel-art'): Art style to use.
  - `padding` (number, default: 1): Padding between tiles.
  - `theme` (string, default: 'fantasy'): Theme of the environment.
  - `save` (boolean): Whether to save the generated tileset to disk.

### Returns

An object containing:
- `original` (string): URL of the original generated image.
- `tileset` (string): Base64-encoded PNG data of the processed tileset.
- `metadata` (object): Information about the generated tileset, including dimensions and tile data.

## generateItemSprites

This function generates item sprites based on a given description and options.

### Usage

```javascript
import { generateItemSprites } from './spriteAI/index.js';

const description = 'medieval weapons';
const options = {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  itemType: 'weapon',
  background: 'transparent',
  save: true
};

const result = await generateItemSprites(description, options);
console.log(result);
```

### Parameters

- `description` (string): A description of the items to generate.
- `options` (object): Configuration options for the item sprite generation.
  - `itemCount` (number, default: 4): Number of different items in the collection.
  - `size` (string, default: '1024x1024'): Output image size.
  - `style` (string, default: 'pixel-art'): Art style to use.
  - `padding` (number, default: 1): Padding between items.
  - `itemType` (string, default: 'equipment'): Type of items to generate.
  - `background` (string, default: 'white'): Background color of the items.
  - `save` (boolean): Whether to save the generated item sheet to disk.

### Returns

An object containing:
- `original` (string): URL of the original generated image.
- `itemSheet` (string): Base64-encoded PNG data of the processed item sheet.
- `metadata` (object): Information about the generated item sheet, including dimensions and item data.

These new functions expand the capabilities of the SpriteAI SDK, allowing for more versatile sprite and asset generation for game development. They can be used in conjunction with existing functions to create comprehensive game asset pipelines.