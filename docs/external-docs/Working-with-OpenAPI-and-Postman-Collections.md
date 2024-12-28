# OpenAPI and Postman Collection Generation

This document describes the features for generating and modifying OpenAPI and Postman collections in our development environment.

## Features

### Generate API JSON

The `generateAPIJSON` function in `AiServices.ts` allows you to generate OpenAPI JSON for your API routes. It takes the following parameters:

- `token`: Authentication token
- `org`: Organization identifier
- `codeItems`: An array of code items to process
- `options`: Additional options for customization

This function identifies all API routes in the provided code and generates an OpenAPI 3.0 JSON representation of your API.

### Modify API YAML Documentation

The `OpenApi.ts` file provides several functions to modify existing OpenAPI YAML documentation:

1. `readYamlFile(file: string)`: Reads and parses a YAML file.
2. `writeYamlFile(yamlObject: requestBody, file: string)`: Writes a YAML object to a file.
3. `updateCodeSamples(routeName: string, method: string, section: string, result: any, file: string)`: Updates code samples for a specific route.
4. `updateContent(routeName: string, method: string, section: string, result: any, file: string)`: Updates content for a specific route and method.
5. `handleSpecificYamlKeys(key: string, routeItem: string, options: requestBody = {})`: Generates prompts for updating specific YAML keys like `x-codeSamples`, `summary`, `tags`, `description`, and `requestBody`.

These functions allow you to programmatically update various aspects of your OpenAPI documentation, including code samples, summaries, tags, descriptions, and request bodies.

## Usage

To generate an OpenAPI JSON:

```typescript
const apiJson = await generateAPIJSON(token, org, codeItems, options);
```

To modify existing YAML documentation:

```typescript
// Read YAML file
const yamlContent = readYamlFile('path/to/your/openapi.yaml');

// Update code samples
updateCodeSamples('/your-api-endpoint', 'get', 'x-codeSamples', newCodeSamples, 'path/to/your/openapi.yaml');

// Update content
updateContent('/your-api-endpoint', 'post', 'description', newDescription, 'path/to/your/openapi.yaml');
```

These features enable automated generation and maintenance of your API documentation, ensuring it stays up-to-date with your codebase.