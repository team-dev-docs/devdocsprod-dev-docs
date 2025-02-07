# getUniqueColors Documentation

## Overview

The `getUniqueColors` function is a utility that analyzes an image and returns an array of unique colors present in the image. This function is particularly useful for pixel art and sprite manipulation, as it helps identify the color palette used in an image.

## JavaScript Example

```javascript
import { getUniqueColors } from './path/to/spriteUtils';

async function analyzeSprite(imagePath) {
  try {
    const uniqueColors = await getUniqueColors(imagePath);
    console.log(`The image contains ${uniqueColors.length} unique colors.`);
    console.log('Unique colors:', uniqueColors);
  } catch (error) {
    console.error('Error analyzing sprite:', error);
  }
}

analyzeSprite('./assets/mySprite.png');
```

In this example, we import the `getUniqueColors` function and use it to analyze a sprite image. The function returns an array of unique colors, which we then log to the console.

## Use Cases

1. **Color Palette Extraction**: 
   Game developers can use this function to extract the color palette from existing sprites, ensuring consistency when creating new assets or modifying existing ones.

   ```javascript
   const spritePalette = await getUniqueColors('./characters/hero.png');
   // Use spritePalette for creating matching items or environment elements
   ```

2. **Sprite Optimization**:
   By identifying the number of unique colors in a sprite, developers can optimize images for specific platforms or color-limited environments.

   ```javascript
   const colors = await getUniqueColors('./background.png');
   if (colors.length > 256) {
     console.warn('This image may need to be optimized for 8-bit color environments');
   }
   ```

3. **Color Analysis for Procedural Generation**:
   When generating sprites or textures procedurally, you can use this function to ensure your generation algorithm is producing the desired color variety.

   ```javascript
   function analyzeGeneratedSprite(generatedSpriteBuffer) {
     const uniqueColors = await getUniqueColors(generatedSpriteBuffer);
     if (uniqueColors.length < 5) {
       console.log('Generated sprite has low color variety. Adjusting parameters...');
       // Adjust generation parameters and try again
     }
   }
   ```

By leveraging the `getUniqueColors` function, developers can gain valuable insights into the color composition of their sprite assets, enabling better decision-making in sprite creation, optimization, and analysis processes.