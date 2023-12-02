const { create, search, insert } = require('@orama/orama');
const docusaurusUtils = require('docusaurus-utils');



module.exports = {
  name: 'my-docusaurus-search-plugin',
  search: async (siteConfig, options) => {
    // Create a database with the following schema:
    const schema = {
      title: 'string',
      content: 'string',
      meta: {
        rating: 'number',
      },
    };
  
    // Create a database instance.
    const db = await create({
      schema,
    });
  
    // Get a list of all of the Markdown files in the project.
    const markdownFiles = await docusaurusUtils.getAllMarkdownFiles(siteConfig);
  
    // Insert each Markdown file into the database.
    for (let i = 0; i < markdownFiles.length; i++) {
      const file = markdownFiles[i];
      const content = await docusaurusUtils.readFile(file);
  
      // Extract the title and rating from the Markdown file.
      const title = file.name;
      const rating = Number(file.data.meta?.rating);
  
      // Insert the document into the database.
      await insert(db, {
        title,
        content,
        meta: {
          rating,
        },
      });
    }
  
    // Search the database for the given term.
    const searchResult = await search(db, {
      term: options.term,
    });
  
    // Return the search results.
    return searchResult.hits.map((hit) => hit.document);
  },
};
