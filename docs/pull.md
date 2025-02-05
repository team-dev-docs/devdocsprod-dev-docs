# pull Documentation

## Brief Description
The `pull` method allows you to download a model from the Ollama registry, with optional streaming support.

## Usage
To use the `pull` method, you need to create an instance of the Ollama class and then call the `pull` method on it.

```javascript
import Ollama from 'ollama'

const ollama = new Ollama()
```

## Parameters
- `request` (Required): An object with the following properties:
  - `model` (Required): String - The name of the model to pull.
  - `stream` (Optional): Boolean - Whether to stream the response.
  - `insecure` (Optional): Boolean - Whether to allow insecure connections.

## Return Value
The `pull` method returns a Promise that resolves to either:
- A `ProgressResponse` object if `stream` is false or not specified.
- An `AbortableAsyncIterator<ProgressResponse>` if `stream` is true.

## Examples

### Basic usage:
```javascript
const response = await ollama.pull({ model: 'llama2' })
console.log(response.status)
```

### Streaming the pull process:
```javascript
const stream = await ollama.pull({ model: 'llama2', stream: true })
for await (const chunk of stream) {
  console.log(chunk.status, chunk.completed, '/', chunk.total)
}
```

## Notes or Considerations
- The `pull` method is useful for downloading models to your local Ollama instance.
- Streaming the response allows you to track the progress of the download.
- Be cautious when using the `insecure` option, as it may expose you to security risks.
- The method uses the Ollama API endpoint `/api/pull` under the hood.