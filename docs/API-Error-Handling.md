# API Error Handling

This document outlines the error handling approach for our API. Proper error handling improves the developer experience by providing clear, actionable information when issues occur.

## Error Response Format

All API errors follow this JSON format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "A human-readable error message",
    "details": {
      // Additional error details if applicable
    }
  }
}
```

- `code`: A unique string identifier for the error type
- `message`: A concise, human-readable description of the error
- `details`: An optional object containing additional error information

## Common Error Codes

| Code | Description |
|------|-------------|
| INVALID_REQUEST | The request was malformed or missing required parameters |
| AUTHENTICATION_FAILED | Invalid or missing authentication credentials |
| AUTHORIZATION_FAILED | The authenticated user lacks permission for this action |
| RESOURCE_NOT_FOUND | The requested resource does not exist |
| RATE_LIMIT_EXCEEDED | The client has sent too many requests in a given time period |
| INTERNAL_ERROR | An unexpected error occurred on the server |

## HTTP Status Codes

Our API uses standard HTTP status codes to indicate the general category of response:

- 2xx: Success
- 4xx: Client errors (e.g. invalid input, authentication issues)
- 5xx: Server errors

## Handling Errors

When handling errors in your application:

1. Check the HTTP status code first to determine the broad category of error
2. Parse the JSON response body to access the detailed error information
3. Use the `code` field to programmatically handle specific error types
4. Display the `message` to users or developers for a human-readable explanation

## Example: Handling a 404 Not Found Error

```javascript
fetch('/api/users/123')
  .then(response => {
    if (!response.ok) {
      return response.json().then(err => { throw err; });
    }
    return response.json();
  })
  .then(user => {
    // Handle successful response
  })
  .catch(err => {
    if (err.error && err.error.code === 'RESOURCE_NOT_FOUND') {
      console.log('User not found:', err.error.message);
      // Handle the specific error case
    } else {
      console.error('An unexpected error occurred:', err);
    }
  });
```

By following these guidelines, API consumers can build robust applications that gracefully handle errors and provide a better user experience.