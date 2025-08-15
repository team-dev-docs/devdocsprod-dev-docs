# push Documentation

## Brief Description
The `push` method pushes a model to the Ollama registry, with optional streaming of progress updates.

## Usage
To use the `push` method, you need to create an instance of the Ollama class and call the `push` method with the required parameters.

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
const result = await ollama.push({ model: 'mymodel' })
```

## Parameters
The `push` method accepts a single object parameter with the following properties:

- `model` (string, required): The name of the model to push to the registry.
- `stream` (boolean, optional): If set to `true`, the method will return a stream of progress updates. Default is `false`.
- `insecure` (boolean, optional): If set to `true`, allows insecure connections to the registry. Use with caution.

## Return Value
The `push` method returns a Promise that resolves to:

- If `stream` is `false`: A `ProgressResponse` object containing the final status of the push operation.
- If `stream` is `true`: An `AbortableAsyncIterator<ProgressResponse>` that yields progress updates as the push operation proceeds.

## Examples

### Basic usage:
```javascript
const result = await ollama.push({ model: 'mymodel' })
console.log(result.status)
```

### Streaming progress updates:
```javascript
const stream = await ollama.push({ model: 'mymodel', stream: true })
for await (const update of stream) {
  console.log(`Push progress: ${update.status}`)
}
```

## Notes or Considerations
- Ensure you have the necessary permissions to push models to the Ollama registry.
- The `insecure` option should be used with caution, as it may expose your data to security risks.
- When using the streaming option, remember to handle the stream properly to avoid memory leaks.
- The push operation may take some time depending on the size of the model and your network connection.