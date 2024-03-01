import React from 'react';
import MDXContent from '@theme-original/MDXContent';

import TracingBeam from '@site/src/components/tracing-beam';
import svgToDataUri from "mini-svg-data-uri"
import { BackgroundGradientAnimation } from "@site/src/components/background-gradient-animation";
import { useHistory } from '@docusaurus/router';


export default function MDXContentWrapper(props) {
console.log("HEY this is the stuff", props)
  let image = `url("${svgToDataUri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="white" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
  )}")`
  console.log("this is the props", props)

  const handleClick = () => {
    // Navigate to a different path when the button is clicked
    history.push('/docs/another-page');
  };

  return (
    <TracingBeam className=''>
        {props?.children?.type?.metadata?.title ? (
        <BackgroundGradientAnimation onClick={handleClick}>
          <h1>{props.children.type.metadata.title}</h1>
          <h3>
          {props.children.type.metadata.formattedDate}
          </h3>
        </BackgroundGradientAnimation> 
        ) : (<span></span>)
        }
           
        <MDXContent style={{backgroundImage: image}} {...props} />
  
    </TracingBeam>
    
  );
}
