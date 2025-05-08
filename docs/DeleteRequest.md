# DeleteRequest Documentation

## Brief Description
DeleteRequest is an interface used to specify a model for deletion in the Ollama API.

## Usage
To use DeleteRequest, you need to create an object with the required property when making a delete request to the Ollama API.

## Parameters
- `model` (string, required): The name of the model to be deleted.

## Return Value
DeleteRequest itself doesn't return a value. It's used as an input for the delete operation in the Ollama API.

## Examples

### Deleting a model
```typescript
import Ollama from 'ollama'

const deleteRequest: DeleteRequest = {
  model: "my-custom-model"
};

await Ollama.delete(deleteRequest);
```

## Notes or Considerations
- Ensure you have the necessary permissions to delete the specified model.
- Deleting a model is irreversible. Make sure you want to permanently remove the model before proceeding.
- The delete operation typically returns a StatusResponse, which includes a status field indicating the success of the operation.
- Always handle potential errors when making delete requests, as network issues or non-existent models could cause failures.