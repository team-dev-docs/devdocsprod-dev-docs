import React from "react";
import Heading from "@theme/Heading";
import svgToDataUri from "mini-svg-data-uri";
import { BackgroundGradient } from "../../components/background-gradient";
import { BackgroundGradientAnimation } from "@site/src/components/background-gradient-animation";

export default function MDXHeading(props) {
  let image = `url("${svgToDataUri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="white" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
  )}")`;

  // Check if it's the top-level H1 heading
  const isTopLevelH1 = props.as === "h1";
  console.log(props);

  return (
   
    
     <Heading {...props} />  

  );
}
