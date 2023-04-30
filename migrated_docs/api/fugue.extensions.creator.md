# fugue.extensions.creator

## fugue.extensions.creator.convert


### fugue.extensions.creator.convert.creator(schema=None)
Decorator for creators

Please read
[Creator Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/creator.html)


* **Parameters**

    **schema** (*Any** | **None*) -- 



* **Return type**

    *Callable*[[*Any*], *_FuncAsCreator*]



### fugue.extensions.creator.convert.register_creator(alias, obj, on_dup=0)
Register creator with an alias. This is a simplified version of
`parse_creator()`


* **Parameters**

    
    * **alias** (*str*) -- alias of the creator


    * **obj** (*Any*) -- the object that can be converted to
    `Creator`


    * **on_dup** (*int*) -- see [`triad.collections.dict.ParamDict.update()`](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict.update)
    , defaults to `ParamDict.OVERWRITE`



* **Return type**

    None


## fugue.extensions.creator.creator


### _class_ fugue.extensions.creator.creator.Creator()
Bases: [`ExtensionContext`](fugue.extensions.md#fugue.extensions.context.ExtensionContext), `ABC`

The interface is to generate single DataFrame from params.
For example reading data from file should be a type of Creator.
Creator is task level extension, running on driver, and execution engine aware.

To implement this class, you should not have `__init__`, please directly implement
the interface functions.

**NOTE**: Before implementing this class, do you really need to implement this
interface? Do you know the interfaceless feature of Fugue? Implementing Creator
is commonly unnecessary. You can choose the interfaceless approach which may
decouple your code from Fugue.


#### _abstract_ create()
Create DataFrame on driver side

**NOTE**: 
* It runs on driver side


* The output dataframe is not necessarily local, for example a SparkDataFrame


* It is engine aware, you can put platform dependent code in it (for example
native pyspark code) but by doing so your code may not be portable. If you
only use the functions of the general ExecutionEngine interface, it's still
portable.


* **Returns**

    result dataframe



* **Return type**

    [*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)
