# show Documentation

## Brief Description
The `show` method retrieves metadata for a specified model from the Ollama server.

## Usage
To use the `show` method, you need to have an instance of the Ollama class. Then, you can call the `show` method with a `ShowRequest` object.

```javascript
import Ollama from 'ollama'

const ollama = new Ollama()
const modelMetadata = await ollama.show({ model: 'modelName' })
```

## Parameters
- `request` (ShowRequest): An object containing the following properties:
  - `model` (string, required): The name of the model to retrieve metadata for.
  - `system` (string, optional): A system prompt to use for the model.
  - `template` (string, optional): A prompt template to use for the model.
  - `options` (Partial<Options>, optional): Additional options for the model.

## Return Value
The `show` method returns a Promise that resolves to a `ShowResponse` object. This object contains detailed metadata about the specified model, including:

- `license`: The license of the model.
- `modelfile`: The content of the model's Modelfile.
- `parameters`: The model's parameters.
- `template`: The model's prompt template.
- `system`: The model's system prompt.
- `details`: An object containing model details such as format, family, and parameter size.
- `messages`: An array of preset messages for the model.
- `modified_at`: The date when the model was last modified.
- `model_info`: A Map containing additional model information.
- `projector_info`: An optional Map containing projector information.

## Examples

1. Basic usage to retrieve model metadata:

```javascript
const metadata = await ollama.show({ model: 'llama2' })
console.log(metadata.license)
console.log(metadata.details.parameter_size)
```

2. Retrieving model metadata with custom system prompt:

```javascript
const metadata = await ollama.show({
  model: 'gpt4',
  system: 'You are a helpful assistant.'
})
console.log(metadata.system)
```

## Notes or Considerations
- Make sure you have the correct model name when calling the `show` method. If the model doesn't exist, you may receive an error.
- The `show` method is useful for inspecting model properties before using it for generation or other tasks.
- The returned metadata can be extensive. Consider logging or inspecting specific properties you're interested in rather than the entire response.
- This method makes an HTTP POST request to the Ollama server, so ensure your server is running and accessible before calling `show`.