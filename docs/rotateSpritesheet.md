# rotateSpritesheet Documentation

## Overview

The `rotateSpritesheet` function is a utility for rotating sprite sheets in image processing applications. It takes an input buffer containing the sprite sheet image and rotates it by a specified number of degrees.

## JavaScript Example

```javascript
import { rotateSpritesheet } from './spriteUtils';

// Assuming you have an image buffer of your sprite sheet
const inputBuffer = getSpritesheetBuffer(); // Replace with your actual method of obtaining the buffer
const rotationDegrees = 90;

async function rotateMySprite() {
  try {
    const rotatedBuffer = await rotateSpritesheet(inputBuffer, rotationDegrees);
    // Use the rotated buffer as needed, e.g., save to file or display
    console.log('Sprite sheet rotated successfully');
  } catch (error) {
    console.error('Error rotating sprite sheet:', error);
  }
}

rotateMySprite();
```

## Use Cases

1. **Character Orientation**: Rotate character sprites to face different directions without creating separate assets for each orientation.

2. **Dynamic Layout Adjustment**: Adjust the orientation of UI elements or game objects to fit different screen orientations or layouts.

3. **Animation Effects**: Create rotation-based animations or transitions by progressively rotating sprite sheets.

4. **Asset Optimization**: Generate rotated versions of sprites programmatically, reducing the need for storing multiple pre-rotated versions and saving storage space.

5. **Level Design**: Rotate environmental sprites or tilesets to create variety in game levels or map designs.

Remember that rotating sprite sheets may affect the layout and positioning of individual sprites within the sheet. It's important to update any sprite coordinates or frame calculations accordingly after rotation.