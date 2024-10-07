

  ---
sidebar_position: 2
---

# Create Your First Codelab in Your Playgrounds Repo

When logged into [dev-docs.io](https://dev-docs.io) click the gear icon on the right side of the page to open the Side Drawer.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_1.png)

Click Live Playground Examples.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_2.png)

Find the link with the text Codespace Url and click on it.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_3.png)

We are going to edit our playground in a Github Codespace (but you can do it locally as well).

Click the **Create codespace** button. This will initialize your Github Codespace, which takes about one minute to complete.

![](/img/dev-docs-assets/dev-docs-VHVlLCAwOSBKYW4gMjAyNCAwMjoxODo1MyBHTVQ=.png)

When the tutorial Dialog, comes up Click the **Cancel** button since we are creating a tutorial not running one.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_6.png)

With Shift Command P open the Command Palette and find the Dev-Docs Command called **Sign in With Dev-Docs**.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_7.png)

Select your Org.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_8.png)

Click the Dev-Docs button.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_10.png)

Click the "Open Dev-Docs" button.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_11.png)

When Dev-Docs notion type editor open, click hit the pencil icon on the right hand side.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_12.png)

Create a codeblock, either with backticks or using the typing `/` and selecting a codeblock.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/addcodeblock.png)

Double click the codeblock and select the language. What you select decides what base folder is created, for example if you select javascript it will be `javascript/your_tutorial_name`.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/selectlang.png)

When the modal opens go to the playgrounds tab and fill out the tutorial name, and the name of the first code file which is usually just the name of the tutorial followed by the extension, in this case `js`.

Select Update Snippet.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/modal.png)

Now in the terminal check if your tutorial was created by running `git pull origin main`.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_15.png)

Find the new folder and code file created. In this example the tutorial codefile was `javascript/test/test.js`.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_25.png)

Now right click on the the file and select `Open Dev-Doc for current file`.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_26.png)

Then start typing your content.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_27.png)

Congrats you just wrote your first tutorial.

![](/img/create_your_first_codelab_in_your_playgrounds_repo/step_28.png)

Do not forget to commit your progress.

## Additional Tips for Creating Effective Codelabs

1. **Use Clear and Concise Language**: Ensure your instructions are easy to follow, even for beginners.

2. **Add Code Comments**: Include helpful comments in your code snippets to explain complex parts.

3. **Provide Context**: Explain why certain steps are important or how they fit into the bigger picture.

4. **Include Screenshots**: Visual aids can greatly enhance understanding, especially for UI-related steps.

5. **Test Your Tutorial**: Go through your codelab as if you were a user to ensure all steps work as expected.

6. **Update Regularly**: Keep your codelab up-to-date with the latest versions of tools and libraries used.

Remember, the goal is to create an engaging and educational experience for your users. Happy coding!

  