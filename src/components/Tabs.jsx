import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Editor from './MarkdownEditor'
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';

const TabsComponent = (props) => {
  // Parse items from string to array
  const items = JSON.parse(props.node.attrs.items);

  return (
    <NodeViewWrapper>
    <Tabs defaultValue={items.find(item => item.default).value} style={{ minHeight: '100vh' }}>
      {items.map((item) => (
        <TabItem key={item.id} value={item.value} label={item.label}>
          <Editor data={item.content} />
        </TabItem>
      ))}
    </Tabs>
    </NodeViewWrapper>
  );
}

export default TabsComponent;
