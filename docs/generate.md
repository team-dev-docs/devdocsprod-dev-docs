# generate Documentation

## Brief Description
The `generate` method creates a response from a text prompt using an AI model.

## Usage
To use the `generate` method, you need to import the Ollama class and create an instance of it. Then, call the `generate` method with the appropriate parameters.

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
const response = await ollama.generate(request)
```

## Parameters
- `request` (GenerateRequest): An object containing the following properties:
  - `model` (string, required): The name of the model to use.
  - `prompt` (string, required): The text prompt to generate a response from.
  - `stream` (boolean, optional): Whether to stream the response or not.
  - `images` (Uint8Array[] | string[], optional): Array of images to include in the request.
  - Other optional parameters as defined in the GenerateRequest interface.

## Return Value
- If `stream` is `true`: Returns a Promise that resolves to an `AbortableAsyncIterator<GenerateResponse>`.
- If `stream` is `false` or not specified: Returns a Promise that resolves to a `GenerateResponse` object.

## Examples

1. Basic usage:
```javascript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'What is the capital of France?'
})
console.log(response.response)
```

2. Streaming response:
```javascript
const stream = await ollama.generate({
  model: 'llama2',
  prompt: 'Write a short story about a robot.',
  stream: true
})

for await (const chunk of stream) {
  console.log(chunk.response)
}
```

3. Including an image:
```javascript
const imageData = await fetch('path/to/image.jpg').then(res => res.arrayBuffer())
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Describe this image',
  images: [new Uint8Array(imageData)]
})
console.log(response.response)
```

## Notes or Considerations
- When using the `stream` option, make sure to handle the async iterator properly to receive all chunks of the response.
- The `images` parameter can accept both Uint8Array and base64 encoded strings. The method will automatically encode Uint8Array images to base64.
- Be aware of the model's capabilities and limitations when crafting prompts and including images.
- The method can throw errors, so it's recommended to use try-catch blocks or .catch() when calling it.