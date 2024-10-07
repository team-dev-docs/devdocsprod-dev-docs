

  # Onboarding-Docs Configuration Options

## Example of an Onboarding-Docs Config

```json
{
    "quickDoc": {
        "acceptedExtensions": [".js", ".py", ".ts", ".jsx", ".tsx"],
        "variablesAndFunctions": {
            "prompts": [
                {
                    "question": "Is this a function, class, or variable?",
                    "title": "Code Type",
                    "documentation": ""
                },
                {
                    "question": "Is this code written well? If so, why?",
                    "title": "Quality of Code",
                    "documentation": ""
                },
                {
                    "question": "What are the key considerations for a new team member working with this code?",
                    "title": "Onboarding Notes",
                    "documentation": ""
                }
            ]
        }
    },
    "ai": {
        "onSave": true,
        "modelName": "gpt-4",
        "temperature": 0.7
    },
    "onboarding": {
        "generateReadme": true,
        "codeReviewChecklist": [
            "Code style consistency",
            "Documentation completeness",
            "Test coverage",
            "Performance considerations"
        ]
    }
}
```

This configuration file is designed to support the onboarding process for new team members. It includes settings for quick documentation generation, AI-assisted code review, and specific onboarding-related features.

Key updates in this configuration:
- Expanded `acceptedExtensions` to include more file types
- Added an "Onboarding Notes" prompt to gather specific information for new team members
- Included AI model specifications for more targeted assistance
- Introduced an `onboarding` section with options for README generation and a code review checklist

Customize these settings to best fit your team's onboarding workflow and documentation needs.

  