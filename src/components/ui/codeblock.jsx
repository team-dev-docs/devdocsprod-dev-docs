import React, { useState } from "react";
import { Button } from "@site/src/components/ui/button";

const CodeBlock = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    try {
        console.log(children)
      const codeLines = children[0].props.children;
      navigator.clipboard.writeText(codeLines);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="chat-code-block">
      <pre>
        <code>{children}</code>
      </pre>
      <Button className="copy-button" onClick={copyCode}>
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};

export default CodeBlock;
