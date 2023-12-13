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


      triggers.push(
        <TabsTrigger key={child.props.className} value={child.props.className}>{`${child.props.className}`}</TabsTrigger>
      );

      contents.push(
        <TabsContent className="mt-2" key={child.props.className} value={child.props.className}>
          {child}
        </TabsContent>
      );

      console.log("is this looping")
    }

    console.log("this is the code blocks", codeBlocks)
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
