// oramaSearchPlugin.js
const { create, insert, search } = require('@orama/orama');
const { dir } = require('console');
const path = require('path');
const fs = require('fs').promises;
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';

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

module.exports = function oramaSearchPlugin(context, options) {
  let db;

  return {
    name: 'docusaurus-orama-search',

    async loadContent() {
      // Create the Orama database
      db = await create({
        schema: {
          title: 'string',
          content: 'string',
          url: 'string',
          slug: 'string',
        },
      });

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
        //console.log("what is the file path", file);
        const content = await fs.readFile(file, 'utf-8');
       // console.log(content);
   
        
 
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
        const title = markdown.split('\n')[0].replace('#', '').trim();
        
        let url = file.split(context.siteDir)[1];
        let slug = parseSlug(content, url);
        let cleanedContent = await markdownToPlainText(markdown)
        // Insert document into Orama database
        await insert(db, {
          title,
          content: cleanedContent,
          url: `${url.replace('.md', '')}`,
          slug: slug,
        });

        //console.log(`Indexed document: ${file}`);
      }

      return db;
    },

    async contentLoaded({ content, actions }) {
      // You can perform additional actions here if needed
      console.log('Content loaded. Database size:', db.size);
    },

    async postBuild({ siteConfig, routesPaths, outDir }) {
      // You can perform actions after the build is complete
      console.log('Build completed. Indexed documents:', db.size);
    },

    injectHtmlTags() {
    let oramaDb = Object.values(db.data.docs.docs)
    console.log("this is the orama db", oramaDb)
      // Inject any necessary HTML tags (e.g., for search UI)
   
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
            },
            innerHTML: `
            window.oramaDb = ${JSON.stringify(oramaDb)};
            console.log('Orama search initialized');
        
            `,
          },
        ],
      };
    },
  };
};