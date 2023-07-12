import templateJson from "./default-templates";


const convertGridHtml = function(markdown) {
    markdown = markdown.replace(/\+\+{card type="grid"}\+\+/g, templateJson.gridOpening)
    return markdown
}

const convertRadialHtml = function(markdown) {
    markdown = markdown.replace(/\+\+{card type="radial"}\+\+/g, templateJson.radialOpening)
    return markdown
}

function replaceDivWithClass(html, className, replacement) {
    // Construct a regex that matches a div with the given class name
    const regex = new RegExp(`<div\\b[^>]*class=["'].*?${className}.*?["'][^>]*>`, 'gi');
  
    // Replace matches
    const newHtml = html.replace(regex, replacement);
  
    return newHtml;
}

const convertGridMarkdown = function(html) {
    html = replaceDivWithClass(html, "draggable-grid", `++{card type="grid"}++`)
    return html
}

const convertRadialMarkdown = function(html) {
    html = replaceDivWithClass(html, "radial-card-content", `++{card type="radial"}++`)
    return html
}

export const componentMarkdownConverter = function(markdown) {
    markdown = convertGridHtml(markdown)
    markdown = convertRadialHtml(markdown)
    return markdown
}

export const componentHtmlConverter = function(html) {
    html = convertGridMarkdown(html)
    html = convertRadialMarkdown(html)
    return html
}











