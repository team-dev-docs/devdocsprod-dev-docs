import {componentMarkdownConverter, componentHtmlConverter} from "./parserConversionTemplates.js"

function handleCodeSnippets(markdown) {
  const regex = /```(\w+)\n([\s\S]*?)```/g;
  markdown = markdown.replace(regex, (match, language, code) => {
    // Add a class attribute to the code element based on the captured language identifier
    return `<pre><code class="language-${language || "python"}">${code}</code></pre>`;
  });

  const codeSnippetRegex = /```([\s\S]*?)```/g;

  // Use the replace method to replace the triple backticks with the opening and closing pre and code tags
  markdown = markdown.replace(codeSnippetRegex, "<pre><code>$1</code></pre>");

  // Handle single backticks within the code snippet
  //markdown = markdown.replace(/`/g, '\\`');

  return markdown;
}



function handleLists(html) {
  //var markdown = html.replace(/<ul data-type="taskList">/gm, `<div class="taskList"></div>`).replace(/<\/ul>/gm, `</div>`)
  const regexOne = /(\<li data-checked="false">)(.*?)(<\/li>)/g;

  var markdown = html.replace(regexOne, `\n-[ ]`);
  return markdown;
}

function convertToList(markdown) {
  // Initialize the HTML list
  const checkboxRegex = /^- \[(x| )\] (.*)$/gm;
  let checkboxMatch;
  let matchCount = 0;
  let matchIndex = 0;
  let foundEmptyLine = false;

  while ((checkboxMatch = checkboxRegex.exec(markdown)) !== null) {
    if (checkboxMatch[0].trim() === "") {
      foundEmptyLine = true;
      break;
    }
    matchCount += 1;
    matchIndex = checkboxRegex.lastIndex;
  }

  if (matchCount > 0 && !foundEmptyLine) {
    markdown =
      markdown.slice(0, matchIndex) + "</ul>" + markdown.slice(matchIndex);
    markdown = markdown.replace(
      /^- \[(x| )\] (.*)$/gm,
      '<li data-type="taskItem" data-checked="$1">$2</li>'
    );
    markdown = markdown.replace(/^/, '<ul data-type="taskList">');
  }
  return markdown;
}

function convertMarkdownTableToHtml(htmlString) {
 
  // Pattern to match each markdown table in the string
  const tablePattern = /\|(?:.*\|\<)+(?:.*\|)/g;

  // Pattern to match the header row in the table
  const headerPattern = /\|(.*\|)(?=\<br>\|[- ]+\|)/g;

  // Pattern to match each row in the table
  const rowPattern = /\|(.*)\|/g;

  // Pattern to match each cell in the row
  const cellPattern = /[^|]+(?=\|)/g;

  let match;

  while ((match = tablePattern.exec(htmlString)) !== null) {
   
    let markdownTable = match[0];
    let htmlTable = "<table><tbody>";
    let rowMatch;
    let rowIndex = 0;
    let headerMarkdown;

    let headerMatch = headerPattern.exec(markdownTable);
    if (headerMatch) {
     
      headerMarkdown = headerMatch[1];
      let htmlRow = "";
      let cellMatch;

      while ((cellMatch = cellPattern.exec(headerMarkdown)) !== null) {
        htmlRow += `<th colspan="1" rowspan="1">${cellMatch[0].trim()}</th>`;
      }

      htmlTable += `<tr>${htmlRow}</tr>`;
      rowIndex++;
    }
   
    let markdownTables = markdownTable.split(headerMarkdown)[1].split("<br>");
   
    markdownTables.shift();
    markdownTables.shift();

   
    for (const row of markdownTables) {
      let tds = row.split("|").filter(function (item) {
        return item != "";
      });
      let tableRowStart = `<tr>`;
      for (const td of tds) {
        tableRowStart += `<td>${td.trim()}</td>`;
      }
      tableRowStart += `</tr>`;
     
      htmlTable += tableRowStart;
    }

    htmlTable += "</tbody></table>";

    // Replace the markdown table with the HTML table in the original HTML string
    htmlString = htmlString.replace(markdownTable, htmlTable);
  }

  return htmlString;
}

function convertHtmlTableToMarkdown(htmlString) {
 
  // Pattern to match each row in the table
  const rowPattern = /<tr>(.*?)<\/tr>/gs;

  // Pattern to match each cell in the row
  const cellPattern = /<t[hd].*?>(.*?)<\/t[hd]>/gs;

  let mdTable = "";
  let match;
  let rowIndex = 0;

  while ((match = rowPattern.exec(htmlString)) !== null) {
    let rowHtml = match[1];
    let mdRow = "";
    let cellMatch;

    while ((cellMatch = cellPattern.exec(rowHtml)) !== null) {
      mdRow += `| ${cellMatch[1].trim()} `;
    }

    mdRow += "|";

    if (rowIndex === 0) {
      // Add header separator for markdown
      mdTable +=
        mdRow +
        "\n" +
        "| --- ".repeat((mdRow.match(/\|/g) || []).length - 1) +
        "|\n";
    } else {
      mdTable += mdRow + "\n";
    }

    rowIndex++;
  }

 

  // Replace the HTML table with the markdown table in the original HTML
  htmlString = htmlString.replace(/<table>.*?<\/table>/gs, mdTable);

  return htmlString;
}

function replaceConsecutiveNewlines(inputString) {
  return inputString.replace(/(\n{2,})/g, function (match) {
    const newlineCount = match.length / 2;
    return `<p></p>`;
  });
}

function wrapDivsWithP(str) {
  const regex = /(<div.*?>.*?<\/div>)/g;
  const replacement = (match) => `<p>${match}</p>`;

  return str.replace(regex, replacement);
}

function addNewlineToDraggable(str) {
  const regex = /(<div[^>]*>)(\n)(?!\n)/g;
  const replacement = (match) => {
    if (!match.endsWith("\n")) {
      return match + "\n";
    } else {
      return match;
    }
  };

  return str.replace(regex, replacement);
}

function addNewlineToParagraph(str) {
  const regex = /(<p>[\s\S]*?<\/p>)(?=[^\n])/g;
  const replacement = (match) => {
    if (!match.endsWith("\n")) {
      return match + "\n";
    } else {
      return match;
    }
  };

  return str.replace(regex, replacement);
}

function handlePTagContent(html) {
  const regex = /<p>(.*?)<\/p>/g;
  const replacement = (match, content) => {
    if (!content.endsWith("\n")) {
      return content + "\n"; // append a newline if it doesn't already exist
    } else {
      return content; // leave the content as is
    }
  };

  return html.replace(regex, replacement);
}

function handlePTagWithContent(html) {
  // The regex matches a <p> tag and its non-empty content until the </p> tag,
  // capturing the content inside the tag in a group for later use in the replacement.
  const regex = /<p>\s*([^<]+)<\/p>/g;

  // The replacement function checks if the content of the <p> tag ends with a newline.
  // If it doesn't, it appends one; otherwise, it leaves the content as is.
  const replacement = (match, content) => {
    content = content.trim(); // remove leading/trailing white-space
    if (!content.endsWith("\n")) {
      return content + "\n"; // append a newline if it doesn't already exist
    } else {
      return content; // leave the content as is
    }
  };

  return html.replace(regex, replacement);
}



// function addNewlineToDraggableEnd(str) {
//   // The regex matches "</div>" followed by any number of whitespace characters (excluding newlines),
//   // followed by any non-newline character.
//   // It uses a positive lookahead to ensure the non-newline character isn't included in the match.

//   const regex = /(\<\/div>\s*?)(?=[^\n])/g;

//   // The replacement function adds a newline to the match, but only if one isn't already present.
//   const replacement = (match) => {
//     if (!match.endsWith("\n")) {
//       return match + "\n";
//     } else {
//       return match;
//     }
//   };

//   return str.replace(regex, replacement);
// }

function addNewlineToDraggableEnd(str) {
  // The regex matches "</div>" followed by any number of whitespace characters (excluding newlines),
  // followed by any non-newline character.
  // It uses a positive lookahead to ensure the non-newline character isn't included in the match.
  const regex = /(<\/div>)/g;

  // The replacement function adds a newline to the match, but only if one isn't already present.
  const replacement = (match, offset, fullString) => {
    // Check if the match is at the end of the string
    if (offset + match.length === fullString.length) {
      // If it is, return the match without adding a newline
      return match;
    } else {
      // If it's not at the end of the string, add a newline if it doesn't already have one
      if (!match.endsWith("\n")) {
        return match + "\n";
      } else {
        return match;
      }
    }
  };

  // function addNewlineToDraggableEnd(str) {
  // // The regex matches "</div>" followed by any number of whitespace characters (excluding newlines),
  // // followed by any non-newline character.
  // // It uses a positive lookahead to ensure the non-newline character isn't included in the match.
  // const regex = /(<\/div>)/g;

  // // The replacement function adds a newline to the match, but only if one isn't already present.
  // const replacement = (match, offset, fullString) => {
  //   // Check if the match is at the end of the string
  //   if (offset + match.length === fullString.length) {
  //     // If it is, return the match without adding a newline
  //     return match;
  //   } else {
  //     // If it's not at the end of the string, add a newline if it doesn't already have one
  //     if (!match.endsWith("\n")) {
  //       return match + "\n";
  //     } else {
  //       return match;
  //     }
  //   }
  // };

  return str.replace(regex, replacement);
}

function maintainOneNewLineForHeaders(match, content, prepend) {
  if (/\n/.test(content)) {
    return `${prepend} ${content}\n`;
  } else {
    return `${prepend} ${content}`;
  }
}

function addNewlineBeforeDiv(str) {
  // The regex matches any "<div...>" (with any attributes), possibly followed by whitespace,
  // that is not immediately preceded by a newline character.
  const regex = /(?<!\n)(<div.*?>\s*?)/g;

  // The replacement function adds a newline before the match.
  const replacement = (match) => "\n" + match;

  return str.replace(regex, replacement);
}

function handleTextAlign(style) {
  let textAlign = "";
  let otherStyles = "";
  style.split(";").forEach((stylePart) => {
    if (stylePart.trim().startsWith("text-align")) {
      textAlign = stylePart;
    } else {
      otherStyles += stylePart + ";";
    }
  });
  return { textAlign, otherStyles };
}

function handleStyleAndClass(attr1, attr2) {
  let style = "",
    classAttr = "";

  let attrs = [attr1, attr2];
  attrs.forEach((attr) => {
    if (attr) {
      let [key, value] = attr.split("=");
      value = value.replace(/"/g, "");
      if (key === "style") {
        style += value; // to allow multiple style attributes to be concatenated
      } else if (key === "class") {
        classAttr += (classAttr ? " " : "") + value; // to allow multiple class attributes to be concatenated
      }
    }
  });
  return { style, classAttr };
}

function extractStyle(html) {
  let match = html.match(/style="(.*?)"/);
  return match ? match[1] : null;
}

function extractClass(html) {
  let match = html.match(/class="(.*?)"/);
  return match ? match[1] : null;
}

function extractType(html) {
  let match = html.match(/type="(.*?)"/);
  return match ? match[1] : null;
}

function extractTitle(html) {
  let match = html.match(/title="(.*?)"/);
  return match ? match[1] : null;
}

function extractSrc(html) {
  let match = html.match(/src="(.*?)"/);
  return match ? match[1] : null;
}

function extractHref(html) {
  let match = html.match(/href="(.*?)"/);
  return match ? match[1] : null;
}

var parser = function () {
  this.convertToMarkdown = function (html) {
    //
    //   html = html.replace(/>\s+</g, '><');
    //
    html = html.replace(/<p><br><\/p>/g, "<br>");
    console.log("this is the html again", html)
    // html = wrapDivsWithP(html);

    html = html.replace(/<p>(<div.*?>)/g, "$1"); // remove opening <p> before <div>
    html = html.replace(/(<\/div>)<\/p>/g, "$1");
    html = html.replace(/(<div.*?>)/g, "$1\n");
    // html = html.replace(/(<\/div>)/g, '$1\n');

    //  html = html.replace(/<p><\/p>(?=\s)/g, "\n\n")
    // html = html.replace(/<p>\s*([^<]+)<\/p>/g, '\n$1')
    // html = handlePTagWithContent(html);
    html = handlePTagContent(html);
    html = addNewlineToDraggableEnd(html);
    // html = addNewlineToDraggable(html)

    // html = html.replace(/<p(\s*[^>]*)?>(.*?)<\/p>/g, '\n$2');
    // Remove remaining '<p>' (with possible attributes) and '</p>'
    // html = html.replace(/<p(\s*[^>]*)?><\/p>/g, '');
    //html = html.replace(/<p>(\s*)<\/p>/g, '\n');

    html = html.replace(
      /<h(\d)( style=".*?")?><span style="(.*?)">(.*?)<\/span><\/h\d>/g,
      (_, level, textAlign, style, title) => {
        textAlign = textAlign ? textAlign.split("=")[1].replace(/"/g, "") : "";
        return `${"#".repeat(
          Number(level)
        )} ++{style="${textAlign}${style}"} ${title}\n`;
      }
    );

    html = html.replace(
      /<h(\d)( style=".*?")?>(.*?)<\/h\d>/g,
      (_, level, textAlign, title) => {
        textAlign = textAlign ? textAlign.split("=")[1].replace(/"/g, "") : "";
        if (textAlign)
          return `${"#".repeat(
            Number(level)
          )} ++{style="${textAlign}"} ${title}\n`;
        else return `${"#".repeat(Number(level))} ${title}\n`;
      }
    );

    // html = html.replace(/<h1>(.*?)<\/h1>/g, '# $1\n');
    // html = html.replace(/<h2>(.*?)<\/h2>/g, '## $1\n');
    // html = html.replace(/<h3>(.*?)<\/h3>/g, '### $1\n');
    // html = html.replace(/<h4>(.*?)<\/h4>/g, '#### $1\n');
    // html = html.replace(/<h5>(.*?)<\/h5>/g, '##### $1\n');
    // html = html.replace(/<h6>(.*?)<\/h6>/g, '###### $1\n');

    const codeSnippetRegex =
      /<pre(?:.*?class="language-(.*?)")?.*?>([\s\S]*?)<\/pre>/g;
    html = html.replace(codeSnippetRegex, (match, p1, p2) => {
      p2 = p2.replace(/<code>/g, "");
      p2 = p2.replace(/<\/code>/g, "");
      // Use the triple backtick syntax for the code block, and include the language specified in the class if it exists
      return "```" + (p1 ? "" : "") + "\n" + p2 + "\n```\n";
    });
    html = html.replace(/<strong>(.*?)<\/strong>/g, "**$1**");
    html = html.replace(/<em>(.*?)<\/em>/g, "*$1*");
    html = html.replace(/<a href="(.*?)">(.*?)<\/a>/g, "[$2]($1)");
    // html = html.replace(/<table>/g, "");
    // html = html.replace(/<\/table>/g, "");
    // html = html.replace(/<tr>/g, "");
    // html = html.replace(/<\/tr>/g, "\n");
    // html = html.replace(/<td>(.*?)<\/td>/g, "| $1 ");

    // html = html.replace(/(<img[^>]*>)/g, '\n\n$1\n\n');
    html = handleLists(html);
    // html = addNewlineBeforeDiv(html)
    //   html = html.replace(
    //     /(?:<p( style=".*?")?>)?<span style="(.*?)">(.*?)<\/span>(?:<\/p>)?/g,
    //     (_, textAlign, style, text) => {
    //         textAlign = textAlign ? textAlign.split('=')[1].replace(/"/g, '') : "";
    //         return `++{style="${textAlign}${style}"} ${text}`;
    //     }
    //   );

    //
    //   html = html.replace(
    //     /<div[^>]*?(style="[^"]*")?[^>]*?(class="[^"]*")?[^>]*?>([\s\S]*?)<\/div>/g,
    //     (fullString, style, classAttr, content) => {

    //       let styleString = extractStyle(fullString)

    //       let classString = extractClass(fullString)
    //         style = style ? style.split('=')[1].replace(/"/g, '') : "";
    //         classAttr = classAttr ? classAttr.split('=')[1].replace(/"/g, '') : "";
    //         return `\n++{card style="${styleString}" class="${classString}"}++\n${content.trim()}\n--{card}--`;
    //     }
    // );
    html = html.replace(
      /<img.*?(src=".*?").*?(alt=".*?")?.*?(style=".*?")?.*?(class=".*?")?.*?>/g,
      (_, src, alt, style, classAttr) => {
        src = extractSrc(_);
        alt = alt ? alt.split("=")[1].replace(/"/g, "") : "";
        style = extractStyle(_);
        classAttr = extractClass(_);
        return `![${alt}](${src})${
          style || classAttr
            ? `++{${style ? `style="${style}"` : ""}${
                classAttr ? ` class="${classAttr}"` : ""
              }}`
            : ""
        }`;
      }
    );
    console.log("before the cards", html)
    html = componentHtmlConverter(html)
    html = html.replace(/<div([^>]*)>/g, "++{card$1}++");
    html = html.replace(/<\/div>/g, "--{card}--");
    html = html.replace(
      /<a(?:\s+[\w-]+(?:\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)*>(.*?)<\/a>/g,
      (_, url, _2, style, _4, classAttr, linkText) => {
        const href = extractHref(_);
        const styleString = extractStyle(_);
        const classString = extractClass(_)
        return `[${linkText || url}](${href})${
          styleString || classString
            ? `++{${style ? `style="${styleString}"` : ""}${
                classString ? ` class="${classString}"` : ""
              }}`
            : ""
        }`;
      }
    );
    html = html.replace(
      /<span( style=".*?")?>(.*?)<\/span>/g,
      (match, spanStyle, text) => {
        spanStyle = spanStyle ? spanStyle.split("=")[1].replace(/"/g, "") : "";
        let style = `${spanStyle}`.trim();

        return `++{style="${style}"}${text}`;
      }
    );
    html = html.replace(/<br>/g, "\n");
    html = convertHtmlTableToMarkdown(html);
    return html;
  };

  this.convertToHTML = function (markdown) {
    markdown = markdown.replace(
      /(#{1,6}) \+\+\{style="(.*?)"\} (.+)/g,
      function (_, hashes, style, title) {
        let level = hashes.length;

        const formattedStyles = handleTextAlign(style);
        let { textAlign, otherStyles } = formattedStyles;
        return `<h${level} ${
          textAlign ? ` style="${textAlign}"` : ""
        }><span style="${
          otherStyles.trim() || ""
        }">${title}</span></h${level}>`;
      }
    );
    markdown = markdown = markdown.replace(
      /\+\+\{callout( [a-z\-]+=".*?")*\}\+\+/g,
      (match, capture) => {
        const styleString = extractStyle(match) || "";
        const classString = extractClass(match) || "";
        const type = extractType(match) || ""
        return `<icon type="${type}" style="${styleString}" class="${classString}">`;
      }
    );
    markdown = markdown.replace(/\-\-\{callout\}\-\-/g, "</icon>")
    
    markdown = markdown = markdown.replace(
      /\+\+\{accordion( [a-z\-]+=".*?")*\}\+\+/g,
      (match, capture) => {
        const styleString = extractStyle(match) || "";
        const classString = extractClass(match) || "";
        const title = extractTitle(match) || ""
        return `<accordion title="${title}" style="${styleString}" class="${classString}">`;
      }
    );
    markdown = markdown.replace(/\-\-\{accordion\}\-\-/g, "</accordion>")



    markdown = markdown.replace(/^# (.*)$/gm, "<h1>$1</h1>");
    markdown = markdown.replace(/^## (.*)$/gm, "<h2>$1</h2>");
    markdown = markdown.replace(/^### (.*)$/gm, "<h3>$1</h3>");
    markdown = markdown.replace(/^#### (.*)$/gm, "<h4>$1</h4>");
    markdown = markdown.replace(/^##### (.*)$/gm, "<h5>$1</h5>");
    markdown = markdown.replace(/^###### (.*)$/gm, "<h6>$1</h6>");

    markdown = markdown.replace(/(?<=^|\r\n|\n|\r)(\r\n|\n|\r)/g, "<p></p>");
    markdown = markdown.replace(/(?<!<\/p>)\n([^\n<]+)(?!\S)/g, "<br>$1");

    markdown = markdown.replace(
      /\%ref\/\|/g,
      `<span data-inline-reference="true">`
    );
    markdown = markdown.replace(/\\\|ref\%/g, `</span>`);
    markdown = markdown.replace(
      /\%ref\|/g,
      `<span data-inline-reference="true">`
    );
    markdown = markdown.replace(/\|ref\%/g, `</span>`);
    markdown = markdown.replace(/image-component/g, `img`);
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    markdown = markdown.replace(/\*(.*?)\*/g, "<em>$1</em>");
    //
    markdown = markdown.replace(
      /!\[(.*?)\]\((.*?)\)(\+\+\{(style=".*?"|class=".*?"|)?\s*(style=".*?"|class=".*?"|)?\})?/g,
      (match, alt, src, fullMatch, attr1, attr2) => {
        if(src.startsWith("../") || src.startsWith("./")) src = src.split("/static")[1]
        console.log("this is the match", match)
        console.log("this is the image", src)
        const imageSrc = extractSrc(match) 
        const styleString = extractStyle(match)
        console.log("this is the style string", styleString)
        let { style, classAttr } = handleStyleAndClass(attr1, attr2);
        console.log("this is the image style", style)
        return `<img src="${src}" alt="${alt}"${
          style ? ` style="${style}"` : ""
        }${classAttr ? ` class="${classAttr}"` : ""} />`;
      }
    );
    markdown = markdown.replace(
      /\[(.*?)\]\((.*?)\)(\+\+\{(style=".*?"|class=".*?"|)?\s*(style=".*?"|class=".*?"|)?\})?/g,
      (match, linkText, url, fullMatch, attr1, attr2) => {
        let { style, classAttr } = handleStyleAndClass(attr1, attr2);
        return `<a href="${url}" ${style ? ` style="${style}"` : ""}${
          classAttr ? ` class="${classAttr}"` : ""
        }>${linkText}</a>`;
      }
    );
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    markdown = markdown.replace(
      /\+\+\{style="(.*?)"\}(.+)/g,
      (match, style, text) => {
        const formattedStyles = handleTextAlign(style);
        let { textAlign, otherStyles } = formattedStyles;
        return `<p${textAlign ? ` style="${textAlign}"` : ""}><span style="${
          otherStyles?.trim() || ""
        }">${text}</span></p>`;
      }//dkkfid
    );
    markdown = markdown.replace(/^\* (.*)$/gm, "<li>$1</li>");
    markdown = markdown.replace(/<li>/g, "<ul><li>");
    markdown = markdown.replace(/<\/li>/g, "</li></ul>");
    // markdown = markdown.replace(/(<img[^>]*>)/g, "\n\n$1\n\n");
    markdown = componentMarkdownConverter(markdown)
    markdown = markdown.replace(
      /\+\+\{card( [a-z\-]+=".*?")*\}\+\+/g,
      (match, capture) => {
       
       
        const styleString = extractStyle(match) || "";
        const classString = extractClass(match) || "";
        return `<div style="${styleString}" class="${classString}">`;
      }
    );
    
    markdown = markdown.replace(/\-\-\{card\}\-\-/g, "</div>");
    markdown = handleCodeSnippets(markdown);
    markdown = convertToList(markdown);
    markdown = convertMarkdownTableToHtml(markdown);
    console.log("this is the html", markdown)
    return markdown;
  };
};

export default parser;
