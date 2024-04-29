
  
  # **internalTypeFilters**

## What does this do?
The `internalTypeFilters` is an array that defines the types of elements to include in the documentation. It serves as a filter to specify which types should be considered when generating documentation.

## Why should I use this?
By defining the `internalTypeFilters`, you can customize the documentation generation process to include only the types that are relevant to your project. This helps in keeping the documentation concise and focused on the essential elements, making it easier to navigate and understand.

## Prerequisites
Before using `internalTypeFilters`, ensure that you have a clear understanding of the different types of elements present in your codebase and their respective roles. This will help you determine which types you want to include or exclude from the documentation.

## How to use this
The `internalTypeFilters` is an array that contains strings representing the types of elements to include in the documentation. Each string corresponds to a specific type, such as "file", "module", "class", "method", "property", and so on.

To use `internalTypeFilters`, you need to modify the array by adding or removing the types you want to include or exclude from the documentation. For example, if you only want to document classes, methods, and properties, you can modify the array as follows:

```json
"internalTypeFilters": [
    "class",
    "method",
    "property"
]
```

Conversely, if you want to exclude certain types from the documentation, you can remove them from the array.

It's important to note that the types included in the `internalTypeFilters` array should match the types used by the documentation generation tool you are using. If you're uncertain about the available types, refer to the documentation or consult with the tool's documentation.

By customizing the `internalTypeFilters` array, you can ensure that the generated documentation focuses on the most relevant elements of your codebase, making it easier for developers to understand and maintain the project.
  
  