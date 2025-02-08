# create Documentation

## Brief Description
The `create` method creates a new model from a stream of data or a modelfile.

## Usage
To use the `create` method, you need to import the Ollama class and instantiate it. Then, you can call the `create` method on the instance.

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
const response = await ollama.create(createRequest)
```

## Parameters
The `create` method accepts a `CreateRequest` object with the following properties:

- `model` (string, required): The name of the model to create.
- `path` (string, optional): The path to the modelfile.
- `modelfile` (string, optional): The content of the modelfile.
- `quantize` (string, optional): The quantization level to apply.
- `stream` (boolean, optional): Whether to stream the response.

You must provide either `path` or `modelfile`, but not both.

## Return Value
The `create` method returns a Promise that resolves to either:

- A `ProgressResponse` object if `stream` is false or not specified.
- An `AbortableAsyncIterator<ProgressResponse>` if `stream` is true.

## Examples

1. Creating a model from a modelfile path:

```javascript
const response = await ollama.create({
  model: 'my-new-model',
  path: '/path/to/modelfile'
})
```

2. Creating a model with streaming enabled:

```javascript
const stream = await ollama.create({
  model: 'my-streaming-model',
  modelfile: 'FROM llama2\n...',
  stream: true
})

for await (const chunk of stream) {
  console.log(chunk.status)
}
```

## Notes or Considerations

- The `create` method will automatically parse the modelfile and replace the FROM and ADAPTER commands with the corresponding blob hashes.
- If using a `path`, the method will read the file content and process it.
- When streaming is enabled, you can iterate over the response to get progress updates.
- Be cautious when creating large models, as it may consume significant resources.
- Ensure you have the necessary permissions to read the modelfile and create models on the Ollama server.