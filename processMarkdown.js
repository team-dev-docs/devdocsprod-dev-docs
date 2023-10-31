const https = require('https');
const fs = require('fs');
const { execSync } = require('child_process');

const API_KEY = process.env.API_KEY;
const ENDPOINT_URL = new URL(process.env.ENDPOINT_URL);

const getModifiedMarkdownFiles = () => {
  try {
    // Attempt to get the list of modified files compared to the previous commit
    const output = execSync('git diff --name-only HEAD HEAD~1').toString();
    return output.split('\n').filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error('Error getting modified files from previous commit:', error.message);
    // Fallback: Get all markdown files in the current commit if comparison to previous commit fails
    return execSync('git ls-tree --full-tree -r --name-only HEAD').toString()
           .split('\n').filter(file => file.endsWith('.md'));
  }
};

const sendRequest = (file, content) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ content, filepath: file });

    const options = {
      hostname: ENDPOINT_URL.hostname,
      port: ENDPOINT_URL.port,
      path: ENDPOINT_URL.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, res => {
      res.setEncoding('utf8');
      res.on('data', d => {
        process.stdout.write(d);
      });
      res.on('end', resolve);
    });

    req.on('error', error => {
      console.error(error);
      reject(error);
    });

    req.write(data);
    req.end();
  });
};

const main = async () => {
  const files = getModifiedMarkdownFiles();
  for (const file of files) {
    if (file) {
      const content = fs.readFileSync(file, 'utf8');
      try {
        await sendRequest(file, content);
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
      }
    }
  }
};

main();
