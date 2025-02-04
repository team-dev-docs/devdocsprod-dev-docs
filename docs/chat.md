# chat Documentation

## Brief Description
The `chat` method facilitates communication with an AI model, allowing for multi-turn conversations with support for images.

## Usage
To use the `chat` method, first import and initialize the Ollama class, then call the `chat` method with your request parameters.

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
const response = await ollama.chat(chatRequest)
```

## Parameters
- `request` (ChatRequest): An object containing the following properties:
  - `model` (string, required): The name of the model to use for the chat.
  - `messages` (Message[], optional): An array of message objects representing the conversation history.
  - `stream` (boolean, optional): If true, the response will be streamed.
  - `format` (string | object, optional): The desired format for the response.
  - `keep_alive` (string | number, optional): Duration to keep the model loaded in memory.
  - `tools` (Tool[], optional): An array of tool objects that can be used by the model.
  - `options` (Partial<Options>, optional): Additional options for the chat request.

## Return Value
- If `stream` is false: Promise<ChatResponse>
- If `stream` is true: Promise<AbortableAsyncIterator<ChatResponse>>

The ChatResponse object includes properties such as the model name, creation timestamp, the generated message, and various performance metrics.

## Examples

1. Basic chat request:

```javascript
const response = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Hello, how are you?' }]
})
console.log(response.message.content)
```

2. Streaming chat with image:

```javascript
const imageData = await fetch('https://example.com/image.jpg').then(res => res.arrayBuffer())
const stream = await ollama.chat({
  model: 'llava',
  messages: [
    { role: 'user', content: 'What's in this image?', images: [new Uint8Array(imageData)] }
  ],
  stream: true
})

for await (const chunk of stream) {
  process.stdout.write(chunk.message.content)
}
```

## Notes or Considerations
- The `chat` method supports multi-modal interactions, allowing you to include images in the conversation.
- When using images, they can be provided as either Uint8Arrays or base64 encoded strings. The method will handle the encoding internally.
- Streaming responses can be useful for real-time applications or when dealing with long responses.
- Be mindful of the model's context length limitations when sending large conversation histories.
- The method automatically handles base64 encoding of images, making it easier to work with various image formats.