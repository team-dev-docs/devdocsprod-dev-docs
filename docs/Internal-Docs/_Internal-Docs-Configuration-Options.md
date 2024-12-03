

  ## Example of an internal Dev-Docs config

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
                },
                {
                    "question": "What are the potential edge cases for this code?",
                    "title": "Edge Cases",
                    "documentation": ""
                }
            ]
        }
    },
    "ai": {
        "onSave": true,
        "model": "gpt-3.5-turbo"
    }
}
```

This configuration file demonstrates a basic setup for an internal Dev-Docs system. It includes settings for quick documentation generation, specifying accepted file extensions and prompts for code analysis. The AI section indicates that the system should run on file save and uses the GPT-3.5 Turbo model for processing.

  