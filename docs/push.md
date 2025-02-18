# push Documentation

## Brief Description
The `push` method pushes a model to the Ollama registry, allowing for optional streaming of the progress.

## Usage
To use the `push` method, you need to create an instance of the Ollama class and then call the `push` method with the required parameters.

```javascript
import Ollama from 'ollama'

const ollama = new Ollama()
```

## Parameters
- `request` (object, required): An object containing the following properties:
  - `model` (string, required): The name of the model to push.
  - `stream` (boolean, optional): If set to `true`, the method will return a stream of progress responses.
  - `insecure` (boolean, optional): If set to `true`, allows insecure connections for pushing the model.

## Return Value
The `push` method returns a Promise that resolves to either:
- A `ProgressResponse` object if `stream` is `false` or not specified.
- An `AbortableAsyncIterator<ProgressResponse>` if `stream` is `true`, which yields progress responses.

## Examples

### Basic usage:
```javascript
const result = await ollama.push({ model: 'my-model' })
console.log(result)
```

### Streaming progress:
```javascript
const stream = await ollama.push({ model: 'my-model', stream: true })
for await (const progress of stream) {
  console.log(`Push progress: ${progress.status}`)
}
```

## Notes or Considerations
- Ensure you have the necessary permissions to push models to the Ollama registry.
- The `insecure` option should be used with caution, as it may compromise the security of the model transfer.
- When using the streaming option, remember to handle potential errors and the end of the stream appropriately.
- The push operation may take some time depending on the size of the model and your network speed.