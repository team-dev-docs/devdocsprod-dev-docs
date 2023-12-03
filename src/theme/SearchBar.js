import React, { useEffect } from 'react';
import SearchBar from '@theme-original/SearchBar';
import { useColorMode } from '@docusaurus/theme-common';

export default function SearchBarWrapper(props) {
  // Console log the props
  console.log("this is search", props);

  // Use useEffect to change the colorMode
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey && event.key === 'k') {
        console.log('Command + K was pressed');
        console.log("this is the colorMode brooo", colorMode);

        // You can use the updated colorMode value here

        // Example: Toggle a class on the body based on colorMode
        if (colorMode === 'dark') {
          document.body.classList.add("dark");
          setColorMode('dark')
        } else {
          document.body.classList.remove("dark");
          setColorMode('light')
        }
      }
    };

    const handleClick = () => {
      console.log('centerSearchBar div was clicked');
      console.log('Command + K was pressed');
      console.log("this is the colorMode brooo", colorMode);

      // You can use the updated colorMode value here

      // Example: Toggle a class on the body based on colorMode
      if (colorMode === 'dark') {
        document.body.classList.add("dark");
        setColorMode('dark')
      } else {
        document.body.classList.remove("dark");
        setColorMode('light')
      }
      // Add your logic here for the onClick event
    };

    window.addEventListener('keydown', handleKeyDown);
    document.querySelector('.centerSearchBar').addEventListener('click', handleClick);

    // Cleanup function to remove the event listeners when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.querySelector('.centerSearchBar').removeEventListener('click', handleClick);
    };
  }, [colorMode]);

  // If you want to manipulate or alter the props, you can do so. 
  // For example, if there's a prop called 'placeholder', and you want to change its value:
  const modifiedProps = {
    ...props,
    placeholder: 'New Placeholder Text'
  };

  return (
    <div className="centerSearchBar">
      <div className="searchBarInner">
        <SearchBar {...modifiedProps} />
      </div>
    </div>
  );
}