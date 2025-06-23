---
title: Character Spritesheet Generation
description: Guide to using the generateCharacterSpritesheet function with new sprite style options
---

# Character Spritesheet Generation

## Introduction

The `generateCharacterSpritesheet` function is a powerful tool for creating character spritesheets using AI-generated images. This guide will walk you through the function's usage, including the newly added sprite style options and the `fetchAvailableSpriteStyles` function.

## Function Signature

```javascript
async function generateCharacterSpritesheet(description, options = {})
```

## Parameters

- `description` (string): A detailed description of the character to be generated.
- `options` (object): An optional configuration object with the following properties:
  - `states` (array): Animation states to include (default: `['idle', 'walk', 'run', 'attack']`)
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Image size (default: '1024x1024')
  - `style` (string): Sprite style (default: 'pixel-art')
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Character facing direction (default: 'right')

## Available Sprite Styles

To fetch the available sprite styles, you can use the new `fetchAvailableSpriteStyles` function:

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

const availableStyles = await fetchAvailableSpriteStyles();
console.log(availableStyles);
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Usage Example

Here's an example of how to use the `generateCharacterSpritesheet` function with a custom sprite style:

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';

const description = "A heroic knight in shining armor";
const options = {
  states: ['idle', 'walk', 'attack', 'defend'],
  framesPerState: 8,
  size: '2048x2048',
  style: 'hand-drawn',
  direction: 'left'
};

const result = await generateCharacterSpritesheet(description, options);

console.log(result.spritesheet); // Base64 encoded spritesheet image
console.log(result.metadata); // Metadata about the generated spritesheet
```

## Return Value

The function returns an object with the following properties:

- `original` (string): URL of the original AI-generated image
- `spritesheet` (string): Base64 encoded spritesheet image
- `metadata` (object): Detailed information about the generated spritesheet, including:
  - `states` (array): List of animation states
  - `framesPerState` (number): Number of frames per state
  - `totalFrames` (number): Total number of frames in the spritesheet
  - `dimensions` (object): Width and height of the spritesheet
  - `frameData` (object): Detailed information about each animation state

## Best Practices

1. Provide a clear and detailed character description for best results.
2. Experiment with different sprite styles to find the one that best fits your project's aesthetic.
3. Use the `fetchAvailableSpriteStyles` function to ensure you're using a valid style option.
4. Adjust the `framesPerState` and `states` options to create more complex animations as needed.

## Conclusion

The `generateCharacterSpritesheet` function, combined with the new sprite style options, provides a flexible and powerful way to create custom character spritesheets for your game or application. By leveraging AI-generated images and customizable options, you can quickly produce high-quality sprite assets tailored to your specific needs.