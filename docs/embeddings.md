# embeddings Documentation

## Brief Description
The `embeddings` method converts text prompts into vector representations using a specified model.

## Usage
To use the `embeddings` method, you need to create an instance of the Ollama class and call the `embeddings` method with the required parameters.

## Parameters
- `model` (string, required): The name of the model to use for generating embeddings.
- `prompt` (string, required): The text prompt to be converted into a vector representation.
- `keep_alive` (string | number, optional): Specifies how long to keep the model loaded in memory.
- `options` (Partial<Options>, optional): Additional options for fine-tuning the embedding process.

## Return Value
The method returns a Promise that resolves to an `EmbeddingsResponse` object containing:
- `embedding` (number[]): An array of numbers representing the vector embedding of the input prompt.

## Examples
```javascript
const ollama = new Ollama();

// Basic usage
const response = await ollama.embeddings({
  model: "text-embedding-ada-002",
  prompt: "Hello, world!"
});
console.log(response.embedding);

// With keep_alive option
const response2 = await ollama.embeddings({
  model: "text-embedding-ada-002",
  prompt: "Another example",
  keep_alive: "5m"
});
console.log(response2.embedding);
```

## Notes or Considerations
- The resulting embedding can be used for various natural language processing tasks, such as semantic search or text classification.
- The dimensionality of the embedding vector depends on the model used.
- Ensure you have the necessary model loaded before calling this method.
- The `keep_alive` option can be useful for performance optimization when making multiple embedding requests.