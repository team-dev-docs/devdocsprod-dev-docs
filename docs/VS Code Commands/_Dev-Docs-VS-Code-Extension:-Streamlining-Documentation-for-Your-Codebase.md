# Visual Aids for Explaining Complex Concepts in Dev-Docs VS Code Extension

To help explain some of the complex concepts in the Dev-Docs VS Code extension, here are some visual aids:

## Extension Architecture Overview

```mermaid
graph TD
    A[VS Code] --> B[Dev-Docs Extension]
    B --> C[AI Service]
    B --> D[Documentation Generator]
    B --> E[File Analyzer]
    C --> F[OpenAI API]
    D --> G[Markdown Files]
    E --> H[Project Files]
```

## Documentation Generation Process

```mermaid
sequenceDiagram
    participant User
    participant Extension
    participant AI
    participant Files
    
    User->>Extension: Trigger doc generation
    Extension->>Files: Analyze project files
    Files-->>Extension: File contents
    Extension->>AI: Send file contents
    AI-->>Extension: Generated documentation
    Extension->>Files: Write .md files
    Extension-->>User: Doc generation complete
```

## Configuration Options Visualization

```mermaid
classDiagram
    class DevDocsConfig {
        +ai: AIConfig
        +customRoot: string
        +workspaceRoot: string
    }
    
    class AIConfig {
        +components: ComponentConfig
        +docPath: string
        +branch: string
        +internalTypeFilters: string[]
        +codeFilters: string[]
        +nameFilters: string[]
        +openapi: OpenAPIConfig
    }
    
    class ComponentConfig {
        +template: string  
    }
    
    class OpenAPIConfig {
        +file: string
        +x-codeSamples: CodeSampleConfig
    }
    
    class CodeSampleConfig {
        +langs: string[]
    }
    
    DevDocsConfig --> AIConfig
    AIConfig --> ComponentConfig
    AIConfig --> OpenAPIConfig
    OpenAPIConfig --> CodeSampleConfig
```

These diagrams provide visual representations of the extension's architecture, documentation generation process, and configuration options structure to help explain these complex concepts more clearly.