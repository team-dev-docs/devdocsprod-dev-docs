# chat Documentation

## Brief Description
The `chat` method allows users to interact with an AI model in a conversational manner, supporting text and image inputs.

## Usage
To use the `chat` method, you need to create an instance of the Ollama class and then call the `chat` method with the appropriate request object.

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
const response = await ollama.chat(chatRequest)
```

## Parameters
- `request` (ChatRequest): An object containing the following properties:
  - `model` (string, required): The name of the model to use for the chat.
  - `messages` (Message[], optional): An array of message objects representing the conversation history.
  - `stream` (boolean, optional): Whether to stream the response. Default is `false`.
  - `format` (string | object, optional): The desired output format.
  - `keep_alive` (string | number, optional): Duration to keep the model loaded in memory.
  - `tools` (Tool[], optional): Array of tools available for the model to use.
  - `options` (Partial<Options>, optional): Additional options for the chat.

## Return Value
- If `stream` is `false`: Returns a Promise that resolves to a `ChatResponse` object.
- If `stream` is `true`: Returns a Promise that resolves to an `AbortableAsyncIterator<ChatResponse>`.

## Examples

### Basic chat interaction
```javascript
const response = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Hello, how are you?' }]
})
console.log(response.message.content)
```

### Streaming chat with image input
```javascript
const imageData = await fs.promises.readFile('image.jpg')
const stream = await ollama.chat({
  model: 'llava',
  messages: [
    { role: 'user', content: 'What's in this image?', images: [imageData] }
  ],
  stream: true
})

for await (const chunk of stream) {
  process.stdout.write(chunk.message.content)
}
```

## Notes or Considerations
- The `chat` method supports both text and image inputs. Images can be provided as Uint8Arrays or base64 encoded strings.
- When using the streaming option, make sure to handle the async iterator properly to receive real-time responses.
- The method automatically encodes images to base64 if they are provided as Uint8Arrays.
- Be aware of the model's capabilities when using different input types or tools.