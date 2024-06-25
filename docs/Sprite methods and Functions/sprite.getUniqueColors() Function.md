
  
  # **getUniqueColors()**

**High Level**

This is an asynchronous function that retrieves a list of unique colors from an image file. It is part of the `sprite` object, which is a Node.js SDK that you can install from NPM and import into your project.

```javascript
import { sprite } from 'sprite';
```

**Why should I use this function?**

You should use this function when you need to analyze the color palette of an image. It can be useful for various purposes, such as generating color schemes, creating color-based filters, or optimizing images by reducing the number of colors.

**Parameters/Arguments**

1. `imagePath` (string, required): The path to the image file you want to analyze.
2. `options` (object, optional): An optional object that can be used to pass additional options to the function. Currently, there are no additional options supported.

**Prerequisites**

Before using this function, make sure you have the following:

1. The `sprite` package installed and imported into your project.
2. The `jimp` package installed, as it is used internally by the `getUniqueColors` function to read and process the image data.

**How to use this function?**

To use the `getUniqueColors` function, follow these steps:

1. Import the `sprite` object from the `sprite` package.
2. Call the `getUniqueColors` function, passing the path to the image file as the first argument.
3. The function returns a Promise that resolves to an array of integers representing the unique colors in the image.

Example usage:

```javascript
import { sprite } from 'sprite';

const imagePath = './path/to/your/image.jpg';

sprite.getUniqueColors(imagePath)
  .then(uniqueColors => {
    console.log('Unique colors:', uniqueColors);
    // Do something with the unique colors array
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

In this example, the `getUniqueColors` function is called with the `imagePath` argument, and the resulting Promise resolves to an array of unique colors (`uniqueColors`). You can then use this array for further processing or analysis as needed.

**Note:** The function ignores fully transparent pixels (alpha value of 0) when determining the unique colors.
  
  