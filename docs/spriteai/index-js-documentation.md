# SpriteAI Documentation

## Overview

This documentation covers the SpriteAI module, which provides functions for generating game-related sprites and assets using AI. The module utilizes OpenAI's DALL-E 3 model to create various types of sprites, including character spritesheets, environment tiles, and item collections.

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

To use the SpriteAI module, ensure you have the following dependencies installed:

```bash
npm install openai axios sharp jimp fs path
```

Then, import the required functions in your project:

```javascript
import {
  generateCharacterSpritesheet,
  fetchAvailableAnimationStates,
  fetchAvailableSpriteStyles,
  generateEnvironmentSprites,
  generateItemSprites
} from './spriteAI';
```

## Functions

### generateCharacterSpritesheet

Generates a character spritesheet based on a given description and options.

```javascript
async function generateCharacterSpritesheet(description, options = {})
```

#### Parameters:

- `description` (string): A description of the character to generate.
- `options` (object): Optional configuration for the spritesheet generation.
  - `states` (array): Animation states to include (default: ['idle', 'walk', 'run', 'attack']).
  - `framesPerState` (number): Number of frames per animation state (default: 6).
  - `size` (string): Size of the generated image (default: '1024x1024').
  - `style` (string): Art style of the spritesheet (default: 'pixel-art').
  - `padding` (number): Padding between frames (default: 1).
  - `direction` (string): Direction the character should face (default: 'right').
  - `save` (boolean): Whether to save the generated spritesheet to disk.

#### Returns:

An object containing:
- `original` (string): URL of the original generated image.
- `spritesheet` (string): Base64-encoded PNG data of the processed spritesheet.
- `metadata` (object): Information about the generated spritesheet, including states, dimensions, and frame data.

### fetchAvailableAnimationStates

Retrieves a list of available animation states for character spritesheets.

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

- `description` (string): A description of the environment to generate.
- `options` (object): Optional configuration for the environment sprite generation.
  - `elements` (number): Number of distinct environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: '1024x1024').
  - `style` (string): Art style of the sprites (default: 'pixel-art').
  - `padding` (number): Padding between elements (default: 1).
  - `theme` (string): Theme of the environment (default: 'fantasy').
  - `save` (boolean): Whether to save the generated tileset to disk.

#### Returns:

An object containing:
- `original` (string): URL of the original generated image.
- `tileset` (string): Base64-encoded PNG data of the processed tileset.
- `metadata` (object): Information about the generated tileset, including dimensions and tile data.

### generateItemSprites

Generates item sprites based on a given description and options.

```javascript
async function generateItemSprites(description, options = {})
```

#### Parameters:

- `description` (string): A description of the items to generate.
- `options` (object): Optional configuration for the item sprite generation.
  - `itemCount` (number): Number of distinct items to generate (default: 4).
  - `size` (string): Size of the generated image (default: '1024x1024').
  - `style` (string): Art style of the sprites (default: 'pixel-art').
  - `padding` (number): Padding between items (default: 1).
  - `itemType` (string): Type of items to generate (default: 'equipment').
  - `background` (string): Background color of the sprite sheet (default: 'white').
  - `save` (boolean): Whether to save the generated item sheet to disk.

#### Returns:

An object containing:
- `original` (string): URL of the original generated image.
- `itemSheet` (string): Base64-encoded PNG data of the processed item sheet.
- `metadata` (object): Information about the generated item sheet, including dimensions and item data.

## Helper Functions

### removeBackgroundColor

Removes a specified background color from an image.

```javascript
async function removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold = 0, options = {})
```

#### Parameters:

- `inputPath` (string): Path to the input image file.
- `outputPath` (string): Path where the processed image will be saved.
- `targetColor` (string): CSS color string of the background color to remove.
- `colorThreshold` (number): Threshold for color matching (default: 0).
- `options` (object): Additional options (currently unused).

#### Returns:

The result of writing the processed image to the output path.

## Notes

- This module requires an OpenAI API key to be set in your environment variables for DALL-E 3 image generation.
- The generated sprites are saved in the `assets` folder of the current working directory when the `save` option is set to `true`.
- All functions return promises and should be used with `async/await` or `.then()` syntax.
- The module uses the sharp library for image processing, which may require additional setup on some systems.

For more detailed information on using these functions, refer to the inline comments in the source code.