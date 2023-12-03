const apiConfig = {
   "users": {
      "specPath": "examples/openapi.yaml",
      "outputDir": "docs/api/general/users",
      "markdownGenerators": {
         "createInfoPageMD": function(pageMetadata) {
            return `# Whats up! \\n${pageMetadata}`
         }
      }
   }
}

module.exports = {
   config: apiConfig
}
