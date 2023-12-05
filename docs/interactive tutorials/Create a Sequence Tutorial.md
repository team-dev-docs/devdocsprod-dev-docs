# Create a Sequence Tutorial

On the page https://www.dev-docs.io/dash find the button with the text "Or go to External Docs" and click it.

![create_a_sequence_tutorial/step_1](/img/create_a_sequence_tutorial/step_1.png)

Click on the icon button

![create_a_sequence_tutorial/step_2](/img/create_a_sequence_tutorial/step_2.png)

On the https://www.dev-docs.io/external_docs page, click Live Playground Examples

![create_a_sequence_tutorial/step_3](/img/create_a_sequence_tutorial/step_3.png)

On the page https://www.dev-docs.io/external_docs find the link with the text Codespace Url and click on it

![create_a_sequence_tutorial/step_4](/img/create_a_sequence_tutorial/step_4.png)

1. On the **Configure and create codespace** page, click the **Create codespace** button.

![create_a_sequence_tutorial/step_5](/img/create_a_sequence_tutorial/step_5.png)

Find the file dev-docs.json and click on it

![create_a_sequence_tutorial/step_6](/img/create_a_sequence_tutorial/step_6.png)

1.  Copy and Paste This Code Snippet

```json
{
  "tutorial": true,
  "tutorialOrder": {
    "javascript/your_tutorial_folder_name": [
      "filenameone.js",
      "filenametwo.js"
    ],
    "python/your_tutorial_folder_name": ["filenameone.py", "filenametwo.py"]
  }
}
```

The key `tutorialOrder` is an object where we can set keys that match our tutorials directory with our own tutorial like `javascript/test`.  It's value is an array of files that appear in the particular order we want them to appear.  Replace the values with yours similar to below.

![create_a_sequence_tutorial/step_15](/img/create_a_sequence_tutorial/step_15.png)

Now if you don't have a second file in your tutorial, be sure to add one for example here we add one called `filenametwo.js`.

![create_a_sequence_tutorial/step_27](/img/create_a_sequence_tutorial/step_27.png)

On the second file,  right click and Open Dev-doc for current file

![create_a_sequence_tutorial/step_28](/img/create_a_sequence_tutorial/step_28.png)

If done correctly you should see a button at the top that when clicked opens the other codfile and tutorial.  Now feel free to write content in the second page.

![create_a_sequence_tutorial/step_29](/img/create_a_sequence_tutorial/step_29.png)
