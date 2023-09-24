import React from 'react';
import SearchBar from '@theme-original/SearchBar';


export default function SearchBarWrapper(props) {
  
  // Console log the props
  console.log("this is search", props);

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