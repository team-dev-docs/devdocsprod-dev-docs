# generateSprite Documentation

## Brief Description
The `generateSprite` function generates a sprite sheet image based on a given description, using AI to create character frames for walking animations.

## Usage
To use `generateSprite`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A description of the character to generate.
- `options` (object, optional): Configuration options for the sprite generation.
  - `iterations` (number, optional): Number of iterations to generate multiple sprites.
  - `size` (string, optional): Size of the generated image (default: "1024x1024").
  - `save` (boolean, optional): Whether to save the generated image to disk.

## Return Value
The function returns an object or an array of objects, depending on the `iterations` option:
- Without iterations: `{ messages: object, image: string }`
- With iterations: `[{ messages: object, image: string }, ...]`

Where:
- `messages`: Contains frame size information (frameWidth and frameHeight).
- `image`: A base64-encoded string of the generated sprite sheet image.

## Examples

### Basic usage:
```javascript
const result = await sprite.generateSprite("A pixelated warrior");
console.log(result.messages); // Frame size information
console.log(result.image); // Base64 encoded image
```

### With multiple iterations:
```javascript
const results = await sprite.generateSprite("A cute cat", { iterations: 3 });
results.forEach((result, index) => {
  console.log(`Iteration ${index + 1}:`, result.messages);
});
```

### Saving the generated image:
```javascript
await sprite.generateSprite("A space alien", { save: true });
// Image will be saved in the assets folder
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying output quality.
- Generated sprites are designed for walking animations with 6 frames in a 2x3 grid.
- Images are generated in grayscale to optimize for game development use.
- The function may take some time to execute due to AI processing.
- Ensure you have the necessary API access and credentials set up for OpenAI services.