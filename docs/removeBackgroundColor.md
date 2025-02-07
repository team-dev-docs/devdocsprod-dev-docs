# removeBackgroundColor Documentation

## Overview

`removeBackgroundColor` is a function that removes a specified background color from an image, making it transparent. This is particularly useful for creating sprites or isolating objects in images for use in games or graphic design projects.

## JavaScript Example

```javascript
import { removeBackgroundColor } from './imageProcessing';

const inputPath = 'path/to/input/image.png';
const outputPath = 'path/to/output/image.png';
const targetColor = '#FFFFFF'; // White background
const colorThreshold = 10; // Tolerance for color matching

removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  .then(() => console.log('Background removed successfully'))
  .catch(error => console.error('Error removing background:', error));
```

## Use Cases

1. **Game Development**: Remove backgrounds from character sprites or game objects to integrate them seamlessly into different game environments.

```javascript
const characterSprite = 'character.png';
const transparentSprite = 'character_transparent.png';
await removeBackgroundColor(characterSprite, transparentSprite, '#00FF00', 5); // Remove green screen
```

2. **Web Design**: Create transparent PNG images for website logos or icons.

```javascript
const logo = 'company_logo.png';
const transparentLogo = 'company_logo_transparent.png';
await removeBackgroundColor(logo, transparentLogo, '#FFFFFF', 0); // Remove white background
```

3. **Photo Editing**: Isolate objects from their backgrounds for compositing or further editing.

```javascript
const productPhoto = 'product.jpg';
const isolatedProduct = 'product_isolated.png';
await removeBackgroundColor(productPhoto, isolatedProduct, '#E5E5E5', 20); // Remove light gray background with some tolerance
```

By utilizing `removeBackgroundColor`, developers and designers can easily prepare images for various applications, enhancing the visual appeal and integration of graphics in their projects.