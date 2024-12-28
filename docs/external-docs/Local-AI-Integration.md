# Local AI Integration

This extension now supports local AI integration features using Ollama and Qdrant for enhanced privacy and performance.

## Ollama Integration

[Ollama](https://ollama.ai/) allows you to run large language models locally on your machine. This extension integrates with Ollama to provide AI-powered features without relying on cloud services.

To use Ollama:
1. Install Ollama on your system
2. Start the Ollama service
3. Configure the extension to use your local Ollama endpoint

## Qdrant for Local Vector Storage

[Qdrant](https://qdrant.tech/) is used as a vector database for efficient storage and retrieval of embeddings. This allows for fast similarity search and retrieval of relevant information.

Key features:
- Local storage of vector embeddings
- Fast similarity search 
- Scalable for large datasets

## Setup and Configuration

To enable local AI features:

1. Install Ollama and Qdrant
2. Update extension settings to point to your local endpoints
3. Restart VS Code to apply changes

See the [configuration guide](./configuration.md) for detailed setup instructions.

## Usage

Once configured, the extension will automatically use your local AI services for features like:

- Code completion
- Natural language querying
- Semantic search across your codebase

This provides enhanced privacy and potentially faster response times compared to cloud-based solutions.