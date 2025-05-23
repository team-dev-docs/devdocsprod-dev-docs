# New Sprite Generation Features

This document outlines the new sprite generation features added to the spriteAI SDK. These features expand the capabilities of the SDK, allowing for more diverse and customizable sprite creation.

## Table of Contents
1. [Generate Environment Sprites](#generate-environment-sprites)
2. [Generate Item Sprites](#generate-item-sprites)
3. [Fetch Available Animation States](#fetch-available-animation-states)
4. [Fetch Available Sprite Styles](#fetch-available-sprite-styles)

## Generate Environment Sprites

The `generateEnvironmentSprites` function allows you to create environment tilesets based on a description.

### Function Signature
```javascript
async function generateEnvironmentSprites(description, options = {})
```

### Parameters
- `description` (string): Description of the environment to generate.
- `options` (object): Configuration options for the tileset generation.

### Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| elements | number | 4 | Number of different elements in the tileset |
| size | string | '1024x1024' | Output image size |
| style | string | 'pixel-art' | Art style to use |
| padding | number | 1 | Padding between tiles |
| theme | string | 'fantasy' | Theme of the environment |

### Example Usage
```javascript
const environmentSprites = await generateEnvironmentSprites('a fantasy forest', {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
});
console.log(environmentSprites.tileset);
```

## Generate Item Sprites

The `generateItemSprites` function allows you to create item collections based on a description.

### Function Signature
```javascript
async function generateItemSprites(description, options = {})
```

### Parameters
- `description` (string): Description of the items to generate.
- `options` (object): Configuration options for the item generation.

### Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| itemCount | number | 4 | Number of different items in the collection |
| size | string | '1024x1024' | Output image size |
| style | string | 'pixel-art' | Art style to use |
| padding | number | 1 | Padding between items |
| itemType | string | 'equipment' | Type of items to generate |
| background | string | 'white' | Background color of the items |

### Example Usage
```javascript
const itemSprites = await generateItemSprites('medieval weapons', {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  itemType: 'weapon',
  background: 'transparent',
  save: true
});
console.log(itemSprites.itemSheet);
```

## Fetch Available Animation States

The `fetchAvailableAnimationStates` function retrieves a list of available animation states for character sprites.

### Function Signature
```javascript
async function fetchAvailableAnimationStates()
```

### Example Usage
```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log(animationStates);
```

## Fetch Available Sprite Styles

The `fetchAvailableSpriteStyles` function retrieves a list of available sprite styles that can be used in sprite generation.

### Function Signature
```javascript
async function fetchAvailableSpriteStyles()
```

### Example Usage
```javascript
const spriteStyles = await fetchAvailableSpriteStyles();
console.log(spriteStyles);
```

These new features enhance the spriteAI SDK's capabilities, allowing for more diverse and customizable sprite generation. They can be used to create rich, varied game environments and item collections, as well as provide information about available animation states and sprite styles.