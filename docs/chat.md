# chat Documentation

## Brief Description
The `chat` method enables communication with an AI model, supporting both streamed and non-streamed responses. It can handle messages with text and images.

## Usage
To use the `chat` method, you need to create an instance of the Ollama class and then call the `chat` method with the appropriate request object.

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
```

## Parameters
The `chat` method accepts a single parameter:

- `request` (Required): An object of type `ChatRequest` with the following properties:
  - `model` (Required): String - The name of the model to use for the chat.
  - `messages` (Optional): Array of `Message` objects - The conversation history.
  - `stream` (Optional): Boolean - Whether to stream the response.
  - `format` (Optional): String or Object - The desired output format.
  - `keep_alive` (Optional): String or Number - Duration to keep the model loaded.
  - `tools` (Optional): Array of `Tool` objects - Available tools for the model to use.
  - `options` (Optional): Object - Additional model-specific options.

## Return Value
The `chat` method returns a Promise that resolves to either:
- A `ChatResponse` object if `stream` is false or undefined.
- An `AbortableAsyncIterator<ChatResponse>` if `stream` is true.

## Examples

### Basic chat request
```javascript
const response = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Hello, how are you?' }]
})
console.log(response.message.content)
```

### Streamed chat request
```javascript
const stream = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Tell me a story' }],
  stream: true
})

for await (const chunk of stream) {
  process.stdout.write(chunk.message.content)
}
```

### Chat with image
```javascript
const response = await ollama.chat({
  model: 'llava',
  messages: [
    {
      role: 'user',
      content: 'What's in this image?',
      images: ['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==']
    }
  ]
})
console.log(response.message.content)
```

## Notes or Considerations
- The `chat` method automatically handles base64 encoding for images, so you can pass either base64 encoded strings or Uint8Arrays.
- When using the streaming option, make sure to properly handle the asynchronous iterator.
- The specific capabilities of the chat function may depend on the model being used.
- Be aware of any rate limits or usage restrictions on the Ollama server you're connecting to.