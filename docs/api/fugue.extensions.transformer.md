# fugue.extensions.transformer

## fugue.extensions.transformer.constants

## fugue.extensions.transformer.convert


### fugue.extensions.transformer.convert.cotransformer(schema, \*\*validation_rules)
Decorator for cotransformers

Please read [the CoTransformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/cotransformer.html)


* **Parameters**


* **schema** (*Any*) -- 


* **validation_rules** (*Any*) -- 



* **Return type**

*Callable*[[*Any*], *_FuncAsCoTransformer*]



### fugue.extensions.transformer.convert.output_cotransformer(\*\*validation_rules)
Decorator for cotransformers

Please read [the CoTransformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/cotransformer.html)


* **Parameters**

**validation_rules** (*Any*) -- 



* **Return type**

*Callable*[[*Any*], *_FuncAsCoTransformer*]



### fugue.extensions.transformer.convert.output_transformer(\*\*validation_rules)
Decorator for transformers

Please read [the Transformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/transformer.html)


* **Parameters**

**validation_rules** (*Any*) -- 



* **Return type**

*Callable*[[*Any*], *_FuncAsTransformer*]



### fugue.extensions.transformer.convert.register_output_transformer(alias, obj, on_dup=0)
Register output transformer with an alias.


* **Parameters**


* **alias** (*str*) -- alias of the transformer


* **obj** (*Any*) -- the object that can be converted to
`OutputTransformer` or
`OutputCoTransformer`


* **on_dup** (*int*) -- see [`triad.collections.dict.ParamDict.update()`](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict.update)
, defaults to `ParamDict.OVERWRITE`



* **Return type**

None



### fugue.extensions.transformer.convert.register_transformer(alias, obj, on_dup=0)
Register transformer with an alias.


* **Parameters**


* **alias** (*str*) -- alias of the transformer


* **obj** (*Any*) -- the object that can be converted to
`Transformer` or
`CoTransformer`


* **on_dup** (*int*) -- see [`triad.collections.dict.ParamDict.update()`](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict.update)
, defaults to `ParamDict.OVERWRITE`



* **Return type**

None



### fugue.extensions.transformer.convert.transformer(schema, \*\*validation_rules)
Decorator for transformers

Please read [the Transformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/transformer.html)


* **Parameters**


* **schema** (*Any*) -- 


* **validation_rules** (*Any*) -- 



* **Return type**

*Callable*[[*Any*], *_FuncAsTransformer*]


## fugue.extensions.transformer.transformer


### _class_ fugue.extensions.transformer.transformer.CoTransformer()
Bases: [`ExtensionContext`](fugue.extensions.md#fugue.extensions.context.ExtensionContext)

The interface to process logical partitions of a zipped dataframe.
A dataframe such as SparkDataFrame can be distributed. But this interface is about
local process, scalability and throughput is not a concern of CoTransformer.

To implement this class, you should not have `__init__`, please directly implement
the interface functions.

**NOTE**: Before implementing this class, do you really need to implement this
interface? Do you know the interfaceless feature of Fugue? Commonly, if you don't
need to implement `on_init()`, you can choose the
interfaceless approach which may decouple your code from Fugue.

It's important to understand Zip & Comap, and
please also read [the CoTransformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/cotransformer.html)

Due to similar issue on spark
[pickling ABC objects](https://github.com/cloudpipe/cloudpickle/issues/305).
This class is not ABC. If you encounter the similar issue, possible solution
[at](https://github.com/cloudpipe/cloudpickle/issues/305#issuecomment-529246171)


#### get_output_schema(dfs)
Generate the output schema on the driver side.

**NOTE**: 
* This is running on driver


* Currently, `dfs` is a collection of empty dataframes with the same
structure and schemas


* Normally, you should not consume this dataframe in this step, and you s
hould only use its schema


* You can access all properties except for [`cursor()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.cursor)


* **Parameters**

**dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- the collection of dataframes you are going to transform. They
are empty dataframes with the same structure and schemas



* **Returns**

Schema like object, should not be None or empty



* **Return type**

*Any*



#### on_init(dfs)
Callback for initializing
physical partition that contains one or multiple logical partitions.
You may put expensive initialization logic here so you will not have to repeat
that in `transform()`

**NOTE**: 
* This call can be on a random machine (depending on the ExecutionEngine you
use), you should get the context from the properties of this class


* You can get physical partition no (if available from the execution egnine)
from [`cursor()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.cursor)


* Currently, `dfs` is a collection of empty dataframes with the same
structure and schemas


* **Parameters**

**dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- a collection of empty dataframes with the same structure and schemas



* **Return type**

None



#### transform(dfs)
The transformation logic from a collection of dataframes (with the same
partition keys) to a local dataframe.

**NOTE**: 
* This call can be on a random machine (depending on the ExecutionEngine you
use), you should get the [`context`](fugue.extensions.md#fugue.extensions.context.ExtensionContext)
from the properties of this class


* **Parameters**

**dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- a collection of dataframes with the same partition keys



* **Returns**

transformed dataframe



* **Return type**

[*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)



### _class_ fugue.extensions.transformer.transformer.OutputCoTransformer()
Bases: `CoTransformer`


#### get_output_schema(dfs)
Generate the output schema on the driver side.

**NOTE**: 
* This is running on driver


* Currently, `dfs` is a collection of empty dataframes with the same
structure and schemas


* Normally, you should not consume this dataframe in this step, and you s
hould only use its schema


* You can access all properties except for [`cursor()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.cursor)


* **Parameters**

**dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- the collection of dataframes you are going to transform. They
are empty dataframes with the same structure and schemas



* **Returns**

Schema like object, should not be None or empty



* **Return type**

*Any*



#### process(dfs)

* **Parameters**

**dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- 



* **Return type**

None



#### transform(dfs)
The transformation logic from a collection of dataframes (with the same
partition keys) to a local dataframe.

**NOTE**: 
* This call can be on a random machine (depending on the ExecutionEngine you
use), you should get the [`context`](fugue.extensions.md#fugue.extensions.context.ExtensionContext)
from the properties of this class


* **Parameters**

**dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- a collection of dataframes with the same partition keys



* **Returns**

transformed dataframe



* **Return type**

[*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)



### _class_ fugue.extensions.transformer.transformer.OutputTransformer()
Bases: `Transformer`


#### get_output_schema(df)
Generate the output schema on the driver side.

**NOTE**: 
* This is running on driver


* This is the only function in this interface that is facing the entire
DataFrame that is not necessarily local, for example a SparkDataFrame


* Normally, you should not consume this dataframe in this step, and you s
hould only use its schema


* You can access all properties except for [`cursor()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.cursor)


* **Parameters**

**df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the entire dataframe you are going to transform.



* **Returns**

Schema like object, should not be None or empty



* **Return type**

*Any*



#### process(df)

* **Parameters**

**df** ([*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)) -- 



* **Return type**

None



#### transform(df)
The transformation logic from one local dataframe to another local dataframe.

**NOTE**: 
* This function operates on logical partition level


* This call can be on a random machine (depending on the ExecutionEngine you
use), you should get the [`context`](fugue.extensions.md#fugue.extensions.context.ExtensionContext) from the properties of this
class


* The input dataframe may be unbounded, but must be empty aware. It's safe to
consume it for ONLY ONCE


* The input dataframe is never empty. Empty dataframes are skipped


* **Parameters**

**df** ([*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)) -- one logical partition to transform on



* **Returns**

transformed dataframe



* **Return type**

[*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)



### _class_ fugue.extensions.transformer.transformer.Transformer()
Bases: [`ExtensionContext`](fugue.extensions.md#fugue.extensions.context.ExtensionContext)

The interface to process logical partitions of a dataframe.
A dataframe such as SparkDataFrame can be distributed. But this interface is about
local process, scalability and throughput is not a concern of Transformer.

To implement this class, you should not have `__init__`, please directly implement
the interface functions.

**NOTE**: Before implementing this class, do you really need to implement this
interface? Do you know the interfaceless feature of Fugue? Commonly, if you don't
need to implement `on_init()`, you can choose the
interfaceless approach which may decouple your code from Fugue.

It's important to understand [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html), and please
also read [the Transformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/transformer.html)

Due to similar issue on spark
[pickling ABC objects](https://github.com/cloudpipe/cloudpickle/issues/305).
This class is not ABC. If you encounter the similar issue, possible solution
[at](https://github.com/cloudpipe/cloudpickle/issues/305#issuecomment-529246171)


#### get_output_schema(df)
Generate the output schema on the driver side.

**NOTE**: 
* This is running on driver


* This is the only function in this interface that is facing the entire
DataFrame that is not necessarily local, for example a SparkDataFrame


* Normally, you should not consume this dataframe in this step, and you s
hould only use its schema


* You can access all properties except for [`cursor()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.cursor)


* **Parameters**

**df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the entire dataframe you are going to transform.



* **Returns**

Schema like object, should not be None or empty



* **Return type**

*Any*



#### on_init(df)
Callback for initializing
physical partition that contains one or multiple logical partitions.
You may put expensive initialization logic here so you will not have to repeat
that in `transform()`

**NOTE**: 
* This call can be on a random machine (depending on the ExecutionEngine you
use), you should get the context from the properties of this class


* You can get physical partition no (if available from the execution egnine)
from [`cursor()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.cursor)


* The input dataframe may be unbounded, but must be empty aware. That means
you must not consume the df by any means, and you can not count.
However you can safely peek the first row of the dataframe for multiple
times.


* The input dataframe is never empty. Empty physical partitions are skipped


* **Parameters**

**df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the entire dataframe of this physical partition



* **Return type**

None



#### transform(df)
The transformation logic from one local dataframe to another local dataframe.

**NOTE**: 
* This function operates on logical partition level


* This call can be on a random machine (depending on the ExecutionEngine you
use), you should get the [`context`](fugue.extensions.md#fugue.extensions.context.ExtensionContext) from the properties of this
class


* The input dataframe may be unbounded, but must be empty aware. It's safe to
consume it for ONLY ONCE


* The input dataframe is never empty. Empty dataframes are skipped


* **Parameters**

**df** ([*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)) -- one logical partition to transform on



* **Returns**

transformed dataframe



* **Return type**

[*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)
