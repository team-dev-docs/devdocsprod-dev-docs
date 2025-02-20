# chat Documentation

## Brief Description

The `chat` method allows users to interact with an AI model through a chat interface, supporting multi-turn conversations and optional image inputs.

## Usage

To use the `chat` method, you need to create an instance of the Ollama class and then call the `chat` method with the appropriate parameters.

```javascript
import { Ollama } from 'ollama-js';

const ollama = new Ollama();
```

## Parameters

- `request` (ChatRequest): An object containing the following properties:
  - `model` (string, required): The name of the model to use for the chat.
  - `messages` (Message[], optional): An array of previous messages in the conversation.
  - `stream` (boolean, optional): Whether to stream the response or not.
  - `format` (string | object, optional): The desired format for the response.
  - `keep_alive` (string | number, optional): Duration to keep the model loaded.
  - `tools` (Tool[], optional): Array of tools available for the model to use.
  - `options` (Partial<Options>, optional): Additional options for the chat.

## Return Value

- If `stream` is `true`: Returns a `Promise<AbortableAsyncIterator<ChatResponse>>`.
- If `stream` is `false` or not specified: Returns a `Promise<ChatResponse>`.

## Examples

1. Basic chat interaction:

```javascript
const response = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Hello, how are you?' }]
});
console.log(response.message.content);
```

2. Streaming chat response:

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

3. Chat with image input:

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

- The `chat` method automatically handles base64 encoding for image inputs, supporting both file paths and raw image data.
- When using the streaming option, make sure to properly handle the asynchronous iterator to process the response chunks.
- The availability of certain features (like image input) depends on the capabilities of the chosen model.
- Be mindful of the `keep_alive` parameter to manage resource usage, especially for longer conversations or frequent interactions.