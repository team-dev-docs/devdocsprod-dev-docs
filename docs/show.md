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
- `request` (object, required): An object containing the following properties:
  - `model` (string, required): The name of the model to show metadata for.
  - `system` (string, optional): Custom system prompt to use for the model.
  - `template` (string, optional): Custom prompt template to use for the model.
  - `options` (object, optional): Additional options for the model.

## Return Value
The `show` method returns a Promise that resolves to a `ShowResponse` object containing the model's metadata.

## Examples

1. Basic usage:
```javascript
const modelInfo = await ollama.show({ model: 'llama2' })
console.log(modelInfo)
```

2. With custom system prompt:
```javascript
const modelInfo = await ollama.show({
  model: 'gpt4',
  system: 'You are a helpful assistant.'
})
console.log(modelInfo.system)
```

3. Retrieving model details:
```javascript
const modelInfo = await ollama.show({ model: 'codellama' })
console.log(`Model family: ${modelInfo.details.family}`)
console.log(`Parameter size: ${modelInfo.details.parameter_size}`)
```

## Notes or Considerations
- Ensure you have the correct permissions to access the model information.
- The availability of certain metadata fields may vary depending on the model and Ollama version.
- This method is useful for inspecting model configurations and understanding their capabilities before use.