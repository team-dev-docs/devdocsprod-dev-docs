
  
  # **Generating House Assets with Dalle-3**

**High Level**

This is an asynchronous function `generateHouseAsset` that generates 2D assets depicting a house using OpenAI's Dall-E 3 model. It is designed to be used within a Phaser JS game for creating house assets. The function is part of the sprite AI Node.js SDK, which can be installed from NPM and imported as shown below:

```javascript
import { sprite } from 'sprite-ai';
```

**Why should I use this function?**

The `generateHouseAsset` function provides a convenient way to generate custom 2D house assets using natural language prompts. This can be useful when you need unique assets for your game that are not readily available from existing asset libraries. By leveraging the powerful generative capabilities of Dall-E 3, you can create high-quality, diverse house assets tailored to your specific requirements.

**What are the parameters or arguments required?**

The function takes two arguments:

1. `description` (string): A natural language description of the house asset you want to generate. This prompt will be used by Dall-E 3 to generate the asset.

2. `options` (object, optional): An object containing additional options for generating the asset. Currently, the only supported option is:
   - `iterations` (number): The number of iterations (or variations) of the house asset you want to generate. If not provided, only a single asset will be generated.
   - `size` (string, optional): The size of the generated asset in the format "widthxheight". If not provided, the default size is "1024x1024".

**Prerequisites**

Before using this function, you need to have:

1. An active OpenAI API key with access to the Dall-E 3 model.
2. The `openAiObject` instance properly configured with your API key.

**How do I use this function?**

Here's an example of how to use the `generateHouseAsset` function:

```javascript
import { sprite } from 'sprite-ai';

const openAiObject = sprite.openai('your_openai_api_key');

// Generate a single house asset
const singleAsset = await sprite.generateHouseAsset('a cozy cottage with a thatched roof', { size: '512x512' });

// Generate multiple variations of a house asset
const multipleAssets = await sprite.generateHouseAsset('a modern house with a flat roof', { iterations: 3 });
```

In the example above, `singleAsset` will contain the generated 2D asset for a cozy cottage with a thatched roof, in a size of 512x512 pixels. `multipleAssets` will contain an array of three variations of a modern house with a flat roof, each with a size of 1024x1024 pixels (default size).

The generated assets can then be used within your Phaser JS game as textures or sprites, allowing you to create unique and visually appealing game environments with custom house assets.
  
  