import React from 'react';
import Footer from '@theme-original/Footer';
import Parser from '@site/src/components/OmniParser';
import ChatBox from '@site/src/components/DocChat';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useColorMode } from '@docusaurus/theme-common';



export default function FooterWrapper(props) {
  let location = useLocation();


  useEffect(() => {
    const tocLinks = document.querySelectorAll('.toc-highlight');

  
  
    const handleClick = (event) => {
      // Prevent default anchor click behavior
      // event.preventDefault();
  
      // Remove the active class from all TOC links
      tocLinks.forEach(link => {
        link.classList.remove('table-of-contents__link--active');
      });
  
      // Add the active class to the clicked TOC link
  
      event.currentTarget.classList.add('table-of-contents__link--active');
    };
  
    tocLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });
  
    // Cleanup function to remove event listener when the component unmounts
    


    return () => {
      tocLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [location.pathname]);
  return (
    <>
      <ChatBox messages={[]} />
      <Footer {...props} />
    </>
  );
}
