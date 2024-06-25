
  
  # **Image Processing Utility**

**High Level**

This is a function that processes an image by replacing a specific color with transparency. It is part of a Node.js SDK that you can install via NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

You should use this function if you need to make a specific color in an image transparent. This can be useful for various purposes, such as creating images with transparent backgrounds, removing unwanted colors from an image, or preparing images for further processing or compositing.

## What are the required parameters?

This function expects the following parameters:

1. `image`: An instance of the `Jimp` class representing the image you want to process.
2. `colorToReplace`: An integer representing the color you want to replace with transparency. This color should be in the RGBA format (e.g., `Jimp.rgbaToInt(255, 0, 0, 255)` for red).
3. `colorThreshold` (optional): A number representing the maximum color difference allowed for a pixel to be considered the same as `colorToReplace`. If not provided, it defaults to `0`, meaning that only pixels with an exact match to `colorToReplace` will be made transparent.

## Prerequisites

Before using this function, make sure you have the following:

1. The `Jimp` library installed and imported in your project.
2. An instance of the `Jimp` class representing the image you want to process.

## How do I use this function?

Here's an example of how you can use this function:

```javascript
import Jimp from 'jimp';
import { sprite } from 'sprite';

// Load an image
const image = await Jimp.read('path/to/your/image.png');

// Define the color to replace (e.g., red)
const colorToReplace = Jimp.rgbaToInt(255, 0, 0, 255);

// Define the color threshold (optional)
const colorThreshold = 10;

// Call the function to replace the specified color with transparency
sprite.replaceColorWithTransparency(image, colorToReplace, colorThreshold);

// Save the processed image
await image.writeAsync('path/to/output/image.png');
```

In this example, the function `sprite.replaceColorWithTransparency` is called with the following arguments:

1. `image`: An instance of the `Jimp` class representing the image you want to process.
2. `colorToReplace`: The integer value representing the red color (`Jimp.rgbaToInt(255, 0, 0, 255)`).
3. `colorThreshold`: A value of `10`, which means that pixels with a color difference of up to 10 from the `colorToReplace` value will be made transparent.

After calling the function, the processed image can be saved using the `writeAsync` method from the `Jimp` library.
  
  