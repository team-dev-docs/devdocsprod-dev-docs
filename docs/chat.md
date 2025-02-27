# chat Documentation

## Brief Description
The `chat` method enables communication with an AI model, supporting both text and image inputs in messages.

## Usage
To use the `chat` method, first import and initialize the Ollama client, then call the `chat` method with your request.

```javascript
import ollama from 'ollama'

// Initialize Ollama client (if needed)
// const client = new Ollama()

// Use the chat method
const response = await ollama.chat(chatRequest)
```

## Parameters
- `request` (ChatRequest): An object containing the following properties:
  - `model` (string, required): The name of the model to use for the chat.
  - `messages` (array, required): An array of message objects, each containing:
    - `role` (string): The role of the message sender (e.g., 'user', 'assistant').
    - `content` (string): The text content of the message.
    - `images` (array, optional): An array of images, either as Uint8Arrays or base64 encoded strings.
  - `stream` (boolean, optional): Whether to stream the response. Default is false.
  - Other optional parameters as defined in the ChatRequest interface.

## Return Value
- If `stream` is false: Returns a Promise that resolves to a `ChatResponse` object.
- If `stream` is true: Returns a Promise that resolves to an `AbortableAsyncIterator<ChatResponse>`.

## Examples

1. Basic text chat:
```javascript
const response = await ollama.chat({
  model: 'llama2',
  messages: [
    { role: 'user', content: 'Hello, how are you?' }
  ]
})
console.log(response.message.content)
```

2. Chat with an image:
```javascript
const imageData = new Uint8Array(/* image data */);
const response = await ollama.chat({
  model: 'llava',
  messages: [
    { 
      role: 'user', 
      content: 'What's in this image?',
      images: [imageData]
    }
  ]
})
console.log(response.message.content)
```

3. Streaming chat:
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

## Notes or Considerations
- Images in messages are automatically encoded to base64 before sending.
- When streaming, remember to handle the asynchronous iterator appropriately.
- The chat method can be aborted using the `abort()` method on the Ollama instance.
- Ensure you have the necessary permissions and resources to use the specified model.