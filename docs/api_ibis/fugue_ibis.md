# fugue_ibis


* [fugue_ibis.execution](fugue_ibis.execution.md)


* [fugue_ibis.execution.ibis_engine](fugue_ibis.execution.md#module-fugue_ibis.execution.ibis_engine)


* [`IbisEngine`](fugue_ibis.execution.md#fugue_ibis.execution.ibis_engine.IbisEngine)


* [`IbisEngine.is_distributed`](fugue_ibis.execution.md#fugue_ibis.execution.ibis_engine.IbisEngine.is_distributed)


* [`IbisEngine.select()`](fugue_ibis.execution.md#fugue_ibis.execution.ibis_engine.IbisEngine.select)


* [`IbisEngine.to_df()`](fugue_ibis.execution.md#fugue_ibis.execution.ibis_engine.IbisEngine.to_df)


* [fugue_ibis.execution.pandas_backend](fugue_ibis.execution.md#module-fugue_ibis.execution.pandas_backend)


* [`PandasIbisEngine`](fugue_ibis.execution.md#fugue_ibis.execution.pandas_backend.PandasIbisEngine)


* [`PandasIbisEngine.select()`](fugue_ibis.execution.md#fugue_ibis.execution.pandas_backend.PandasIbisEngine.select)


## fugue_ibis.dataframe


### _class_ fugue_ibis.dataframe.IbisDataFrame(table, schema=None)
Bases: [`DataFrame`](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)

DataFrame that wraps Ibis `Table`.


* **Parameters**


* **rel** -- `DuckDBPyRelation` object


* **table** (*Table*) -- 


* **schema** (*Any*) -- 



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



#### _property_ columns(_: List[str_ )
The column names of the dataframe


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


#### _property_ native(_: Tabl_ )
Ibis Table object


#### native_as_df()
The dataframe form of the native object this Dataset class wraps.
Dataframe form means the object contains schema information. For example
the native an ArrayDataFrame is a python array, it doesn't contain schema
information, and its `native_as_df` should be either a pandas dataframe
or an arrow dataframe.


* **Return type**

*Table*



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



#### _abstract_ to_sql()
Compile IbisTable to SQL


* **Return type**

str


## fugue_ibis.execution_engine


### _class_ fugue_ibis.execution_engine.IbisExecutionEngine(conf)
Bases: [`ExecutionEngine`](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)

The base execution engine using Ibis.
Please read [the ExecutionEngine Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/execution_engine.html) to understand this important Fugue concept


* **Parameters**

**conf** (*Any*) -- Parameters like object, read [the Fugue Configuration Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/useful_config.html) to learn Fugue specific options



#### broadcast(df)
Broadcast the dataframe to all workers for a distributed computing framework


* **Parameters**

**df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the input dataframe



* **Returns**

the broadcasted dataframe



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### create_default_map_engine()
Default MapEngine if user doesn't specify


* **Return type**

[*MapEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.MapEngine)



#### _abstract_ create_non_ibis_execution_engine()
Create the execution engine that handles operations beyond SQL


* **Return type**

[*ExecutionEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)



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



#### _property_ ibis_sql_engine(_: IbisSQLEngin_ )

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


#### is_non_ibis(ds)

* **Parameters**

**ds** (*Any*) -- 



* **Return type**

bool



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


#### _property_ log(_: Logge_ )
Logger of this engine instance


#### _property_ non_ibis_engine(_: [ExecutionEngine](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine_ )

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


### _class_ fugue_ibis.execution_engine.IbisMapEngine(execution_engine)
Bases: [`MapEngine`](../api/fugue.execution.md#fugue.execution.execution_engine.MapEngine)

IbisExecutionEngine's MapEngine, it is a wrapper of the map engine
of `non_ibis_engine()`


* **Parameters**

**execution_engine** ([*ExecutionEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)) -- the execution engine this map engine will run on



#### _property_ execution_engine_constraint(_: Type[[ExecutionEngine](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)_ )
This defines the required ExecutionEngine type of this facet


* **Returns**

a subtype of [`ExecutionEngine`](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)



#### _property_ is_distributed(_: boo_ )
Whether this engine is a distributed engine


#### map_bag(bag, map_func, partition_spec, on_init=None)
Apply a function to each partition after you partition the bag in a
specified way.


* **Parameters**


* **df** -- input dataframe


* **map_func** (*Callable**[**[*[*BagPartitionCursor*](../api/fugue.collections.md#fugue.collections.partition.BagPartitionCursor)*, *[*LocalBag*](../api/fugue.bag.md#fugue.bag.bag.LocalBag)*]**, *[*LocalBag*](../api/fugue.bag.md#fugue.bag.bag.LocalBag)*]*) -- the function to apply on every logical partition


* **partition_spec** ([*PartitionSpec*](../api/fugue.collections.md#fugue.collections.partition.PartitionSpec)) -- partition specification


* **on_init** (*Callable**[**[**int**, *[*Bag*](../api/fugue.bag.md#fugue.bag.bag.Bag)*]**, **Any**] **| **None*) -- callback function when the physical partition is initializaing,
defaults to None


* **bag** ([*Bag*](../api/fugue.bag.md#fugue.bag.bag.Bag)) -- 



* **Returns**

the bag after the map operation



* **Return type**

[*Bag*](../api/fugue.bag.md#fugue.bag.bag.Bag)



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


### _class_ fugue_ibis.execution_engine.IbisSQLEngine(execution_engine)
Bases: [`SQLEngine`](../api/fugue.execution.md#fugue.execution.execution_engine.SQLEngine)

Ibis SQL backend base implementation.


* **Parameters**

**execution_engine** ([*ExecutionEngine*](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)) -- the execution engine this sql engine will run on



#### _abstract property_ backend(_: BaseBacken_ )

#### distinct(df)

* **Parameters**

**df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### dropna(df, how='any', thresh=None, subset=None)

* **Parameters**


* **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **how** (*str*) -- 


* **thresh** (*int** | **None*) -- 


* **subset** (*List**[**str**] **| **None*) -- 



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### _abstract_ encode_column_name(name)

* **Parameters**

**name** (*str*) -- 



* **Return type**

str



#### fillna(df, value, subset=None)

* **Parameters**


* **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **value** (*Any*) -- 


* **subset** (*List**[**str**] **| **None*) -- 



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### get_temp_table_name()

* **Return type**

str



#### intersect(df1, df2, distinct=True)

* **Parameters**


* **df1** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **df2** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **distinct** (*bool*) -- 



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### join(df1, df2, how, on=None)

* **Parameters**


* **df1** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **df2** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **how** (*str*) -- 


* **on** (*List**[**str**] **| **None*) -- 



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### load_table(table, \*\*kwargs)
Load table as a dataframe


* **Parameters**


* **table** (*str*) -- the table name


* **kwargs** (*Any*) -- 



* **Returns**

an engine compatible dataframe



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### _abstract_ persist(df, lazy=False, \*\*kwargs)

* **Parameters**


* **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **lazy** (*bool*) -- 


* **kwargs** (*Any*) -- 



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### query_to_table(statement, dfs)

* **Parameters**


* **statement** (*str*) -- 


* **dfs** (*Dict**[**str**, **Any**]*) -- 



* **Return type**

*Table*



#### _abstract_ sample(df, n=None, frac=None, replace=False, seed=None)

* **Parameters**


* **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **n** (*int** | **None*) -- 


* **frac** (*float** | **None*) -- 


* **replace** (*bool*) -- 


* **seed** (*int** | **None*) -- 



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### save_table(df, table, mode='overwrite', partition_spec=None, \*\*kwargs)
Save the dataframe to a table


* **Parameters**


* **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the dataframe to save


* **table** (*str*) -- the table name


* **mode** (*str*) -- can accept `overwrite`, `error`,
defaults to "overwrite"


* **partition_spec** ([*PartitionSpec*](../api/fugue.collections.md#fugue.collections.partition.PartitionSpec)* | **None*) -- how to partition the dataframe before saving,
defaults None


* **kwargs** (*Any*) -- parameters to pass to the underlying framework



* **Return type**

None



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


#### subtract(df1, df2, distinct=True)

* **Parameters**


* **df1** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **df2** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **distinct** (*bool*) -- 



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### table_exists(table)
Whether the table exists


* **Parameters**

**table** (*str*) -- the table name



* **Returns**

whether the table exists



* **Return type**

bool



#### take(df, n, presort, na_position='last', partition_spec=None)

* **Parameters**


* **df** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **n** (*int*) -- 


* **presort** (*str*) -- 


* **na_position** (*str*) -- 


* **partition_spec** ([*PartitionSpec*](../api/fugue.collections.md#fugue.collections.partition.PartitionSpec)* | **None*) -- 



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### union(df1, df2, distinct=True)

* **Parameters**


* **df1** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **df2** ([*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- 


* **distinct** (*bool*) -- 



* **Return type**

[*DataFrame*](../api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


## fugue_ibis.extensions


### fugue_ibis.extensions.as_fugue(expr, ibis_engine=None)
Convert a lazy ibis object to Fugue workflow dataframe


* **Parameters**


* **expr** (*Table*) -- the actual instance should be LazyIbisObject


* **ibis_engine** (*Any** | **None*) -- 



* **Returns**

the Fugue workflow dataframe



* **Return type**

[*WorkflowDataFrame*](../api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame)


**NOTE**: The magic is that when importing `fugue_ibis`, the functions
`as_ibis` and `as_fugue` are added to the correspondent classes
so you can use them as if they are parts of the original classes.

This is an idea similar to patching. Ibis uses this programming model
a lot. Fugue provides this as an option.

**NOTE**: The returned object is not really a `TableExpr`, it's a 'super lazy'
object that will be translated into `TableExpr` at run time.
This is because to compile an ibis execution graph, the input schemas
must be known. However, in Fugue, this is not always true. For example
if the previous step is to pivot a table, then the output schema can be
known at runtime. So in order to be a part of Fugue, we need to be able to
construct ibis expressions before knowing the input schemas.


### fugue_ibis.extensions.as_ibis(df)
Convert the Fugue workflow dataframe to an ibis table for ibis
operations.


* **Parameters**

**df** ([*WorkflowDataFrame*](../api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame)) -- the Fugue workflow dataframe



* **Returns**

the object representing the ibis table



* **Return type**

*Table*


**NOTE**: The magic is that when importing `fugue_ibis`, the functions
`as_ibis` and `as_fugue` are added to the correspondent classes
so you can use them as if they are parts of the original classes.

This is an idea similar to patching. Ibis uses this programming model
a lot. Fugue provides this as an option.

**NOTE**: The returned object is not really a `TableExpr`, it's a 'super lazy'
object that will be translated into `TableExpr` at run time.
This is because to compile an ibis execution graph, the input schemas
must be known. However, in Fugue, this is not always true. For example
if the previous step is to pivot a table, then the output schema can be
known at runtime. So in order to be a part of Fugue, we need to be able to
construct ibis expressions before knowing the input schemas.


### fugue_ibis.extensions.run_ibis(ibis_func, ibis_engine=None, \*\*dfs)
Run an ibis workflow wrapped in `ibis_func`


* **Parameters**


* **ibis_func** (*Callable**[**[**BaseBackend**]**, **Table**]*) -- the function taking in an ibis backend, and returning
an Ibis TableExpr


* **ibis_engine** (*Any** | **None*) -- an object that together with [`ExecutionEngine`](../api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)
can determine [`IbisEngine`](fugue_ibis.execution.md#fugue_ibis.execution.ibis_engine.IbisEngine)
, defaults to None


* **dfs** ([*WorkflowDataFrame*](../api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame)) -- dataframes in the same workflow



* **Returns**

the output workflow dataframe



* **Return type**

[*WorkflowDataFrame*](../api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame)
