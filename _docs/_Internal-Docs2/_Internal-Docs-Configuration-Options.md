## Example of an Internal Dev-Docs Config

```
{
    "quickDoc": {
        "acceptedExtensions": [".js", ".py"],
        "variablesAndFunctions": {
            "prompts": [
                {
                    "question": "Is this a function, class, or variable",
                    "title": "Code Type",
                    "documentation": ""
                },
                {
                    "question": "Is this code written well?  if so Why?",
                    "title": "Quality of Code",
                    "documentation": ""
                }
            ]
        }
    },
    "ai": {
        "onSave": true
    }
}
```q
