# CreateRequest Documentation

## Brief Description
CreateRequest is an interface used to define the parameters for creating a new model in the Ollama API.

## Usage
To use CreateRequest, import it from the Ollama library and provide it as a parameter when calling the `create` method of an Ollama instance.

```typescript
import { CreateRequest } from 'ollama';
```

## Parameters

- `model` (string, required): The name of the model to create.
- `path` (string, optional): The file path to the model definition.
- `modelfile` (string, optional): The content of the model definition file.
- `quantize` (string, optional): The quantization level to apply to the model.
- `stream` (boolean, optional): Whether to stream the creation process.

## Return Value
The CreateRequest interface itself doesn't return a value. It's used as an input for the `create` method, which returns a Promise resolving to a ProgressResponse or an AbortableAsyncIterator<ProgressResponse>, depending on whether streaming is enabled.

## Examples

1. Creating a model with a local modelfile:

```typescript
const request: CreateRequest = {
  model: 'my-custom-model',
  path: './my-model-definition.txt',
  stream: true
};

const response = await ollama.create(request);
```

2. Creating a model with an inline modelfile:

```typescript
const request: CreateRequest = {
  model: 'my-inline-model',
  modelfile: 'FROM llama2\nSYSTEM You are a helpful assistant.',
  quantize: '4bit'
};

const response = await ollama.create(request);
```

## Notes or Considerations

- Either `path` or `modelfile` must be provided, but not both.
- The `quantize` parameter allows you to reduce the model size and potentially improve performance, but may affect accuracy.
- When `stream` is set to `true`, you can receive progress updates during the model creation process.
- Ensure you have the necessary permissions and resources to create and store the model on your Ollama instance.