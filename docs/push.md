# push Documentation

## Brief Description
The `push` method pushes a model to the Ollama registry, allowing for optional streaming of progress updates.

## Usage
To use the `push` method, you need an instance of the Ollama class. Here's how to push a model:

```javascript
import Ollama from 'ollama-js';

const ollama = new Ollama();
await ollama.push({ model: 'mymodel' });
```

## Parameters
- `request` (object, required): An object containing:
  - `model` (string, required): The name of the model to push.
  - `stream` (boolean, optional): If true, returns progress updates as a stream.
  - `insecure` (boolean, optional): If true, allows insecure connections.

## Return Value
Returns a Promise that resolves to:
- A `ProgressResponse` object if `stream` is false.
- An `AbortableAsyncIterator<ProgressResponse>` if `stream` is true.

## Examples

### Basic usage:
```javascript
const response = await ollama.push({ model: 'mymodel' });
console.log(response.status);
```

### Streaming progress:
```javascript
const stream = await ollama.push({ model: 'mymodel', stream: true });
for await (const update of stream) {
  console.log(`Progress: ${update.completed}/${update.total}`);
}
```

## Notes or Considerations
- Ensure you have the necessary permissions to push models to the Ollama registry.
- The `insecure` option should be used with caution, as it may compromise security.
- Streaming can be useful for providing real-time feedback on long-running push operations.