# PushRequest Documentation

## Brief Description
PushRequest is an interface used to define the parameters for pushing a model to the Ollama registry.

## Usage
PushRequest is typically used as a parameter type when calling the `push` method of the Ollama client. It specifies the model to be pushed and optional configuration settings.

## Parameters
- `model` (string, required): The name of the model to push to the Ollama registry.
- `insecure` (boolean, optional): If set to true, allows insecure connections when pushing the model.
- `stream` (boolean, optional): If set to true, enables streaming of the push progress.

## Return Value
PushRequest itself does not return a value. It is used as an input for the `push` method, which returns a ProgressResponse or an AbortableAsyncIterator<ProgressResponse> depending on whether streaming is enabled.

## Examples

### Basic usage:
```typescript
import { Ollama } from 'ollama'

const ollama = new Ollama()

const pushRequest: PushRequest = {
  model: 'my-custom-model'
}

const response = await ollama.push(pushRequest)
```

### Using optional parameters:
```typescript
const pushRequest: PushRequest = {
  model: 'my-custom-model',
  insecure: true,
  stream: true
}

const progressStream = await ollama.push(pushRequest)
for await (const progress of progressStream) {
  console.log('Push progress:', progress)
}
```

## Notes or Considerations
- Ensure you have the necessary permissions to push models to the Ollama registry.
- When `stream` is set to true, you can monitor the push progress in real-time.
- The `insecure` option should be used with caution, as it may compromise the security of the model transfer.
- The actual implementation of the push operation is handled by the Ollama client, not by the PushRequest interface itself.