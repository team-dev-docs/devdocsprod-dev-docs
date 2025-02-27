# generate Documentation

## Brief Description

`generate` is a method that creates a response from a text prompt using the Ollama AI model.

## Usage

To use the `generate` method, you need to import the Ollama class and create an instance of it. Then, you can call the `generate` method on that instance.

```javascript
import { Ollama } from 'ollama-js';

const ollama = new Ollama();
```

## Parameters

The `generate` method takes a single parameter:

- `request` (object, required): A `GenerateRequest` object with the following properties:
  - `model` (string, required): The name of the model to use.
  - `prompt` (string, required): The input text prompt.
  - `stream` (boolean, optional): Whether to stream the response. Default is `false`.
  - `images` (Array<string | Uint8Array>, optional): An array of images to include with the prompt.

## Return Value

The `generate` method returns a Promise that resolves to:

- If `stream` is `false`: A `GenerateResponse` object.
- If `stream` is `true`: An `AbortableAsyncIterator<GenerateResponse>` that yields response messages.

## Examples

1. Basic usage:

```javascript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'What is the capital of France?'
});
console.log(response.response);
```

2. Streaming the response:

```javascript
const stream = await ollama.generate({
  model: 'llama2',
  prompt: 'Write a short story about a robot.',
  stream: true
});

for await (const chunk of stream) {
  console.log(chunk.response);
}
```

3. Including an image:

```javascript
const imageData = await fetch('https://example.com/image.jpg').then(res => res.arrayBuffer());
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Describe this image:',
  images: [new Uint8Array(imageData)]
});
console.log(response.response);
```

## Notes or Considerations

- The `generate` method can handle both text-only prompts and prompts with images.
- When using images, they can be provided as either base64 encoded strings or Uint8Arrays. The method will automatically encode Uint8Arrays to base64.
- Streaming is useful for getting partial results as they become available, which can be beneficial for long-running generations.
- Make sure to handle any potential errors that may occur during the API call.