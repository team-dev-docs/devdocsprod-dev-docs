# chat Documentation

## Brief Description
The `chat` method enables communication with an AI model, allowing for multi-turn conversations and the inclusion of images in messages.

## Usage
To use the `chat` method, you need to create an instance of the Ollama class and then call the `chat` method with the appropriate parameters.

```javascript
import { Ollama } from 'ollama-js';

const ollama = new Ollama();
const response = await ollama.chat(chatRequest);
```

## Parameters
- `request` (ChatRequest): An object containing the following properties:
  - `model` (string, required): The name of the model to use for the chat.
  - `messages` (Message[], optional): An array of message objects representing the conversation history.
  - `stream` (boolean, optional): If true, the response will be streamed.
  - `format` (string | object, optional): The desired format for the response.
  - `keep_alive` (string | number, optional): Duration to keep the model loaded in memory.
  - `tools` (Tool[], optional): An array of tool objects that the model can use.
  - `options` (Partial<Options>, optional): Additional options for the chat request.

## Return Value
The `chat` method returns a Promise that resolves to either:
- `ChatResponse`: An object containing the model's response and metadata.
- `AbortableAsyncIterator<ChatResponse>`: An async iterator that yields response messages if streaming is enabled.

## Examples

### Basic chat example
```javascript
const response = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Hello, how are you?' }]
});
console.log(response.message.content);
```

### Chat with streaming
```javascript
const stream = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Tell me a story' }],
  stream: true
});

for await (const chunk of stream) {
  process.stdout.write(chunk.message.content);
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
      images: ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA...']
    }
  ]
});
console.log(response.message.content);
```

## Notes or Considerations
- Images in messages can be provided as base64 encoded strings or file paths.
- The `stream` option allows for real-time responses, which is useful for long-running conversations.
- When using tools, ensure they are properly defined in the `tools` array of the request.
- The `keep_alive` option can be used to optimize performance for multiple requests to the same model.
- Error handling should be implemented to manage potential issues with the AI model or network connectivity.