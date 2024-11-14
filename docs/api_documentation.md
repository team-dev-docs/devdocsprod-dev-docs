

  # Documenting API Endpoints with DisplayEndpoint

The `DisplayEndpoint` component provides a standardized way to display API endpoint information in your documentation. This guide will walk you through how to use it effectively, with examples and best practices.

## Basic Usage

To use the `DisplayEndpoint` component, import it and pass the required props:

```jsx
import DisplayEndpoint from '@/components/DisplayEndpoint';

<DisplayEndpoint endpoint="/api/users" method="GET" />
```

This will render a styled alert box containing the endpoint information.

## Props

The `DisplayEndpoint` component accepts two props:

- `endpoint` (string, required): The API endpoint URL
- `method` (string, required): The HTTP method (GET, POST, PUT, DELETE, etc.)

## Examples

### GET Request

```jsx
<DisplayEndpoint endpoint="/api/users" method="GET" />
```

### POST Request

```jsx
<DisplayEndpoint endpoint="/api/users" method="POST" />
```

### PUT Request

```jsx
<DisplayEndpoint endpoint="/api/users/{id}" method="PUT" />
```

### DELETE Request

```jsx
<DisplayEndpoint endpoint="/api/users/{id}" method="DELETE" />
```

## Best Practices

1. **Consistency**: Use the `DisplayEndpoint` component for all API endpoint documentation to maintain a consistent look and feel.

2. **Group Related Endpoints**: When documenting multiple endpoints for a resource, group them together in your markdown file.

3. **Provide Context**: Before or after the `DisplayEndpoint` component, include additional information such as:
   - Description of the endpoint's purpose
   - Required parameters
   - Request body format (for POST/PUT requests)
   - Response format
   - Possible error codes

4. **Use Code Blocks**: For request/response examples, use markdown code blocks with appropriate syntax highlighting.

5. **Include Authentication Info**: If the endpoint requires authentication, mention it clearly.

## Full Documentation Example

Here's an example of how to structure a full API endpoint documentation:

```mdx
## Get All Users

Retrieves a list of all users in the system.

<DisplayEndpoint endpoint="/api/users" method="GET" />

### Parameters

- `limit` (optional): Number of users to return (default: 20)
- `offset` (optional): Pagination offset (default: 0)

### Response

```json
{
  "users": [
    {
      "id": 1,
      "username": "johndoe",
      "email": "john@example.com"
    },
    // ...
  ],
  "total": 100,
  "limit": 20,
  "offset": 0
}
```

### Possible Errors

- `401 Unauthorized`: If the request is not authenticated
- `403 Forbidden`: If the user doesn't have permission to list users
```

By following these guidelines and using the `DisplayEndpoint` component consistently, you can create clear, standardized API documentation that is easy for developers to read and understand.

  