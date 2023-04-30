# fugue_ibis.execution

## fugue_ibis.execution.ibis_engine


### _class_ fugue_ibis.execution.ibis_engine.IbisEngine(execution_engine)
Bases: [`EngineFacet`](../api/fugue.execution.md#fugue.execution.execution_engine.EngineFacet)

The abstract base class for different ibis execution implementations.


* **Parameters**

    **execution_engine** ([*ExecutionEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)) -- the execution engine this ibis engine will run on



#### _property_ is_distributed(_: boo_ )
Whether this engine is a distributed engine


#### _abstract_ select(dfs, ibis_func)
Execute the ibis select expression.


* **Parameters**

    
    * **dfs** ([*DataFrames*](../api/fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- a collection of dataframes that must have keys


    * **ibis_func** (*Callable**[**[**BaseBackend**]**, **Table**]*) -- the ibis compute function



* **Returns**

    result of the ibis function



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: This interface is experimental, so it is subjected to change.


#### to_df(df, schema=None)
Convert a data structure to this engine compatible DataFrame


* **Parameters**

    
    * **data** -- [`DataFrame`](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame),
    pandas DataFramme or list or iterable of arrays or others that
    is supported by certain engine implementation


    * **schema** (*Any** | **None*) -- Schema like object, defaults to None


    * **df** (*AnyDataFrame*) -- 



* **Returns**

    engine compatible dataframe



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: There are certain conventions to follow for a new implementation:


* if the input is already in compatible dataframe type, it should return
itself


* all other methods in the engine interface should take arbitrary
dataframes and call this method to convert before doing anything

## fugue_ibis.execution.pandas_backend


### _class_ fugue_ibis.execution.pandas_backend.PandasIbisEngine(execution_engine)
Bases: `IbisEngine`


* **Parameters**

    **execution_engine** ([*ExecutionEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)) -- 



#### select(dfs, ibis_func)
Execute the ibis select expression.


* **Parameters**

    
    * **dfs** ([*DataFrames*](../api/fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- a collection of dataframes that must have keys


    * **ibis_func** (*Callable**[**[**BaseBackend**]**, **Table**]*) -- the ibis compute function



* **Returns**

    result of the ibis function



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: This interface is experimental, so it is subjected to change.
