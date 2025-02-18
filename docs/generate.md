# generate Documentation

## Brief Description
The `generate` method creates a response from a text prompt using a specified AI model.

## Usage
To use `generate`, you need to create an instance of the Ollama class and call the `generate` method with the appropriate parameters.

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
const response = await ollama.generate(request)
```

## Parameters
The `generate` method accepts a single parameter:

- `request` (Required): An object of type `GenerateRequest` with the following properties:
  - `model` (Required): String - The name of the model to use.
  - `prompt` (Required): String - The input text to generate a response from.
  - `stream` (Optional): Boolean - Whether to stream the response or not.
  - `options` (Optional): Object - Additional options for generation (e.g., temperature, top_k, etc.).

## Return Value
The `generate` method returns a Promise that resolves to either:
- A `GenerateResponse` object if `stream` is false or not specified.
- An `AbortableAsyncIterator<GenerateResponse>` if `stream` is true.

## Examples

### Basic usage:
```javascript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Tell me a joke about programming'
})
console.log(response.response)
```

### Streaming response:
```javascript
const stream = await ollama.generate({
  model: 'llama2',
  prompt: 'Write a short story',
  stream: true
})

for await (const chunk of stream) {
  console.log(chunk.response)
}
```

## Notes or Considerations
- The `generate` method can handle images as part of the input. If `images` are provided in the request, they will be automatically encoded.
- Streaming allows for real-time processing of the generated response, which can be useful for long-form content or interactive applications.
- The specific options available in the `options` object may vary depending on the model being used.
- Error handling should be implemented when using this method, as network issues or invalid requests may occur.