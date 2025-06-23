---
title: Welcome to Dev-Docs
description: An introduction to Dev-Docs and its new features
---

# Welcome to Dev-Docs

## Introduction

Welcome to Dev-Docs, your comprehensive solution for generating and managing documentation for your software projects. This page will introduce you to the latest features and improvements in our SDK, helping you make the most of our documentation tools.

## New Features

### Character Spritesheet Generation

We've added a powerful new function to generate character spritesheets:

```javascript
export const generateCharacterSpritesheet = async function(description, options = {}) {
  // Function implementation
}
```

This function allows you to create customizable character spritesheets with various animation states, styles, and sizes. You can specify options such as:

- Animation states (e.g., idle, walk, run, attack)
- Frames per state
- Image size
- Art style
- Padding
- Character direction

### Environment Sprite Generation

Another exciting addition is the ability to generate environment sprites:

```javascript
export const generateEnvironmentSprites = async function(description, options = {}) {
  // Function implementation
}
```

This function enables you to create tileset-style environment sprites with customizable elements, themes, and styles.

### Item Sprite Generation

We've also introduced a function for generating item sprites:

```javascript
export const generateItemSprites = async function(description, options = {}) {
  // Function implementation
}
```

This feature allows you to create collections of item sprites for your game or application, with options for customizing the number of items, style, and item type.

## Enhanced Customization

All new sprite generation functions come with a range of customization options, allowing you to fine-tune the output to match your project's needs. You can adjust parameters such as:

- Image size
- Art style (e.g., pixel-art, vector, 3D, hand-drawn, anime)
- Number of elements or frames
- Theme (for environment sprites)
- Item type (for item sprites)

## Integration with OpenAI

Our new features leverage the power of OpenAI's DALL-E 3 model to generate high-quality, AI-powered sprites based on your descriptions and requirements.

## Utility Functions

We've also added some helpful utility functions:

```javascript
export const fetchAvailableAnimationStates = async function() {
  // Returns available animation states
}

export const fetchAvailableSpriteStyles = async function() {
  // Returns available sprite styles
}
```

These functions allow you to retrieve the current list of supported animation states and sprite styles, making it easier to work with our SDK.

## Conclusion

With these new features, Dev-Docs provides even more powerful tools for generating game assets and documentation. We encourage you to explore these new functions and integrate them into your workflow to streamline your development process.

For more detailed information on each function and its usage, please refer to the specific documentation pages for character spritesheets, environment sprites, and item sprites.