import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Editor from "@monaco-editor/react";



export default ({ data }) => {
  const editorRef = useRef();
  const [output, setOutput] = useState("");
  const [password, setPassword] = useState("");
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

const dockerfile = `
FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]`

const index = `
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
`

const code = `
const axios = require('axios')
var data = {
  "dockerfile": \`${dockerfile}\`,
  "files": [
      {
          "dir": ".",
          "name": "index.js",
          "content": \`${index}\`
      }
    ]
  }

var config = {
method: 'post',
maxBodyLength: Infinity,
url: 'https://api.cakework.com/v1/image/build/files',
headers: { 
  'X-Api-Key': 'api_key_value', 
  'Content-Type': 'application/json'
},
data : data
};

axios(config)
.then(function (response) {
console.log(JSON.stringify(response.data));
})
.catch(function (error) {
console.log(error);
});

`


  const sendCode = async () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();

      const response = await fetch("https://good-material-legend.glitch.me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, password }),
      });

      const stdout = await response.text();
      setOutput(stdout);
    }
  };

  return (
    <div>
      <button style={{ float: "right" }} onClick={sendCode}>
        Run Code
      </button>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your API Key"
        style={{ float: "right", marginRight: "10px" }}
      />
      <Editor
        height="60vh"
        defaultLanguage="javascript"
        defaultValue={code}
        onMount={handleEditorDidMount}
      />
      <div style={{ height: "30vh", overflow: "auto", border: "1px solid #ccc", marginTop: "10px" }}>
        <pre>{output}</pre>
      </div>
    </div>
  );
};
