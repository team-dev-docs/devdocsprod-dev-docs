import React from 'react';

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

const CodeSnippet = (props) => {
  const parseCodeSnippets = (props) => {
    let preElements = findPreElements(props);

    const triggers = [];
    const contents = [];
    for (const prop of preElements) {
      let child = prop
      console.log("this is the child", child)

      let languageAndContext = child.props.className.split("-")[1]

      contents.push(
        <div className="mt-2" key={languageAndContext} value={languageAndContext}>
          {child}
        </div>
      );

      console.log("is this looping")
    }

    return { triggers, contents };
  };

  // Convert children to a string
  const { triggers, contents } = parseCodeSnippets(props.children);

  return (
    <div className="mt-[1em] text-sm">
        {contents}
    </div>
  );
};

export default CodeSnippet;
