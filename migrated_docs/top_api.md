# Top Level User API Reference

## IO


### fugue.api.as_fugue_dataset(data, \*\*kwargs)
Wrap the input as a [`Dataset`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset)


* **Parameters**

    
    * **data** (*AnyDataset*) -- the dataset to be wrapped


    * **kwargs** (*Any*) -- 



* **Return type**

    [*Dataset*](api/fugue.dataset.md#fugue.dataset.dataset.Dataset)



### fugue.api.as_fugue_df(df, \*\*kwargs)
Wrap the object as a Fugue DataFrame.


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the object to wrap


    * **kwargs** (*Any*) -- 



* **Return type**

    [*DataFrame*](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



### fugue.api.load(path, format_hint=None, columns=None, engine=None, engine_conf=None, as_fugue=False, as_local=False, \*\*kwargs)
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


### fugue.api.save(df, path, format_hint=None, mode='overwrite', partition=None, force_single=False, engine=None, engine_conf=None, \*\*kwargs)
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

## Information


### fugue.api.count(data)
The number of elements in the dataset


* **Parameters**

    **data** (*AnyDataset*) -- the dataset that can be recognized by Fugue



* **Return type**

    int



### fugue.api.is_bounded(data)
Whether the dataset is local


* **Parameters**

    **data** (*AnyDataset*) -- the dataset that can be recognized by Fugue



* **Return type**

    bool



### fugue.api.is_empty(data)
Whether the dataset is empty


* **Parameters**

    **data** (*AnyDataset*) -- the dataset that can be recognized by Fugue



* **Return type**

    bool



### fugue.api.is_local(data)
Whether the dataset is local


* **Parameters**

    **data** (*AnyDataset*) -- the dataset that can be recognized by Fugue



* **Return type**

    bool



### fugue.api.show(data, n=10, with_count=False, title=None)
Display the Dataset


* **Parameters**

    
    * **data** (*AnyDataset*) -- the dataset that can be recognized by Fugue


    * **n** (*int*) -- number of rows to print, defaults to 10


    * **with_count** (*bool*) -- whether to show dataset count, defaults to False


    * **title** (*str** | **None*) -- title of the dataset, defaults to None



* **Return type**

    None


**NOTE**: When `with_count` is True, it can trigger expensive calculation for
a distributed dataframe. So if you call this function directly, you may
need to [`fugue.execution.execution_engine.ExecutionEngine.persist()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.persist)
the dataset.


### fugue.api.get_column_names(df)
A generic function to get column names of any dataframe


* **Parameters**

    **df** (*AnyDataFrame*) -- the dataframe object



* **Returns**

    the column names



* **Return type**

    *List*[*Any*]


**NOTE**: In order to support a new type of dataframe, an implementation must
be registered, for example

<!-- code-block::python

@get_column_names.candidate(lambda df: isinstance(df, pa.Table))
def _get_pyarrow_dataframe_columns(df: pa.Table) -> List[Any]:
    return [f.name for f in df.schema] -->

### fugue.api.get_num_partitions(data)
Get the number of partitions of the dataset


* **Parameters**

    **data** (*AnyDataset*) -- the dataset that can be recognized by Fugue



* **Return type**

    bool



### fugue.api.get_schema(df)
Get the schema of the `df`


* **Parameters**

    **df** (*AnyDataFrame*) -- the object that can be recognized as a dataframe by Fugue



* **Returns**

    the Schema object



* **Return type**

    [*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)



### fugue.api.is_df(df)
Whether `df` is a DataFrame like object


* **Parameters**

    **df** (*Any*) -- 



* **Return type**

    bool



### fugue.api.peek_array(df)
Peek the first row of the dataframe as an array


* **Parameters**

    **df** (*AnyDataFrame*) -- the object that can be recognized as a dataframe by Fugue



* **Returns**

    the first row as an array



* **Return type**

    *List*[*Any*]



### fugue.api.peek_dict(df)
Peek the first row of the dataframe as a array


* **Parameters**

    **df** (*AnyDataFrame*) -- the object that can be recognized as a dataframe by Fugue



* **Returns**

    the first row as a dict



* **Return type**

    *Dict*[str, *Any*]


## Transformation


### fugue.api.transform(df, using, schema=None, params=None, partition=None, callback=None, ignore_errors=None, persist=False, as_local=False, save_path=None, checkpoint=False, engine=None, engine_conf=None, as_fugue=False)
Transform this dataframe using transformer. It's a wrapper of
[`transform()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.transform) and
[`run()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.run). It let you do the
basic dataframe transformation without using
[`FugueWorkflow`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow) and
[`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame). Both input and output
can be native types only.

Please read [the Transformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/transformer.html)


* **Parameters**

    
    * **df** (*Any*) -- DataFrame like object or `Yielded`
    or a path string to a parquet file


    * **using** (*Any*) -- transformer-like object, can't be a string expression


    * **schema** (*Any** | **None*) -- Schema like object, defaults to None. The transformer
    will be able to access this value from
    [`output_schema()`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.output_schema)


    * **params** (*Any** | **None*) -- Parameters like object to run the processor, defaults to None.
    The transformer will be able to access this value from
    [`params()`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


    * **partition** (*Any** | **None*) -- Partition like object, defaults to None


    * **callback** (*Any** | **None*) -- RPChandler like object, defaults to None


    * **ignore_errors** (*List**[**Any**] **| **None*) -- list of exception types the transformer can ignore,
    defaults to None (empty list)


    * **engine** (*Any** | **None*) -- it can be empty string or null (use the default execution
    engine), a string (use the registered execution engine), an
    [`ExecutionEngine`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine) type, or
    the [`ExecutionEngine`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine) instance
    , or a tuple of two values where the first value represents execution
    engine and the second value represents the sql engine (you can use `None`
    for either of them to use the default one), defaults to None


    * **engine_conf** (*Any** | **None*) -- Parameters like object, defaults to None


    * **as_fugue** (*bool*) -- If true, the function will always return
    a `FugueDataFrame`, otherwise, if `df` is in native dataframe types such
    as pandas dataframe, then the output will also in its native format. Defaults
    to False


    * **persist** (*bool*) -- Whether to persist(materialize) the dataframe before returning


    * **as_local** (*bool*) -- If true, the result will be converted to a `LocalDataFrame`


    * **save_path** (*str** | **None*) -- Whether to save the output to a file (see the note)


    * **checkpoint** (*bool*) -- Whether to add a checkpoint for the output (see the note)



* **Returns**

    the transformed dataframe, if `df` is a native dataframe (e.g.
    pd.DataFrame, spark dataframe, etc), the output will be a native dataframe,
    the type is determined by the execution engine you use. But if `df` is
    of type [`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame), then the output will
    also be a [`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



* **Return type**

    *Any*


**NOTE**: This function may be lazy and return the transformed dataframe.

**NOTE**: When you use callback in this function, you must be careful that the output
dataframe must be materialized. Otherwise, if the real compute happens out of
the function call, the callback receiver is already shut down. To do that you
can either use `persist` or `as_local`, both will materialize the dataframe
before the callback receiver shuts down.

**NOTE**: 
* When save_path is None and checkpoint is False, then the output will
not be saved into a file. The return will be a dataframe.


* When save_path is None and checkpoint is True, then the output will be
saved into the path set by fugue.workflow.checkpoint.path, the name will
be randomly chosen, and it is NOT a deterministic checkpoint, so if you run
multiple times, the output will be saved into different files. The return
will be a dataframe.


* When save_path is not None and checkpoint is False, then the output will
be saved into save_path. The return will be the value of save_path


* When save_path is not None and checkpoint is True, then the output will
be saved into save_path. The return will be the dataframe from save_path

This function can only take parquet file paths in df and save_path.
Csv and other file formats are disallowed.

The checkpoint here is NOT deterministic, so re-run will generate new
checkpoints.

If you want to read and write other file formats or if you want to use
deterministic checkpoints, please use
[`FugueWorkflow`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow).


### fugue.api.out_transform(df, using, params=None, partition=None, callback=None, ignore_errors=None, engine=None, engine_conf=None)
Transform this dataframe using transformer. It's a wrapper of
[`out_transform()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.out_transform) and
[`run()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.run). It let you do the
basic dataframe transformation without using
[`FugueWorkflow`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow) and
[`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame). The input can be native
type only

Please read [the Transformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/transformer.html)


* **Parameters**

    
    * **df** (*Any*) -- DataFrame like object or `Yielded`
    or a path string to a parquet file


    * **using** (*Any*) -- transformer-like object, can't be a string expression


    * **params** (*Any** | **None*) -- Parameters like object to run the processor, defaults to None.
    The transformer will be able to access this value from
    [`params()`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


    * **partition** (*Any** | **None*) -- Partition like object, defaults to None.


    * **callback** (*Any** | **None*) -- RPChandler like object, defaults to None


    * **ignore_errors** (*List**[**Any**] **| **None*) -- list of exception types the transformer can ignore,
    defaults to None (empty list)


    * **engine** (*Any** | **None*) -- it can be empty string or null (use the default execution
    engine), a string (use the registered execution engine), an
    [`ExecutionEngine`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine) type, or
    the [`ExecutionEngine`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine) instance
    , or a tuple of two values where the first value represents execution
    engine and the second value represents the sql engine (you can use `None`
    for either of them to use the default one), defaults to None


    * **engine_conf** (*Any** | **None*) -- Parameters like object, defaults to None



* **Return type**

    None


**NOTE**: This function can only take parquet file paths in df. Csv and other file
formats are disallowed.

This transformation is guaranteed to execute immediately (eager)
and return nothing


### fugue.api.alter_columns(df, columns, as_fugue=False)
Change column types


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the object that can be recognized as a dataframe by Fugue


    * **columns** (*Any*) -- Schema like object,
    all columns should be contained by the dataframe schema


    * **as_fugue** (*bool*) -- whether return a Fugue [`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame), default to
    False. If False, then if the input `df` is not a Fugue DataFrame
    then it will return the underlying DataFrame object.



* **Returns**

    a new dataframe with altered columns, the order of the
    original schema will not change



* **Return type**

    *AnyDataFrame*



### fugue.api.drop_columns(df, columns, as_fugue=False)
Drop certain columns and return a new dataframe


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the object that can be recognized as a dataframe by Fugue


    * **columns** (*List**[**str**]*) -- columns to drop


    * **as_fugue** (*bool*) -- whether return a Fugue [`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame), default to
    False. If False, then if the input `df` is not a Fugue DataFrame
    then it will return the underlying DataFrame object.



* **Returns**

    a new dataframe removing the columns



* **Return type**

    *AnyDataFrame*



### fugue.api.head(df, n, columns=None, as_fugue=False)
Get first n rows of the dataframe as a new local bounded dataframe


* **Parameters**

    
    * **n** (*int*) -- number of rows


    * **columns** (*List**[**str**] **| **None*) -- selected columns, defaults to None (all columns)


    * **as_fugue** (*bool*) -- whether return a Fugue [`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame), default to
    False. If False, then if the input `df` is not a Fugue DataFrame
    then it will return the underlying DataFrame object.


    * **df** (*AnyDataFrame*) -- 



* **Returns**

    a local bounded dataframe



* **Return type**

    *AnyDataFrame*



### fugue.api.normalize_column_names(df)
A generic function to normalize any dataframe's column names to follow
Fugue naming rules

**NOTE**: This is a temporary solution before
[`Schema`](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)
can take arbitrary names


* **Parameters**

    **df** (*AnyDataFrame*) -- a dataframe object



* **Returns**

    the renamed dataframe and the rename operations as a dict that
    can **undo** the change



* **Return type**

    *Tuple*[*AnyDataFrame*, *Dict*[str, *Any*]]



### fugue.api.rename(df, columns, as_fugue=False)
A generic function to rename column names of any dataframe


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the dataframe object


    * **columns** (*Dict**[**str**, **Any**]*) -- the rename operations as a dict: `old name => new name`


    * **as_fugue** (*bool*) -- whether return a Fugue [`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame), default to
    False. If False, then if the input `df` is not a Fugue DataFrame
    then it will return the underlying DataFrame object.



* **Returns**

    the renamed dataframe



* **Return type**

    *AnyDataFrame*


**NOTE**: In order to support a new type of dataframe, an implementation must
be registered, for example

<!-- code-block::python

@rename.candidate(
    lambda df, *args, **kwargs: isinstance(df, pd.DataFrame)
)
def _rename_pandas_dataframe(
    df: pd.DataFrame, columns: Dict[str, Any]
) -> pd.DataFrame:
    if len(columns) == 0:
        return df
    return df.rename(columns=columns) -->

### fugue.api.select_columns(df, columns, as_fugue=False)
Select certain columns and return a new dataframe


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the object that can be recognized as a dataframe by Fugue


    * **columns** (*List**[**Any**]*) -- columns to return


    * **as_fugue** (*bool*) -- whether return a Fugue [`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame), default to
    False. If False, then if the input `df` is not a Fugue DataFrame
    then it will return the underlying DataFrame object.



* **Returns**

    a new dataframe with the selected the columns



* **Return type**

    *AnyDataFrame*



### fugue.api.distinct(df, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.dropna(df, how='any', thresh=None, subset=None, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.fillna(df, value, subset=None, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.sample(df, n=None, frac=None, replace=False, seed=None, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.take(df, n, presort, na_position='last', partition=None, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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


## SQL


### fugue.api.fugue_sql(query, \*args, fsql_ignore_case=None, fsql_dialect=None, engine=None, engine_conf=None, as_fugue=False, as_local=False, \*\*kwargs)
Simplified Fugue SQL interface. This function can still take multiple dataframe
inputs but will always return the last generated dataframe in the SQL workflow. And
`YIELD` should NOT be used with this function. If you want to use Fugue SQL to
represent the full workflow, or want to see more Fugue SQL examples,
please read `fugue_sql_flow()`.


* **Parameters**

    
    * **query** (*str*) -- the Fugue SQL string (can be a jinja template)


    * **args** (*Any*) -- variables related to the SQL string


    * **fsql_ignore_case** (*bool** | **None*) -- whether to ignore case when parsing the SQL string,
    defaults to None (it depends on the engine/global config).


    * **fsql_dialect** (*str** | **None*) -- the dialect of this fsql,
    defaults to None (it depends on the engine/global config).


    * **kwargs** (*Any*) -- variables related to the SQL string


    * **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


    * **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


    * **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


    * **as_local** (*bool*) -- whether return a local dataframe, defaults to False



* **Returns**

    the result dataframe



* **Return type**

    *AnyDataFrame*


**NOTE**: This function is different from `raw_sql()` which directly
sends the query to the execution engine to run. This function parses the query
based on Fugue SQL syntax, creates a
[`FugueSQLWorkflow`](api/fugue.sql.md#fugue.sql.workflow.FugueSQLWorkflow) which
could contain multiple raw SQLs plus other operations, and runs and returns
the last dataframe generated in the workflow.

This function allows you to parameterize the SQL in a more elegant way. The
data tables referred in the query can either be automatically extracted from the
local variables or be specified in the arguments.

```python
import pandas as pd
import fugue.api as fa

def tr(df:pd.DataFrame) -> pd.DataFrame:
    return df.assign(c=2)

input = pd.DataFrame([[0,1],[3.4]], columns=["a","b"])

with fa.engine_context("duckdb"):
    res = fa.fugue_sql('''
    SELECT * FROM input WHERE a<{{x}}
    TRANSFORM USING tr SCHEMA *,c:int
    ''', x=2)
    assert fa.as_array(res) == [[0,1,2]]
```


### fugue.api.fugue_sql_flow(query, \*args, fsql_ignore_case=None, fsql_dialect=None, \*\*kwargs)
Fugue SQL full functional interface. This function allows full workflow
definition using Fugue SQL, and it allows multiple outputs using `YIELD`.


* **Parameters**

    
    * **query** (*str*) -- the Fugue SQL string (can be a jinja template)


    * **args** (*Any*) -- variables related to the SQL string


    * **fsql_ignore_case** (*bool** | **None*) -- whether to ignore case when parsing the SQL string,
    defaults to None (it depends on the engine/global config).


    * **fsql_dialect** (*str** | **None*) -- the dialect of this fsql,
    defaults to None (it depends on the engine/global config).


    * **kwargs** (*Any*) -- variables related to the SQL string



* **Returns**

    the translated Fugue workflow



* **Return type**

    [*FugueSQLWorkflow*](api/fugue.sql.md#fugue.sql.workflow.FugueSQLWorkflow)


**NOTE**: This function is different from `raw_sql()` which directly
sends the query to the execution engine to run. This function parses the query
based on Fugue SQL syntax, creates a
[`FugueSQLWorkflow`](api/fugue.sql.md#fugue.sql.workflow.FugueSQLWorkflow) which
could contain multiple raw SQLs plus other operations, and runs and returns
the last dataframe generated in the workflow.

This function allows you to parameterize the SQL in a more elegant way. The
data tables referred in the query can either be automatically extracted from the
local variables or be specified in the arguments.

```python
import fugue.api.fugue_sql_flow as fsql
import fugue.api as fa

# Basic case
fsql('''
CREATE [[0]] SCHEMA a:int
PRINT
''').run()

# With external data sources
df = pd.DataFrame([[0],[1]], columns=["a"])
fsql('''
SELECT * FROM df WHERE a=0
PRINT
''').run()

# With external variables
df = pd.DataFrame([[0],[1]], columns=["a"])
t = 1
fsql('''
SELECT * FROM df WHERE a={{t}}
PRINT
''').run()

# The following is the explicit way to specify variables and datafrems
# (recommended)
df = pd.DataFrame([[0],[1]], columns=["a"])
t = 1
fsql('''
SELECT * FROM df WHERE a={{t}}
PRINT
''', df=df, t=t).run()

# Using extensions
def dummy(df:pd.DataFrame) -> pd.DataFrame:
    return df

fsql('''
CREATE [[0]] SCHEMA a:int
TRANSFORM USING dummy SCHEMA *
PRINT
''').run()

# It's recommended to provide full path of the extension inside
# Fugue SQL, so the SQL definition and exeuction can be more
# independent from the extension definition.

# Run with different execution engines
sql = '''
CREATE [[0]] SCHEMA a:int
TRANSFORM USING dummy SCHEMA *
PRINT
'''

fsql(sql).run(spark_session)
fsql(sql).run("dask")

with fa.engine_context("duckdb"):
    fsql(sql).run()

# Passing dataframes between fsql calls
result = fsql('''
CREATE [[0]] SCHEMA a:int
YIELD DATAFRAME AS x

CREATE [[1]] SCHEMA a:int
YIELD DATAFRAME AS y
''').run(DaskExecutionEngine)

fsql('''
SELECT * FROM x
UNION
SELECT * FROM y
UNION
SELECT * FROM z

PRINT
''', result, z=pd.DataFrame([[2]], columns=["z"])).run()

# Get framework native dataframes
result["x"].native  # Dask dataframe
result["y"].native  # Dask dataframe
result["x"].as_pandas()  # Pandas dataframe

# Use lower case fugue sql
df = pd.DataFrame([[0],[1]], columns=["a"])
t = 1
fsql('''
select * from df where a={{t}}
print
''', df=df, t=t, fsql_ignore_case=True).run()
```


### fugue.api.raw_sql(\*statements, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Run raw SQL on the execution engine


* **Parameters**

    
    * **statements** (*Any*) -- a sequence of sub-statements in string
    or dataframe-like objects


    * **engine** (*Any** | **None*) -- an engine like object, defaults to None


    * **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


    * **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


    * **as_local** (*bool*) -- whether return a local dataframe, defaults to False



* **Returns**

    the result dataframe



* **Return type**

    *AnyDataFrame*



### fugue.api.join(df1, df2, \*dfs, how, on=None, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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


**NOTE**: Please read [`get_join_schemas()`](api/fugue.dataframe.md#fugue.dataframe.utils.get_join_schemas)


### fugue.api.semi_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.anti_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.inner_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.left_outer_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.right_outer_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.full_outer_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.cross_join(df1, df2, \*dfs, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.union(df1, df2, \*dfs, distinct=True, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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


### fugue.api.intersect(df1, df2, \*dfs, distinct=True, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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


### fugue.api.subtract(df1, df2, \*dfs, distinct=True, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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


### fugue.api.assign(df, engine=None, engine_conf=None, as_fugue=False, as_local=False, \*\*columns)
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



### fugue.api.select(df, \*columns, where=None, having=None, distinct=False, engine=None, engine_conf=None, as_fugue=False, as_local=False)
The functional interface for SQL select statement


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the dataframe to be operated on


    * **columns** (*str** | *[*ColumnExpr*](api/fugue.column.md#fugue.column.expressions.ColumnExpr)) -- column expressions, for strings they will represent
    the column names


    * **where** ([*ColumnExpr*](api/fugue.column.md#fugue.column.expressions.ColumnExpr)* | **None*) -- `WHERE` condition expression, defaults to None


    * **having** ([*ColumnExpr*](api/fugue.column.md#fugue.column.expressions.ColumnExpr)* | **None*) -- `having` condition expression, defaults to None. It
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



### fugue.api.filter(df, condition, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Filter rows by the given condition


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the dataframe to be filtered


    * **condition** ([*ColumnExpr*](api/fugue.column.md#fugue.column.expressions.ColumnExpr)) -- (boolean) column expression


    * **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


    * **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


    * **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


    * **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

    the filtered dataframe



* **Return type**

    *AnyDataFrame*



### fugue.api.aggregate(df, partition_by=None, engine=None, engine_conf=None, as_fugue=False, as_local=False, \*\*agg_kwcols)
Aggregate on dataframe


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the dataframe to aggregate on


    * **partition_by** (*None** | **str** | **List**[**str**]*) -- partition key(s), defaults to None


    * **agg_kwcols** ([*ColumnExpr*](api/fugue.column.md#fugue.column.expressions.ColumnExpr)) -- aggregation expressions


    * **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


    * **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


    * **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


    * **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

    the aggregated result as a dataframe



* **Return type**

    *AnyDataFrame*


## Conversion


### fugue.api.as_local(data)
Convert the dataset to a local dataset


* **Parameters**

    **data** (*AnyDataset*) -- the dataset that can be recognized by Fugue



* **Return type**

    *AnyDataset*



### fugue.api.as_local_bounded(data)
Convert the dataset to a local bounded dataset


* **Parameters**

    **data** (*AnyDataset*) -- the dataset that can be recognized by Fugue



* **Return type**

    *AnyDataset*



### fugue.api.as_array(df, columns=None, type_safe=False)
Convert df to 2-dimensional native python array


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the object that can be recognized as a dataframe by Fugue


    * **columns** (*List**[**str**] **| **None*) -- columns to extract, defaults to None


    * **type_safe** (*bool*) -- whether to ensure output conforms with its schema,
    defaults to False



* **Returns**

    2-dimensional native python array



* **Return type**

    *List*[*Any*]


**NOTE**: If `type_safe` is False, then the returned values are 'raw' values.


### fugue.api.as_array_iterable(df, columns=None, type_safe=False)
Convert df to iterable of native python arrays


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the object that can be recognized as a dataframe by Fugue


    * **columns** (*List**[**str**] **| **None*) -- columns to extract, defaults to None


    * **type_safe** (*bool*) -- whether to ensure output conforms with its schema,
    defaults to False



* **Returns**

    iterable of native python arrays



* **Return type**

    *Iterable*[*Any*]


**NOTE**: If `type_safe` is False, then the returned values are 'raw' values.


### fugue.api.as_arrow(df)
Convert `df` to a PyArrow Table


* **Parameters**

    **df** (*AnyDataFrame*) -- the object that can be recognized as a dataframe by Fugue



* **Returns**

    the PyArrow Table



* **Return type**

    [*Table*](https://arrow.apache.org/docs/python/generated/pyarrow.Table.html#pyarrow.Table)



### fugue.api.as_dict_iterable(df, columns=None)
Convert df to iterable of native python dicts


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the object that can be recognized as a dataframe by Fugue


    * **columns** (*List**[**str**] **| **None*) -- columns to extract, defaults to None



* **Returns**

    iterable of native python dicts



* **Return type**

    *Iterable*[*Dict*[str, *Any*]]


**NOTE**: The default implementation enforces `type_safe` True


### fugue.api.as_pandas(df)
Convert `df` to a Pandas DataFrame


* **Parameters**

    **df** (*AnyDataFrame*) -- the object that can be recognized as a dataframe by Fugue



* **Returns**

    the Pandas DataFrame



* **Return type**

    [*DataFrame*](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html#pandas.DataFrame)



### fugue.api.get_native_as_df(df)
Return the dataframe form of the input `df`.
If `df` is a [`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame), then call the
[`native_as_df()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.native_as_df), otherwise, it depends on whether there is
a correspondent function handling it.


* **Parameters**

    **df** (*AnyDataFrame*) -- 



* **Return type**

    *AnyDataFrame*


## ExecutionEngine


### fugue.api.engine_context(engine=None, engine_conf=None, infer_by=None)
Make an execution engine and set it as the context engine. This function
is thread safe and async safe.


* **Parameters**

    
    * **engine** (*AnyExecutionEngine*) -- an engine like object, defaults to None


    * **engine_conf** (*Any*) -- the configs for the engine, defaults to None


    * **infer_by** (*List**[**Any**] **| **None*) -- a list of objects to infer the engine, defaults to None



* **Return type**

    *Iterator*[[*ExecutionEngine*](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)]


**NOTE**: For more details, please read
[`make_execution_engine()`](api/fugue.execution.md#fugue.execution.factory.make_execution_engine)


### fugue.api.set_global_engine(engine, engine_conf=None)
Make an execution engine and set it as the global execution engine


* **Parameters**

    
    * **engine** (*AnyExecutionEngine*) -- an engine like object, must not be None


    * **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None



* **Return type**

    [*ExecutionEngine*](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)


**NOTE**: For more details, please read
[`make_execution_engine()`](api/fugue.execution.md#fugue.execution.factory.make_execution_engine) and
[`set_global()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.set_global)


### fugue.api.clear_global_engine()
Remove the global exeuction engine (if set)


* **Return type**

    None



### fugue.api.get_context_engine()
Get the execution engine in the current context. Regarding the order of the logic
please read [`make_execution_engine()`](api/fugue.execution.md#fugue.execution.factory.make_execution_engine)


* **Return type**

    [*ExecutionEngine*](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)


## Big Data Operations


### fugue.api.broadcast(df, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.api.persist(df, lazy=False, engine=None, engine_conf=None, as_fugue=False, as_local=False, \*\*kwargs)
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



### fugue.api.repartition(df, partition, engine=None, engine_conf=None, as_fugue=False, as_local=False)
Partition the input dataframe using `partition`.


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- an input dataframe that can be recognized by Fugue


    * **partition** ([*PartitionSpec*](api/fugue.collections.md#fugue.collections.partition.PartitionSpec)) -- how you want to partition the dataframe


    * **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


    * **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


    * **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


    * **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False



* **Returns**

    the repartitioned dataframe



* **Return type**

    *AnyDataFrame*


## Development


### fugue.api.run_engine_function(func, engine=None, engine_conf=None, as_fugue=False, as_local=False, infer_by=None)
Run a lambda function based on the engine provided


* **Parameters**

    
    * **engine** (*AnyExecutionEngine** | **None*) -- an engine like object, defaults to None


    * **engine_conf** (*Any** | **None*) -- the configs for the engine, defaults to None


    * **as_fugue** (*bool*) -- whether to force return a Fugue DataFrame, defaults to False


    * **as_local** (*bool*) -- whether to force return a local DataFrame, defaults to False


    * **infer_by** (*List**[**Any**] **| **None*) -- a list of objects to infer the engine, defaults to None


    * **func** (*Callable**[**[*[*ExecutionEngine*](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)*]**, **Any**]*) -- 



* **Returns**

    None or a Fugue [`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame) if
    `as_fugue` is True, otherwise if `infer_by` contains any
    Fugue DataFrame, then return the Fugue DataFrame, otherwise
    it returns the underlying dataframe using
    [`native_as_df()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.native_as_df)



* **Return type**

    *Any*


**NOTE**: This function is for deveopment use. Users should not need it.
