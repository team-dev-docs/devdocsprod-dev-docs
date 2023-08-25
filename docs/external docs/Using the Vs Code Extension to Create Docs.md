````markdown 
## Use the Vs Code extension to write normal Markdown

If you always struggled to just write normal markdown, rejoice you can use the the VS Code Extensions markdown just like this

![](/img/dev-docs-assets/dev-docs-RnJpLCAyNSBBdWcgMjAyMyAwMzoxNTo1NCBHTVQ=.png)

To open a markdown file using the extension just right click in the md file and select open Devdocs markdown.

![](/img/dev-docs-assets/dev-docs-RnJpLCAyNSBBdWcgMjAyMyAwMzoxNzozOSBHTVQ=.png)++{style=" width: 100%; height: 32ch;"}

## Use the editor to docs with Dev-Docs syntax

To get the full experience of using the Vs Code Editor we recommend using the Dev-Docs markdown syntax so you use custom styling, and custom components that is only available in Dev-Docs type of markdown.  To do this we add a dev-docs markdown wrapper and then you use the editor.

Which looks like so:
![](/img/dev-docs-assets/dev-docs-RnJpLCAyNSBBdWcgMjAyMyAwMzoyODowNiBHTVQ=.png)
To break it the <code>markdown</code> wrapper is where the extension write all your content, and the <code>parser</code> is a custom component that deals docusaurus to use the Dev-Docs Markdown and rendering.

If you ever forget how to use the dev-docs syntax there is a built in vs code extension command called <code>Use Dev Docs Syntax</code> that adds that syntax for you that looks like so:

![](/img/dev-docs-assets/dev-docs-RnJpLCAyNSBBdWcgMjAyMyAwMzozMTo1NiBHTVQ=.png)








 ````
 <Parser />