# New Character Generation Functions

This document describes the new convenience functions added to the spriteAI library for generating specific character types. These functions extend the capabilities of the `generateCharacterSpritesheet` function by providing pre-configured options for common character archetypes.

## Overview

Three new functions have been added to simplify the process of generating character spritesheets:

1. `generateNinja`
2. `generateSpaceman`
3. `generateRobot`

Each of these functions is designed to create a character spritesheet with predefined states, style, and frame count, while still allowing for customization through optional parameters.

## Function Details

### generateNinja

```javascript
export const generateNinja = async function(options = {}) {
  const defaultOptions = {
    states: ['idle', 'walk', 'run', 'attack', 'sneak'],
    style: 'pixel-art',
    framesPerState: 6
  };
  const mergedOptions = { ...defaultOptions, ...options };
  
  return generateCharacterSpritesheet('ninja character with black outfit and mask', mergedOptions);
};
```

This function generates a ninja character spritesheet with the following default options:
- States: idle, walk, run, attack, sneak
- Style: pixel-art
- Frames per state: 6

### generateSpaceman

```javascript
export const generateSpaceman = async function(options = {}) {
  const defaultOptions = {
    states: ['idle', 'walk', 'run', 'float'],
    style: 'pixel-art',
    framesPerState: 6
  };
  const mergedOptions = { ...defaultOptions, ...options };
  
  return generateCharacterSpritesheet('astronaut character with space suit and helmet', mergedOptions);
};
```

This function generates a spaceman (astronaut) character spritesheet with the following default options:
- States: idle, walk, run, float
- Style: pixel-art
- Frames per state: 6

### generateRobot

```javascript
export const generateRobot = async function(options = {}) {
  const defaultOptions = {
    states: ['idle', 'walk', 'run', 'attack', 'power-up'],
    style: 'pixel-art',
    framesPerState: 6
  };
  const mergedOptions = { ...defaultOptions, ...options };
  
  return generateCharacterSpritesheet('robot character with mechanical limbs and glowing eyes', mergedOptions);
};
```

This function generates a robot character spritesheet with the following default options:
- States: idle, walk, run, attack, power-up
- Style: pixel-art
- Frames per state: 6

## Usage

To use these new functions, simply call them with or without custom options:

```javascript
// Generate a ninja character with default options
const ninjaSprites = await generateNinja();

// Generate a spaceman character with custom options
const spacemanSprites = await generateSpaceman({
  framesPerState: 8,
  style: 'vector'
});

// Generate a robot character with custom options
const robotSprites = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up', 'shutdown'],
  framesPerState: 4
});
```

These functions return the same structure as the `generateCharacterSpritesheet` function, including the original image URL, the spritesheet data URL, and metadata about the generated sprites.

## Customization

While these functions provide convenient defaults, you can still customize various aspects of the character generation by passing an `options` object. The `options` object will be merged with the default options, allowing you to override specific settings as needed.

For example, you can change the number of frames per state, add or remove states, or modify the art style:

```javascript
const customNinja = await generateNinja({
  states: ['idle', 'walk', 'run', 'attack', 'sneak', 'climb'],
  framesPerState: 8,
  style: 'hand-drawn'
});
```

This flexibility allows you to quickly generate common character types while still maintaining the ability to fine-tune the output as required for your specific project needs.