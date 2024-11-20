import React from "react";
import MDXContent from "@theme-original/MDXContent";

import TracingBeam from "@site/src/components/tracing-beam";
import svgToDataUri from "mini-svg-data-uri";
import { BackgroundGradientAnimation } from "@site/src/components/background-gradient-animation";


export default function MDXContentWrapper(props) {
  let image = `url("${svgToDataUri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="white" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
  )}")`;
  console.log("this is the props", props);

  const handleClick = () => {
    // Navigate to a different path when the button is clicked
    history.push("/docs/another-page");
  };

  console.log("bloggging", props?.children?.type?.metadata)

  return (
    <>
      {props?.children?.type?.metadata?.source.includes("@site/blog") ? (
        <>
          <BackgroundGradientAnimation
            lightImage={props?.children?.type?.frontMatter?.light_image}
            imagePositionY={
              props?.children?.type?.frontMatter?.image_position_y
            }
            bgImageSize={ props?.children?.type?.frontMatter?.image_size}
            imagePositionX={
              props?.children?.type?.frontMatter?.image_position_x
            }
            headerHeight={props?.children?.type?.frontMatter?.header_height}
            image={props?.children?.type?.frontMatter?.header_image}
            backgroundRepeat={props?.children?.type?.frontMatter?.image_repeat}
            className={props?.children?.type?.frontMatter?.class_name}
            textColor={props?.children?.type?.frontMatter?.text_color || "auto"}
            style={{
              marginBottom: "2em",
              backgroundImage: props?.children?.type?.frontMatter?.header_image,
            }}
            onClick={handleClick}
          >
            <h1 style={{ color: props?.children?.type?.frontMatter?.text_color}}>
              <a style={{ color: props?.children?.type?.frontMatter?.text_color}} href={props.children.type.metadata.permalink}>
                {props.children.type.metadata.title || "yo"}
              </a>
            </h1>
            <h3
              style={{ paddingLeft: "1vw", fontSize: "16px", fontWeight: 400, color: props?.children?.type?.frontMatter?.text_color }}
            >
              {props?.children?.type?.metadata?.authors?.length > 0 &&
                props.children.type.metadata.authors.map((item, index) => (
                  <span style={{color: props?.children?.type?.frontMatter?.text_color}} key={index}>{" " + item.name + ","}</span>
                ))}
              
              &nbsp; <span style={{color: props?.children?.type?.frontMatter?.text_color}}>Est Reading Time: {props.children.type.metadata.formattedDate}</span>{" "}
              <span style={{color: props?.children?.type?.frontMatter?.text_color}}>{Math.ceil(props.children.type.metadata.readingTime * 10) / 1} min</span>
            </h3>
            <div className="flex flex-row items-center mb-10 w-full">
              {props?.children?.type?.metadata.authors?.map((item, index) => (
                <div className="pl-2">
                  <img
                    className="author-avatar"
                    style={{ height: "2.5em" }}
                    src={item.imageURL || "/img/ddlogo.png"}
                  ></img>
                </div>
              ))}
              <div className="pl-6">
                {props?.children?.type?.metadata?.authors?.length > 0 &&
                  props.children.type.metadata.authors.map((item, index) => (
                    <span style={{color: props?.children?.type?.frontMatter?.text_color}} key={index}>
                    {" " + item.name + (index < props.children.type.metadata.authors.length - 1 ? "," : "")}
                    </span>
                  ))}
              </div>
            </div>
          </BackgroundGradientAnimation>
          <div className="dev-docs-blog">
            <MDXContent style={{ backgroundImage: image }} {...props} />
          </div>
        </>
      ) : (
        <TracingBeam>
          <div id="tracing-beam">
            
            <MDXContent style={{ backgroundImage: image }} {...props} />
          </div>
        </TracingBeam>
      )}
    </>
  );
}