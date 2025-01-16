# API Integration Guide

This guide provides comprehensive instructions for integrating with the Dev-Docs API.

## Authentication

All API requests require authentication using an API key. To obtain an API key:

1. Log in to your Dev-Docs account
2. Navigate to Account Settings > API Keys
3. Click "Generate New API Key"
4. Copy your API key and store it securely

Include your API key in the `Authorization` header of all requests:

```
Authorization: Bearer YOUR_API_KEY
```

## Base URL

The base URL for all API requests is:

```
https://api.dev-docs.com/v1
```

## Endpoints

### Get Documents

Retrieve a list of documents.

```
GET /documents
```

Parameters:
- `limit` (optional): Number of results to return (default 20, max 100)
- `offset` (optional): Offset for pagination (default 0)

Example request:

```
curl https://api.dev-docs.com/v1/documents?limit=10 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Create Document

Create a new document.

```
POST /documents
```

Request body:

```json
{
  "title": "API Guide",
  "content": "# API Guide\n\nThis is the content..."
}
```

Example request:

```
curl -X POST https://api.dev-docs.com/v1/documents \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"title": "API Guide", "content": "# API Guide\n\nThis is the content..."}'
```

### Update Document

Update an existing document.

```
PUT /documents/{document_id}
```

Request body:

```json
{
  "title": "Updated API Guide",
  "content": "# Updated API Guide\n\nThis is the updated content..."
}
```

Example request:

```
curl -X PUT https://api.dev-docs.com/v1/documents/123 \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated API Guide", "content": "# Updated API Guide\n\nThis is the updated content..."}'
```

### Delete Document

Delete a document.

```
DELETE /documents/{document_id}
```

Example request:

```
curl -X DELETE https://api.dev-docs.com/v1/documents/123 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests. In case of an error, the response body will contain additional details:

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid"
  }
}
```

Common error codes:
- `400 Bad Request`: Invalid request parameters
- `401 Unauthorized`: Missing or invalid API key
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Requested resource does not exist
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Unexpected server error

## Rate Limiting

API requests are rate limited to 100 requests per minute per API key. If you exceed this limit, you'll receive a 429 Too Many Requests response.

## Webhooks

Dev-Docs can send webhook notifications when certain events occur. To set up webhooks:

1. Go to Account Settings > Webhooks
2. Click "Add Webhook"
3. Enter the URL where you want to receive webhook events
4. Select the events you want to subscribe to
5. Click "Create Webhook"

Webhook payloads are sent as POST requests with a JSON body. Verify the authenticity of webhook requests by checking the `X-DevDocs-Signature` header.

For more information and code examples in various programming languages, please refer to our [API Reference](https://dev-docs.com/api-reference) documentation.