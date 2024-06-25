
  
  # **Generating 2D Game Assets with Sprite.AI**

High Level

The `generateHouseAsset` function is a part of the Sprite.AI Node.js SDK, which allows you to generate 2D assets for your Phaser.js game using OpenAI's DALL-E-3 model. You can install the SDK from NPM and import the `sprite` object as shown below:

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

The `generateHouseAsset` function provides a convenient way to generate 2D assets for your Phaser.js game using natural language descriptions. This can be particularly useful when you need to quickly create visual assets without the need for manual design or image editing. By leveraging the power of DALL-E-3, you can generate high-quality images based on your textual prompts.

## What parameters or arguments are required?

The `generateHouseAsset` function takes two parameters:

1. **description** (string): A textual description of the asset you want to generate. For example, "a red brick house with a white picket fence."
2. **options** (object, optional): An object containing additional options for the generation process:
   - `iterations` (number): The number of iterations or variations of the asset to generate.
   - `size` (string): The desired size of the generated image, specified in the format "widthxheight" (e.g., "1024x1024"). If not provided, the default size is "1024x1024".

## Prerequisites

To use the `generateHouseAsset` function, you need to have the following:

1. An OpenAI API key: You will need to obtain an API key from OpenAI to authenticate with their services.
2. The Sprite.AI Node.js SDK installed: You can install the SDK from NPM by running `npm install sprite`.

## How do I use this function?

Here's an example of how you can use the `generateHouseAsset` function:

```javascript
import { sprite } from 'sprite';

const openAiObject = new sprite.OpenAI('your_openai_api_key_here');

// Generate a single asset
const response = await openAiObject.generateHouseAsset('a cozy cottage in the forest');
console.log(response);

// Generate multiple iterations of an asset
const options = { iterations: 3, size: '512x512' };
const iterations = await openAiObject.generateHouseAsset('a modern apartment building', options);
console.log(iterations);
```

In this example, the first call to `generateHouseAsset` generates a single 2D asset depicting a cozy cottage in the forest. The second call generates three iterations (variations) of a modern apartment building, with each image having a size of 512x512 pixels.

The function leverages the DALL-E-3 model from OpenAI to generate the images based on the provided textual descriptions. The generated assets can be used directly in your Phaser.js game or further processed as needed.
  
  