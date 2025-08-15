

  # Ollama Functions

## Introduction

Ollama is a JavaScript library that provides an interface to interact with Ollama's API. It offers a range of functions for managing and utilizing large language models, including chat, generation, model management, and more.

## Key Functions

### Constructor

```typescript
constructor(config?: Partial<Config>)
```

Creates a new Ollama instance with optional configuration.

### generate

```typescript
generate(request: GenerateRequest): Promise<GenerateResponse | AbortableAsyncIterator<GenerateResponse>>
```

Generates a response from a text prompt.

### chat

```typescript
chat(request: ChatRequest): Promise<ChatResponse | AbortableAsyncIterator<ChatResponse>>
```

Initiates a chat session with the model.

### create

```typescript
create(request: CreateRequest): Promise<ProgressResponse | AbortableAsyncIterator<ProgressResponse>>
```

Creates a new model from a stream of data.

### pull

```typescript
pull(request: PullRequest): Promise<ProgressResponse | AbortableAsyncIterator<ProgressResponse>>
```

Pulls a model from the Ollama registry.

### push

```typescript
push(request: PushRequest): Promise<ProgressResponse | AbortableAsyncIterator<ProgressResponse>>
```

Pushes a model to the Ollama registry.

### delete

```typescript
delete(request: DeleteRequest): Promise<StatusResponse>
```

Deletes a model from the server.

### copy

```typescript
copy(request: CopyRequest): Promise<StatusResponse>
```

Copies a model from one name to another.

### list

```typescript
list(): Promise<ListResponse>
```

Lists the models on the server.

### show

```typescript
show(request: ShowRequest): Promise<ShowResponse>
```

Shows the metadata of a model.

### embed

```typescript
embed(request: EmbedRequest): Promise<EmbedResponse>
```

Embeds text input into vectors.

### embeddings

```typescript
embeddings(request: EmbeddingsRequest): Promise<EmbeddingsResponse>
```

Embeds a text prompt into a vector.

### ps

```typescript
ps(): Promise<ListResponse>
```

Lists the running models on the server.

## Additional Features

- Supports streaming responses for applicable functions.
- Handles image encoding for chat and generate functions.
- Provides utilities for working with modelfiles and blobs.
- Offers abort functionality for ongoing streamed requests.

## Usage Example

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()

// Generate text
const response = await ollama.generate({
  model: 'llama2',
  prompt: 'Tell me a joke'
})

console.log(response.response)

// Chat with the model
const chatResponse = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: 'Hello, how are you?' }]
})

console.log(chatResponse.message.content)
```

## Error Handling

The library throws `ResponseError` for API-related errors, which includes the error message and status code.

## Compatibility

Ollama works in both browser and Node.js environments, with slight differences in functionality (e.g., file handling in Node.js).

  