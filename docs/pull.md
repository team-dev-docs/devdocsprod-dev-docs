# pull Documentation

## Brief Description
The `pull` method downloads a model from the Ollama registry, with optional streaming of progress updates.

## Usage
To use the `pull` method, you need to create an instance of the Ollama class and then call the `pull` method on it.

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
```

## Parameters
The `pull` method accepts a single parameter:

- `request` (object, required): An object with the following properties:
  - `model` (string, required): The name of the model to pull.
  - `stream` (boolean, optional): If true, returns a stream of progress updates. Default is false.
  - `insecure` (boolean, optional): If true, allows insecure connections for pulling the model. Default is false.

## Return Value
The `pull` method returns a Promise that resolves to:
- If `stream` is false: A `ProgressResponse` object with information about the pull operation.
- If `stream` is true: An `AbortableAsyncIterator<ProgressResponse>` that yields progress updates.

## Examples

### Basic usage (non-streaming):
```javascript
const ollama = new Ollama()
const response = await ollama.pull({ model: 'llama2' })
console.log(response)
```

### Streaming progress updates:
```javascript
const ollama = new Ollama()
const stream = await ollama.pull({ model: 'llama2', stream: true })
for await (const update of stream) {
  console.log(update)
}
```

## Notes or Considerations
- The `pull` method is asynchronous and should be used with `await` or `.then()`.
- When using the streaming option, make sure to handle the stream properly to avoid memory leaks.
- If you need to cancel an ongoing pull operation, you can use the `abort()` method on the `AbortableAsyncIterator` returned when streaming.
- The `insecure` option should be used with caution, as it may pose security risks.