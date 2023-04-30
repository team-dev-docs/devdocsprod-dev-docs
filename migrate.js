const fs = require('fs/promises');
const path = require('path');
const cheerio = require('cheerio');
var axios = require('axios');

const directoryPath = './migrated_docs';

async function checkFolderFirst(path) {
    try {
        await fs.access(path)
        return true
    } catch(e) {
        return false
    }
}


async function extractContent(options = {}) {
  try {
    console.log(options)
    var folder = options.directory || directoryPath
    const files = await fs.readdir(folder)
    console.log("files", files)
    for (const file of files) {
        const filePath = path.join(folder, file);
        const stats = await fs.stat(filePath)
        const isDirectory = stats.isDirectory()
      if (path.extname(file) === '.md') {
        const data = await fs.readFile(filePath, 'utf8');


       // const newFileName = file.replace(/\.html/g, ".md")
        let docPath;
        if(options.directory) docPath = path.join("./docs", `${options.baseDir}${path.sep}${file}`)
        else docPath = path.join("./docs", file)
        

        const cleanedUpData = data.replace(/\t/g, "").replace(/ {4}/g, "");
        fs.writeFile(docPath, cleanedUpData)
       
        //console.log(mainContent);
      } else if(isDirectory) {
        const folderPath = path.join("./docs", file) // api
        const exists = await checkFolderFirst(folderPath) // true or false
        if(!exists) await fs.mkdir(folderPath)
        extractContent({directory: filePath, baseDir: file})
      }
    }
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

extractContent();
