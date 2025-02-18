# create Documentation

## Brief Description
The `create` method creates a new model from a stream of data or a modelfile.

## Usage
To use the `create` method, you need to import the Ollama class and instantiate it. Then you can call the `create` method on the instance.

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
```

## Parameters
The `create` method accepts a `CreateRequest` object with the following properties:

- `model` (string, required): The name of the model to create.
- `path` (string, optional): The path to the modelfile.
- `modelfile` (string, optional): The content of the modelfile.
- `stream` (boolean, optional): Whether to stream the response.
- `quantize` (string, optional): The quantization level for the model.

Note: You must provide either `path` or `modelfile`, but not both.

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
console.log(response)
```

2. Creating a model with streaming progress:

```javascript
const stream = await ollama.create({
  model: 'my-streaming-model',
  modelfile: 'FROM llama2\n\nSYSTEM You are a helpful assistant.',
  stream: true
})

for await (const chunk of stream) {
  console.log(chunk.status)
}
```

## Notes or Considerations

- If you provide a `path`, the method will read the modelfile content and parse it before sending the request.
- The method supports automatic parsing of `FROM` and `ADAPTER` commands in the modelfile, replacing them with corresponding blob hashes if the files exist.
- When using `stream: true`, you can abort the operation by calling the `abort()` method on the returned `AbortableAsyncIterator`.
- The `create` method may throw an error if neither `path` nor `modelfile` is provided.
- Be cautious when using large modelfiles, as they may consume significant resources during the creation process.