# fugue_spark

## fugue_spark.dataframe


### _class_ fugue_spark.dataframe.SparkDataFrame(df=None, schema=None)
Bases: [`DataFrame`](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)

DataFrame that wraps Spark DataFrame. Please also read
the DataFrame Tutorial to understand this Fugue concept


* **Parameters**

    
    * **df** (*Any*) -- [`pyspark.sql.DataFrame`](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.html#pyspark.sql.DataFrame)


    * **schema** (*Any*) -- Schema like object or [`pyspark.sql.types.StructType`](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.types.StructType.html#pyspark.sql.types.StructType),
    defaults to None.


**NOTE**: 
* You should use `fugue_spark.execution_engine.SparkExecutionEngine.to_df()`
instead of construction it by yourself.


* If `schema` is set, then there will be type cast on the Spark DataFrame if
the schema is different.


#### _property_ alias(_: st_ )

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


#### _property_ native(_: DataFram_ )
The wrapped Spark DataFrame


* **Return type**

    [`pyspark.sql.DataFrame`](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.html#pyspark.sql.DataFrame)



#### native_as_df()
The dataframe form of the native object this Dataset class wraps.
Dataframe form means the object contains schema information. For example
the native an ArrayDataFrame is a python array, it doesn't contain schema
information, and its `native_as_df` should be either a pandas dataframe
or an arrow dataframe.


* **Return type**

    *DataFrame*



#### _property_ num_partitions(_: in_ )
Number of physical partitions of this dataframe.
Please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)


#### peek_array()
Peek the first row of the dataframe as array


* **Raises**

    [**FugueDatasetEmptyError**](../api/fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

    *List*[*Any*]



#### rename(columns)
Rename the dataframe using a mapping dict


* **Parameters**

    **columns** (*Dict**[**str**, **str**]*) -- key: the original column name, value: the new name



* **Returns**

    a new dataframe with the new names



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


## fugue_spark.execution_engine


### _class_ fugue_spark.execution_engine.SparkExecutionEngine(spark_session=None, conf=None)
Bases: [`ExecutionEngine`](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)

The execution engine based on [`SparkSession`](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.SparkSession.html#pyspark.sql.SparkSession).

Please read [the ExecutionEngine Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/execution_engine.html) to understand this important Fugue concept


* **Parameters**

    
    * **spark_session** (*SparkSession** | **None*) -- Spark session, defaults to None to get the Spark session by
    `getOrCreate()`


    * **conf** (*Any*) -- Parameters like object defaults to None, read [the Fugue Configuration Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/useful_config.html) to
    learn Fugue specific options



#### broadcast(df)
Broadcast the dataframe to all workers for a distributed computing framework


* **Parameters**

    **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the input dataframe



* **Returns**

    the broadcasted dataframe



* **Return type**

    *SparkDataFrame*



#### create_default_map_engine()
Default MapEngine if user doesn't specify


* **Return type**

    [*MapEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.MapEngine)



#### create_default_sql_engine()
Default SQLEngine if user doesn't specify


* **Return type**

    [*SQLEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.SQLEngine)



#### distinct(df)
Equivalent to `SELECT DISTINCT \* FROM df`


* **Parameters**

    **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- dataframe



* **Returns**

    [description]



* **Return type**

    [DataFrame](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### dropna(df, how='any', thresh=None, subset=None)
Drop NA recods from dataframe


* **Parameters**

    
    * **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


    * **how** (*str*) -- 'any' or 'all'. 'any' drops rows that contain any nulls.
    'all' drops rows that contain all nulls.


    * **thresh** (*int** | **None*) -- int, drops rows that have less than thresh non-null values


    * **subset** (*List**[**str**] **| **None*) -- list of columns to operate on



* **Returns**

    DataFrame with NA records dropped



* **Return type**

    [DataFrame](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### fillna(df, value, subset=None)
Fill `NULL`, `NAN`, `NAT` values in a dataframe


* **Parameters**

    
    * **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


    * **value** (*Any*) -- if scalar, fills all columns with same value.
    if dictionary, fills NA using the keys as column names and the
    values as the replacement values.


    * **subset** (*List**[**str**] **| **None*) -- list of columns to operate on. ignored if value is
    a dictionary



* **Returns**

    DataFrame with NA records filled



* **Return type**

    [DataFrame](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### _property_ fs(_: [FileSystem](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.fs.FileSystem_ )
File system of this engine instance


#### get_current_parallelism()
Get the current number of parallelism of this engine


* **Return type**

    int



#### intersect(df1, df2, distinct=True)
Intersect `df1` and `df2`


* **Parameters**

    
    * **df1** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


    * **df2** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


    * **distinct** (*bool*) -- `true` for `INTERSECT` (== `INTERSECT DISTINCT`),
    `false` for `INTERSECT ALL`



* **Returns**

    the unioned dataframe



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Currently, the schema of `df1` and `df2` must be identical, or
an exception will be thrown.


#### _property_ is_distributed(_: boo_ )
Whether this engine is a distributed engine


#### join(df1, df2, how, on=None)
Join two dataframes


* **Parameters**

    
    * **df1** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


    * **df2** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


    * **how** (*str*) -- can accept `semi`, `left_semi`, `anti`, `left_anti`,
    `inner`, `left_outer`, `right_outer`, `full_outer`, `cross`


    * **on** (*List**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
    validated against the inferred keys.



* **Returns**

    the joined dataframe



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Please read [`get_join_schemas()`](../api/fugue.dataframe.md#fugue.dataframe.utils.get_join_schemas)


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


#### _property_ log(_: Logge_ )
Logger of this engine instance


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

    *SparkDataFrame*


**NOTE**: `persist` can only guarantee the persisted dataframe will be computed
for only once. However this doesn't mean the backend really breaks up the
execution dependency at the persisting point. Commonly, it doesn't cause
any issue, but if your execution graph is long, it may cause expected
problems for example, stack overflow.


#### register(df, name)
Register a virtual subclass of an ABC.

Returns the subclass, to allow usage as a class decorator.


* **Parameters**

    
    * **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


    * **name** (*str*) -- 



* **Return type**

    *SparkDataFrame*



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


#### sample(df, n=None, frac=None, replace=False, seed=None)
Sample dataframe by number of rows or by fraction


* **Parameters**

    
    * **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


    * **n** (*int** | **None*) -- number of rows to sample, one and only one of `n` and `frac`
    must be set


    * **frac** (*float** | **None*) -- fraction [0,1] to sample, one and only one of `n` and `frac`
    must be set


    * **replace** (*bool*) -- whether replacement is allowed. With replacement,
    there may be duplicated rows in the result, defaults to False


    * **seed** (*int** | **None*) -- seed for randomness, defaults to None



* **Returns**

    sampled dataframe



* **Return type**

    [DataFrame](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



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


#### _property_ spark_session(_: SparkSessio_ )

* **Returns**

    The wrapped spark session



* **Return type**

    [`pyspark.sql.SparkSession`](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.SparkSession.html#pyspark.sql.SparkSession)



#### subtract(df1, df2, distinct=True)
`df1 - df2`


* **Parameters**

    
    * **df1** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


    * **df2** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


    * **distinct** (*bool*) -- `true` for `EXCEPT` (== `EXCEPT DISTINCT`),
    `false` for `EXCEPT ALL`



* **Returns**

    the unioned dataframe



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Currently, the schema of `df1` and `df2` must be identical, or
an exception will be thrown.


#### take(df, n, presort, na_position='last', partition_spec=None)
Get the first n rows of a DataFrame per partition. If a presort is defined,
use the presort before applying take. presort overrides partition_spec.presort.
The Fugue implementation of the presort follows Pandas convention of specifying
NULLs first or NULLs last. This is different from the Spark and SQL convention
of NULLs as the smallest value.


* **Parameters**

    
    * **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


    * **n** (*int*) -- number of rows to return


    * **presort** (*str*) -- presort expression similar to partition presort


    * **na_position** (*str*) -- position of null values during the presort.
    can accept `first` or `last`


    * **partition_spec** ([*PartitionSpec*](../api/fugue.collections.md#fugue.collections.partition.PartitionSpec)* | **None*) -- PartitionSpec to apply the take operation



* **Returns**

    n rows of DataFrame per partition



* **Return type**

    [DataFrame](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### to_df(df, schema=None)
Convert a data structure to `SparkDataFrame`


* **Parameters**

    
    * **data** -- [`DataFrame`](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame),
    [`pyspark.sql.DataFrame`](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.html#pyspark.sql.DataFrame), [`pyspark.RDD`](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.RDD.html#pyspark.RDD),
    pandas DataFrame or list or iterable of arrays


    * **schema** (*Any** | **None*) -- Schema like object or [`pyspark.sql.types.StructType`](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.types.StructType.html#pyspark.sql.types.StructType)
    defaults to None.


    * **df** (*Any*) -- 



* **Returns**

    engine compatible dataframe



* **Return type**

    *SparkDataFrame*


**NOTE**: 
* if the input is already `SparkDataFrame`,
it should return itself


* For [`RDD`](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.RDD.html#pyspark.RDD), list or iterable of arrays,
`schema` must be specified


* When `schema` is not None, a potential type cast may happen to ensure
the dataframe's schema.


* all other methods in the engine can take arbitrary dataframes and
call this method to convert before doing anything


#### union(df1, df2, distinct=True)
Join two dataframes


* **Parameters**

    
    * **df1** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


    * **df2** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


    * **distinct** (*bool*) -- `true` for `UNION` (== `UNION DISTINCT`),
    `false` for `UNION ALL`



* **Returns**

    the unioned dataframe



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Currently, the schema of `df1` and `df2` must be identical, or
an exception will be thrown.


### _class_ fugue_spark.execution_engine.SparkMapEngine(execution_engine)
Bases: [`MapEngine`](../api/fugue.execution.md#fugue.execution.execution_engine.MapEngine)


* **Parameters**

    **execution_engine** ([*ExecutionEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)) -- 



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


### _class_ fugue_spark.execution_engine.SparkSQLEngine(execution_engine)
Bases: [`SQLEngine`](../api/fugue.execution.md#fugue.execution.execution_engine.SQLEngine)

[Spark SQL](https://spark.apache.org/sql/) execution implementation.


* **Parameters**

    **execution_engine** ([*ExecutionEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)) -- it must be `SparkExecutionEngine`



* **Raises**

    **ValueError** -- if the engine is not `SparkExecutionEngine`



#### _property_ dialect(_: str | Non_ )

#### _property_ execution_engine_constraint(_: Type[[ExecutionEngine](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)_ )
This defines the required ExecutionEngine type of this facet


* **Returns**

    a subtype of [`ExecutionEngine`](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)



#### _property_ is_distributed(_: boo_ )
Whether this engine is a distributed engine


#### select(dfs, statement)
Execute select statement on the sql engine.


* **Parameters**

    
    * **dfs** ([*DataFrames*](../api/fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- a collection of dataframes that must have keys


    * **statement** ([*StructuredRawSQL*](../api/fugue.collections.md#fugue.collections.sql.StructuredRawSQL)) -- the `SELECT` statement using the `dfs` keys as tables.



* **Returns**

    result of the `SELECT` statement



* **Return type**

    [*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: There can be tables that is not in `dfs`. For example you want to select
from hive without input DataFrames:

```python
>>> sql_engine.select(DataFrames(), "SELECT * FROM hive.a.table")
```

## fugue_spark.ibis_engine


### _class_ fugue_spark.ibis_engine.SparkIbisEngine(execution_engine)
Bases: [`IbisEngine`](../api_ibis/fugue_ibis.execution.md#fugue_ibis.execution.ibis_engine.IbisEngine)


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

## fugue_spark.registry
