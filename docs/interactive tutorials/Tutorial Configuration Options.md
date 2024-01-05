# Config your tutorial Json

## Tutorial

This is how we tell Dev-Docs that this is a tutorial.  Just set it to true!

## Tutorial Order

This an Object with folders of of your tutorials. You can change different files and tutorials strung together in order to create a step by step tutorial.

```json

{
  "tutorial": true,
  "tutorialOrder": {
    "javascript/your_tutorial_folder_name": ["filenameone.js", "filenametwo.js"],
    "python/your_tutorial_folder_name": ["filenameone.py", "filenametwo.py"]
  }
}


```