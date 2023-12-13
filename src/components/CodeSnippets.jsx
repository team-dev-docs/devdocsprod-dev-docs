import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"






function findPreElements(children) {
  let preElements = [];

  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      if (child.props.parentName === 'pre') {
        preElements.push(child);
      }

      if (child.props.children) {
        preElements = preElements.concat(findPreElements(child.props.children));
      }
    }
  });

  return preElements;
}

// Usage:
// const preElements = findPreElements(props.children);

const CodeSnippets = (props) => {
  const parseCodeSnippets = (props) => {
    let preElements = findPreElements(props);

    let codeBlocks = [];
    const triggers = [];
    const contents = [];
    for (const prop of preElements) {
      let child = prop
      console.log("this is the child", child)

      let languageAndContext = child.props.className.split("-")[1]
      let language = languageAndContext.split("::")[0]
      let langContext = languageAndContext.split("::")[1]
      triggers.push(
        <TabsTrigger key={languageAndContext} value={languageAndContext}>{`${language} ${langContext || ""}`}</TabsTrigger>
      );

      contents.push(
        <TabsContent className="mt-2" key={languageAndContext} value={languageAndContext}>
          {child}
        </TabsContent>
      );

      console.log("is this looping")
    }

    console.log("this is the code blocks", codeBlocks)
    console.log("this is the triggers", triggers)
    console.log("this is the contents", contents)
    return { triggers, contents };
  };

  // Convert children to a string
  const { triggers, contents } = parseCodeSnippets(props.children);

  return (
    <div className="mt-[1em]">
      <Tabs defaultValue={triggers.length > 0 ? triggers[0].props.value : ''}>
        <TabsList>
          {triggers}
        </TabsList>
        {contents}
      </Tabs>
    </div>
  );
};

export default CodeSnippets;
