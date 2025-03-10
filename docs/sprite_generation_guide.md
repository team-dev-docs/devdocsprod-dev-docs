# SpriteAI Sprite Generation Guide

This guide provides comprehensive instructions on using SpriteAI to generate various types of sprites for your game development needs. SpriteAI leverages advanced AI models to create high-quality sprite assets based on text descriptions.

## Table of Contents

1. [Character Spritesheets](#character-spritesheets)
2. [Landscape Sprites](#landscape-sprites)
3. [Best Practices](#best-practices)

## Character Spritesheets

SpriteAI can generate character spritesheets with multiple animation states and frames.

### Usage

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';

const result = await generateCharacterSpritesheet('a cute robot', {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
});
```

### Options

- `states`: Array of animation states (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames per animation state (default: 6)
- `size`: Output size of the spritesheet (default: '1024x1024')
- `style`: Art style of the sprites (default: 'pixel-art')
- `padding`: Padding between individual sprites (default: 1)
- `direction`: Base direction the character faces (default: 'right')
- `save`: Whether to save the generated spritesheet to disk (default: false)

### Output

The function returns an object containing:

- `original`: URL of the original generated image
- `spritesheet`: Base64-encoded PNG data of the processed spritesheet
- `metadata`: Detailed information about the spritesheet, including states, frames, and dimensions

## Landscape Sprites

SpriteAI can generate landscape sprites suitable for game backgrounds.

### Usage

```javascript
import { generateLandscapeSprite } from 'spriteAI';

const result = await generateLandscapeSprite('a lush forest with a winding river', {
  size: '1024x1024',
  style: 'pixel-art',
  timeOfDay: 'sunset',
  weather: 'clear',
  perspective: 'side-scrolling',
  save: true,
  removeBackground: true,
  backgroundColor: '#FFFFFF',
  colorThreshold: 0.1
});
```

### Options

- `size`: Output size of the landscape sprite (default: '1024x1024')
- `style`: Art style of the sprite (default: 'pixel-art')
- `timeOfDay`: Time of day setting (default: 'day', options: 'day', 'night', 'sunset', 'dawn')
- `weather`: Weather conditions (default: 'clear', options: 'clear', 'rainy', 'foggy', 'snowy')
- `perspective`: Viewing perspective (default: 'side-scrolling', options: 'side-scrolling', 'top-down', 'isometric')
- `save`: Whether to save the generated sprite to disk (default: false)
- `removeBackground`: Option to remove the background (default: false)
- `backgroundColor`: Color to remove if removeBackground is true (default: '#FFFFFF')
- `colorThreshold`: Threshold for color removal (default: 0.1)

### Output

The function returns an object containing:

- `original`: URL of the original generated image
- `landscape`: Base64-encoded PNG data of the processed landscape sprite
- `metadata`: Detailed information about the sprite, including description, style, and dimensions

## Best Practices

1. **Detailed Descriptions**: Provide clear and detailed descriptions for best results. Include specific details about character appearance, landscape features, or desired style.

2. **Consistent Style**: When generating multiple sprites for a game, maintain a consistent style by using the same `style` option across generations.

3. **Appropriate Sizing**: Choose appropriate sizes based on your game's requirements. Larger sizes generally provide more detail but require more processing time.

4. **Background Removal**: For character sprites, consider using the `removeBackground` option to create transparent sprites that can be easily integrated into your game.

5. **Save Option**: Use the `save` option to automatically save generated sprites to your project's asset folder for easy access.

6. **Iterate and Refine**: If the initial result isn't perfect, try adjusting your description or options and regenerate. AI models may require a few attempts to produce the desired output.

7. **Organize Assets**: Use descriptive filenames when saving sprites to keep your project organized. The auto-generated filenames include the description for easy identification.

8. **Post-Processing**: While SpriteAI produces high-quality sprites, you may want to perform additional post-processing in image editing software for final touches or specific game engine requirements.

By following these guidelines and exploring the various options available in SpriteAI, you can efficiently generate a wide range of sprite assets for your game development projects.