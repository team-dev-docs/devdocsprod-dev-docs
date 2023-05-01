# fugue.extensions.processor

## fugue.extensions.processor.convert


### fugue.extensions.processor.convert.processor(schema=None, \*\*validation_rules)
Decorator for processors

Please read
[Processor Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/processor.html)


* **Parameters**


* **schema** (*Any** | **None*) -- 


* **validation_rules** (*Any*) -- 



* **Return type**

*Callable*[[*Any*], *_FuncAsProcessor*]



### fugue.extensions.processor.convert.register_processor(alias, obj, on_dup=0)
Register processor with an alias.


* **Parameters**


* **alias** (*str*) -- alias of the processor


* **obj** (*Any*) -- the object that can be converted to
`Processor`


* **on_dup** (*int*) -- see [`triad.collections.dict.ParamDict.update()`](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict.update)
, defaults to `ParamDict.OVERWRITE`



* **Return type**

None


## fugue.extensions.processor.processor


### _class_ fugue.extensions.processor.processor.Processor()
Bases: [`ExtensionContext`](fugue.extensions.md#fugue.extensions.context.ExtensionContext), `ABC`

The interface to process one or multiple incoming dataframes and return one
DataFrame. For example dropping a column of df should be a type of Processor.
Processor is task level extension, running on driver, and execution engine aware.

To implement this class, you should not have `__init__`, please directly implement
the interface functions.

**NOTE**: Before implementing this class, do you really need to implement this
interface? Do you know the interfaceless feature of Fugue? Implementing Processor
is commonly unnecessary. You can choose the interfaceless approach which may
decouple your code from Fugue.


#### _abstract_ process(dfs)
Process the collection of dataframes on driver side

**NOTE**: 
* It runs on driver side


* The dataframes are not necessarily local, for example a SparkDataFrame


* It is engine aware, you can put platform dependent code in it (for example
native pyspark code) but by doing so your code may not be portable. If you
only use the functions of the general ExecutionEngine, it's still portable.


* **Parameters**

**dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- dataframe collection to process



* **Returns**

the result dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)
