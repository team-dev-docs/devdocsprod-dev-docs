# show Documentation

## Brief Description
The `show` method retrieves and displays metadata for a specified model.

## Usage
To use the `show` method, you need to create an instance of the Ollama class and call the `show` method with the required parameters.

```javascript
import Ollama from 'ollama'

const ollama = new Ollama()
```

## Parameters
- `request` (ShowRequest object): An object containing the following properties:
  - `model` (string, required): The name of the model to show metadata for.
  - `system` (string, optional): A system message to include.
  - `template` (string, optional): A template to use for the model.
  - `options` (Partial<Options>, optional): Additional options for the model.

## Return Value
The `show` method returns a Promise that resolves to a `ShowResponse` object containing the model's metadata.

## Examples

```javascript
// Basic usage to show metadata for a model
const response = await ollama.show({ model: 'llama2' })
console.log(response)

// Show metadata with additional options
const response = await ollama.show({
  model: 'llama2',
  system: 'You are a helpful assistant',
  template: '{{.System}}\n\nHuman: {{.Prompt}}\n\nAssistant: ',
  options: { num_gpu: 1 }
})
console.log(response)
```

## Notes or Considerations
- Ensure that the specified model is available on your Ollama instance before calling the `show` method.
- The `ShowResponse` object includes detailed information about the model, such as its license, modelfile content, parameters, template, system message, and other metadata.
- This method is useful for inspecting model configurations and understanding the capabilities of different models in your Ollama setup.