# fugue.rpc

## fugue.rpc.base


### _class_ fugue.rpc.base.EmptyRPCHandler()
Bases: `RPCHandler`

The class representing empty `RPCHandler`


### _class_ fugue.rpc.base.NativeRPCClient(server, key)
Bases: `RPCClient`

Native RPC Client that can only be used locally.
Use `make_client()` to create this instance.


* **Parameters**


* **server** (*NativeRPCServer*) -- the parent `NativeRPCServer`


* **key** (*str*) -- the unique key for the handler and this client



### _class_ fugue.rpc.base.NativeRPCServer(conf)
Bases: `RPCServer`

Native RPC Server that can only be used locally.


* **Parameters**

**conf** (*Any*) -- [the Fugue Configuration Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/useful_config.html)



#### make_client(handler)
Add `handler` and correspondent `NativeRPCClient`


* **Parameters**

**handler** (*Any*) -- RPChandler like object



* **Returns**

the native RPC client



* **Return type**

*RPCClient*



#### start_server()
Do nothing


* **Return type**

None



#### stop_server()
Do nothing


* **Return type**

None



### _class_ fugue.rpc.base.RPCClient()
Bases: `object`

RPC client interface


### _class_ fugue.rpc.base.RPCFunc(func)
Bases: `RPCHandler`

RPCHandler wrapping a python function.


* **Parameters**

**func** (*Callable*) -- a python function



### _class_ fugue.rpc.base.RPCHandler()
Bases: `RPCClient`

RPC handler hosting the real logic on driver side


#### _property_ running(_: boo_ )
Whether the handler is in running state


#### start()
Start the handler, wrapping `start_handler()`


* **Returns**

the instance itself



* **Return type**

*RPCHandler*



#### start_handler()
User implementation of starting the handler


* **Return type**

None



#### stop()
Stop the handler, wrapping `stop_handler()`


* **Return type**

None



#### stop_handler()
User implementation of stopping the handler


* **Return type**

None



### _class_ fugue.rpc.base.RPCServer(conf)
Bases: `RPCHandler`, `ABC`

Server abstract class hosting multiple `RPCHandler`.


* **Parameters**

**conf** (*Any*) -- [the Fugue Configuration Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/useful_config.html)



#### _property_ conf(_: [ParamDict](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict_ )
Config initialized this instance


#### invoke(key, \*args, \*\*kwargs)
Invoke the correspondent handler


* **Parameters**


* **key** (*str*) -- key of the handler


* **args** (*Any*) -- 


* **kwargs** (*Any*) -- 



* **Returns**

the return value of the handler



* **Return type**

*Any*



#### _abstract_ make_client(handler)
Make a `RPCHandler` and return the correspondent
`RPCClient`


* **Parameters**

**handler** (*Any*) -- RPChandler like object



* **Returns**

the client connecting to the handler



* **Return type**

*RPCClient*



#### register(handler)
Register the hander into the server


* **Parameters**

**handler** (*Any*) -- RPChandler like object



* **Returns**

the unique key of the handler



* **Return type**

str



#### start_handler()
Wrapper to start the server, do not override or call directly


* **Return type**

None



#### _abstract_ start_server()
User implementation of starting the server


* **Return type**

None



#### stop_handler()
Wrapper to stop the server, do not override or call directly


* **Return type**

None



#### _abstract_ stop_server()
User implementation of stopping the server


* **Return type**

None



### fugue.rpc.base.make_rpc_server(conf)
Make `RPCServer` based on configuration.
If 'fugue.rpc.server\` is set, then the value will be used as
the server type for the initialization. Otherwise, a
`NativeRPCServer` instance will be returned


* **Parameters**

**conf** (*Any*) -- [the Fugue Configuration Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/useful_config.html)



* **Returns**

the RPC server



* **Return type**

*RPCServer*



### fugue.rpc.base.to_rpc_handler(obj)
Convert object to `RPCHandler`. If the object is already
`RPCHandler`, then the original instance will be returned.
If the object is `None` then `EmptyRPCHandler` will be returned.
If the object is a python function then `RPCFunc` will be returned.


* **Parameters**

**obj** (*Any*) -- RPChandler like object



* **Returns**

the RPC handler



* **Return type**

*RPCHandler*


## fugue.rpc.flask


### _class_ fugue.rpc.flask.FlaskRPCClient(key, host, port, timeout_sec)
Bases: `RPCClient`

Flask RPC Client that can be used distributedly.
Use `make_client()` to create this instance.


* **Parameters**


* **key** (*str*) -- the unique key for the handler and this client


* **host** (*str*) -- the host address of the flask server


* **port** (*int*) -- the port of the flask server


* **timeout_sec** (*float*) -- timeout seconds for flask clients



### _class_ fugue.rpc.flask.FlaskRPCServer(conf)
Bases: `RPCServer`

Flask RPC server that can be used in a distributed environment.
It's required to set `fugue.rpc.flask_server.host` and
`fugue.rpc.flask_server.port`. If `fugue.rpc.flask_server.timeout`
is not set, then the client could hang until the connection is closed.


* **Parameters**

**conf** (*Any*) -- [the Fugue Configuration Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/useful_config.html)



#### make_client(handler)
Add `handler` and correspondent `FlaskRPCClient`


* **Parameters**

**handler** (*Any*) -- RPChandler like object



* **Returns**

the flask RPC client that can be distributed



* **Return type**

*RPCClient*



#### start_server()
Start Flask RPC server


* **Return type**

None



#### stop_server()
Stop Flask RPC server


* **Return type**

None
