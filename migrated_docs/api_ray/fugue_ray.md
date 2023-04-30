# fugue_ray

## fugue_ray.dataframe


### _class_ fugue_ray.dataframe.RayDataFrame(df=None, schema=None, internal_schema=False)
Bases: [`DataFrame`](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)

DataFrame that wraps Ray DataSet. Please also read
the DataFrame Tutorial to understand this Fugue concept


* **Parameters**

    
    * **df** (*Any*) -- [`ray.data.Dataset`](https://docs.ray.io/en/latest/data/api/doc/ray.data.Dataset.html#ray.data.Dataset), [`pyarrow.Table`](https://arrow.apache.org/docs/python/generated/pyarrow.Table.html#pyarrow.Table),
    [`pandas.DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html#pandas.DataFrame),
    Fugue [`DataFrame`](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame),
    or list or iterable of arrays


    * **schema** (*Any*) -- Schema like object, defaults to None. If the schema
    is different from the `df` schema, then type casts will happen.


    * **internal_schema** (*bool*) -- for internal schema, it means the schema
    is guaranteed by the provider to be consistent with the schema of
    `df`, so no type cast will happen. Defaults to False. This is
    for internal use only.



#### alter_columns(columns)
Change column types


* **Parameters**

    **columns** (*Any*) -- Schema like object,
    all columns should be contained by the dataframe schema



* **Returns**

    a new dataframe with altered columns, the order of the
    original schema will not change



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### as_array(columns=None, type_safe=False)
Convert to 2-dimensional native python array


* **Parameters**

    
    * **columns** (*List**[**str**] **| **None*) -- columns to extract, defaults to None


    * **type_safe** (*bool*) -- whether to ensure output conforms with its schema,
    defaults to False



* **Returns**

    2-dimensional native python array



* **Return type**

    *List*[*Any*]


**NOTE**: If `type_safe` is False, then the returned values are 'raw' values.


#### as_array_iterable(columns=None, type_safe=False)
Convert to iterable of native python arrays


* **Parameters**

    
    * **columns** (*List**[**str**] **| **None*) -- columns to extract, defaults to None


    * **type_safe** (*bool*) -- whether to ensure output conforms with its schema,
    defaults to False



* **Returns**

    iterable of native python arrays



* **Return type**

    *Iterable*[*Any*]


**NOTE**: If `type_safe` is False, then the returned values are 'raw' values.


#### as_arrow(type_safe=False)
Convert to pyArrow DataFrame


* **Parameters**

    **type_safe** (*bool*) -- 



* **Return type**

    [*Table*](https://arrow.apache.org/docs/python/generated/pyarrow.Table.html#pyarrow.Table)



#### as_local()
Convert this dataframe to a [`LocalDataFrame`](../api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)


* **Return type**

    [*LocalDataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)



#### as_pandas()
Convert to pandas DataFrame


* **Return type**

    [*DataFrame*](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html#pandas.DataFrame)



#### count()
Get number of rows of this dataframe


* **Return type**

    int



#### _property_ empty(_: boo_ )
Whether this dataframe is empty


#### head(n, columns=None)
Get first n rows of the dataframe as a new local bounded dataframe


* **Parameters**

    
    * **n** (*int*) -- number of rows


    * **columns** (*List**[**str**] **| **None*) -- selected columns, defaults to None (all columns)



* **Returns**

    a local bounded dataframe



* **Return type**

    [*LocalBoundedDataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalBoundedDataFrame)



#### _property_ is_bounded(_: boo_ )
Whether this dataframe is bounded


#### _property_ is_local(_: boo_ )
Whether this dataframe is a local Dataset


#### _property_ native(_: [Dataset](https://docs.ray.io/en/latest/data/api/doc/ray.data.Dataset.html#ray.data.Dataset_ )
The wrapped ray Dataset


#### native_as_df()
The dataframe form of the native object this Dataset class wraps.
Dataframe form means the object contains schema information. For example
the native an ArrayDataFrame is a python array, it doesn't contain schema
information, and its `native_as_df` should be either a pandas dataframe
or an arrow dataframe.


* **Return type**

    [*Dataset*](https://docs.ray.io/en/latest/data/api/doc/ray.data.Dataset.html#ray.data.Dataset)



#### _property_ num_partitions(_: in_ )
Number of physical partitions of this dataframe.
Please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)


#### peek_array()
Peek the first row of the dataframe as array


* **Raises**

    [**FugueDatasetEmptyError**](../api/fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

    *List*[*Any*]



#### persist(\*\*kwargs)

* **Parameters**

    **kwargs** (*Any*) -- 



* **Return type**

    *RayDataFrame*



#### rename(columns)
Rename the dataframe using a mapping dict


* **Parameters**

    **columns** (*Dict**[**str**, **str**]*) -- key: the original column name, value: the new name



* **Returns**

    a new dataframe with the new names



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


## fugue_ray.execution_engine


### _class_ fugue_ray.execution_engine.RayExecutionEngine(conf=None, connection=None)
Bases: [`DuckExecutionEngine`](../api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine)

A hybrid engine of Ray and DuckDB as Phase 1 of Fugue Ray integration.
Most operations will be done by DuckDB, but for `map`, it will use Ray.


* **Parameters**

    
    * **conf** (*Any*) -- Parameters like object, read [the Fugue Configuration Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/useful_config.html) to learn Fugue specific options


    * **connection** (*DuckDBPyConnection** | **None*) -- DuckDB connection



#### broadcast(df)
Broadcast the dataframe to all workers for a distributed computing framework


* **Parameters**

    **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the input dataframe



* **Returns**

    the broadcasted dataframe



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### convert_yield_dataframe(df, as_local)
Convert a yield dataframe to a dataframe that can be used after this
execution engine stops.


* **Parameters**

    
    * **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


    * **as_local** (*bool*) -- whether yield a local dataframe



* **Returns**

    another DataFrame that can be used after this execution engine stops



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: By default, the output dataframe is the input dataframe. But it should be
overridden if when an engine stops and the input dataframe will become
invalid.

For example, if you custom a spark engine where you start and stop the spark
session in this engine's `start_engine()` and [`stop_engine()`](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.stop_engine),
then the spark dataframe will be invalid. So you may consider converting
it to a local dataframe so it can still exist after the engine stops.


#### create_default_map_engine()
Default MapEngine if user doesn't specify


* **Return type**

    [*MapEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.MapEngine)



#### get_current_parallelism()
Get the current number of parallelism of this engine


* **Return type**

    int



#### _property_ is_distributed(_: boo_ )
Whether this engine is a distributed engine


#### load_df(path, format_hint=None, columns=None, \*\*kwargs)
Load dataframe from persistent storage


* **Parameters**

    
    * **path** (*str** | **List**[**str**]*) -- the path to the dataframe


    * **format_hint** (*Any** | **None*) -- can accept `parquet`, `csv`, `json`,
    defaults to None, meaning to infer


    * **columns** (*Any** | **None*) -- list of columns or a Schema like object, defaults to None


    * **kwargs** (*Any*) -- parameters to pass to the underlying framework



* **Returns**

    an engine compatible dataframe



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


For more details and examples, read Zip & Comap.


#### persist(df, lazy=False, \*\*kwargs)
Force materializing and caching the dataframe


* **Parameters**

    
    * **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the input dataframe


    * **lazy** (*bool*) -- `True`: first usage of the output will trigger persisting
    to happen; `False` (eager): persist is forced to happend immediately.
    Default to `False`


    * **kwargs** (*Any*) -- parameter to pass to the underlying persist implementation



* **Returns**

    the persisted dataframe



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: `persist` can only guarantee the persisted dataframe will be computed
for only once. However this doesn't mean the backend really breaks up the
execution dependency at the persisting point. Commonly, it doesn't cause
any issue, but if your execution graph is long, it may cause expected
problems for example, stack overflow.


#### repartition(df, partition_spec)
Partition the input dataframe using `partition_spec`.


* **Parameters**

    
    * **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- input dataframe


    * **partition_spec** ([*PartitionSpec*](../api/fugue.collections.md#fugue.collections.partition.PartitionSpec)) -- how you want to partition the dataframe



* **Returns**

    repartitioned dataframe



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Before implementing please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)


#### save_df(df, path, format_hint=None, mode='overwrite', partition_spec=None, force_single=False, \*\*kwargs)
Save dataframe to a persistent storage


* **Parameters**

    
    * **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- input dataframe


    * **path** (*str*) -- output path


    * **format_hint** (*Any** | **None*) -- can accept `parquet`, `csv`, `json`,
    defaults to None, meaning to infer


    * **mode** (*str*) -- can accept `overwrite`, `append`, `error`,
    defaults to "overwrite"


    * **partition_spec** ([*PartitionSpec*](../api/fugue.collections.md#fugue.collections.partition.PartitionSpec)* | **None*) -- how to partition the dataframe before saving,
    defaults to empty


    * **force_single** (*bool*) -- force the output as a single file, defaults to False


    * **kwargs** (*Any*) -- parameters to pass to the underlying framework



* **Return type**

    None


For more details and examples, read Load & Save.


#### to_df(df, schema=None)
Convert a data structure to this engine compatible DataFrame


* **Parameters**

    
    * **data** -- [`DataFrame`](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame),
    pandas DataFramme or list or iterable of arrays or others that
    is supported by certain engine implementation


    * **schema** (*Any** | **None*) -- Schema like object, defaults to None


    * **df** (*Any*) -- 



* **Returns**

    engine compatible dataframe



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: There are certain conventions to follow for a new implementation:


* if the input is already in compatible dataframe type, it should return
itself


* all other methods in the engine interface should take arbitrary
dataframes and call this method to convert before doing anything


### _class_ fugue_ray.execution_engine.RayMapEngine(execution_engine)
Bases: [`MapEngine`](../api/fugue.execution.md#fugue.execution.execution_engine.MapEngine)


* **Parameters**

    **execution_engine** ([*ExecutionEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)) -- 



#### _property_ execution_engine_constraint(_: Type[[ExecutionEngine](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)_ )
This defines the required ExecutionEngine type of this facet


* **Returns**

    a subtype of [`ExecutionEngine`](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)



#### _property_ is_distributed(_: boo_ )
Whether this engine is a distributed engine


#### map_dataframe(df, map_func, output_schema, partition_spec, on_init=None)
Apply a function to each partition after you partition the dataframe in a
specified way.


* **Parameters**

    
    * **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- input dataframe


    * **map_func** (*Callable**[**[*[*PartitionCursor*](../api/fugue.collections.md#fugue.collections.partition.PartitionCursor)*, *[*LocalDataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)*]**, *[*LocalDataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)*]*) -- the function to apply on every logical partition


    * **output_schema** (*Any*) -- Schema like object that can't be None.
    Please also understand why we need this


    * **partition_spec** ([*PartitionSpec*](../api/fugue.collections.md#fugue.collections.partition.PartitionSpec)) -- partition specification


    * **on_init** (*Callable**[**[**int**, *[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)*]**, **Any**] **| **None*) -- callback function when the physical partition is initializaing,
    defaults to None



* **Returns**

    the dataframe after the map operation



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Before implementing, you must read
this
to understand what map is used for and how it should work.

## fugue_ray.registry
