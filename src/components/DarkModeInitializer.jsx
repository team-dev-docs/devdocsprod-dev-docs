import React, { useEffect } from 'react';

const DarkModeInitializer = () => {
  useEffect(() => {
    // const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // if (isDarkMode) {
    // window.alert(isDarkMode)
    //   document.body.classList.add('dark');
    // } else {
    //   document.body.classList.remove('dark');
    // }
  }, []);

  return null; // This component does not render anything
};

export default DarkModeInitializer;