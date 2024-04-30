
  
  # **internalTypeFilters**

## What does this do?
The `internalTypeFilters` property is an array that specifies the types of elements that the AI documentation tool should include in its analysis and documentation. This array serves as a filter, allowing the tool to focus only on the specified types of elements while ignoring others.

## Why should I use this?
By defining the `internalTypeFilters` array, you can customize the AI documentation tool to generate documentation for the specific types of elements that are relevant to your project. This flexibility allows you to tailor the documentation output to your specific needs, ensuring that it covers the necessary components while excluding irrelevant or unwanted elements.

## Prerequisites
Before utilizing the `internalTypeFilters` array, you should have a clear understanding of the different types of elements present in your codebase and the corresponding type identifiers used by the AI documentation tool. Additionally, you should be familiar with the JSON format and the structure of the configuration file.

## How to use this
To use the `internalTypeFilters` array, follow these steps:

1. Locate the configuration file for the AI documentation tool, which is typically a JSON file.
2. Within the JSON file, find the `ai` object or create it if it doesn't exist.
3. Inside the `ai` object, add the `internalTypeFilters` property and assign it an array value.
4. Populate the array with the type identifiers of the elements you want to include in the documentation. The provided code snippet already contains a list of commonly used type identifiers, such as `file`, `module`, `class`, `method`, `property`, `function`, and more.
5. Optionally, you can modify the array by adding or removing type identifiers based on your specific requirements.
6. Save the configuration file, and the AI documentation tool will generate documentation only for the types of elements specified in the `internalTypeFilters` array.

By following these steps, you can ensure that the AI documentation tool focuses on the types of elements that are most relevant to your project, resulting in a more concise and targeted documentation output.
  
  