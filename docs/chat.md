# chat Documentation

## Brief Description
The `chat` method allows users to interact with an AI model through a conversation-like interface, supporting both text and image inputs.

## Usage
To use the `chat` method, first import and initialize the Ollama client:

```javascript
import Ollama from 'ollama-js'

const ollama = new Ollama()
```

Then, you can call the `chat` method with your request:

```javascript
const response = await ollama.chat({
  model: 'your-model-name',
  messages: [{ role: 'user', content: 'Hello, how are you?' }]
})
```

## Parameters
- `request` (ChatRequest): An object containing:
  - `model` (string): The name of the model to use.
  - `messages` (Message[]): An array of message objects representing the conversation.
  - `stream` (boolean, optional): Whether to stream the response.
  - `format` (string | object, optional): The desired output format.
  - `options` (Partial<Options>, optional): Additional options for the chat.

## Return Value
- Promise<ChatResponse | AbortableAsyncIterator<ChatResponse>>: 
  - If `stream` is false, returns a Promise resolving to a ChatResponse.
  - If `stream` is true, returns an AbortableAsyncIterator yielding ChatResponse objects.

## Examples

### Basic chat interaction:
```javascript
const response = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'What is the capital of France?' }]
})
console.log(response.message.content)
```

### Streaming chat response:
```javascript
const stream = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Tell me a short story.' }],
  stream: true
})

for await (const chunk of stream) {
  process.stdout.write(chunk.message.content)
}
```

### Chat with image input:
```javascript
const response = await ollama.chat({
  model: 'llava',
  messages: [
    { 
      role: 'user', 
      content: 'What's in this image?', 
      images: ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/...'] 
    }
  ]
})
console.log(response.message.content)
```

## Notes and Considerations
- Ensure you have the correct model loaded before making chat requests.
- Image inputs should be provided as base64-encoded strings or file paths.
- For long conversations, consider managing context efficiently to avoid hitting token limits.
- The streaming option is useful for real-time interactions and handling long responses.