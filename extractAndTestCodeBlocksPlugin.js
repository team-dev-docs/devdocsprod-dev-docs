const regex = /```[\s\S]*?```/gm;

// oramaSearchPlugin.js
const { create, insert, search } = require('@orama/orama');
const { dir } = require('console');
const path = require('path');
const fs = require('fs').promises;
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { writeFile } from 'fs';

function parseFrontmatter(content) {
  // Match content between --- markers
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return null;
  
  // Parse the yaml-like frontmatter
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      // Trim whitespace and quotes
      const value = valueParts.join(':').trim().replace(/^['"](.*)['"]$/, '$1');
      frontmatter[key.trim()] = value;
    }
  }
  
  return frontmatter;
}



function sanitizeInput(text) {
  // Remove characters that could break the script tag
  return text.replace(/[\u0000-\u001F\u007F<>]/g, ''); // Removes control characters and angle brackets
}

async function markdownToPlainText(markdown) {
  const sanitizedMarkdown = sanitizeInput(markdown); // Sanitize input
  const file = await unified()
      .use(remarkParse)      // Parse the Markdown
      .use(remarkStringify)  // Convert it back to string (plain text)
      .process(sanitizedMarkdown); // Process the sanitized input

  return String(file);     // Return the plain text output
}



function getSlugFromPath(filePath) {
  // Remove file extension
  const withoutExtension = filePath.replace(/\.[^/.]+$/, '');
  
  // Handle index files
  if (withoutExtension.toLowerCase().endsWith('/index')) {
    return withoutExtension.slice(0, -6); // Remove '/index'
  }
  
  // Remove date prefix if exists (e.g., 2024-01-01-)
  const withoutDate = withoutExtension.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  
  // Convert to URL-friendly format
  return withoutDate;
}

function parseSlug(fileContent, filePath) {
  try {
    // Get frontmatter
    const frontmatter = parseFrontmatter(fileContent);
    
    // If frontmatter has slug, use it
    if (frontmatter?.slug) {
      const slug = frontmatter.slug.trim();
      return slug.startsWith('/') ? slug : `/${slug}`;
    }
    
    // Otherwise generate from file path
    const slugFromPath = getSlugFromPath(filePath);
    return slugFromPath.startsWith('/') ? slugFromPath : `/${slugFromPath}`;
  } catch (error) {
    console.error('Error parsing slug:', error);
    return null;
  }
}

function extractMarkdownCodeBlocksWithoutMultilineFlag(text, filename, codeCollection) {
    const blockStart = '``'; // Simplified to match only the opening code blocks without considering multilines or triples
    
    let currentBlock = '';
    let extractedBlocks = [];
    const lines = text.split('\n');
  
    for (let line of lines) {
      if (line.startsWith(blockStart)) {
        if(line.startsWith('````')) line = line.split('````')[1]
        if(line.startsWith('```')) line = line.split('```')[1]
        // Start a new block or add to the existing one
        if (!currentBlock) currentBlock += line + '\n';
        else currentBlock += `\n${line}`;
      } else if (currentBlock && !line.endsWith('``')) {
        // Add non-block lines until we find an end marker
        currentBlock += `${line}`;
      }
        
        // When encountering the ending triple backticks, add to extracted blocks and reset the block
        if (line.endsWith(blockStart)) {
        if(currentBlock?.length > 2) extractedBlocks.push(currentBlock);
          currentBlock = '';
        }
    }
    codeCollection[filename] = extractedBlocks
    return codeCollection
  }

module.exports = function oramaSearchPlugin(context, options) {
  let db;

  return {
    name: 'extract-and-test',

    async loadContent() {
      // Create the Orama database

    let codeCollection = {}
      // Get the docs directory path
      const docsDir = path.join(context.siteDir, 'docs');

      // Read all markdown files in the docs directory
      const files = await fs.readdir(docsDir);
      async function getAllMarkdownFiles(dir) {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        const files = await Promise.all(entries.map(async (entry) => {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            return getAllMarkdownFiles(fullPath);
          }
          return entry.name.endsWith('.md') ? [fullPath] : [];
        }));
        return files.flat();
      }

      const markdownFiles = await getAllMarkdownFiles(docsDir);
      //const markdownFiles = files.filter(file => file.endsWith('.md'));
      console.log("this is the files", files);
      //console.log("this is the markdown files", markdownFiles);
      // Process each markdown file
      for (const file of markdownFiles) {
        const content = await fs.readFile(file, 'utf-8'); 
        const divideContent = (content) => {
          const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
          const match = content.match(frontmatterRegex);
          
          if (!match) {
            return {
              frontmatter: '',
              markdown: content.trim()
            };
          }

          const frontmatter = match[1];
          const markdown = content.slice(match[0].length).trim();
          
          return {
            frontmatter,
            markdown
          };
        };

        const { frontmatter, markdown } = divideContent(content);
        extractMarkdownCodeBlocksWithoutMultilineFlag(markdown, file, codeCollection)
 
        //console.log(`Indexed document: ${file}`);
      }
      console.log("all the codeblocks", codeCollection)
      const outputFilePath = path.join(context.siteDir, 'allCodeExamples.json');
      await fs.writeFile(outputFilePath, JSON.stringify(codeCollection), 'utf-8');
      return
    },

    async contentLoaded({ content, actions }) {
      // You can perform additional actions here if needed
      console.log('Content loaded. Database size:', db?.size);
    },

    async postBuild({ siteConfig, routesPaths, outDir }) {
      // You can perform actions after the build is complete
      console.log('Build completed. Indexed documents:', db?.size);
    },
  };
};