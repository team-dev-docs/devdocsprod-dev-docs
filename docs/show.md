# show Documentation

## Brief Description
The `show` method retrieves metadata for a specified model in the Ollama system.

## Usage
To use the `show` method, you need to import the Ollama class and create an instance:

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama()
```

## Parameters
- `request` (ShowRequest): An object containing the following properties:
  - `model` (string): The name of the model to retrieve metadata for.
  - `system` (string, optional): A system prompt to include in the metadata.
  - `template` (string, optional): A custom prompt template.
  - `options` (Options, optional): Additional options for the model.

## Return Value
The `show` method returns a Promise that resolves to a `ShowResponse` object containing the model's metadata.

## Examples

### Basic usage
```javascript
const metadata = await ollama.show({ model: 'llama2' })
console.log(metadata)
```

### With custom system prompt
```javascript
const metadata = await ollama.show({
  model: 'gpt-4',
  system: 'You are a helpful assistant.'
})
console.log(metadata.system)
```

## Notes or Considerations
- Ensure you have the correct permissions to access the model's metadata.
- The availability of certain metadata fields may vary depending on the model.
- This method is useful for inspecting model details before using it in other operations.