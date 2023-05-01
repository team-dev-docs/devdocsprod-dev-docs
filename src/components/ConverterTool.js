function handleCodeSnippets(markdown) {

    const regex = /```(\w+)\n([\s\S]*?)```/g;
    // Use the replace method to replace the triple backticks with the opening and closing pre and code tags
    //markdown = markdown.replace(regex, '<pre><code>$1</code></pre>');
      markdown = markdown.replace(regex, (match, language, code) => {
        console.log("this is the language", language)
        console.log("this is the code", code)
      // Add a class attribute to the code element based on the captured language identifier
      return `<pre><code class="language-${language}">${code}</code></pre>`;
      });
  
      const codeSnippetRegex = /```([\s\S]*?)```/g;
  
    // Use the replace method to replace the triple backticks with the opening and closing pre and code tags
      markdown = markdown.replace(codeSnippetRegex, '<pre><code>$1</code></pre>');
  
    // Handle single backticks within the code snippet
    //markdown = markdown.replace(/`/g, '\\`');
    console.log("this is the markdown in the code snippet", markdown)
    return markdown;
  }
  
  function handleLists(html) {
  
    //var markdown = html.replace(/<ul data-type="taskList">/gm, `<div class="taskList"></div>`).replace(/<\/ul>/gm, `</div>`)
    const regexOne = /(\<li data-checked="false">)(.*?)(<\/li>)/g;
  
    var markdown = html.replace(regexOne, `\n-[ ]`)
    return markdown
  }
    
  function convertToList(markdown) {
    // Initialize the HTML list
    const checkboxRegex = /^- \[(x| )\] (.*)$/gm;
    let checkboxMatch;
    let matchCount = 0;
    let matchIndex = 0;
    let foundEmptyLine = false;
    
    while ((checkboxMatch = checkboxRegex.exec(markdown)) !== null) {
      if (checkboxMatch[0].trim() === '') {
          foundEmptyLine = true;
          break;
      }
      matchCount += 1;
      matchIndex = checkboxRegex.lastIndex;
    }
  
    if (matchCount > 0 && !foundEmptyLine) {
      markdown = markdown.slice(0, matchIndex) + '</ul>' + markdown.slice(matchIndex);
      markdown = markdown.replace(/^- \[(x| )\] (.*)$/gm, '<li data-type="taskItem" data-checked="$1">$2</li>');
      markdown = markdown.replace(/^/, '<ul data-type="taskList">');
    }
    return markdown;
  }




function extractJSON(str) {
    console.log(str)
    return {}
}

function styleToCss(styleObj) {
    let cssString = "";
    for (let prop in styleObj) {
      cssString += `${prop}: ${styleObj[prop]};\n`;
    }
    return cssString;
  }

  function getContentAndStyle(content) {
    const textContent = content.split("++{")[0]
    const styleJson = extractJSON(content)
    console.log("this is the style json", styleJson)
    const styles = content.split('style=')[1]?.replace("}", "")
    return {styles, textContent}
  }

  function addStyleAttributesToMarkdown(htmlString) {
    console.log( htmlString)
    const regex = /(<h[1-6][^>]*>)(.*?)(<\/h[1-6]>)/gi;
    return htmlString.replace(regex, (match, openingTag, content, closingTag) => {
        const {textContent, styles} = getContentAndStyle(content)
        console.log(styles)
      if(styles) return `${openingTag}<span style="${styles}" data-inline-reference="true">${textContent}</span>${closingTag}`;
      else return `${openingTag}${textContent}${closingTag}`;
    });
  }
  
  function getStyleAttributeString(styleObject) {
    let styleAttribute = '';
    for (const [key, value] of Object.entries(styleObject)) {
      styleAttribute += `${key}: ${value}; `;
    }
    return styleAttribute;
  }
  
  
  
  
  
  
  var converter = function () {
  
  
  this.convertToMarkdown = function(html) {
      // Convert <h1> to #
     // html = html.replace(/<p>(.*?)<\/p>/g, '$1\n');
  
     
      console.log("this is the html after the first p tag", html)
      html = html.replace(/<p>(.*?)<\/p>/g, '$1\n');
      //html = html.replace(/<p>(\s*)<\/p>/g, '\n');
      console.log("this is the html after the second p tag", html)
  
      html = html.replace(/<h1>(.*?)<\/h1>/g, '# $1\n');
    
      const codeSnippetRegex = /<pre(?:.*?class="language-(.*?)")?.*?>([\s\S]*?)<\/pre>/g;
      html = html.replace(codeSnippetRegex , (match, p1, p2) => {
        console.log("this is the first code match", p1)
        console.log("this is the second code match", p2)
        p2 = p2.replace(/<code>/g, '');
        p2 = p2.replace(/<\/code>/g, '');
      // Use the triple backtick syntax for the code block, and include the language specified in the class if it exists
      return '```' + (p1 ? p1 : '') + '\n' + p2 + '\n```\n';
      });
  
    
      // Convert <h2> to ##
      html = html.replace(/<h2>(.*?)<\/h2>/g, '## $1\n');
     
    
      // Convert <h3> to ###
      html = html.replace(/<h3>(.*?)<\/h3>/g, '### $1\n');
      console.log("this is the html after headers", html)
    
      // Convert <p> to a new line
  
      // Convert <strong> to **
      html = html.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
    
      // Convert <em> to *
      html = html.replace(/<em>(.*?)<\/em>/g, '*$1*');
    
      // Convert <a> to []()
      html = html.replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)');
    
      // Convert <ul> and <li> to *
      // html = html.replace(/<ul>/g, '');
      // html = html.replace(/<\/ul>/g, '');
      // html = html.replace(/<li>(.*?)<\/li>/g, '* $1');
    
      // Convert <img> to ![]()
      //html = html.replace(/<img src="(.*?)" alt="(.*?)">/g, '![$2]($1)');
    
      // Convert <table>, <tr>, and <td> to |
      html = html.replace(/<table>/g, '');
      html = html.replace(/<\/table>/g, '');
      html = html.replace(/<tr>/g, '');
      html = html.replace(/<\/tr>/g, '\n');
      html = html.replace(/<td>(.*?)<\/td>/g, '| $1 ');
      html = handleLists(html)
      // html = html.replace(/<p>(.*?)<\/p>/g, (match, p1) => {
      //     if (p1.trim() === '') {
      //       return '\n';
      //     }
      //     return `${p1}`;
      // });
      return html;
    }
  
    this.convertToHTML = function(markdown) {
      // Convert # to <h1>
      console.log("this is the markdown at the start!!!", markdown)
      
      markdown = markdown.replace(/###\s+(.*?)(?=\s*(<|$))/gm, '<h3>$1</h3>');
      markdown = markdown.replace(/##\s+(.*?)(?=\s*(<|$))/gm, '<h2>$1</h2>');
      markdown = markdown.replace(/#\s+(.*?)(?=\s*(<|$))/gm, '<h1>$1</h1>');
      markdown = markdown.replace(/^# (.*)$/gm, '<h1>$1</h1>');
    
    
      // Convert ## to <h2>
      markdown = markdown.replace(/^## (.*)$/gm, '<h2>$1</h2>');
    
      // Convert ### to <h3>
      markdown = markdown.replace(/^### (.*)$/gm, '<h3>$1</h3>');
  
      markdown = markdown.replace(/\n\n/g, '<p></p>');
      markdown = markdown.replace(/\%ref\/\|/g, `<span data-inline-reference="true">`)
      markdown = markdown.replace(/\\\|ref\%/g, `</span>`)
      markdown = markdown.replace(/\%ref\|/g, `<span data-inline-reference="true">`)
      markdown = markdown.replace(/\|ref\%/g, `</span>`)
  
  
      markdown = markdown.replace(/image-component/g, `img`)
    
      // Convert ** to <strong>
      markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
      // Convert * to <em>
      markdown = markdown.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
      // Convert []() to <a>
      markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    
      // Convert * to <li>
      markdown = markdown.replace(/^\* (.*)$/gm, '<li>$1</li>');
    
      // Surround <li> with <ul>
      markdown = markdown.replace(/<li>/g, '<ul><li>');
      markdown = markdown.replace(/<\/li>/g, '</li></ul>');
    
      // Convert ![]() to <img>
      markdown = markdown.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">');
    
      // Convert | to <td>
      // markdown = markdown.replace(/\| (.*?) /g, '<td>$1</td>');
    
      // Surround <td> with <tr> and <table>
      // markdown = markdown.replace(/<td>/g, '<table><tr><td>');
      // markdown = markdown.replace(/<\/td>/g, '</td></tr></table>');
      markdown = handleCodeSnippets(markdown)
      markdown = convertToList(markdown)
      markdown = addStyleAttributesToMarkdown(markdown)
      console.log("######")
      console.log("this is the html form", markdown)
      console.log("######")
      return markdown
    }
  }
  
  
  
    export default converter
    