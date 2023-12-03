import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";

import React, { useEffect, useRef } from "react";

function replaceImageUrl(cssString) {
  const regex =
    /url\(['"]?(https:\/\/raw.githubusercontent.com\/.*?)\/img\/(.*?\.png).*?['"]?\)/g;
  return cssString.replace(regex, 'url("img/$2")');
}

function convertStyleString(styleString) {
  const stylesStringCleaned = replaceImageUrl(styleString);
  const declarations = stylesStringCleaned.split(";");

  const styles = {};

  for (let declaration of declarations) {
    declaration = declaration.trim();

    if (!declaration) {
      continue;
    }

    const colonIndex = declaration.indexOf(":");
    if (colonIndex === -1) {
      continue;
    }

    const property = declaration.substr(0, colonIndex).trim();
    let value = declaration.substr(colonIndex + 1).trim();

    if (value.indexOf("url(") !== -1) {
      const urlStart = value.indexOf("url(");
      const urlEnd = value.indexOf(")", urlStart + 4);
      const url = value
        .substr(urlStart + 4, urlEnd - urlStart - 4)
        .replace(/['"]/g, "");
      value =
        value.substr(0, urlStart) + `url(${url})` + value.substr(urlEnd + 1);
    }

    styles[property] = value;
  }

  return styles;
}

const NodeView = (props) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleDomContent = () => {
      try {
        const draggableItems =
          nodeRef.current.querySelectorAll(".draggable-item");
        draggableItems.forEach((draggableItem) => {
          const closestNodeDraggableItem = draggableItem.closest(
            ".node-draggableItem"
          );
          if (closestNodeDraggableItem) {
            const {
              display,
              gap,
              alignContent,
              alignItems,
              flexDirection,
              justifyContent,
              flexWrap,
              flexFlow,
              flex,
            } = draggableItem.style;
            closestNodeDraggableItem.style.cssText = `flex: ${flex}; gap: ${gap}; display: ${display}; align-content: ${alignContent}, align-items: ${alignItems}, justifyContent: ${justifyContent}, flexDirection: ${flexDirection}; flexWrap: ${flexWrap}; flexFlow: ${flexFlow}`;
          }

          // Get a NodeList of the items
          // const grid = closestNodeDraggableItem.querySelector(".draggable-grid")
          // console.log("this is the grid", grid)

          // Initialize a variable to keep track of the maximum height
        });

        if (nodeRef.current.classList.contains("draggable-grid")) {
          var maxHeight = 0;
          var items = nodeRef.current.querySelectorAll(".node-draggableItem");

          const images = nodeRef.current.querySelectorAll(".node-ResizableImage");
          const iterationItems = [...images, ...items];
          // Iterate over the items to find the maximum height
          iterationItems.forEach(function (item) {
            var itemHeight = item.offsetHeight;

            // If this item's height is greater than the current max, update the max
            if (itemHeight > maxHeight) {
              maxHeight = itemHeight;
            }
          });

          // Iterate over the items again to set their height to the maximum height
          iterationItems.forEach(function (item) {
            item.style.setProperty("height", `${maxHeight}px`, "important");
          });
        }
      } catch (e) {
        console.log(e);
      }
    };

    setTimeout(handleDomContent, 500); // check every second

    window.addEventListener("load", handleDomContent);
    return () => {
      window.removeEventListener("load", handleDomContent);
    };
  }, []);

  let mainStyle;

  if (props.node.attrs.style) {
    mainStyle = convertStyleString(props.node.attrs.style);
  }

  const background = props?.node?.attrs?.background || "white";
  const otherStyles = props?.node?.attrs?.customStyle || mainStyle;
  const display = otherStyles?.display || "unset";
  const gap = otherStyles?.gap || "unset";
  const alignContent = otherStyles?.alignContent || "unset";
  const alignItems = otherStyles?.alignItems || "unset";
  const flexDirection = otherStyles?.flexDirection || "unset";
  const justifyContent = otherStyles?.justifyContent || "unset";
  const flexWrap = otherStyles?.flexWrap || "unset";
  const flexFlow = otherStyles?.flexFlow || "unset";
  const height = otherStyles?.height || "inherit";
  const styledItems = {
    flexFlow,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    gap,
    display,
    height,
  };

  const classes = `draggable-item ${props?.node?.attrs?.class}`;

  return (
    <NodeViewWrapper
      ref={nodeRef}
      style={{
        width: props?.node?.attrs?.width,
        height: props?.node?.attrs?.height,
        ...mainStyle,
      }}
      className={classes}
    >
      <NodeViewContent style={{ styledItems }} className="content butts" />
    </NodeViewWrapper>
  );
};

export default NodeView;
