# chat Documentation

## Brief Description
The `chat` method allows you to interact with an AI model using a conversational interface. It supports streaming responses and can handle messages with text and images.

## Usage
To use the `chat` method, you'll need to import the Ollama class and create an instance:

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
```

## Parameters
- `request` (ChatRequest): An object containing the following properties:
  - `model` (string, required): The name of the model to use.
  - `messages` (Message[], optional): An array of message objects representing the conversation history.
  - `stream` (boolean, optional): Whether to stream the response.
  - `format` (string | object, optional): The desired output format.
  - `keep_alive` (string | number, optional): How long to keep the model loaded in memory.
  - `tools` (Tool[], optional): An array of tool objects that the model can use.
  - `options` (Partial<Options>, optional): Additional options for the chat session.

## Return Value
- If `stream` is `false`: Promise<ChatResponse>
- If `stream` is `true`: Promise<AbortableAsyncIterator<ChatResponse>>

## Examples

### Basic chat interaction
```javascript
const response = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Hello, how are you?' }]
})
console.log(response.message.content)
```

### Streaming chat with images
```javascript
const stream = await ollama.chat({
  model: 'llama2',
  messages: [
    { role: 'user', content: 'What's in this image?', images: ['base64_encoded_image_data'] }
  ],
  stream: true
})

for await (const chunk of stream) {
  process.stdout.write(chunk.message.content)
}
```

## Notes or Considerations
- The `chat` method can handle both text and image inputs.
- When using images, they should be provided as base64 encoded strings or Uint8Arrays.
- Streaming responses allow for real-time output, which is useful for long responses or interactive applications.
- The method automatically encodes images before sending the request.
- You can abort an ongoing streamed request using the `abort()` method on the returned AbortableAsyncIterator.