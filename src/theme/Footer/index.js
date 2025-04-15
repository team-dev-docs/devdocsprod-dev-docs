import React from 'react';
import Footer from '@theme-original/Footer';
import ChatBox from '@site/src/components/DocChat';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useColorMode } from '@docusaurus/theme-common';
import GlobalDarkModeHandler from '@site/src/components/GlobalDarkModeHandler';
import '@fontsource/inter';
import { BackgroundGradientAnimation } from "@site/src/components/background-gradient-animation";
import { ChatManager } from '@site/src/components/ChatManager';




export default function FooterWrapper(props) {
  let location = useLocation();
  // Supports weights 100-900


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

    let footerTitles = document.querySelectorAll('div.footer__title');

    footerTitles.forEach((footerTitle) => {
      if (footerTitle.textContent.trim() === 'Social') {
        // Find any list items in the next adjacent element that is likely to be a list container
        let listContainer = footerTitle.nextElementSibling; // Adjust this line if the structure is different
        let listItems = listContainer.querySelectorAll('li');
  
        listItems.forEach((item) => {
          // Convert the item's text content into a valid class name
          let className = item.textContent.trim().toLowerCase().replace(/\s+/g, '-');
          // Ensure the class 'social' is added along with the specific social media class
          item.classList.add('social', className);
        });
      }
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

      <GlobalDarkModeHandler />
      <ChatManager />


        <Footer {...props} />

    </>
  );
}
