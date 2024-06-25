
Can you write a documentation page that explains are the options of the dev-docs.json.  For reference here is the dev-docs.json schema below:


```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "quickDoc": {
      "type": "object",
      "properties": {
        "variablesAndFunctions": {
          "type": "object",
          "properties": {
            "prompts": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string"
                  },
                  "question": {
                    "type": "string"
                  }
                },
                "required": ["title", "question"]
              },
              "default": [{"question": "does this code use a third party libary", "title": "Third Party libaries"}]
            }
          },
          "required": ["prompts"]
        }
      },
      "required": ["variablesAndFunctions"]
    },
    "ai": {
      "type": "object",
      "properties": {
        "variablesAndFunctions": {
          "type": "object",
          "patternProperties": {
            ".*": {
              "type": "object",
              "properties": {
                "prompts": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type": "string"
                      },
                      "question": {
                        "type": "string"
                      },
                      "documentation": {
                        "type": "string"
                      }
                    },
                    "required": ["title", "question", "documentation"]
                  }
                }
              },
              "required": ["prompts"]
            }
          }
        },
        "components": {
          "type": "object",
          "properties": {
            "template": {
              "type": "string",
              "default": "path to markdown file"
            }
          }
        },
        "docPath": {
          "type": "string",
          "default": "some custom path"
        },
        "branch": {
          "type": "string",
          "default": "main"
        },
        "internalTypeFilters": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "file",
              "module",
              "namespace",
              "package",
              "class",
              "method",
              "property",
              "field",
              "constructor",
              "enum",
              "interface",
              "function",
              "variable",
              "constant",
              "string",
              "number",
              "boolean",
              "array",
              "object",
              "key",
              "null",
              "enummember",
              "struct",
              "event",
              "operator",
              "typeParameter"
            ]
          },
          "default": [
            "file",
            "module",
            "namespace",
            "package",
            "class",
            "method",
            "property",
            "field",
            "constructor",
            "enum",
            "interface",
            "function",
            "variable",
            "constant",
            "string",
            "number",
            "boolean",
            "array",
            "object",
            "key",
            "null",
            "enummember",
            "struct",
            "event",
            "operator",
            "typeParameter"
          ]
        },
        "codeFilters": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": ["async function", "export default"]
        },
        "nameFilters": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": ["handleSubmit", "render"]
        },
        "populateDoc": {
          "type": "string",
          "default": "docs/template.md"
        },
        "docSubFolder": {
          "type": "string",
          "default": "api-reference"
        },
        "contextDirs": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": ["src/utils", "src/helpers"]
        },
        "mappings": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "files": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "folder": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "cloudDir": {
                "type": "string"
              }
            },
            "oneOf": [
              {
                "required": ["files", "cloudDir"]
              },
              {
                "required": ["folder", "cloudDir"]
              }
            ]
          },
          "default": [
            {
              "files": ["src/main.ts"],
              "cloudDir": "Getting Started"
            },
            {
              "folder": ["src/components"],
              "cloudDir": "Components"
            }
          ]
        },
        "openapi": {
          "type": "object",
          "properties": {
            "file": {
              "type": "string",
              "default": "src/api/openapi.yaml"
            },
            "x-codeSamples": {
              "type": "object",
              "properties": {
                "langs": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  },
                  "default": ["javascript", "python", "ruby"]
                }
              },
              "required": ["langs"]
            }
          },
          "required": ["file", "x-codeSamples"]
        }
      }
    },
    "customRoot": {
      "type": "string",
      "default": "packages/my-package"
    },
    "workspaceRoot": {
      "type": "string",
      "default": "/path/to/project"
    }
  }
}
```

Can you make sure the documenation page creates a markdown table explaining the options in the ai object of the JSON.
