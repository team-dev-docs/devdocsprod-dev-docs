
  
  # **Remove Background Color**

**High Level**

This is an asynchronous function provided by the Sprite Node.js SDK, designed to remove a specified background color from an image. The function utilizes the `jimp` library for image processing. You can import and use this function from the `sprite` object after installing the SDK via npm.

```javascript
import { sprite } from 'sprite';
```

**Why should I use this function?**

You should use this function if you need to remove a specific background color from an image. This can be useful in various scenarios, such as preparing images for use in web or mobile applications, removing unwanted backgrounds, or creating transparent images.

**What are the parameters or arguments required?**

The `removeBackgroundColor` function accepts the following parameters:

1. `inputPath` (string): The file path or URL of the input image.
2. `outputPath` (string): The file path or location where the processed image should be saved.
3. `targetColor` (string): The CSS color code (e.g., '#FFFFFF' for white) or color name (e.g., 'blue') representing the background color to be removed.
4. `colorThreshold` (number, optional): A numeric value representing the maximum color difference threshold for determining if a pixel should be made transparent. The default value is 0.
5. `options` (object, optional): An object containing additional options for the image processing operation. Currently, no specific options are documented.

**Prerequisites**

Before using this function, make sure you have the following prerequisites:

1. Node.js installed on your system.
2. The Sprite Node.js SDK installed and imported into your project.
3. The `jimp` library installed as a dependency, as it is used internally by the function.

**How do I use this function?**

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite';

const inputPath = 'path/to/input/image.jpg';
const outputPath = 'path/to/output/transparent.png';
const targetColor = '#FFFFFF'; // White color

sprite.removeBackgroundColor(inputPath, outputPath, targetColor)
  .then(result => {
    console.log('Background removal successful!');
    console.log(result); // Log the result (e.g., file path of the processed image)
  })
  .catch(error => {
    console.error('Error removing background:', error);
  });
```

In this example, the function takes the following arguments:

- `inputPath`: The file path of the input image.
- `outputPath`: The file path where the processed image with the removed background will be saved.
- `targetColor`: The CSS color code representing the background color to be removed (in this case, white).

The function returns a Promise that resolves with the result of the image processing operation (e.g., the file path of the processed image).

If you need to adjust the color threshold or provide additional options, you can pass those as additional arguments to the `removeBackgroundColor` function.
  
  