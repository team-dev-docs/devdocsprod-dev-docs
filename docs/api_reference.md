# Sprite API Reference

## generateCharacterSpritesheet

Generates a character spritesheet based on the provided description and options.

### Signature
```javascript
async function generateCharacterSpritesheet(description: string, options?: Object): Promise<Object>
```

### Parameters

- `description` (string): A textual description of the character to generate.
- `options` (Object, optional): Configuration options for the spritesheet generation.
  - `states` (Array<string>, default: ['idle', 'walk', 'run', 'attack']): Animation states to generate.
  - `framesPerState` (number, default: 6): Number of frames per animation state.
  - `size` (string, default: '1024x1024'): Output size of the spritesheet.
  - `style` (string, default: 'pixel-art'): Art style of the spritesheet.
  - `padding` (number, default: 1): Padding between sprites in the sheet.
  - `direction` (string, default: 'right'): Base direction the character is facing.
  - `save` (boolean): Whether to save the generated spritesheet to disk.

### Returns

Promise<Object>: An object containing:
- `original` (string): URL of the original generated image.
- `spritesheet` (string): Base64-encoded PNG data of the processed spritesheet.
- `metadata` (Object): Metadata about the generated spritesheet, including:
  - `states` (Array<string>): List of animation states.
  - `framesPerState` (number): Number of frames per state.
  - `totalFrames` (number): Total number of frames in the spritesheet.
  - `dimensions` (Object): Width and height of the spritesheet.
  - `frameData` (Object): Detailed information about each animation state's frames.

### Example Usage

```javascript
const sprite = await generateCharacterSpritesheet("a cute robot", {
  states: ['idle', 'walk', 'jump'],
  framesPerState: 8,
  size: '2048x2048',
  style: 'cartoon',
  save: true
});

console.log(sprite.metadata);
// Use sprite.spritesheet for rendering in your game
```

## generateLandscapeSprite

Generates a landscape sprite based on the provided description and options.

### Signature
```javascript
async function generateLandscapeSprite(description: string, options?: Object): Promise<Object>
```

### Parameters

- `description` (string): A textual description of the landscape to generate.
- `options` (Object, optional): Configuration options for the landscape generation.
  - `size` (string, default: '1024x1024'): Output size of the sprite.
  - `style` (string, default: 'pixel-art'): Art style of the sprite.
  - `timeOfDay` (string, default: 'day'): Time of day setting (e.g., 'day', 'night', 'sunset', 'dawn').
  - `weather` (string, default: 'clear'): Weather conditions (e.g., 'clear', 'rainy', 'foggy', 'snowy').
  - `perspective` (string, default: 'side-scrolling'): Perspective of the landscape (e.g., 'side-scrolling', 'top-down', 'isometric').
  - `save` (boolean, default: false): Whether to save the generated image to disk.
  - `removeBackground` (boolean): Whether to remove the background from the generated image.
  - `backgroundColor` (string): The background color to remove (if removeBackground is true).
  - `colorThreshold` (number): The color threshold for background removal (if removeBackground is true).

### Returns

Promise<Object>: An object containing:
- `original` (string): URL of the original generated image.
- `landscape` (string): Base64-encoded PNG data of the processed landscape sprite.
- `metadata` (Object): Metadata about the generated landscape, including:
  - `description` (string): The original description used.
  - `style` (string): The art style used.
  - `timeOfDay` (string): The time of day setting.
  - `weather` (string): The weather conditions.
  - `perspective` (string): The perspective used.
  - `dimensions` (Object): Width and height of the sprite.

### Example Usage

```javascript
const landscape = await generateLandscapeSprite("a lush forest with a river", {
  size: '2048x1024',
  style: 'watercolor',
  timeOfDay: 'sunset',
  weather: 'clear',
  perspective: 'side-scrolling',
  save: true,
  removeBackground: true,
  backgroundColor: '#FFFFFF',
  colorThreshold: 0.1
});

console.log(landscape.metadata);
// Use landscape.landscape for rendering in your game
```