import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BrowserOnly from '@docusaurus/BrowserOnly';

const GlobalDarkModeHandlerContent = () => {
  let location = useLocation();
  const handlePageLoad = () => {
    
    // Your code here for when the page is loaded
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {




    window.addEventListener('load', handlePageLoad);


    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);





  useEffect(() => {

    const handlePathnameChange = () => {
      setTimeout(() => {
        handlePageLoad()
      }, 10); // Wait for half a second before executing the code
    };


    handlePathnameChange()

  }, [location.pathname]);

  return null; // This component does not render anything
};

export default function GlobalDarkModeHandler() {
  return (
    <BrowserOnly>
      {() => <GlobalDarkModeHandlerContent />}
    </BrowserOnly>
  );
}