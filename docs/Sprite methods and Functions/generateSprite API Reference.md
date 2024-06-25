
  
  # **Sprite Generation with OpenAI**

High Level

This is a function that is exported from our Node.js SDK, which you can install from NPM and import from the `sprite` object like this:

```
import { generateSprite } from 'sprite';
```

## Why should I use this function?

The `generateSprite` function allows you to generate sprite frames using OpenAI's DALL-E-3 and GPT models. It takes a description of the character you want to generate and produces a set of six frames optimized for walking animations, resembling Super Nintendo graphics. This function is particularly useful if you need to create sprite animations for retro-style games or applications without having to manually design each frame.

## What parameters or arguments are required?

The `generateSprite` function accepts the following parameters:

1. `description` (string): A textual description of the character you want to generate.
2. `options` (object, optional): An object containing additional options for the sprite generation process. The available options are:
   - `iterations` (number): The number of iterations to run the sprite generation process. If provided, the function will return an array of iterations, each containing the generated sprite image and the corresponding frame dimensions.
   - `size` (string, optional): The size of the generated image, specified as `"width x height"`. If not provided, it defaults to `"1024x1024"`.
   - `save` (boolean, optional): If `true`, the generated sprite image will be saved as a PNG file in the `assets` directory of your project.

## Prerequisites

Before using this function, ensure that you have installed the required dependencies and set up the necessary API keys for OpenAI. Additionally, you should have a basic understanding of sprite animation and the Phaser.js framework, as the function provides output tailored for use with Phaser.js.

## How do I use this function?

To use the `generateSprite` function, follow these steps:

1. Import the function from the `sprite` module:

```javascript
import { generateSprite } from 'sprite';
```

2. Call the `generateSprite` function with the desired character description and any additional options:

```javascript
const characterDescription = 'a friendly robot';
const options = {
  iterations: 3, // Generate 3 iterations
  size: '512x512', // Set the image size to 512x512 pixels
  save: true // Save the generated images as PNG files
};

const spriteIterations = await generateSprite(characterDescription, options);
```

3. The function will return either an array of iterations (if `options.iterations` is provided) or a single object containing the generated sprite image and the corresponding frame dimensions (if `options.iterations` is not provided).

4. Use the returned data to load and animate the sprite in your application. For example, in a Phaser.js game:

```javascript
// Assuming you have a single iteration
const { messages, image } = spriteIterations[0];
const frameData = messages.content;

// Load the sprite sheet
this.load.spritesheet('characterSprite', image, frameData);

// Create an animation from the sprite sheet
this.anims.create({
  key: 'walk',
  frames: this.anims.generateFrameNumbers('characterSprite', { start: 0, end: 5 }),
  frameRate: 10,
  repeat: -1
});

// Use the animation in your game
const sprite = this.add.sprite(100, 100, 'characterSprite');
sprite.play('walk');
```

The `generateSprite` function leverages OpenAI's DALL-E-3 and GPT models to generate sprite frames based on your provided description. It incorporates instructions to ensure the frames are optimized for walking animations and resemble Super Nintendo graphics. By adjusting the options, you can control the number of iterations, image size, and whether to save the generated images as PNG files.
  
  