# SpriteAI Documentation

## Overview

SpriteAI is a powerful library for generating game assets using AI. This documentation covers the main functions and features of the `index.js` file, which is the core of the SpriteAI library.

## Table of Contents

1. [Installation](#installation)
2. [Functions](#functions)
   - [generateCharacterSpritesheet](#generatecharacterspritesheet)
   - [fetchAvailableAnimationStates](#fetchavailableanimationstates)
   - [fetchAvailableSpriteStyles](#fetchavailablespritestyles)
   - [generateEnvironmentSprites](#generateenvironmentsprites)
   - [generateItemSprites](#generateitemsprites)
3. [Helper Functions](#helper-functions)
   - [removeBackgroundColor](#removebackgroundcolor)

## Installation

To use SpriteAI, you need to have Node.js installed. Then, you can install the required dependencies:

```bash
npm install openai axios sharp jimp
```

## Functions

### generateCharacterSpritesheet

Generates a character spritesheet based on a given description and options.

```javascript
async function generateCharacterSpritesheet(description, options = {})
```

#### Parameters:

- `description` (string): A description of the character.
- `options` (object): Optional parameters to customize the spritesheet generation.
  - `states` (array): Animation states (default: ['idle', 'walk', 'run', 'attack'])
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Image size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Character facing direction (default: 'right')
  - `save` (boolean): Whether to save the spritesheet to a file

#### Returns:

An object containing:
- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded PNG data of the processed spritesheet
- `metadata`: Object with spritesheet information

### fetchAvailableAnimationStates

Retrieves a list of available animation states.

```javascript
async function fetchAvailableAnimationStates()
```

#### Returns:

An array of strings representing available animation states.

### fetchAvailableSpriteStyles

Retrieves a list of available sprite styles.

```javascript
async function fetchAvailableSpriteStyles()
```

#### Returns:

An array of strings representing available sprite styles.

### generateEnvironmentSprites

Generates environment sprites based on a given description and options.

```javascript
async function generateEnvironmentSprites(description, options = {})
```

#### Parameters:

- `description` (string): A description of the environment.
- `options` (object): Optional parameters to customize the environment sprite generation.
  - `elements` (number): Number of environment elements (default: 4)
  - `size` (string): Image size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `padding` (number): Padding between elements (default: 1)
  - `theme` (string): Environment theme (default: 'fantasy')
  - `save` (boolean): Whether to save the tileset to a file

#### Returns:

An object containing:
- `original`: URL of the original generated image
- `tileset`: Base64-encoded PNG data of the processed tileset
- `metadata`: Object with tileset information

### generateItemSprites

Generates item sprites based on a given description and options.

```javascript
async function generateItemSprites(description, options = {})
```

#### Parameters:

- `description` (string): A description of the items.
- `options` (object): Optional parameters to customize the item sprite generation.
  - `itemCount` (number): Number of items (default: 4)
  - `size` (string): Image size (default: '1024x1024')
  - `style` (string): Art style (default: 'pixel-art')
  - `padding` (number): Padding between items (default: 1)
  - `itemType` (string): Type of items (default: 'equipment')
  - `background` (string): Background color (default: 'white')
  - `save` (boolean): Whether to save the item sheet to a file

#### Returns:

An object containing:
- `original`: URL of the original generated image
- `itemSheet`: Base64-encoded PNG data of the processed item sheet
- `metadata`: Object with item sheet information

## Helper Functions

### removeBackgroundColor

Removes a specified background color from an image.

```javascript
async function removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold = 0, options = {})
```

#### Parameters:

- `inputPath` (string): Path to the input image file
- `outputPath` (string): Path to save the output image file
- `targetColor` (string): CSS color string of the background color to remove
- `colorThreshold` (number): Threshold for color matching (default: 0)
- `options` (object): Additional options (unused in the current implementation)

#### Returns:

The result of writing the processed image to the output path.

This function is used internally by other functions to process generated images.

## Conclusion

SpriteAI provides a set of powerful functions for generating game assets using AI. By leveraging these functions, you can easily create character spritesheets, environment sprites, and item sprites for your game development projects. The library offers flexibility through various customization options, allowing you to tailor the generated assets to your specific needs.