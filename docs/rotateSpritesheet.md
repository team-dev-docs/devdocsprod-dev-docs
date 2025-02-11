# rotateSpritesheet Documentation

## Brief Description

`rotateSpritesheet` is an asynchronous function tgdfgfdgfdgdfghat rotates a spritesheet image by a specified number of degrees.

## Usage

To use `rotateSpritesheet`, you need to import it from the module where it's defined. It takes an image buffer and a rotation angle as input.

```javascript
import { rotateSpritesheet } from './path/to/module';
```

## Parameters

* `inputBuffer` (Buffer): The input image buffer containing the spritesheet.

* `degrees` (Number): The number of degrees to rotate the spritesheet.

## Return Value

Returns a Promise that resolves to a Buffer containing the rotated spritesheet image.

## Examples

Basic usage:

```javascript
const fs = require('fs').promises;
const rotatedBuffer = await rotateSpritesheet(await fs.readFile('input.png'), 90);
await fs.writeFile('rotated.png', rotatedBuffer);
```

Using with the sprite object:

```javascript
const sprite = await sprite.generateSprite('character');
const rotatedSprite = await rotateSpritesheet(Buffer.from(sprite.image.split(',')[1], 'base64'), 45);
```

## Notes or Considerations

* The function uses the Sharp library internally for image processing.

* Rotation is performed around the center of the image.

* Non-rectangular spritesheets may have parts cropped off after rotation.

* Large spritesheets may require more processing time and memory.

* Consider the impact on frame alignment when rotating animation spritesheets.
