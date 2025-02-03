# rotateSpritesheet Documentation

## Brief Description
`rotateSpritesheet` is a function that rotates a spritesheet image by a specified number of degrees.

## Usage
To use `rotateSpritesheet`, you need to import it from the module where it's defined. Then, you can call the function with an image buffer and the desired rotation angle.

## Parameters
- `inputBuffer` (Buffer): The input image buffer containing the spritesheet.
- `degrees` (Number): The number of degrees to rotate the spritesheet. Positive values rotate clockwise, negative values rotate counterclockwise.

## Return Value
Returns a Promise that resolves to a Buffer containing the rotated spritesheet image.

## Examples

```javascript
import { rotateSpritesheet } from './spritesheetUtils';

// Assuming you have an image buffer
const imageBuffer = getImageBufferSomehow();

// Rotate the spritesheet 90 degrees clockwise
const rotatedSpritesheet = await rotateSpritesheet(imageBuffer, 90);

// Use the rotated spritesheet
// For example, save it to a file or use it in your game engine
```

## Notes or Considerations
- The function uses the Sharp library for image processing, which provides high-performance image manipulation.
- Rotation is performed around the center of the image.
- The output image dimensions may change if the rotation is not a multiple of 90 degrees.
- Consider the impact on your spritesheet's layout when rotating. You may need to adjust your animation frames or sprite positions after rotation.
- Large spritesheets may require more processing time and memory.