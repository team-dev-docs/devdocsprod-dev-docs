const http = require('http');
const util = require('util');
const exec = util.promisify(require('child_process').exec);



const server = http.createServer(async (req, res) => {
  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
