# generate Documentation

## Brief Description
The `generate` method creates a response from a text prompt using an AI model.

## Usage
To use `generate`, first import the Ollama class and create an instance. Then call the `generate` method with your request parameters.

```javascript
import { Ollama } from 'ollama-js';

const ollama = new Ollama();
const response = await ollama.generate({
  model: 'modelName',
  prompt: 'Your prompt here'
});
```

## Parameters
- `request` (GenerateRequest): An object containing the following properties:
  - `model` (string, required): The name of the model to use.
  - `prompt` (string, required): The text prompt to generate from.
  - `stream` (boolean, optional): Whether to stream the response.
  - `images` (Uint8Array[] | string[], optional): Images to include with the prompt.
  - Other optional parameters like `system`, `template`, `context`, etc.

## Return Value
- If `stream` is false: Promise<GenerateResponse>
- If `stream` is true: Promise<AbortableAsyncIterator<GenerateResponse>>

## Examples

### Basic usage:
```javascript
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Write a haiku about coding'
});
console.log(response.response);
```

### Streaming response:
```javascript
const stream = await ollama.generate({
  model: 'gpt-3',
  prompt: 'Explain quantum computing',
  stream: true
});

for await (const chunk of stream) {
  process.stdout.write(chunk.response);
}
```

## Notes or Considerations
- Ensure you have the necessary permissions to use the specified model.
- Large prompts or complex requests may take longer to process.
- When using images, they will be automatically encoded to base64.
- The method can handle both streaming and non-streaming responses based on the `stream` parameter.