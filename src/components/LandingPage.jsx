
import React from 'react';
import clsx from 'clsx';
import Editor from '@site/src/components/editor.jsx';

export const data = {"type":"doc","content":[{"type":"paragraph","content":[{"type":"hardBreak"},{"type":"hardBreak"}]},{"type":"heading","attrs":{"level":1},"content":[{"type":"text","text":"Lets goooo!"}]},{"type":"paragraph"},{"type":"columnBlock","content":[{"type":"column","content":[{"type":"draggableItem","attrs":{"background":"linear-gradient(30.17deg, #00BABD, #ff4500)"},"content":[{"type":"heading","attrs":{"level":1},"content":[{"type":"text","marks":[{"type":"textStyle","attrs":{"color":"#eee2e2"}}],"text":"Very cool stuff dude"}]},{"type":"paragraph"},{"type":"paragraph"},{"type":"heading","attrs":{"level":3},"content":[{"type":"text","marks":[{"type":"textStyle","attrs":{"color":"#242c9e"}}],"text":"This is some cool stuff "},{"type":"text","text":"       "}]}]},{"type":"paragraph"},{"type":"paragraph","content":[{"type":"text","text":"          "}]}]},{"type":"column","content":[{"type":"paragraph"}]}]}]}


export default function LandingPage() {
    return (
        <Editor data={data} />
    );
  }



