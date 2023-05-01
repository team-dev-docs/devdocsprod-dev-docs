# fugue.extensions.outputter

## fugue.extensions.outputter.convert


### fugue.extensions.outputter.convert.outputter(\*\*validation_rules)
Decorator for outputters

Please read
[Outputter Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/outputter.html)


* **Parameters**

**validation_rules** (*Any*) -- 



* **Return type**

*Callable*[[*Any*], *_FuncAsOutputter*]



### fugue.extensions.outputter.convert.register_outputter(alias, obj, on_dup=0)
Register outputter with an alias.


* **Parameters**


* **alias** (*str*) -- alias of the processor


* **obj** (*Any*) -- the object that can be converted to
`Outputter`


* **on_dup** (*int*) -- see [`triad.collections.dict.ParamDict.update()`](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict.update)
, defaults to `ParamDict.OVERWRITE`



* **Return type**

None


## fugue.extensions.outputter.outputter


### _class_ fugue.extensions.outputter.outputter.Outputter()
Bases: [`ExtensionContext`](fugue.extensions.md#fugue.extensions.context.ExtensionContext), `ABC`

The interface to process one or multiple incoming dataframes without returning
anything. For example printing or saving dataframes should be a type of Outputter.
Outputter is task level extension, running on driver, and execution engine aware.

To implement this class, you should not have `__init__`, please directly implement
the interface functions.

**NOTE**: Before implementing this class, do you really need to implement this
interface? Do you know the interfaceless feature of Fugue? Implementing Outputter
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



* **Return type**

None
