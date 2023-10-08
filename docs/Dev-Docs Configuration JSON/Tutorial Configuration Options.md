# Config your tutorial Json

## Tutorial

This is just how we tell dev-docs how this is a tutorial.  Just set it to true!

## Tutorial Order

This an Object with folders of of your tutorials, so you change different files and tutorials strung together so someone could create a tutorial step by step.

```json

{
  "tutorial": true,
  "tutorialOrder": {
    "javascript/your_tutorial_folder_name": ["filenameone.js", "filenametwo.js"],
    "python/your_tutorial_folder_name": ["filenameone.py", "filenametwo.py"]
  }
}


```