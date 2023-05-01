# fugue.execution

## fugue.execution.api


### fugue.execution.api.aggregate(df, partition_by=None, engine=None, engine_conf=None, as_fugue=False, as_local=False, \*\*agg_kwcols)
Aggregate on dataframe


* **Parameters**


* **df** (*AnyDataFrame*) -- the dataframe to aggregate on


* **partition_by** (*None** | **str** | **List**[**str**]*) -- partition key(s), defaults to None


* **agg_kwcols** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)) -- aggregation expressions


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the aggregated result as a dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.anti_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Left anti-join two dataframes.
This is a wrapper of `join()` with `how="anti"`


* **Parameters**


* **df1** (*AnyDataFrame*) -- the first dataframe


* **df2** (*AnyDataFrame*) -- the second dataframe


* **dfs** (*AnyDataFrame*) -- more dataframes to join


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the joined dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.assign(df, engine=None, engine_conf=None, as_fugue=False, as_local=False, \*\*columns)
Update existing columns with new values and add new columns


* **Parameters**


* **df** (*AnyDataFrame*) -- the dataframe to set columns


* **columns** (*Any*) -- column expressions


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the updated dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.broadcast(df, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Broadcast the dataframe to all workers for a distributed computing framework


* **Parameters**


* **df** (*AnyDataFrame*) -- an input dataframe that can be recognized by Fugue


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the broadcasted dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.clear_global_engine()
Remove the global exeuction engine (if set)


* **Return type**

None



### fugue.execution.api.cross_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Cross join two dataframes.
This is a wrapper of `join()` with `how="cross"`


* **Parameters**


* **df1** (*AnyDataFrame*) -- the first dataframe


* **df2** (*AnyDataFrame*) -- the second dataframe


* **dfs** (*AnyDataFrame*) -- more dataframes to join


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the joined dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.distinct(df, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Equivalent to `SELECT DISTINCT \* FROM df`


* **Parameters**


* **df** (*AnyDataFrame*) -- an input dataframe that can be recognized by Fugue


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the result with distinct rows



* **Return type**

*AnyDataFrame*



### fugue.execution.api.dropna(df, how='any', thresh=None, subset=None, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Drop NA recods from dataframe


* **Parameters**


* **df** (*AnyDataFrame*) -- an input dataframe that can be recognized by Fugue


* **how** (*str*) -- 'any' or 'all'. 'any' drops rows that contain any nulls.
'all' drops rows that contain all nulls.


* **thresh** (*int** | **None*) -- int, drops rows that have less than thresh non-null values


* **subset** (*List**[**str**] **| **None*) -- list of columns to operate on


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

DataFrame with NA records dropped



* **Return type**

*AnyDataFrame*



### fugue.execution.api.engine_context(engine=None, engine_conf=None, infer_by=None)
Make an execution engine and set it as the context engine. This function
is thread safe and async safe.


* **Parameters**


* **engine** (*AnyExecutionEngine*) -- an engine like object, defaults to None


* **engine_conf** (*Any*) -- the configs for the engine, defaults to None


* **infer_by** (*List**[**Any**] **| **None*) -- a list of objects to infer the engine, defaults to None



* **Return type**

*Iterator*[*ExecutionEngine*]


**NOTE**: For more details, please read
`make_execution_engine()`


### fugue.execution.api.fillna(df, value, subset=None, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Fill `NULL`, `NAN`, `NAT` values in a dataframe


* **Parameters**


* **df** (*AnyDataFrame*) -- an input dataframe that can be recognized by Fugue


* **value** (*Any*) -- if scalar, fills all columns with same value.
if dictionary, fills NA using the keys as column names and the
values as the replacement values.


* **subset** (*List**[**str**] **| **None*) -- list of columns to operate on. ignored if value is
a dictionary


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

DataFrame with NA records filled



* **Return type**

*AnyDataFrame*



### fugue.execution.api.filter(df, condition, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Filter rows by the given condition


* **Parameters**


* **df** (*AnyDataFrame*) -- the dataframe to be filtered


* **condition** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)) -- (boolean) column expression


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the filtered dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.full_outer_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Full outer join two dataframes.
This is a wrapper of `join()` with `how="full_outer"`


* **Parameters**


* **df1** (*AnyDataFrame*) -- the first dataframe


* **df2** (*AnyDataFrame*) -- the second dataframe


* **dfs** (*AnyDataFrame*) -- more dataframes to join


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the joined dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.get_context_engine()
Get the execution engine in the current context. Regarding the order of the logic
please read `make_execution_engine()`


* **Return type**

*ExecutionEngine*



### fugue.execution.api.get_current_conf()
Get the current configs either in the defined engine context or by
the global configs (see [`register_global_conf()`](fugue.md#fugue.constants.register_global_conf))


* **Return type**

[*ParamDict*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict)



### fugue.execution.api.get_current_parallelism()
Get the current parallelism of the current global/context engine.
If there is no global/context engine, it creates a temporary engine
using `make_execution_engine()` to get
its parallelism


* **Returns**

the size of the parallelism



* **Return type**

int



### fugue.execution.api.inner_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Inner join two dataframes.
This is a wrapper of `join()` with `how="inner"`


* **Parameters**


* **df1** (*AnyDataFrame*) -- the first dataframe


* **df2** (*AnyDataFrame*) -- the second dataframe


* **dfs** (*AnyDataFrame*) -- more dataframes to join


* **how** -- can accept `semi`, `left_semi`, `anti`, `left_anti`,
`inner`, `left_outer`, `right_outer`, `full_outer`, `cross`


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the joined dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.intersect(df1, df2, \*dfs, distinct=True, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Intersect `df1` and `df2`


* **Parameters**


* **df1** (*AnyDataFrame*) -- the first dataframe


* **df2** (*AnyDataFrame*) -- the second dataframe


* **dfs** (*AnyDataFrame*) -- more dataframes to intersect with


* **distinct** (*bool*) -- `true` for `INTERSECT` (== `INTERSECT DISTINCT`),
`false` for `INTERSECT ALL`


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the unioned dataframe



* **Return type**

*AnyDataFrame*


**NOTE**: Currently, the schema of `df1` and `df2` must be identical, or
an exception will be thrown.


### fugue.execution.api.join(df1, df2, \*dfs, how, on=None, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Join two dataframes


* **Parameters**


* **df1** (*AnyDataFrame*) -- the first dataframe


* **df2** (*AnyDataFrame*) -- the second dataframe


* **dfs** (*AnyDataFrame*) -- more dataframes to join


* **how** (*str*) -- can accept `semi`, `left_semi`, `anti`, `left_anti`,
`inner`, `left_outer`, `right_outer`, `full_outer`, `cross`


* **on** (*List**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys.


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the joined dataframe



* **Return type**

*AnyDataFrame*


**NOTE**: Please read [`get_join_schemas()`](fugue.dataframe.md#fugue.dataframe.utils.get_join_schemas)


### fugue.execution.api.left_outer_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Left outer join two dataframes.
This is a wrapper of `join()` with `how="left_outer"`


* **Parameters**


* **df1** (*AnyDataFrame*) -- the first dataframe


* **df2** (*AnyDataFrame*) -- the second dataframe


* **dfs** (*AnyDataFrame*) -- more dataframes to join


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the joined dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.load(path, format_hint=None, columns=None, engine=None, engine_conf=None, as_fugue=False, as_local=False, \*\*kwargs)
Load dataframe from persistent storage


* **Parameters**


* **path** (*str** | **List**[**str**]*) -- the path to the dataframe


* **format_hint** (*Any** | **None*) -- can accept `parquet`, `csv`, `json`,
defaults to None, meaning to infer


* **columns** (*Any** | **None*) -- list of columns or a Schema like object, defaults to None


* **kwargs** (*Any*) -- parameters to pass to the underlying framework


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

an engine compatible dataframe



* **Return type**

*AnyDataFrame*


For more details and examples, read Zip & Comap.


### fugue.execution.api.persist(df, lazy=False, engine=None, engine_conf=None, as_fugue=False, as_local=False, \*\*kwargs)
Force materializing and caching the dataframe


* **Parameters**


* **df** (*AnyDataFrame*) -- an input dataframe that can be recognized by Fugue


* **lazy** (*bool*) -- `True`: first usage of the output will trigger persisting
to happen; `False` (eager): persist is forced to happend immediately.
Default to `False`


* **kwargs** (*Any*) -- parameter to pass to the underlying persist implementation


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the persisted dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.repartition(df, partition, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Partition the input dataframe using `partition`.


* **Parameters**


* **df** (*AnyDataFrame*) -- an input dataframe that can be recognized by Fugue


* **partition** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)) -- how you want to partition the dataframe


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the repartitioned dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.right_outer_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Right outer join two dataframes.
This is a wrapper of `join()` with `how="right_outer"`


* **Parameters**


* **df1** (*AnyDataFrame*) -- the first dataframe


* **df2** (*AnyDataFrame*) -- the second dataframe


* **dfs** (*AnyDataFrame*) -- more dataframes to join


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the joined dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.run_engine_function(func, engine=None, engine_conf=None, as_fugue=False, as_local=False, infer_by=None)
Run a lambda function based on the engine provided


* **Parameters**


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False


* **infer_by** (*List**[**Any**] **| **None*) -- a list of objects to infer the engine, defaults to None


* **func** (*Callable**[**[**ExecutionEngine**]**, **Any**]*) -- 



* **Returns**

None or a Fugue [`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame) if
`as_fugue` is True, otherwise if `infer_by` contains any
Fugue DataFrame, then return the Fugue DataFrame, otherwise
it returns the underlying dataframe using
[`native_as_df()`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.native_as_df)



* **Return type**

*Any*


**NOTE**: This function is for deveopment use. Users should not need it.


### fugue.execution.api.sample(df, n=None, frac=None, replace=False, seed=None, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Sample dataframe by number of rows or by fraction


* **Parameters**


* **df** (*AnyDataFrame*) -- an input dataframe that can be recognized by Fugue


* **n** (*int** | **None*) -- number of rows to sample, one and only one of `n` and `frac`
must be set


* **frac** (*float** | **None*) -- fraction [0,1] to sample, one and only one of `n` and `frac`
must be set


* **replace** (*bool*) -- whether replacement is allowed. With replacement,
there may be duplicated rows in the result, defaults to False


* **seed** (*int** | **None*) -- seed for randomness, defaults to None


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the sampled dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.save(df, path, format_hint=None, mode='overwrite', partition=None, force_single=False, engine=None, engine_conf=None, \*\*kwargs)
Save dataframe to a persistent storage


* **Parameters**


* **df** (*AnyDataFrame*) -- an input dataframe that can be recognized by Fugue


* **path** (*str*) -- output path


* **format_hint** (*Any** | **None*) -- can accept `parquet`, `csv`, `json`,
defaults to None, meaning to infer


* **mode** (*str*) -- can accept `overwrite`, `append`, `error`,
defaults to "overwrite"


* **partition** (*Any** | **None*) -- how to partition the dataframe before saving,
defaults to None


* **force_single** (*bool*) -- force the output as a single file, defaults to False


* **kwargs** (*Any*) -- parameters to pass to the underlying framework


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None



* **Return type**

None


For more details and examples, read Load & Save.


### fugue.execution.api.select(df, \*columns, where=None, having=None, distinct=False, engine=None, engine_conf=None, as_fugue=False, as_local=False)
The functional interface for SQL select statement


* **Parameters**


* **df** (*AnyDataFrame*) -- the dataframe to be operated on


* **columns** (*str** | *[*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)) -- column expressions, for strings they will represent
the column names


* **where** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)* | **None*) -- `WHERE` condition expression, defaults to None


* **having** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)* | **None*) -- `having` condition expression, defaults to None. It
is used when `cols` contains aggregation columns, defaults to None


* **distinct** (*bool*) -- whether to return distinct result, defaults to False


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the select result as a dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.semi_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Left semi-join two dataframes.
This is a wrapper of `join()` with `how="semi"`


* **Parameters**


* **df1** (*AnyDataFrame*) -- the first dataframe


* **df2** (*AnyDataFrame*) -- the second dataframe


* **dfs** (*AnyDataFrame*) -- more dataframes to join


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the joined dataframe



* **Return type**

*AnyDataFrame*



### fugue.execution.api.set_global_engine(engine, engine_conf=None)
Make an execution engine and set it as the global execution engine


* **Parameters**


* **engine** (*AnyExecutionEngine*) -- an engine like object, must not be None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None



* **Return type**

*ExecutionEngine*


**NOTE**: For more details, please read
`make_execution_engine()` and
`set_global()`


### fugue.execution.api.subtract(df1, df2, \*dfs, distinct=True, engine=None, engine_conf=None, as_fugue=False, as_local=False)
`df1 - df2`


* **Parameters**


* **df1** (*AnyDataFrame*) -- the first dataframe


* **df2** (*AnyDataFrame*) -- the second dataframe


* **dfs** (*AnyDataFrame*) -- more dataframes to subtract


* **distinct** (*bool*) -- `true` for `EXCEPT` (== `EXCEPT DISTINCT`),
`false` for `EXCEPT ALL`


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the unioned dataframe



* **Return type**

*AnyDataFrame*


**NOTE**: Currently, the schema of all datafrmes must be identical, or
an exception will be thrown.


### fugue.execution.api.take(df, n, presort, na_position='last', partition=None, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Get the first n rows of a DataFrame per partition. If a presort is defined,
use the presort before applying take. presort overrides partition_spec.presort.
The Fugue implementation of the presort follows Pandas convention of specifying
NULLs first or NULLs last. This is different from the Spark and SQL convention
of NULLs as the smallest value.


* **Parameters**


* **df** (*AnyDataFrame*) -- an input dataframe that can be recognized by Fugue


* **n** (*int*) -- number of rows to return


* **presort** (*str*) -- presort expression similar to partition presort


* **na_position** (*str*) -- position of null values during the presort.
can accept `first` or `last`


* **partition** (*Any** | **None*) -- PartitionSpec to apply the take operation,
defaults to None


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

n rows of DataFrame per partition



* **Return type**

*AnyDataFrame*



### fugue.execution.api.union(df1, df2, \*dfs, distinct=True, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Join two dataframes


* **Parameters**


* **df1** (*AnyDataFrame*) -- the first dataframe


* **df2** (*AnyDataFrame*) -- the second dataframe


* **dfs** (*AnyDataFrame*) -- more dataframes to union


* **distinct** (*bool*) -- `true` for `UNION` (== `UNION DISTINCT`),
`false` for `UNION ALL`


* **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


* **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


* **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


* **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

the unioned dataframe



* **Return type**

*AnyDataFrame*


**NOTE**: Currently, the schema of all dataframes must be identical, or
an exception will be thrown.

## fugue.execution.execution_engine


### _class_ fugue.execution.execution_engine.EngineFacet(execution_engine)
Bases: `FugueEngineBase`

The base class for different factes of the execution engines.


* **Parameters**

**execution_engine** (*ExecutionEngine*) -- the execution engine this sql engine will run on



#### _property_ conf(_: [ParamDict](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict_ )
All configurations of this engine instance.

**NOTE**: It can contain more than you providec, for example
in [`SparkExecutionEngine`](../api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine),
the Spark session can bring in more config, they are all accessible
using this property.


#### _property_ execution_engine(_: ExecutionEngin_ )
the execution engine this sql engine will run on


#### _property_ execution_engine_constraint(_: Type[ExecutionEngine_ )
This defines the required ExecutionEngine type of this facet


* **Returns**

a subtype of `ExecutionEngine`



#### _property_ log(_: Logge_ )
Logger of this engine instance


#### to_df(df, schema=None)
Convert a data structure to this engine compatible DataFrame


* **Parameters**


* **data** -- [`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame),
pandas DataFramme or list or iterable of arrays or others that
is supported by certain engine implementation


* **schema** (*Any** | **None*) -- Schema like object, defaults to None


* **df** (*AnyDataFrame*) -- 



* **Returns**

engine compatible dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: There are certain conventions to follow for a new implementation:


* if the input is already in compatible dataframe type, it should return
itself


* all other methods in the engine interface should take arbitrary
dataframes and call this method to convert before doing anything


### _class_ fugue.execution.execution_engine.ExecutionEngine(conf)
Bases: `FugueEngineBase`

The abstract base class for execution engines.
It is the layer that unifies core concepts of distributed computing,
and separates the underlying computing frameworks from user's higher level logic.

Please read [the ExecutionEngine Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/execution_engine.html)
to understand this most important Fugue concept


* **Parameters**

**conf** (*Any*) -- dict-like config, read
[this](https://fugue-tutorials.readthedocs.io/tutorials/advanced/useful_config.html)
to learn Fugue specific options



#### aggregate(df, partition_spec, agg_cols)
Aggregate on dataframe


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the dataframe to aggregate on


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)* | **None*) -- PartitionSpec to specify partition keys


* **agg_cols** (*List**[*[*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)*]*) -- aggregation expressions



* **Returns**

the aggregated result as a dataframe



#### as_context()
Set this execution engine as the context engine. This function
is thread safe and async safe.


* **Return type**

*Iterator*[*ExecutionEngine*]



#### assign(df, columns)
Update existing columns with new values and add new columns


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the dataframe to set columns


* **columns** (*List**[*[*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)*]*) -- column expressions



* **Returns**

the updated dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### _abstract_ broadcast(df)
Broadcast the dataframe to all workers for a distributed computing framework


* **Parameters**

**df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the input dataframe



* **Returns**

the broadcasted dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### comap(df, map_func, output_schema, partition_spec, on_init=None)
Apply a function to each zipped partition on the zipped dataframe.


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- input dataframe, it must be a zipped dataframe (it has to be a
dataframe output from `zip()` or `zip_all()`)


* **map_func** (*Callable**[**[*[*PartitionCursor*](fugue.collections.md#fugue.collections.partition.PartitionCursor)*, *[*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)*]**, *[*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)*]*) -- the function to apply on every zipped partition


* **output_schema** (*Any*) -- Schema like object that can't be None.
Please also understand why we need this


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)) -- partition specification for processing the zipped
zipped dataframe.


* **on_init** (*Callable**[**[**int**, *[*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)*]**, **Any**] **| **None*) -- callback function when the physical partition is initializaing,
defaults to None



* **Returns**

the dataframe after the comap operation


**NOTE**: 
* The input of this method must be an output of `zip()` or
`zip_all()`


* The `partition_spec` here is NOT related with how you zipped the
dataframe and however you set it, will only affect the processing speed,
actually the partition keys will be overriden to the zipped dataframe
partition keys. You may use it in this way to improve the efficiency:
`PartitionSpec(algo="even", num="ROWCOUNT")`,
this tells the execution engine to put each zipped partition into a
physical partition so it can achieve the best possible load balance.


* If input dataframe has keys, the dataframes you get in `map_func` and
`on_init` will have keys, otherwise you will get list-like dataframes


* on_init function will get a DataFrames object that has the same structure,
but has all empty dataframes, you can use the schemas but not the data.


#### _property_ conf(_: [ParamDict](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict_ )
All configurations of this engine instance.

**NOTE**: It can contain more than you providec, for example
in [`SparkExecutionEngine`](../api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine),
the Spark session can bring in more config, they are all accessible
using this property.


#### convert_yield_dataframe(df, as_local)
Convert a yield dataframe to a dataframe that can be used after this
execution engine stops.


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


* **as_local** (*bool*) -- whether yield a local dataframe



* **Returns**

another DataFrame that can be used after this execution engine stops



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: By default, the output dataframe is the input dataframe. But it should be
overridden if when an engine stops and the input dataframe will become
invalid.

For example, if you custom a spark engine where you start and stop the spark
session in this engine's `start_engine()` and `stop_engine()`,
then the spark dataframe will be invalid. So you may consider converting
it to a local dataframe so it can still exist after the engine stops.


#### _abstract_ create_default_map_engine()
Default MapEngine if user doesn't specify


* **Return type**

*MapEngine*



#### _abstract_ create_default_sql_engine()
Default SQLEngine if user doesn't specify


* **Return type**

*SQLEngine*



#### _abstract_ distinct(df)
Equivalent to `SELECT DISTINCT \* FROM df`


* **Parameters**

**df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- dataframe



* **Returns**

[description]



* **Return type**

[DataFrame](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### _abstract_ dropna(df, how='any', thresh=None, subset=None)
Drop NA recods from dataframe


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


* **how** (*str*) -- 'any' or 'all'. 'any' drops rows that contain any nulls.
'all' drops rows that contain all nulls.


* **thresh** (*int** | **None*) -- int, drops rows that have less than thresh non-null values


* **subset** (*List**[**str**] **| **None*) -- list of columns to operate on



* **Returns**

DataFrame with NA records dropped



* **Return type**

[DataFrame](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### _abstract_ fillna(df, value, subset=None)
Fill `NULL`, `NAN`, `NAT` values in a dataframe


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


* **value** (*Any*) -- if scalar, fills all columns with same value.
if dictionary, fills NA using the keys as column names and the
values as the replacement values.


* **subset** (*List**[**str**] **| **None*) -- list of columns to operate on. ignored if value is
a dictionary



* **Returns**

DataFrame with NA records filled



* **Return type**

[DataFrame](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### filter(df, condition)
Filter rows by the given condition


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the dataframe to be filtered


* **condition** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)) -- (boolean) column expression



* **Returns**

the filtered dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### _abstract property_ fs(_: [FileSystem](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.fs.FileSystem_ )
File system of this engine instance


#### _abstract_ get_current_parallelism()
Get the current number of parallelism of this engine


* **Return type**

int



#### _property_ in_context(_: boo_ )
Whether this engine is being used as a context engine


#### _abstract_ intersect(df1, df2, distinct=True)
Intersect `df1` and `df2`


* **Parameters**


* **df1** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


* **df2** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


* **distinct** (*bool*) -- `true` for `INTERSECT` (== `INTERSECT DISTINCT`),
`false` for `INTERSECT ALL`



* **Returns**

the unioned dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Currently, the schema of `df1` and `df2` must be identical, or
an exception will be thrown.


#### _property_ is_global(_: boo_ )
Whether this engine is being used as THE global engine


#### _abstract_ join(df1, df2, how, on=None)
Join two dataframes


* **Parameters**


* **df1** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


* **df2** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


* **how** (*str*) -- can accept `semi`, `left_semi`, `anti`, `left_anti`,
`inner`, `left_outer`, `right_outer`, `full_outer`, `cross`


* **on** (*List**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys.



* **Returns**

the joined dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Please read [`get_join_schemas()`](fugue.dataframe.md#fugue.dataframe.utils.get_join_schemas)


#### _abstract_ load_df(path, format_hint=None, columns=None, \*\*kwargs)
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

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


For more details and examples, read Zip & Comap.


#### load_yielded(df)
Load yielded dataframe


* **Parameters**

**df** ([*Yielded*](fugue.collections.md#fugue.collections.yielded.Yielded)) -- the yielded dataframe



* **Returns**

an engine compatible dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### _property_ map_engine(_: MapEngin_ )
The `MapEngine` currently used by this execution engine.
You should use `set_map_engine()` to set a new MapEngine
instance. If not set, the default is `create_default_map_engine()`


#### on_enter_context()
The event hook when calling `set_blobal_engine()` or
[`engine_context()`](../top_api.md#fugue.api.engine_context), defaults to no operation


* **Return type**

None



#### on_exit_context()
The event hook when calling `clear_blobal_engine()` or
exiting from [`engine_context()`](../top_api.md#fugue.api.engine_context), defaults to no operation


* **Return type**

None



#### _abstract_ persist(df, lazy=False, \*\*kwargs)
Force materializing and caching the dataframe


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the input dataframe


* **lazy** (*bool*) -- `True`: first usage of the output will trigger persisting
to happen; `False` (eager): persist is forced to happend immediately.
Default to `False`


* **kwargs** (*Any*) -- parameter to pass to the underlying persist implementation



* **Returns**

the persisted dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: `persist` can only guarantee the persisted dataframe will be computed
for only once. However this doesn't mean the backend really breaks up the
execution dependency at the persisting point. Commonly, it doesn't cause
any issue, but if your execution graph is long, it may cause expected
problems for example, stack overflow.


#### _abstract_ repartition(df, partition_spec)
Partition the input dataframe using `partition_spec`.


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- input dataframe


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)) -- how you want to partition the dataframe



* **Returns**

repartitioned dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Before implementing please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)


#### _abstract_ sample(df, n=None, frac=None, replace=False, seed=None)
Sample dataframe by number of rows or by fraction


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


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

[DataFrame](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### _abstract_ save_df(df, path, format_hint=None, mode='overwrite', partition_spec=None, force_single=False, \*\*kwargs)
Save dataframe to a persistent storage


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- input dataframe


* **path** (*str*) -- output path


* **format_hint** (*Any** | **None*) -- can accept `parquet`, `csv`, `json`,
defaults to None, meaning to infer


* **mode** (*str*) -- can accept `overwrite`, `append`, `error`,
defaults to "overwrite"


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)* | **None*) -- how to partition the dataframe before saving,
defaults to empty


* **force_single** (*bool*) -- force the output as a single file, defaults to False


* **kwargs** (*Any*) -- parameters to pass to the underlying framework



* **Return type**

None


For more details and examples, read Load & Save.


#### select(df, cols, where=None, having=None)
The functional interface for SQL select statement


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the dataframe to be operated on


* **cols** ([*SelectColumns*](fugue.column.md#fugue.column.sql.SelectColumns)) -- column expressions


* **where** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)* | **None*) -- `WHERE` condition expression, defaults to None


* **having** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)* | **None*) -- `having` condition expression, defaults to None. It
is used when `cols` contains aggregation columns, defaults to None



* **Returns**

the select result as a dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### set_global()
Set this execution engine to be the global execution engine.

**NOTE**: Global engine is also considered as a context engine, so
`in_context()` will also become true
for the global engine.


* **Return type**

*ExecutionEngine*



#### set_sql_engine(engine)
Set `SQLEngine` for this execution engine.
If not set, the default is `create_default_sql_engine()`


* **Parameters**

**engine** (*SQLEngine*) -- `SQLEngine` instance



* **Return type**

None



#### _property_ sql_engine(_: SQLEngin_ )
The `SQLEngine` currently used by this execution engine.
You should use `set_sql_engine()` to set a new SQLEngine
instance. If not set, the default is `create_default_sql_engine()`


#### stop()
Stop this execution engine, do not override
You should customize `stop_engine()` if necessary. This function
ensures `stop_engine()` to be called only once

**NOTE**: Once the engine is stopped it should not be used again


* **Return type**

None



#### stop_engine()
Custom logic to stop the execution engine, defaults to no operation


* **Return type**

None



#### _abstract_ subtract(df1, df2, distinct=True)
`df1 - df2`


* **Parameters**


* **df1** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


* **df2** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


* **distinct** (*bool*) -- `true` for `EXCEPT` (== `EXCEPT DISTINCT`),
`false` for `EXCEPT ALL`



* **Returns**

the unioned dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Currently, the schema of `df1` and `df2` must be identical, or
an exception will be thrown.


#### _abstract_ take(df, n, presort, na_position='last', partition_spec=None)
Get the first n rows of a DataFrame per partition. If a presort is defined,
use the presort before applying take. presort overrides partition_spec.presort.
The Fugue implementation of the presort follows Pandas convention of specifying
NULLs first or NULLs last. This is different from the Spark and SQL convention
of NULLs as the smallest value.


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


* **n** (*int*) -- number of rows to return


* **presort** (*str*) -- presort expression similar to partition presort


* **na_position** (*str*) -- position of null values during the presort.
can accept `first` or `last`


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)* | **None*) -- PartitionSpec to apply the take operation



* **Returns**

n rows of DataFrame per partition



* **Return type**

[DataFrame](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### _abstract_ union(df1, df2, distinct=True)
Join two dataframes


* **Parameters**


* **df1** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


* **df2** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


* **distinct** (*bool*) -- `true` for `UNION` (== `UNION DISTINCT`),
`false` for `UNION ALL`



* **Returns**

the unioned dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Currently, the schema of `df1` and `df2` must be identical, or
an exception will be thrown.


#### zip(df1, df2, how='inner', partition_spec=None, temp_path=None, to_file_threshold=-1, df1_name=None, df2_name=None)
Partition the two dataframes in the same way with `partition_spec` and
zip the partitions together on the partition keys.


* **Parameters**


* **df1** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


* **df2** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


* **how** (*str*) -- can accept `inner`, `left_outer`, `right_outer`,
`full_outer`, `cross`, defaults to `inner`


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)*, **optional*) -- partition spec to partition each dataframe,
defaults to empty.


* **temp_path** (*str** | **None*) -- file path to store the data (used only if the serialized data
is larger than `to_file_threshold`), defaults to None


* **to_file_threshold** (*Any*) -- file byte size threshold, defaults to -1


* **df1_name** (*str** | **None*) -- df1's name in the zipped dataframe, defaults to None


* **df2_name** (*str** | **None*) -- df2's name in the zipped dataframe, defaults to None



* **Returns**

a zipped dataframe, the metadata of the
dataframe will indicate it's zipped


**NOTE**: 
* Different from join, `df1` and `df2` can have common columns that you
will not use as partition keys.


* If `on` is not specified it will also use the common columns of the two
dataframes (if it's not a cross zip)


* For non-cross zip, the two dataframes must have common columns, or error
will be thrown


#### zip_all(dfs, how='inner', partition_spec=None, temp_path=None, to_file_threshold=-1)
Zip multiple dataframes together with given partition
specifications.


* **Parameters**


* **dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- DataFrames like object


* **how** (*str*) -- can accept `inner`, `left_outer`, `right_outer`,
`full_outer`, `cross`, defaults to `inner`


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)* | **None*) -- Partition like object, defaults to empty.


* **temp_path** (*str** | **None*) -- file path to store the data (used only if the serialized data
is larger than `to_file_threshold`), defaults to None


* **to_file_threshold** (*Any*) -- file byte size threshold, defaults to -1



* **Returns**

a zipped dataframe, the metadata of the
dataframe will indicated it's zipped



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: 
* Please also read `zip()`


* If `dfs` is dict like, the zipped dataframe will be dict like,
If `dfs` is list like, the zipped dataframe will be list like


* It's fine to contain only one dataframe in `dfs`


### _class_ fugue.execution.execution_engine.ExecutionEngineParam(param)
Bases: `AnnotatedParam`


* **Parameters**

**param** (*Parameter** | **None*) -- 



#### to_input(engine)

* **Parameters**

**engine** (*Any*) -- 



* **Return type**

*Any*



### _class_ fugue.execution.execution_engine.FugueEngineBase()
Bases: `ABC`


#### _abstract property_ conf(_: [ParamDict](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict_ )
All configurations of this engine instance.

**NOTE**: It can contain more than you providec, for example
in [`SparkExecutionEngine`](../api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine),
the Spark session can bring in more config, they are all accessible
using this property.


#### _abstract property_ is_distributed(_: boo_ )
Whether this engine is a distributed engine


#### _abstract property_ log(_: Logge_ )
Logger of this engine instance


#### _abstract_ to_df(df, schema=None)
Convert a data structure to this engine compatible DataFrame


* **Parameters**


* **data** -- [`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame),
pandas DataFramme or list or iterable of arrays or others that
is supported by certain engine implementation


* **schema** (*Any** | **None*) -- Schema like object, defaults to None


* **df** (*AnyDataFrame*) -- 



* **Returns**

engine compatible dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: There are certain conventions to follow for a new implementation:


* if the input is already in compatible dataframe type, it should return
itself


* all other methods in the engine interface should take arbitrary
dataframes and call this method to convert before doing anything


### _class_ fugue.execution.execution_engine.MapEngine(execution_engine)
Bases: `EngineFacet`

The abstract base class for different map operation implementations.


* **Parameters**

**execution_engine** (*ExecutionEngine*) -- the execution engine this sql engine will run on



#### map_bag(bag, map_func, partition_spec, on_init=None)
Apply a function to each partition after you partition the bag in a
specified way.


* **Parameters**


* **df** -- input dataframe


* **map_func** (*Callable**[**[*[*BagPartitionCursor*](fugue.collections.md#fugue.collections.partition.BagPartitionCursor)*, *[*LocalBag*](fugue.bag.md#fugue.bag.bag.LocalBag)*]**, *[*LocalBag*](fugue.bag.md#fugue.bag.bag.LocalBag)*]*) -- the function to apply on every logical partition


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)) -- partition specification


* **on_init** (*Callable**[**[**int**, *[*Bag*](fugue.bag.md#fugue.bag.bag.Bag)*]**, **Any**] **| **None*) -- callback function when the physical partition is initializaing,
defaults to None


* **bag** ([*Bag*](fugue.bag.md#fugue.bag.bag.Bag)) -- 



* **Returns**

the bag after the map operation



* **Return type**

[*Bag*](fugue.bag.md#fugue.bag.bag.Bag)



#### _abstract_ map_dataframe(df, map_func, output_schema, partition_spec, on_init=None)
Apply a function to each partition after you partition the dataframe in a
specified way.


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- input dataframe


* **map_func** (*Callable**[**[*[*PartitionCursor*](fugue.collections.md#fugue.collections.partition.PartitionCursor)*, *[*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)*]**, *[*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)*]*) -- the function to apply on every logical partition


* **output_schema** (*Any*) -- Schema like object that can't be None.
Please also understand why we need this


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)) -- partition specification


* **on_init** (*Callable**[**[**int**, *[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)*]**, **Any**] **| **None*) -- callback function when the physical partition is initializaing,
defaults to None



* **Returns**

the dataframe after the map operation



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Before implementing, you must read
this
to understand what map is used for and how it should work.


### _class_ fugue.execution.execution_engine.SQLEngine(execution_engine)
Bases: `EngineFacet`

The abstract base class for different SQL execution implementations. Please read
this
to understand the concept


* **Parameters**

**execution_engine** (*ExecutionEngine*) -- the execution engine this sql engine will run on



#### _property_ dialect(_: str | Non_ )

#### encode(dfs, statement)

* **Parameters**


* **dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- 


* **statement** ([*StructuredRawSQL*](fugue.collections.md#fugue.collections.sql.StructuredRawSQL)) -- 



* **Return type**

*Tuple*[[*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames), str]



#### encode_name(name)

* **Parameters**

**name** (*str*) -- 



* **Return type**

str



#### load_table(table, \*\*kwargs)
Load table as a dataframe


* **Parameters**


* **table** (*str*) -- the table name


* **kwargs** (*Any*) -- 



* **Returns**

an engine compatible dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### save_table(df, table, mode='overwrite', partition_spec=None, \*\*kwargs)
Save the dataframe to a table


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the dataframe to save


* **table** (*str*) -- the table name


* **mode** (*str*) -- can accept `overwrite`, `error`,
defaults to "overwrite"


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)* | **None*) -- how to partition the dataframe before saving,
defaults None


* **kwargs** (*Any*) -- parameters to pass to the underlying framework



* **Return type**

None



#### _abstract_ select(dfs, statement)
Execute select statement on the sql engine.


* **Parameters**


* **dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- a collection of dataframes that must have keys


* **statement** ([*StructuredRawSQL*](fugue.collections.md#fugue.collections.sql.StructuredRawSQL)) -- the `SELECT` statement using the `dfs` keys as tables.



* **Returns**

result of the `SELECT` statement



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: There can be tables that is not in `dfs`. For example you want to select
from hive without input DataFrames:

```python
>>> sql_engine.select(DataFrames(), "SELECT * FROM hive.a.table")
```


#### table_exists(table)
Whether the table exists


* **Parameters**

**table** (*str*) -- the table name



* **Returns**

whether the table exists



* **Return type**

bool


## fugue.execution.factory


### fugue.execution.factory.is_pandas_or(objs, obj_type)
Check whether the input contains at least one `obj_type` object and the
rest are Pandas DataFrames. This function is a utility function for extending
`infer_execution_engine()`


* **Parameters**


* **objs** (*List**[**Any**]*) -- the list of objects to check


* **obj_type** (*Any*) -- 



* **Returns**

whether all objs are of type `obj_type` or pandas DataFrame and at
least one is of type `obj_type`



* **Return type**

bool



### fugue.execution.factory.make_execution_engine(engine=None, conf=None, infer_by=None, \*\*kwargs)
Create `ExecutionEngine`
with specified `engine`


* **Parameters**


* **engine** (*Any** | **None*) -- it can be empty string or null (use the default execution
engine), a string (use the registered execution engine), an
`ExecutionEngine` type, or
the `ExecutionEngine` instance
, or a tuple of two values where the first value represents execution
engine and the second value represents the sql engine (you can use `None`
for either of them to use the default one), defaults to None


* **conf** (*Any** | **None*) -- Parameters like object, defaults to None


* **infer_by** (*List**[**Any**] **| **None*) -- List of objects that can be used to infer the execution
engine using `infer_execution_engine()`


* **kwargs** (*Any*) -- additional parameters to initialize the execution engine



* **Returns**

the `ExecutionEngine`
instance



* **Return type**

*ExecutionEngine*


**NOTE**: This function finds/constructs the engine in the following order:


* If `engine` is None, it first try to see if there is any defined
context engine to use (=> engine)


* If `engine` is still empty, then it will try to get the global execution
engine. See
`set_global()`


* If `engine` is still empty, then if `infer_by`
is given, it will try to infer the execution engine (=> engine)


* If `engine` is still empty, then it will construct the default
engine defined by `register_default_execution_engine()`  (=> engine)


* Now, `engine` must not be empty, if it is an object other than
`ExecutionEngine`, we will use
`parse_execution_engine()` to construct (=> engine)


* Now, `engine` must have been an ExecutionEngine object. We update its
SQL engine if specified, then update its config using `conf` and `kwargs`


### fugue.execution.factory.make_sql_engine(engine=None, execution_engine=None, \*\*kwargs)
Create `SQLEngine`
with specified `engine`


* **Parameters**


* **engine** (*Any** | **None*) -- it can be empty string or null (use the default SQL
engine), a string (use the registered SQL engine), an
`SQLEngine` type, or
the `SQLEngine` instance
(you can use `None` to use the default one), defaults to None


* **execution_engine** (*ExecutionEngine** | **None*) -- the
`ExecutionEngine` instance
to create
the `SQLEngine`. Normally you
should always provide this value.


* **kwargs** (*Any*) -- additional parameters to initialize the sql engine



* **Returns**

the `SQLEngine`
instance



* **Return type**

*SQLEngine*


**NOTE**: For users, you normally don't need to call this function directly.
Use `make_execution_engine` instead


### fugue.execution.factory.register_default_execution_engine(func, on_dup='overwrite')
Register `ExecutionEngine` as the
default engine.


* **Parameters**


* **func** (*Callable*) -- a callable taking Parameters like object and `\*\*kwargs` and returning an
`ExecutionEngine` instance


* **on_dup** -- action on duplicated `name`. It can be "overwrite", "ignore"
(not overwriting), defaults to "overwrite".



* **Return type**

None



### fugue.execution.factory.register_default_sql_engine(func, on_dup='overwrite')
Register `SQLEngine` as the
default engine


* **Parameters**


* **func** (*Callable*) -- a callable taking
`ExecutionEngine`
and `\*\*kwargs` and returning a
`SQLEngine` instance


* **on_dup** -- action on duplicated `name`. It can be "overwrite", "ignore"
(not overwriting) or "throw" (throw exception), defaults to "overwrite".



* **Raises**

**KeyError** -- if `on_dup` is `throw` and the `name` already exists



* **Return type**

None


**NOTE**: You should be careful to use this function, because when you set a custom
SQL engine as default, all execution engines you create will use this SQL
engine unless you are explicit. For example if you set the default SQL engine
to be a Spark specific one, then if you start a NativeExecutionEngine, it will
try to use it and will throw exceptions.

So it's always a better idea to use `register_sql_engine` instead


### fugue.execution.factory.register_execution_engine(name_or_type, func, on_dup='overwrite')
Register `ExecutionEngine` with
a given name.


* **Parameters**


* **name_or_type** (*str** | **Type*) -- alias of the execution engine, or type of an object that
can be converted to an execution engine


* **func** (*Callable*) -- a callable taking Parameters like object and `\*\*kwargs` and returning an
`ExecutionEngine` instance


* **on_dup** -- action on duplicated `name`. It can be "overwrite", "ignore"
(not overwriting), defaults to "overwrite".



* **Return type**

None



### fugue.execution.factory.register_sql_engine(name, func, on_dup='overwrite')
Register `SQLEngine` with
a given name.


* **Parameters**


* **name** (*str*) -- name of the SQL engine


* **func** (*Callable*) -- a callable taking
`ExecutionEngine`
and `\*\*kwargs` and returning a
`SQLEngine` instance


* **on_dup** -- action on duplicated `name`. It can be "overwrite", "ignore"
(not overwriting), defaults to "overwrite".



* **Return type**

None



### fugue.execution.factory.try_get_context_execution_engine()
If the global execution engine is set (see
`set_global()`)
or the context is set (see
`as_context()`),
then return the engine, else return None


* **Return type**

*ExecutionEngine* | None


## fugue.execution.native_execution_engine


### _class_ fugue.execution.native_execution_engine.NativeExecutionEngine(conf=None)
Bases: `ExecutionEngine`

The execution engine based on native python and pandas. This execution engine
is mainly for prototyping and unit tests.

Please read [the ExecutionEngine Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/execution_engine.html) to understand this important Fugue concept


* **Parameters**

**conf** (*Any*) -- Parameters like object, read [the Fugue Configuration Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/useful_config.html) to learn Fugue specific options



#### broadcast(df)
Broadcast the dataframe to all workers for a distributed computing framework


* **Parameters**

**df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the input dataframe



* **Returns**

the broadcasted dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### create_default_map_engine()
Default MapEngine if user doesn't specify


* **Return type**

*MapEngine*



#### create_default_sql_engine()
Default SQLEngine if user doesn't specify


* **Return type**

*SQLEngine*



#### distinct(df)
Equivalent to `SELECT DISTINCT \* FROM df`


* **Parameters**

**df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- dataframe



* **Returns**

[description]



* **Return type**

[DataFrame](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### dropna(df, how='any', thresh=None, subset=None)
Drop NA recods from dataframe


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


* **how** (*str*) -- 'any' or 'all'. 'any' drops rows that contain any nulls.
'all' drops rows that contain all nulls.


* **thresh** (*int** | **None*) -- int, drops rows that have less than thresh non-null values


* **subset** (*List**[**str**] **| **None*) -- list of columns to operate on



* **Returns**

DataFrame with NA records dropped



* **Return type**

[DataFrame](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### fillna(df, value, subset=None)
Fill `NULL`, `NAN`, `NAT` values in a dataframe


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


* **value** (*Any*) -- if scalar, fills all columns with same value.
if dictionary, fills NA using the keys as column names and the
values as the replacement values.


* **subset** (*List**[**str**] **| **None*) -- list of columns to operate on. ignored if value is
a dictionary



* **Returns**

DataFrame with NA records filled



* **Return type**

[DataFrame](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### _property_ fs(_: [FileSystem](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.fs.FileSystem_ )
File system of this engine instance


#### get_current_parallelism()
Get the current number of parallelism of this engine


* **Return type**

int



#### intersect(df1, df2, distinct=True)
Intersect `df1` and `df2`


* **Parameters**


* **df1** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


* **df2** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


* **distinct** (*bool*) -- `true` for `INTERSECT` (== `INTERSECT DISTINCT`),
`false` for `INTERSECT ALL`



* **Returns**

the unioned dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Currently, the schema of `df1` and `df2` must be identical, or
an exception will be thrown.


#### _property_ is_distributed(_: boo_ )
Whether this engine is a distributed engine


#### join(df1, df2, how, on=None)
Join two dataframes


* **Parameters**


* **df1** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


* **df2** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


* **how** (*str*) -- can accept `semi`, `left_semi`, `anti`, `left_anti`,
`inner`, `left_outer`, `right_outer`, `full_outer`, `cross`


* **on** (*List**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys.



* **Returns**

the joined dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Please read [`get_join_schemas()`](fugue.dataframe.md#fugue.dataframe.utils.get_join_schemas)


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

[*LocalBoundedDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalBoundedDataFrame)


For more details and examples, read Zip & Comap.


#### _property_ log(_: Logge_ )
Logger of this engine instance


#### persist(df, lazy=False, \*\*kwargs)
Force materializing and caching the dataframe


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the input dataframe


* **lazy** (*bool*) -- `True`: first usage of the output will trigger persisting
to happen; `False` (eager): persist is forced to happend immediately.
Default to `False`


* **kwargs** (*Any*) -- parameter to pass to the underlying persist implementation



* **Returns**

the persisted dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: `persist` can only guarantee the persisted dataframe will be computed
for only once. However this doesn't mean the backend really breaks up the
execution dependency at the persisting point. Commonly, it doesn't cause
any issue, but if your execution graph is long, it may cause expected
problems for example, stack overflow.


#### _property_ pl_utils(_: PandasUtil_ )
Pandas-like dataframe utils


#### repartition(df, partition_spec)
Partition the input dataframe using `partition_spec`.


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- input dataframe


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)) -- how you want to partition the dataframe



* **Returns**

repartitioned dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Before implementing please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)


#### sample(df, n=None, frac=None, replace=False, seed=None)
Sample dataframe by number of rows or by fraction


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


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

[DataFrame](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### save_df(df, path, format_hint=None, mode='overwrite', partition_spec=None, force_single=False, \*\*kwargs)
Save dataframe to a persistent storage


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- input dataframe


* **path** (*str*) -- output path


* **format_hint** (*Any** | **None*) -- can accept `parquet`, `csv`, `json`,
defaults to None, meaning to infer


* **mode** (*str*) -- can accept `overwrite`, `append`, `error`,
defaults to "overwrite"


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)* | **None*) -- how to partition the dataframe before saving,
defaults to empty


* **force_single** (*bool*) -- force the output as a single file, defaults to False


* **kwargs** (*Any*) -- parameters to pass to the underlying framework



* **Return type**

None


For more details and examples, read Load & Save.


#### subtract(df1, df2, distinct=True)
`df1 - df2`


* **Parameters**


* **df1** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


* **df2** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


* **distinct** (*bool*) -- `true` for `EXCEPT` (== `EXCEPT DISTINCT`),
`false` for `EXCEPT ALL`



* **Returns**

the unioned dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Currently, the schema of `df1` and `df2` must be identical, or
an exception will be thrown.


#### take(df, n, presort, na_position='last', partition_spec=None)
Get the first n rows of a DataFrame per partition. If a presort is defined,
use the presort before applying take. presort overrides partition_spec.presort.
The Fugue implementation of the presort follows Pandas convention of specifying
NULLs first or NULLs last. This is different from the Spark and SQL convention
of NULLs as the smallest value.


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- DataFrame


* **n** (*int*) -- number of rows to return


* **presort** (*str*) -- presort expression similar to partition presort


* **na_position** (*str*) -- position of null values during the presort.
can accept `first` or `last`


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)* | **None*) -- PartitionSpec to apply the take operation



* **Returns**

n rows of DataFrame per partition



* **Return type**

[DataFrame](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### to_df(df, schema=None)
Convert a data structure to this engine compatible DataFrame


* **Parameters**


* **data** -- [`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame),
pandas DataFramme or list or iterable of arrays or others that
is supported by certain engine implementation


* **schema** (*Any** | **None*) -- Schema like object, defaults to None


* **df** (*AnyDataFrame*) -- 



* **Returns**

engine compatible dataframe



* **Return type**

[*LocalBoundedDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalBoundedDataFrame)


**NOTE**: There are certain conventions to follow for a new implementation:


* if the input is already in compatible dataframe type, it should return
itself


* all other methods in the engine interface should take arbitrary
dataframes and call this method to convert before doing anything


#### union(df1, df2, distinct=True)
Join two dataframes


* **Parameters**


* **df1** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the first dataframe


* **df2** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- the second dataframe


* **distinct** (*bool*) -- `true` for `UNION` (== `UNION DISTINCT`),
`false` for `UNION ALL`



* **Returns**

the unioned dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Currently, the schema of `df1` and `df2` must be identical, or
an exception will be thrown.


### _class_ fugue.execution.native_execution_engine.PandasMapEngine(execution_engine)
Bases: `MapEngine`


* **Parameters**

**execution_engine** (*ExecutionEngine*) -- 



#### _property_ execution_engine_constraint(_: Type[ExecutionEngine_ )
This defines the required ExecutionEngine type of this facet


* **Returns**

a subtype of `ExecutionEngine`



#### _property_ is_distributed(_: boo_ )
Whether this engine is a distributed engine


#### map_dataframe(df, map_func, output_schema, partition_spec, on_init=None)
Apply a function to each partition after you partition the dataframe in a
specified way.


* **Parameters**


* **df** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)) -- input dataframe


* **map_func** (*Callable**[**[*[*PartitionCursor*](fugue.collections.md#fugue.collections.partition.PartitionCursor)*, *[*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)*]**, *[*LocalDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)*]*) -- the function to apply on every logical partition


* **output_schema** (*Any*) -- Schema like object that can't be None.
Please also understand why we need this


* **partition_spec** ([*PartitionSpec*](fugue.collections.md#fugue.collections.partition.PartitionSpec)) -- partition specification


* **on_init** (*Callable**[**[**int**, *[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)*]**, **Any**] **| **None*) -- callback function when the physical partition is initializaing,
defaults to None



* **Returns**

the dataframe after the map operation



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: Before implementing, you must read
this
to understand what map is used for and how it should work.


#### to_df(df, schema=None)
Convert a data structure to this engine compatible DataFrame


* **Parameters**


* **data** -- [`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame),
pandas DataFramme or list or iterable of arrays or others that
is supported by certain engine implementation


* **schema** (*Any** | **None*) -- Schema like object, defaults to None


* **df** (*AnyDataFrame*) -- 



* **Returns**

engine compatible dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: There are certain conventions to follow for a new implementation:


* if the input is already in compatible dataframe type, it should return
itself


* all other methods in the engine interface should take arbitrary
dataframes and call this method to convert before doing anything


### _class_ fugue.execution.native_execution_engine.QPDPandasEngine(execution_engine)
Bases: `SQLEngine`

QPD execution implementation.


* **Parameters**

**execution_engine** (*ExecutionEngine*) -- the execution engine this sql engine will run on



#### _property_ dialect(_: str | Non_ )

#### _property_ is_distributed(_: boo_ )
Whether this engine is a distributed engine


#### select(dfs, statement)
Execute select statement on the sql engine.


* **Parameters**


* **dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- a collection of dataframes that must have keys


* **statement** ([*StructuredRawSQL*](fugue.collections.md#fugue.collections.sql.StructuredRawSQL)) -- the `SELECT` statement using the `dfs` keys as tables.



* **Returns**

result of the `SELECT` statement



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: There can be tables that is not in `dfs`. For example you want to select
from hive without input DataFrames:

```python
>>> sql_engine.select(DataFrames(), "SELECT * FROM hive.a.table")
```


#### to_df(df, schema=None)
Convert a data structure to this engine compatible DataFrame


* **Parameters**


* **data** -- [`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame),
pandas DataFramme or list or iterable of arrays or others that
is supported by certain engine implementation


* **schema** (*Any** | **None*) -- Schema like object, defaults to None


* **df** (*AnyDataFrame*) -- 



* **Returns**

engine compatible dataframe



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: There are certain conventions to follow for a new implementation:


* if the input is already in compatible dataframe type, it should return
itself


* all other methods in the engine interface should take arbitrary
dataframes and call this method to convert before doing anything


### _class_ fugue.execution.native_execution_engine.SqliteEngine(execution_engine)
Bases: `SQLEngine`

Sqlite execution implementation.


* **Parameters**

**execution_engine** (*ExecutionEngine*) -- the execution engine this sql engine will run on



#### _property_ dialect(_: str | Non_ )

#### _property_ is_distributed(_: boo_ )
Whether this engine is a distributed engine


#### select(dfs, statement)
Execute select statement on the sql engine.


* **Parameters**


* **dfs** ([*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- a collection of dataframes that must have keys


* **statement** ([*StructuredRawSQL*](fugue.collections.md#fugue.collections.sql.StructuredRawSQL)) -- the `SELECT` statement using the `dfs` keys as tables.



* **Returns**

result of the `SELECT` statement



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


**NOTE**: There can be tables that is not in `dfs`. For example you want to select
from hive without input DataFrames:

```python
>>> sql_engine.select(DataFrames(), "SELECT * FROM hive.a.table")
```
