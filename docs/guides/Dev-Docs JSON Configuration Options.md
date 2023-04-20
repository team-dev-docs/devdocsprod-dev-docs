import Editor from '@site/src/components/editor.jsx';
    export const data = {"type":"doc","content":[{"type":"draggableItem","attrs":{"background":"url('/img/2023-02-14T17:42:21.980Z.png') no-repeat center center / cover","backgroundPosition":null,"lock":false,"customStyle":null,"customStyleString":null,"heightString":null,"heightFormat":null,"height":null,"widthString":null,"widthFormat":null,"width":"100%","class":"glass-morph"},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"\n          "}]},{"type":"heading","attrs":{"textAlign":"left","level":1},"content":[{"type":"text","text":"Dev-Docs JSON"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"heading","attrs":{"textAlign":"left","level":3},"content":[{"type":"text","marks":[{"type":"textStyle","attrs":{"color":"rgb(250, 252, 255)"}}],"text":"Prerequisites"}]},{"type":"taskList","content":[{"type":"taskItem","attrs":{"checked":true},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Vs Code"}]}]},{"type":"taskItem","attrs":{"checked":true},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Dev-Docs Vs Code Extension"}]}]}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"heading","attrs":{"textAlign":"left","level":3},"content":[{"type":"text","text":"What you will learn"}]},{"type":"taskList","content":[{"type":"taskItem","attrs":{"checked":true},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Dev-Doc Config Options"}]}]},{"type":"taskItem","attrs":{"checked":true},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"How to use Prompts"}]}]},{"type":"taskItem","attrs":{"checked":true},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"How to leverage Plugins"}]}]}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"\n        "}]}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"heading","attrs":{"textAlign":"left","level":1},"content":[{"type":"text","text":"Dev-Docs JSON Basics "}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"The Dev-Docs JSON lives at the root or main directory or repo.  There are two ways to create the "},{"type":"text","marks":[{"type":"code"}],"text":"dev-docs.json:"}]},{"type":"taskList","content":[{"type":"taskItem","attrs":{"checked":true},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Create an empty json file called "},{"type":"text","marks":[{"type":"code"}],"text":"dev-docs.json"}]}]},{"type":"taskItem","attrs":{"checked":true},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Use the initialize "},{"type":"text","marks":[{"type":"code"}],"text":"dev-docs command"},{"type":"text","text":" (but really this just creates the JSON for you)"}]}]}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"heading","attrs":{"textAlign":"left","level":1},"content":[{"type":"text","text":"Dev-Docs JSON Structure"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"heading","attrs":{"textAlign":"left","level":2},"content":[{"type":"text","text":"Simple Config "}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"codeBlock","attrs":{"language":"json"},"content":[{"type":"text","text":"{\n    \"quickDoc\": {\n        \"acceptedExtensions\": [\".js\", \".py\"]\n    },\n    \"notifications\": false,\n    \"langs\": [\"javascript\"]\n}"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"heading","attrs":{"textAlign":"left","level":2},"content":[{"type":"text","text":"Advanced "}]},{"type":"codeBlock","attrs":{"language":"json"},"content":[{"type":"text","text":"{\n    \"quickDoc\": {\n        \"acceptedExtensions\": [\".js\", \".py\"],\n        \"variablesAndFunctions\": {\n            \"prompts\": [\n                {\n                    \"question\": \"Is this a function, class, or variable\",\n                    \"title\": \"Code Type\",\n                    \"documentation\": \"\"\n                }\n            ]\n        }\n    },\n    \"notifications\": false,\n    \"langs\": [\"javascript\"],\n    \"seperateSave\": true,\n    \"plugins\": [\n        {\n            \"label\": \"chatsonic\",\n            \"value\": \"chatsonic\",\n            \"default\": true,\n            \"inputType\": \"text\",\n            \"outputType\": \"text\",\n            \"useEnv\": true,\n            \"envAPIKey\": \"CHAT_SONIC_KEY\",\n            \"envURLKey\": \"CHAT_SONIC_URL\",\n            \"method\": \"POST\",\n            \"inputKey\": \"input_text\",\n            \"extractKey\": \"message\",\n            \"authHeaderKey\": \"X-API-KEY\",\n            \"body\": {\n                \"enable_google_results\": \"true\",\n                \"enable_memory\": false\n            }\n        }\n    ]\n}"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"heading","attrs":{"textAlign":"left","level":1},"content":[{"type":"text","marks":[{"type":"code"}],"text":"quickDoc"}]},{"type":"horizontalRule"},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"heading","attrs":{"textAlign":"left","level":3},"content":[{"type":"text","text":"This allows you to configure extra prompts when documenting files or functions using the quickAdd feature in dev-docs.  For example you might want to add a prompt that asks is this a function, class, variable when documenting a function?  further options can be seen below:"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","marks":[{"type":"code"}],"text":"quickDoc"}]},{"type":"table","content":[{"type":"tableRow","content":[{"type":"tableHeader","attrs":{"colspan":1,"rowspan":1,"colwidth":[330]},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Options"}]}]},{"type":"tableHeader","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Description"}]}]},{"type":"tableHeader","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Key Values"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":[330]},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"variablesAndFunctions"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"actual objects in your code"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","marks":[{"type":"code"}],"text":"prompts"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":[330]},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"documents"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"refers to actual files"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","marks":[{"type":"code"}],"text":"prompts"}]}]}]}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"variablesAndFunctions.prompts"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Array of prompt objects to send to Dev-Docs.  A prompt object is broken down below:"}]},{"type":"codeBlock","attrs":{"language":"json"},"content":[{"type":"text","text":"{\n\"question\": \"Is this a function, class, or variable\",\n\"title\": \"Code Type\",\n\"documentation\": \"\"\n}"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"A prompt object has three main key value pairs:"}]},{"type":"table","content":[{"type":"tableRow","content":[{"type":"tableHeader","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Name"}]}]},{"type":"tableHeader","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Description"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"question"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"A question to posit the user while documenting "}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"title"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Title of the question prompt to display"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"documentation"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Typically the answer to the question prompt"}]}]}]}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"heading","attrs":{"textAlign":"left","level":3},"content":[{"type":"text","marks":[{"type":"code"}],"text":"document.prompts"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Exact same structure as "},{"type":"text","marks":[{"type":"code"}],"text":"variablesAndFunctions.prompts"},{"type":"text","text":", main difference is that these the prompt objects that will show up when users are documenting files."}]},{"type":"heading","attrs":{"textAlign":"left","level":1},"content":[{"type":"text","marks":[{"type":"code"}],"text":"seperateSave"}]},{"type":"horizontalRule"},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Option that allows you to save seperately.  By default when logged in, you will save to a new Dev-Docs both locally and to the cloud at the same time. If you set this to true, then you will be able to save seperately when on the cloud and local tabs."}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"codeBlock","attrs":{"language":"json"},"content":[{"type":"text","text":"\"seperateSave\": true"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":" "}]},{"type":"heading","attrs":{"textAlign":"left","level":1},"content":[{"type":"text","marks":[{"type":"code"}],"text":"Plugins"}]},{"type":"horizontalRule"},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Option that allows you bring your own APIs and thirty party vendors.  The use-cases for this are endless but one helpful area is generative AI vendors like Open AI, Chat Soncic, Hugging Face, or you own AI Infra.  One important disclaimer to highlight is that Dev-Docs never wants to train on your source code, but instead wants you to use the vendors you trust to have a world class documentation experience."}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"codeBlock","attrs":{"language":"json"},"content":[{"type":"text","text":"\"plugins\": [...pluginObjects]"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Plugins basically resolve to an array of "},{"type":"text","marks":[{"type":"code"}],"text":"pluginObjects"},{"type":"text","text":"."}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"A pluginObject can look something like this:"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"codeBlock","attrs":{"language":"json"},"content":[{"type":"text","text":"{\n \"label\": \"chatsonic\",\n \"value\": \"chatsonic\",\n \"default\": true,\n \"inputType\": \"text\",\n \"outputType\": \"text\",\n \"useEnv\": true,\n \"envAPIKey\": \"CHAT_SONIC_KEY\",\n \"envURLKey\": \"CHAT_SONIC_URL\",\n \"method\": \"POST\",\n \"inputKey\": \"input_text\",\n \"extractKey\": \"message\",\n \"authHeaderKey\": \"X-API-KEY\",\n \"body\": {\n  \"enable_google_results\": \"true\",\n  \"enable_memory\": false\n }\n}"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"The values are broken down like so:"}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"table","content":[{"type":"tableRow","content":[{"type":"tableHeader","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Key Name"}]}]},{"type":"tableHeader","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"description"}]}]},{"type":"tableHeader","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"required"}]}]},{"type":"tableHeader","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"value type"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"label"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"lablel to be displayed to user when selecting a plugin from the plugin dropdown"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"yes"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"string"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"value"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"value associated with the label when selecting from the dropdown"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"yes"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"string"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"default"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"is it the first choice in the dropdown"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"no"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"boolean"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"inputType"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"the type of input your API or vendor is expecting, for example does the API expect text or image.  Right now only \"text\" is supported."}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"yes"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"string"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"outputType"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"the type of output your API or vendor will return, for example does the API return text or image.  Right now only \"text\" is supported."}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"yes"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"string"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"useEnv"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"to use .env file at the root instead of hardcoded values."}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"no"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"boolean"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"envAPIKey"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"If useEnv is true, you can use that to correspond to the API Key value in your .env file."}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"no"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"string"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"envURLKey"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"If useEnv is true, you can use that to correspond to the API Url value in your .env file."}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"no"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"string"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"method"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"the type of method your third party vendor is expecting, typically this will be a \"POST\"."}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"yes"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"string"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"inputKey"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Typically the key in the body that will be related to your direct prompt text, or there custom text value you would post to a vendor."}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"yes"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"string"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"extractKey"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"The target key to the key value pair from you API's response to send back to Dev-Docs"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"yes"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"string"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"authHeaderKey"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"The header key value pair to associate with your API key.  Think SWSS, Cookie, or Authorization, and X-API-KEY"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"yes"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"string"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"body"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Extra body options your API or vendor might be expecting"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"no"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""},"content":[{"type":"text","text":"Object"}]}]}]}]},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}},{"type":"paragraph","attrs":{"textAlign":"left","customStyleString":""}}]}


<Editor data={data} />


<div style={{ display: 'none' }}>

          

Dev-Docs JSON

Prerequisites

Vs Code

Dev-Docs Vs Code Extension

What you will learn

Dev-Doc Config Options

How to use Prompts

How to leverage Plugins


        

Dev-Docs JSON Basics 

The Dev-Docs JSON lives at the root or main directory or repo.  There are two ways to create the dev-docs.json:

Create an empty json file called dev-docs.json

Use the initialize dev-docs command (but really this just creates the JSON for you)

Dev-Docs JSON Structure

Simple Config 

{
    "quickDoc": {
        "acceptedExtensions": [".js", ".py"]
    },
    "notifications": false,
    "langs": ["javascript"]
}

Advanced 

{
    "quickDoc": {
        "acceptedExtensions": [".js", ".py"],
        "variablesAndFunctions": {
            "prompts": [
                {
                    "question": "Is this a function, class, or variable",
                    "title": "Code Type",
                    "documentation": ""
                }
            ]
        }
    },
    "notifications": false,
    "langs": ["javascript"],
    "seperateSave": true,
    "plugins": [
        {
            "label": "chatsonic",
            "value": "chatsonic",
            "default": true,
            "inputType": "text",
            "outputType": "text",
            "useEnv": true,
            "envAPIKey": "CHAT_SONIC_KEY",
            "envURLKey": "CHAT_SONIC_URL",
            "method": "POST",
            "inputKey": "input_text",
            "extractKey": "message",
            "authHeaderKey": "X-API-KEY",
            "body": {
                "enable_google_results": "true",
                "enable_memory": false
            }
        }
    ]
}

quickDoc

This allows you to configure extra prompts when documenting files or functions using the quickAdd feature in dev-docs.  For example you might want to add a prompt that asks is this a function, class, variable when documenting a function?  further options can be seen below:

quickDoc

Options

Description

Key Values

variablesAndFunctions

actual objects in your code

prompts

documents

refers to actual files

prompts

variablesAndFunctions.prompts

Array of prompt objects to send to Dev-Docs.  A prompt object is broken down below:

{
"question": "Is this a function, class, or variable",
"title": "Code Type",
"documentation": ""
}

A prompt object has three main key value pairs:

Name

Description

question

A question to posit the user while documenting 

title

Title of the question prompt to display

documentation

Typically the answer to the question prompt

document.prompts

Exact same structure as variablesAndFunctions.prompts, main difference is that these the prompt objects that will show up when users are documenting files.

seperateSave

Option that allows you to save seperately.  By default when logged in, you will save to a new Dev-Docs both locally and to the cloud at the same time. If you set this to true, then you will be able to save seperately when on the cloud and local tabs.

"seperateSave": true

 

Plugins

Option that allows you bring your own APIs and thirty party vendors.  The use-cases for this are endless but one helpful area is generative AI vendors like Open AI, Chat Soncic, Hugging Face, or you own AI Infra.  One important disclaimer to highlight is that Dev-Docs never wants to train on your source code, but instead wants you to use the vendors you trust to have a world class documentation experience.

"plugins": [...pluginObjects]

Plugins basically resolve to an array of pluginObjects.

A pluginObject can look something like this:

{
 "label": "chatsonic",
 "value": "chatsonic",
 "default": true,
 "inputType": "text",
 "outputType": "text",
 "useEnv": true,
 "envAPIKey": "CHAT_SONIC_KEY",
 "envURLKey": "CHAT_SONIC_URL",
 "method": "POST",
 "inputKey": "input_text",
 "extractKey": "message",
 "authHeaderKey": "X-API-KEY",
 "body": {
  "enable_google_results": "true",
  "enable_memory": false
 }
}

The values are broken down like so:

Key Name

description

required

value type

label

lablel to be displayed to user when selecting a plugin from the plugin dropdown

yes

string

value

value associated with the label when selecting from the dropdown

yes

string

default

is it the first choice in the dropdown

no

boolean

inputType

the type of input your API or vendor is expecting, for example does the API expect text or image.  Right now only "text" is supported.

yes

string

outputType

the type of output your API or vendor will return, for example does the API return text or image.  Right now only "text" is supported.

yes

string

useEnv

to use .env file at the root instead of hardcoded values.

no

boolean

envAPIKey

If useEnv is true, you can use that to correspond to the API Key value in your .env file.

no

string

envURLKey

If useEnv is true, you can use that to correspond to the API Url value in your .env file.

no

string

method

the type of method your third party vendor is expecting, typically this will be a "POST".

yes

string

inputKey

Typically the key in the body that will be related to your direct prompt text, or there custom text value you would post to a vendor.

yes

string

extractKey

The target key to the key value pair from you API's response to send back to Dev-Docs

yes

string

authHeaderKey

The header key value pair to associate with your API key.  Think SWSS, Cookie, or Authorization, and X-API-KEY

yes

string

body

Extra body options your API or vendor might be expecting

no

Object


</div>