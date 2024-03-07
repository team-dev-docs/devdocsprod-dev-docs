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
    <>
  

        {props?.children?.type?.metadata?.title ? (<>
        <BackgroundGradientAnimation onClick={handleClick}>
          <h1 style={{paddingLeft: "1vw", fontSize: "60px"}}><a href={props.children.type.metadata.permalink}>{props.children.type.metadata.title}</a></h1>
          <h3 style={{paddingLeft: "1vw"}}>
          {props.children.type.metadata.formattedDate}
          </h3>
          <div className='flex flex-row items-center mb-10 w-full'>
            {props.children.type.metadata.authors.map((item, index) => (
            <img style={{height: "4vh"}} src={item.imageURL}></img>
            ))}
          </div>
   
        </BackgroundGradientAnimation>
        <MDXContent style={{backgroundImage: image}} {...props} />
        </>
        ) : (
        <TracingBeam>
          <MDXContent style={{backgroundImage: image}} {...props} />
        </TracingBeam>)
        }
           
        
  
    </>
    
  );
}
