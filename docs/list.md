# list Documentation

## Brief Description
The `list` method retrieves information about available models on the Ollama server.

## Usage
To use the `list` method, you need to have an instance of the Ollama class. Here's how you can use it:

```javascript
import Ollama from 'ollama'

const ollama = new Ollama()
const models = await ollama.list()
```

## Parameters
This method doesn't take any parameters.

## Return Value
The `list` method returns a Promise that resolves to a `ListResponse` object. This object contains an array of `ModelResponse` objects, each representing a model available on the server.

## Examples

### Listing all available models
```javascript
import Ollama from 'ollama'

const ollama = new Ollama()

try {
  const response = await ollama.list()
  console.log('Available models:', response.models)
} catch (error) {
  console.error('Error listing models:', error)
}
```

### Displaying model details
```javascript
import Ollama from 'ollama'

const ollama = new Ollama()

async function displayModelDetails() {
  try {
    const response = await ollama.list()
    response.models.forEach(model => {
      console.log(`Model: ${model.name}`)
      console.log(`Modified: ${model.modified_at}`)
      console.log(`Size: ${model.size} bytes`)
      console.log('---')
    })
  } catch (error) {
    console.error('Error fetching model details:', error)
  }
}

displayModelDetails()
```

## Notes or Considerations
- This method requires an active connection to an Ollama server.
- The list of available models may change over time as models are added, updated, or removed from the server.
- Large model files may take some time to download and process, so be patient when working with new or updated models.
- Make sure you have the necessary permissions to access the Ollama server and list the models.