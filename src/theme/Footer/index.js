import React from 'react';
import Footer from '@theme-original/Footer';
import Parser from '@site/src/components/OmniParser';
import ChatBox from '@site/src/components/DocChat';


export default function FooterWrapper(props) {
  return (
    <>
      <ChatBox messages={[]} />
      <Footer {...props} />
    </>
  );
}
