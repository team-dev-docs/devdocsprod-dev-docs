# pull Documentation

## Brief Description
The `pull` method downloads a model from the Ollama registry, with the option to stream the progress.

## Usage
To use the `pull` method, you need to create an instance of the Ollama class and call the `pull` method with a `PullRequest` object.

```javascript
import Ollama from 'ollama'

const ollama = new Ollama()
const response = await ollama.pull({ model: 'modelname' })
```

## Parameters
The `pull` method accepts a `PullRequest` object with the following properties:

- `model` (string, required): The name of the model to pull from the Ollama registry.
- `insecure` (boolean, optional): Whether to allow insecure connections when pulling the model.
- `stream` (boolean, optional): If set to `true`, the method will return a stream of progress responses.

## Return Value
The `pull` method returns a Promise that resolves to either:

- A `ProgressResponse` object if `stream` is `false` or not specified.
- An `AbortableAsyncIterator<ProgressResponse>` if `stream` is `true`.

The `ProgressResponse` object contains information about the pull progress, including status, digest, total, and completed values.

## Examples

### Basic usage:
```javascript
const response = await ollama.pull({ model: 'llama2' })
console.log(response.status)
```

### Streaming progress:
```javascript
const stream = await ollama.pull({ model: 'llama2', stream: true })
for await (const chunk of stream) {
  console.log(`Progress: ${chunk.completed}/${chunk.total}`)
}
```

## Notes or Considerations
- The `pull` method allows you to download models from the Ollama registry to your local environment.
- When using the streaming option, you can track the progress of the download in real-time.
- If you need to cancel an ongoing pull operation, you can use the `abort()` method on the returned `AbortableAsyncIterator`.
- Ensure you have a stable internet connection when pulling large models.
- The `insecure` option should be used with caution and only when necessary, as it may pose security risks.