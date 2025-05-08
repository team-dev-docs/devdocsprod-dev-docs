# embeddings Documentation

## Brief Description
The `embeddings` method embeds a text prompt into a vector representation.

## Usage
To use the `embeddings` method, you need an instance of the Ollama class. Here's how you can call it:

```javascript
const ollama = new Ollama();
const result = await ollama.embeddings(request);
```

## Parameters
The `embeddings` method takes a single parameter:

- `request` (EmbeddingsRequest): An object containing the following properties:
  - `model` (string): The name of the model to use for embedding.
  - `prompt` (string): The text to be embedded.
  - `keep_alive` (string | number, optional): Duration to keep the model loaded in memory.
  - `options` (Partial<Options>, optional): Additional options for the embedding process.

## Return Value
The method returns a Promise that resolves to an `EmbeddingsResponse` object, which contains:

- `embedding` (number[]): An array of numbers representing the vector embedding of the input text.

## Examples

### Basic Usage
```javascript
const ollama = new Ollama();
const request = {
  model: 'text-embedding-ada-002',
  prompt: 'Hello, world!'
};
const response = await ollama.embeddings(request);
console.log(response.embedding);
```

### With Keep Alive Option
```javascript
const ollama = new Ollama();
const request = {
  model: 'text-embedding-ada-002',
  prompt: 'Embed this text',
  keep_alive: '5m'
};
const response = await ollama.embeddings(request);
console.log(response.embedding);
```

## Notes or Considerations
- The resulting embedding can be used for various natural language processing tasks, such as semantic search or text classification.
- The dimensionality of the embedding vector depends on the model used.
- Ensure you have the necessary model loaded before making the embeddings request.
- The `keep_alive` option can be useful for performance when making multiple embedding requests.