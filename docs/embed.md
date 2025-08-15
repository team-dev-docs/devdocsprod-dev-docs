# embed Documentation

## Brief Description
The `embed` method embeds text input into vectors using a specified model.

## Usage
To use the `embed` method, you need to create an instance of the Ollama class and call the `embed` method on it.

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
const result = await ollama.embed(embedRequest)
```

## Parameters
The `embed` method takes a single parameter:

- `request` (EmbedRequest): An object containing the following properties:
  - `model` (string, required): The name of the model to use for embedding.
  - `input` (string | string[], required): The text input to be embedded.
  - `truncate` (boolean, optional): Whether to truncate the input.
  - `keep_alive` (string | number, optional): Keep-alive duration for the model.
  - `options` (Partial<Options>, optional): Additional options for the embedding process.

## Return Value
The `embed` method returns a Promise that resolves to an `EmbedResponse` object containing:

- `model` (string): The name of the model used for embedding.
- `embeddings` (number[][]): An array of embedding vectors.

## Examples

### Basic usage
```javascript
const embedRequest = {
  model: 'text-embedding-ada-002',
  input: 'Hello, world!'
}

const response = await ollama.embed(embedRequest)
console.log(response.embeddings)
```

### Embedding multiple inputs
```javascript
const embedRequest = {
  model: 'text-embedding-ada-002',
  input: ['Hello, world!', 'How are you?']
}

const response = await ollama.embed(embedRequest)
console.log(response.embeddings)
```

## Notes or Considerations
- The `embed` method is asynchronous and returns a Promise, so it should be used with `await` or `.then()`.
- The specific model used for embedding should be compatible with the Ollama server and support text embedding.
- The dimensionality and characteristics of the generated embeddings depend on the chosen model.
- Be mindful of the input length and any truncation settings, as they may affect the quality of the embeddings.