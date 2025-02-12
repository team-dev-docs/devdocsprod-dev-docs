# removeBackgroundColor Documentation

## Brief Description
The `removeBackgroundColor` function removes a specified color from an image, making it transparent.

## Usage
To use `removeBackgroundColor`, you need to import it from the appropriate module and call it with the required parameters.

```javascript
import { removeBackgroundColor } from './path/to/module';
```

## Parameters
- `inputPath` (string, required): The file path of the input image.
- `outputPath` (string, required): The file path where the processed image will be saved.
- `targetColor` (string, required): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
- `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
- `options` (object, optional): Additional options for image processing. Default is an empty object.

## Return Value
The function returns a Promise that resolves with the result of the image processing operation.

## Examples

### Basic Usage
```javascript
await removeBackgroundColor('input.png', 'output.png', '#FFFFFF');
```

### With Color Threshold
```javascript
await removeBackgroundColor('input.png', 'output.png', '#FF0000', 10);
```

## Notes or Considerations
- The function uses the Jimp library for image processing.
- The color matching is based on the `Jimp.colorDiff` method, which calculates the difference between colors.
- Large color thresholds may result in unintended transparency in areas with similar colors.
- Ensure that the input file exists and the output path is writable.
- The function works best with images that have a distinct background color.