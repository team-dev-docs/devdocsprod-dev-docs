const marked = require('marked');
const yaml = require('js-yaml');
const fs = require('fs');

function extractUrls(inputString) {
    const urlRegex = /(https?:\/\/[^\s]+)/g; // regular expression to match URLs
    const matches = inputString.match(urlRegex);
    if (!matches) return [];
  
    const openapiJson = {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "URLs found in string",
        description: "List of URLs extracted from input string",
      },
      paths: {},
    };
  
    // create a path for each URL found
    matches.forEach((url, index) => {
      const path = `${url.split("https://api.cakework.com/v1")[1]}`;
      openapiJson.paths[path] = {
        get: {
          tags: ["URLs"],
          summary: `${url.split("https://api.cakework.com/v1")[1]}`,
          description: `How to get started with the ${url} call`,
          responses: {
            200: {
              description: "Success",
            },
          },
        },
      };
    });
  
    return openapiJson;
  }
  



const file = fs.readFileSync("./docs/reference/rest.md", { encoding: 'utf8', flag: 'r' })
console.log(file)
const openapiJson = extractUrls(file);
console.log(openapiJson);
fs.writeFileSync("./openapi.json", JSON.stringify(openapiJson))