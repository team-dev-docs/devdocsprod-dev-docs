# encodeImage Documentation

## Brief Description
The `encodeImage` method converts image data to a base64-encoded string, supporting both Uint8Array and string inputs.

## Usage
This method is used internally by the Ollama class to prepare image data for API requests. It's not typically called directly by users.

## Parameters
- `image` (Uint8Array | string): The image data to encode. Can be a Uint8Array of raw image data or a string (potentially already base64 encoded).

## Return Value
- `Promise<string>`: A Promise that resolves to the base64-encoded image string.

## Examples

```javascript
const ollama = new Ollama();

// Example with a Uint8Array
const imageData = new Uint8Array([/* ... */]); // Raw image data
const encodedImage = await ollama.encodeImage(imageData);

// Example with a string (potentially already base64 encoded)
const base64String = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBD...";
const encodedImage = await ollama.encodeImage(base64String);
```

## Notes or Considerations
- This method is primarily used internally by other Ollama methods that handle image inputs.
- If a string is provided, the method assumes it might already be base64 encoded and returns it as-is.
- For Uint8Array inputs, the method performs the base64 encoding.
- This method is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.