# generate Documentation

## Brief Description
The `generate` method sends a text prompt to an Ollama model and receives a generated response, with optional streaming support.

## Usage
To use the `generate` method, you need to create an instance of the Ollama class or use the default exported instance. Then, call the `generate` method with the appropriate parameters.

```javascript
import ollama from 'ollama'

const response = await ollama.generate(/* parameters */)
```

## Parameters
The `generate` method accepts a single object parameter with the following properties:

- `model` (string, required): The name of the model to use for generation.
- `prompt` (string, required): The text prompt to send to the model.
- `stream` (boolean, optional): If set to `true`, the response will be streamed. Default is `false`.
- `system` (string, optional): A system message to precede the prompt.
- `template` (string, optional): A custom prompt template.
- `context` (number[], optional): The context for continued generation.
- `options` (object, optional): Additional generation options like temperature, top_k, etc.
- `images` (Uint8Array[] | string[], optional): Images to include with the prompt.
- `format` (string | object, optional): The desired output format.

## Return Value
- If `stream` is `false`: Returns a `Promise<GenerateResponse>`.
- If `stream` is `true`: Returns a `Promise<AbortableAsyncIterator<GenerateResponse>>`.

The `GenerateResponse` object includes properties like `response`, `context`, and various timing information.

## Examples

1. Basic usage:
```javascript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Tell me a short joke'
})
console.log(response.response)
```

2. Streaming response:
```javascript
const stream = await ollama.generate({
  model: 'llama2',
  prompt: 'Write a short story',
  stream: true
})

for await (const part of stream) {
  process.stdout.write(part.response)
}
```

3. Using images:
```javascript
const response = await ollama.generate({
  model: 'llava',
  prompt: 'What\'s in this image?',
  images: ['./path/to/image.jpg']
})
console.log(response.response)
```

## Notes or Considerations
- The `images` parameter can accept file paths (as strings) or Uint8Arrays containing image data.
- When using `stream: true`, you receive an `AbortableAsyncIterator` which allows you to abort the generation process if needed.
- The `context` parameter can be used for continuing a conversation or generation based on previous interactions.
- Custom `options` allow fine-tuning of the generation process, such as adjusting temperature or setting stop tokens.
- Ensure you have the appropriate model loaded on your Ollama instance before calling `generate`.