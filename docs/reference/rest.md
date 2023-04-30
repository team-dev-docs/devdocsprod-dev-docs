# REST

The endpoint is `https://api.cakework.com/v1`. To authorize requests, add your API key to the header with `X-Api-Key` as the key. Parameters are passed as JSON in the request body.

## Images

Use these APIs to get images into Cakework. You start VMs with Cakework images.

### importImage
Import a Cakework image from an existing AWS ECR Docker repository.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/image/import
```

#### Request
```json
{
    "imageUri": "string",
    "password": "string"
}
```
**`imageUri`** URI of the container image to import.  
**`password`** Password to the respository.  

#### Response
```json
{
    "imageId": "string"
}
```
**`imageId`** The id used to reference this image.  

### buildImageFromFiles
Build a Cakework image from a list of files. This API takes all of your file contents as strings. This immediately returns a `buildId` with which you can call `getBuild` to get the build status and the image ID. Reach out to us if you want onboard onto our webhooks to receive build succeeded events containing the built image id and build failed events.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/image/build/files
```

#### Request
```json
{
    "dockerfile": "string",
    "files": [
        {
            "dir": "string",
            "name": "string",
            "content": "string"
        }
    ],
}
```

**`dockerfile`** A Dockerfile describing the image you want to build as a string.  
**`files`** A list of objects that describe all of the code files.  
&nbsp;&nbsp;&nbsp;&nbsp;`dir` The directory to put the file in. Use `.` for root.  
&nbsp;&nbsp;&nbsp;&nbsp;`name` The name of the file to write, e.g. handlers.json".  
&nbsp;&nbsp;&nbsp;&nbsp;`content` The content of the file as a string.  

#### Response
```json
{
    "buildId": "string",
    "status": "string",
    "createdAt": "2023-02-24 20:29:40.331",
    "updatedAt": "2023-02-24 20:29:40.331"
}
```
**`build`** The id used to reference the build.  
**`status`** The status of the build. `buildImageFromGithub` will always return `created` as the status, as this API returns immediately before starting the background build job.  
**`createdAt`** The time at which the build was created.  
**`createdAt`** The time at which the build was last updated.  

### buildImageFromGithub
Build a Cakework image from your user's Github repository. You supply a Dockerfile (so you can hide this from your user) and optionally a .dockerignore file. This immediately returns a `buildId` with which you can call `getBuild` to get the build status and the image ID. Reach out to us if you want onboard onto our webhooks to receive build succeeded events containing the built image id and build failed events.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/image/build/github
```

#### Request
```json
{
    "dockerfile": "string",
    "dockerignore": "string",
    "token": "string",
    "repository": "string",
    "branch": "string"
}
```

**`dockerfile`** A Dockerfile describing the container you want to deploy as a string.  
**`dockerignore`** (optional) The .dockerignore file as a string.  
**`token`** User token that your Github App fetches to access the user's Github repository.  
**`repository`** Github repository of your user's code, in the format ${my-org}/${my-repo}.  
**`branch`** Branch of user's Github repository, e.g. `main`.  

#### Response
```json
{
    "buildId": "string",
    "status": "string",
    "createdAt": "2023-02-24 20:29:40.331",
    "updatedAt": "2023-02-24 20:29:40.331"
}
```
**`build`** The id used to reference the build.  
**`status`** The status of the build. Will always be `created` initialy, since `buildImageFromGithub` returns immediately before actually starting the background build job.  
**`createdAt`** The time at which the build was created.  
**`createdAt`** The time at which the build was last updated.  

### getBuild
Get information about a build.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/image/build/[buildId]
```

#### Response
```json
{
    "buildId": "af3e93bb-5c9e-42d6-9c80-e841344f9a52",
    "imageId": "32GT08QBZ30M6R0CM27PSZC34G",
    "status": "succeeded",
    "createdAt": "2023-02-24 20:29:40.331",
    "updatedAt": "2023-02-24 20:29:40.331"
}
```

**`buildId`** The build ID.  
**`imageId`** (optional) The id used to reference this image. If the build has not yet succeeded, this will be absent.  
**`status`** (optional) Status of the build. Can be `created`, `succeeded`, or `failed`.  
**`createdAt`** The time at which the build was created.  
**`createdAt`** The time at which the build was last updated. 

### getBuildLogs
Get logs for a build.

#### Endpoint
```txt title="GET"
https://api.cakework.com/v1/image/build/[buildId]/logs
```
#### URL query Parameters
**`query`** (optional) String to look for in the logs. Case-insensitive. If this parameter is not provided, all logs for the build are returned.  
**`batch`** (optional) The number of rows to return. Accepts a range of 50-1000. Default: 100 rows.  
**`order`** (optional) The order by timestamp to return the logs. Options are `newest_first` and `oldest_first`. Defaults to `oldest_first`.  
**`pagination`** (optional) The pagination token returned by the previous call to get logs. Will be used to fetch the next batch of logs.  
**`from`** (optional) Start of time range for the log query (ISO8601-formatted string: 2022-07-19T13:32:56+0000). If the call to `getBuildLogs` returns `pagination`, `from`, and `to` fields, you must pass all 3 query parameters in the next call to `getBuildLogs` to fetch the next batch of logs.  
**`to`** (optional) End of time range for the log query (ISO8601-formatted string: 2022-07-19T13:32:56+0000).  

#### Response
```json
{
    "lines": [
        {
            "timestamp": 1676625938460,
            "level": "string",
            "message": "string"
        },
    ],
    "pagination": "XlG9SZP",
    "from": "2023-03-07 06:12:56 UTC",
    "to": "2023-03-08 06:11:56 UTC"
}
```

**`lines`** All the lines returned in the log.  
&nbsp;&nbsp;&nbsp;&nbsp;`timestamp` The unix timestamp in ms.  
&nbsp;&nbsp;&nbsp;&nbsp;`level` The log level (e.g. info/error).  
&nbsp;&nbsp;&nbsp;&nbsp;`message` The message.  
**`pagination`** (optional) If present, the pagination token with which you can query for more logs.  
**`from`** (optional) If present, the next from timestamp with which you can query for more logs.  
**`to`** (optional) If present, the next to timestamp with which you can query for more logs.  

## VMs
Use these APIs for one-time use VMs. These have a cold start of several seconds depending on the size of your image. Each VM runs in its own VPC.

### startVM
Start a virtual machine using an image.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/start
```

#### Request
```json
{
    "imageId": "string",
    "cpu": 1,
    "memory": 256,
    "port": 8080,
    "envVars": { "string": "string", "string": "string" },
    "volumeGB": 3
}
```

**`imageId`** The id of the image to start the VM with.  
**`cpu`** The number of CPUs for the VM. Can be a number between 1 and 8.  
**`memory`** The amount of memory for the VM. Can be a number between 256 and 16384.  
**`port`** (optional) The internal port to open.  
**`envVars`** (optional) The environment variables as a map of string to string.  
**`volumeGB`** (optional) The amount of persistent storage to attach to each VM, in GB. Can be a number between 1 and 500.  

#### Response
```json
{
    "id": "e784996f346483",
    "hostname": "01gv2zfbt345trtrdk6vhbeccz.fly.dev",
    "cpu": 1,
    "memory": 256,
    "imageId": "01GTZHKS9CZHQ1NKZCA3LG0H4D",
    "state": "started",
    "volumeGB": 1,
    "createdAt": "2023-03-09T02:43:30.243-08:00",
    "updatedAt": "2023-03-09T02:43:30.243-08:00"
}
```
**`id`** The id used to reference this VM.  
**`hostname`** The hostname used to access this VM.  
**`cpu`** The number of CPUs allocated for this VM.  
**`memory`** The amount of memory allocated for this VM, in MB.  
**`imageId`** The image ID of the Docker image this VM is running.  
**`state`** The current state of the VM. Can be created, started, stopped, or destroyed. 
**`createdAt`** The date and time this VM was created.  
**`updatedAt`** The date and time this VM was last updated.  
**`port`** (optional) The port (if any) allocated for this VM.   
**`volumeGB`** (optional) The amount of disk storage, in GB, to attach to the VM.

### stopVM
Stop a running VM. This destroys the VM, as the start/stopVM commands are for one-time use VMs.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/[vmId]/stop
```

### getVMLogs
Get all of the logs for a VM.

#### Endpoint
```txt title="GET"
https://api.cakework.com/v1/vm/[vmId]/logs
```
#### URL query Parameters
**`query`** (optional) String to look for in the logs. Case-insensitive. If this parameter is not provided, all logs for the vm are returned.  
**`batch`** (optional) The number of rows to return. Accepts a range of 50-1000. Default: 100 rows.  
**`order`** (optional) The order by timestamp to return the logs. Options are `newest_first` and `oldest_first`. Defaults to `oldest_first`.  
**`pagination`** (optional) The pagination token returned by the previous call to get logs. Will be used to fetch the next batch of logs.  
**`from`** (optional) Start of time range for the log query (ISO8601-formatted string: 2022-07-19T13:32:56+0000). If the call to `getBuildLogs` returns `pagination`, `from`, and `to` fields, you must pass all 3 query parameters in the next call to `getBuildLogs` to fetch the next batch of logs.  
**`to`** (optional) End of time range for the log query (ISO8601-formatted string: 2022-07-19T13:32:56+0000).  

#### Response
```json
{
    "lines": [
        {
            "timestamp": 1676625938460,
            "level": "string",
            "message": "string"
        },
    ],
    "pagination": "XlG9SZP",
    "from": "2023-03-07 06:12:56 UTC",
    "to": "2023-03-08 06:11:56 UTC"
}
```
**`lines`** All the lines returned in the log.  
&nbsp;&nbsp;&nbsp;&nbsp;`timestamp` The unix timestamp in ms.  
&nbsp;&nbsp;&nbsp;&nbsp;`level` The log level (e.g. info/error).  
&nbsp;&nbsp;&nbsp;&nbsp;`message` The message.  
**`pagination`** (optional) If present, the pagination token with which you can query for more logs.  
**`pagination`** (optional) If present, the pagination token with which you can query for more logs.  
**`from`** (optional) If present, the next from timestamp with which you can query for more logs.  
**`to`** (optional) If present, the next to timestamp with which you can query for more logs.  

### getVm
Get information about a virtual machine.

#### Endpoint
```txt title="GET"
https://api.cakework.com/v1/vm/[vmId]
```
#### Response
```json
{
    "id": "string",
    "hostname": "string",
    "cpu": 1,
    "memory": 256,
    "imageId": "32GT08QBZ30M6R0CM27PSZC34G",
    "createdAt": "2023-02-24 20:29:40.331",
    "updatedAt": "2023-02-24 20:29:40.331",
    "port": 8080,
    "state": "started",
    "volumeGB": 1
}
```
**`id`** The id used to reference this VM.  
**`hostname`** The hostname used to access this VM.  
**`cpu`** The number of CPUs allocated for this VM.  
**`memory`** The amount of memory allocated for this VM, in MB  
**`imageId`** The image ID of the Docker image this VM is running.  
**`createdAt`** The date and time this VM was created.  
**`updatedAt`** The date and time this VM was last updated.  
**`port`** The port (if any) allocated for this VM.   
**`state`** The current state of the VM. Can be `created`, `started`, `stopped`, and `destroyed`.  
**`volumeGB`** (optional). The disk size of the attached volume, in GB. If not provided, defaults to 0.  

### listVMs
List the virtual machines which belong to you. You can filter the query.

#### Endpoint
```txt title="GET"
https://api.cakework.com/vms
```
#### URL query Parameters
**`imageId`** (optional) Filter VMs by which have a particular image ID deployed.    
**`status`** (optional) Filter VMs by a particular status. Options are created, started, stopped, or destroyed.  

#### Response
```json
{
    "vms": [
        {
            "id": "148e446b7e7089",
            "hostname": "01gtmj7swt42zpq48dqb4bgy8x.fly.dev",
            "cpu": 1,
            "memory": 256,
            "imageId": "01GTK500PATD76RYGWGBTSK9KY",
            "state": "stopped",
            "createdAt": "2023-03-03T20:22:39.096Z",
            "updatedAt": "2023-03-03T22:01:56.092Z"
        },
    ],
    "pagination": "string"
}
```

**`vms`** All the lines returned in the log.  
&nbsp;&nbsp;&nbsp;&nbsp;`id` The ID of the VM.  
&nbsp;&nbsp;&nbsp;&nbsp;`state` The status of the VM.  
&nbsp;&nbsp;&nbsp;&nbsp;`imageId` The image ID of the VM.  
&nbsp;&nbsp;&nbsp;&nbsp;`hostname` The hostname used to access this VM.  
&nbsp;&nbsp;&nbsp;&nbsp;`cpu` The number of CPUs allocated for this VM.  
&nbsp;&nbsp;&nbsp;&nbsp;`memory` The amount of memory allocated for this VM, in MB.  
&nbsp;&nbsp;&nbsp;&nbsp;`state` The current state of the VM.  
&nbsp;&nbsp;&nbsp;&nbsp;`createdAt` The date and time this VM was created.  
&nbsp;&nbsp;&nbsp;&nbsp;`updatedAt` The date and time this VM was last updated.  
&nbsp;&nbsp;&nbsp;&nbsp;`port` (optional) The port (if any) allocated for this VM.   
&nbsp;&nbsp;&nbsp;&nbsp;`volumeGB` (optional) The amount of disk storage, in GB, to attach to the VM.  
**`pagination`** (optional) The pagination token with which you can fetch the next page.

## Cached VMs
Use these APIs for re-usable VMs. This helps you get much faster cold starts.

### cacheVM
Cache a VM using an image. You still need to call ```startCachedVM``` to start a cached VM.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/cache
```

#### Request
```json
{
    "imageId": "string",
    "cpu": 1,
    "memory": 256,
    "port": 8080,
    "envVars": { "string": "string", "string": "string" },
    "diskSize": 3
}
```

**`imageId`** The id of the image to cache the VM with.  
**`cpu`** The number of CPUs for the VM. Can be a number between 1 and 8.  
**`memory`** The amount of memory for the VM. Can be a number between 256 and 16384.  
**`port`** (optional) The internal port to open.  
**`envVars`** (optional) The evironment variables as a map of string to string.  
**`diskSize`** (optional) The amount of persistent storage to attach to each VM, in GB. Can be a number between 1 and 500.  

#### Response
```json
{
    "id": "string",
    "hostname": "string"
}
```
**`id`** The id used to reference this cached VM.  
**`hostname`** The hostname used to access this cached VM.  

### startCachedVM
Start a cached VM.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/cached/[cachedVmId]/start
```

### stopCachedVM
Stop a cached VM. You can stop the cached VM by exiting the process as well.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/cached/[cachedVmId]/stop
```

### destroyCachedVM
Destroy a cached VM.

#### Endpoint
```txt title="POST"
https://api.cakework.com/v1/vm/cached/[cachedVmId]/destroy
```

### getCachedVMLogs
Get all of the logs for a cached VM. This currently just gets logs for all time and has no pagination or filtering.

#### Endpoint
```txt title="GET"
https://api.cakework.com/v1/vm/cached/[id]/logs
```

#### Response
```json
{
    "lines": [
        {
            "timestamp": 1676625938460,
            "level": "string",
            "message": "string"
        },
    ]
}
```
**`lines`** All the lines returned in the log.  
&nbsp;&nbsp;&nbsp;&nbsp;`timestamp` The unix timestamp in ms.  
&nbsp;&nbsp;&nbsp;&nbsp;`level` The log level (e.g. info/error).  
&nbsp;&nbsp;&nbsp;&nbsp;`message` The message.  

## Snippets
Use these APIs to run a snippet of code. We infer dependencies from the code each time you run the snippet.

### runSnippet
on the way!