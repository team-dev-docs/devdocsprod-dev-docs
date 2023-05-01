# fugue.workflow

## fugue.workflow.api


### fugue.workflow.api.out_transform(df, using, params=None, partition=None, callback=None, ignore_errors=None, engine=None, engine_conf=None)
Transform this dataframe using transformer. It's a wrapper of
`out_transform()` and
`run()`. It let you do the
basic dataframe transformation without using
`FugueWorkflow` and
[`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame). The input can be native
type only

Please read [the Transformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/transformer.html)


* **Parameters**


* **df** (*Any*) -- DataFrame like object or `Yielded`
or a path string to a parquet file


* **using** (*Any*) -- transformer-like object, can't be a string expression


* **params** (*Any** | **None*) -- Parameters like object to run the processor, defaults to None.
The transformer will be able to access this value from
[`params()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


* **partition** (*Any** | **None*) -- Partition like object, defaults to None.


* **callback** (*Any** | **None*) -- RPChandler like object, defaults to None


* **ignore_errors** (*List**[**Any**] **| **None*) -- list of exception types the transformer can ignore,
defaults to None (empty list)


* **engine** (*Any** | **None*) -- it can be empty string or null (use the default execution
engine), a string (use the registered execution engine), an
[`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine) type, or
the [`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine) instance
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


### fugue.workflow.api.raw_sql(\*statements, engine=None, engine_conf=None, as_fugue=False, as_local=False)
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



### fugue.workflow.api.transform(df, using, schema=None, params=None, partition=None, callback=None, ignore_errors=None, persist=False, as_local=False, save_path=None, checkpoint=False, engine=None, engine_conf=None, as_fugue=False)
Transform this dataframe using transformer. It's a wrapper of
`transform()` and
`run()`. It let you do the
basic dataframe transformation without using
`FugueWorkflow` and
[`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame). Both input and output
can be native types only.

Please read [the Transformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/transformer.html)


* **Parameters**


* **df** (*Any*) -- DataFrame like object or `Yielded`
or a path string to a parquet file


* **using** (*Any*) -- transformer-like object, can't be a string expression


* **schema** (*Any** | **None*) -- Schema like object, defaults to None. The transformer
will be able to access this value from
[`output_schema()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.output_schema)


* **params** (*Any** | **None*) -- Parameters like object to run the processor, defaults to None.
The transformer will be able to access this value from
[`params()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


* **partition** (*Any** | **None*) -- Partition like object, defaults to None


* **callback** (*Any** | **None*) -- RPChandler like object, defaults to None


* **ignore_errors** (*List**[**Any**] **| **None*) -- list of exception types the transformer can ignore,
defaults to None (empty list)


* **engine** (*Any** | **None*) -- it can be empty string or null (use the default execution
engine), a string (use the registered execution engine), an
[`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine) type, or
the [`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine) instance
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
of type [`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame), then the output will
also be a [`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



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
`FugueWorkflow`.

## fugue.workflow.input


### fugue.workflow.input.register_raw_df_type(df_type)
TODO: This function is to be removed before 0.9.0

**Deprecated:** Deprecated since version 0.8.0: Register using [`fugue.api.is_df()`](../top_api.md#fugue.api.is_df) instead.


* **Parameters**

**df_type** (*Type*) -- 



* **Return type**

None


## fugue.workflow.module


### fugue.workflow.module.module(func=None, as_method=False, name=None, on_dup='overwrite')
Decorator for module

Please read Module Tutorial


* **Parameters**


* **func** (*Callable** | **None*) -- 


* **as_method** (*bool*) -- 


* **name** (*str** | **None*) -- 


* **on_dup** (*str*) -- 



* **Return type**

*Any*


## fugue.workflow.workflow


### _class_ fugue.workflow.workflow.FugueWorkflow(compile_conf=None)
Bases: `object`

Fugue Workflow, also known as the Fugue Programming Interface.

In Fugue, we use DAG to represent workflows, DAG construction and execution
are different steps, this class is mainly used in the construction step, so all
things you added to the workflow is **description** and they are not executed
until you call `run()`

Read
this
to learn how to initialize it in different ways and pros and cons.


* **Parameters**

**compile_conf** (*Any*) -- 



#### add(task, \*args, \*\*kwargs)
This method should not be called directly by users. Use
`create()`, `process()`, `output()` instead


* **Parameters**


* **task** (*FugueTask*) -- 


* **args** (*Any*) -- 


* **kwargs** (*Any*) -- 



* **Return type**

*WorkflowDataFrame*



#### assert_eq(\*dfs, \*\*params)
Compare if these dataframes are equal. It's for internal, unit test
purpose only. It will convert both dataframes to
[`LocalBoundedDataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.LocalBoundedDataFrame), so it assumes
all dataframes are small and fast enough to convert. DO NOT use it
on critical or expensive tasks.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **digits** -- precision on float number comparison, defaults to 8


* **check_order** -- if to compare the row orders, defaults to False


* **check_schema** -- if compare schemas, defaults to True


* **check_content** -- if to compare the row values, defaults to True


* **no_pandas** -- if true, it will compare the string representations of the
dataframes, otherwise, it will convert both to pandas dataframe to compare,
defaults to False


* **params** (*Any*) -- 



* **Raises**

**AssertionError** -- if not equal



* **Return type**

None



#### assert_not_eq(\*dfs, \*\*params)
Assert if all dataframes are not equal to the first dataframe.
It's for internal, unit test purpose only. It will convert both dataframes to
[`LocalBoundedDataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.LocalBoundedDataFrame), so it assumes
all dataframes are small and fast enough to convert. DO NOT use it
on critical or expensive tasks.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **digits** -- precision on float number comparison, defaults to 8


* **check_order** -- if to compare the row orders, defaults to False


* **check_schema** -- if compare schemas, defaults to True


* **check_content** -- if to compare the row values, defaults to True


* **no_pandas** -- if true, it will compare the string representations of the
dataframes, otherwise, it will convert both to pandas dataframe to compare,
defaults to False


* **params** (*Any*) -- 



* **Raises**

**AssertionError** -- if any dataframe equals to the first dataframe



* **Return type**

None



#### _property_ conf(_: [ParamDict](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict_ )
Compile time configs


#### create(using, schema=None, params=None)
Run a creator to create a dataframe.

Please read the
[Creator Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/creator.html)


* **Parameters**


* **using** (*Any*) -- creator-like object, if it is a string, then it must be
the alias of a registered creator


* **schema** (*Any** | **None*) -- Schema like object, defaults to None. The creator
will be able to access this value from
[`output_schema()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.output_schema)


* **params** (*Any** | **None*) -- Parameters like object to run the creator,
defaults to None. The creator will be able to access this value from
[`params()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


* **pre_partition** -- Partition like object, defaults to None.
The creator will be able to access this value from
[`partition_spec()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.partition_spec)



* **Returns**

result dataframe



* **Return type**

*WorkflowDataFrame*



#### create_data(data, schema=None, data_determiner=None)
Create dataframe.


* **Parameters**


* **data** (*Any*) -- DataFrame like object or `Yielded`


* **schema** (*Any** | **None*) -- Schema like object, defaults to None


* **data_determiner** (*Callable**[**[**Any**]**, **Any**] **| **None*) -- a function to compute unique id from `data`



* **Returns**

a dataframe of the current workflow



* **Return type**

*WorkflowDataFrame*


**NOTE**: By default, the input `data` does not affect the determinism of the
workflow (but `schema` and `etadata` do), because the amount of compute
can be unpredictable. But if you want `data` to affect the
determinism of the workflow, you can provide the function to compute the
unique id of `data` using `data_determiner`


#### df(data, schema=None, data_determiner=None)
Create dataframe. Alias of `create_data()`


* **Parameters**


* **data** (*Any*) -- DataFrame like object or `Yielded`


* **schema** (*Any** | **None*) -- Schema like object, defaults to None


* **data_determiner** (*Callable**[**[**Any**]**, **str**] **| **None*) -- a function to compute unique id from `data`



* **Returns**

a dataframe of the current workflow



* **Return type**

*WorkflowDataFrame*


**NOTE**: By default, the input `data` does not affect the determinism of the
workflow (but `schema` and `etadata` do), because the amount of
compute can be unpredictable. But if you want `data` to affect the
determinism of the workflow, you can provide the function to compute
the unique id of `data` using `data_determiner`


#### get_result(df)
After `run()`, get the result of a dataframe defined in the dag


* **Returns**

a calculated dataframe



* **Parameters**

**df** (*WorkflowDataFrame*) -- 



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### intersect(\*dfs, distinct=True)
Intersect dataframes in `dfs`.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **distinct** (*bool*) -- whether to perform distinct after intersection,
default to True



* **Returns**

intersected dataframe



* **Return type**

*WorkflowDataFrame*


**NOTE**: Currently, all dataframes in `dfs` must have identical schema, otherwise
exception will be thrown.


#### join(\*dfs, how, on=None)
Join dataframes.
Read Join tutorials on workflow and engine for details


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **how** (*str*) -- can accept `semi`, `left_semi`, `anti`, `left_anti`,
`inner`, `left_outer`, `right_outer`, `full_outer`, `cross`


* **on** (*Iterable**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys. Default to None



* **Returns**

joined dataframe



* **Return type**

*WorkflowDataFrame*



#### _property_ last_df(_: WorkflowDataFrame | Non_ )

#### load(path, fmt='', columns=None, \*\*kwargs)
Load dataframe from persistent storage.
Read this
for details.


* **Parameters**


* **path** (*str*) -- file path


* **fmt** (*str*) -- format hint can accept `parquet`, `csv`, `json`,
defaults to "", meaning to infer


* **columns** (*Any** | **None*) -- list of columns or a Schema like object, defaults to None


* **kwargs** (*Any*) -- 



* **Returns**

dataframe from the file



* **Return type**

WorkflowDataFrame



#### out_transform(\*dfs, using, params=None, pre_partition=None, ignore_errors=[], callback=None)
Transform dataframes using transformer, it materializes the execution
immediately and returns nothing

Please read [the Transformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/transformer.html)


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **using** (*Any*) -- transformer-like object, if it is a string, then it must be
the alias of a registered output transformer/cotransformer


* **schema** -- Schema like object, defaults to None. The transformer
will be able to access this value from
[`output_schema()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.output_schema)


* **params** (*Any** | **None*) -- Parameters like object to run the processor, defaults to None.
The transformer will be able to access this value from
[`params()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


* **pre_partition** (*Any** | **None*) -- Partition like object, defaults to None. It's
recommended to use the equivalent wayt, which is to call
`partition()` and then call `out_transform()` without this
parameter


* **ignore_errors** (*List**[**Any**]*) -- list of exception types the transformer can ignore,
defaults to empty list


* **callback** (*Any** | **None*) -- RPChandler like object, defaults to None



* **Return type**

None


**NOTE**: `transform()` can be lazy and will return the transformed dataframe,
`out_transform()` is guaranteed to execute immediately (eager) and
return nothing


#### output(\*dfs, using, params=None, pre_partition=None)
Run a outputter on dataframes.

Please read the
[Outputter Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/outputter.html)


* **Parameters**


* **using** (*Any*) -- outputter-like object, if it is a string, then it must be
the alias of a registered outputter


* **params** (*Any** | **None*) -- Parameters like object to run the outputter, defaults to None.
The outputter will be able to access this value from
[`params()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


* **pre_partition** (*Any** | **None*) -- Partition like object, defaults to None.
The outputter will be able to access this value from
[`partition_spec()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.partition_spec)


* **dfs** (*Any*) -- 



* **Return type**

None



#### process(\*dfs, using, schema=None, params=None, pre_partition=None)
Run a processor on the dataframes.

Please read the
[Processor Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/processor.html)


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **using** (*Any*) -- processor-like object, if it is a string, then it must be
the alias of a registered processor


* **schema** (*Any** | **None*) -- Schema like object, defaults to None. The processor
will be able to access this value from
[`output_schema()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.output_schema)


* **params** (*Any** | **None*) -- Parameters like object to run the processor, defaults to None.
The processor will be able to access this value from
[`params()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


* **pre_partition** (*Any** | **None*) -- Partition like object, defaults to None.
The processor will be able to access this value from
[`partition_spec()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.partition_spec)



* **Returns**

result dataframe



* **Return type**

*WorkflowDataFrame*



#### run(engine=None, conf=None, \*\*kwargs)
Execute the workflow and compute all dataframes.

**NOTE**: For inputs, please read
[`engine_context()`](../top_api.md#fugue.api.engine_context)


* **Parameters**


* **engine** (*Any** | **None*) -- object that can be recognized as an engine, defaults to None


* **conf** (*Any** | **None*) -- engine config, defaults to None


* **kwargs** (*Any*) -- additional parameters to initialize the execution engine



* **Returns**

the result set



* **Return type**

*FugueWorkflowResult*


Read
this
to learn how to run in different ways and pros and cons.


#### select(\*statements, sql_engine=None, sql_engine_params=None, dialect='spark')
Execute `SELECT` statement using
[`SQLEngine`](fugue.execution.md#fugue.execution.execution_engine.SQLEngine)


* **Parameters**


* **statements** (*Any*) -- a list of sub-statements in string
or `WorkflowDataFrame`


* **sql_engine** (*Any** | **None*) -- it can be empty string or null (use the default SQL
engine), a string (use the registered SQL engine), an
[`SQLEngine`](fugue.execution.md#fugue.execution.execution_engine.SQLEngine) type, or
the [`SQLEngine`](fugue.execution.md#fugue.execution.execution_engine.SQLEngine) instance
(you can use `None` to use the default one), defaults to None


* **sql_engine_params** (*Any** | **None*) -- 


* **dialect** (*str** | **None*) -- 



* **Returns**

result of the `SELECT` statement



* **Return type**

*WorkflowDataFrame*


Please read this
for more examples


#### set_op(how, \*dfs, distinct=True)
Union, subtract or intersect dataframes.


* **Parameters**


* **how** (*str*) -- can accept `union`, `left_semi`, `anti`, `left_anti`,
`inner`, `left_outer`, `right_outer`, `full_outer`, `cross`


* **dfs** (*Any*) -- DataFrames like object


* **distinct** (*bool*) -- whether to perform distinct after the set operation,
default to True



* **Returns**

result dataframe of the set operation



* **Return type**

*WorkflowDataFrame*


**NOTE**: Currently, all dataframes in `dfs` must have identical schema, otherwise
exception will be thrown.


#### show(\*dfs, n=10, with_count=False, title=None)
Show the dataframes.
See
examples.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **n** (*int*) -- max number of rows, defaults to 10


* **with_count** (*bool*) -- whether to show total count, defaults to False


* **title** (*str** | **None*) -- title to display on top of the dataframe, defaults to None


* **best_width** -- max width for the output table, defaults to 100



* **Return type**

None


**NOTE**: 
* When you call this method, it means you want the dataframe to be
printed when the workflow executes. So the dataframe won't show until
you run the workflow.


* When `with_count` is True, it can trigger expensive calculation for
a distributed dataframe. So if you call this function directly, you may
need to `persist()` the dataframe. Or you can
turn on Auto Persist


#### spec_uuid()
UUID of the workflow spec (description)


* **Return type**

str



#### subtract(\*dfs, distinct=True)
Subtract `dfs[1:]` from `dfs[0]`.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **distinct** (*bool*) -- whether to perform distinct after subtraction,
default to True



* **Returns**

subtracted dataframe



* **Return type**

*WorkflowDataFrame*


**NOTE**: Currently, all dataframes in `dfs` must have identical schema, otherwise
exception will be thrown.


#### transform(\*dfs, using, schema=None, params=None, pre_partition=None, ignore_errors=[], callback=None)
Transform dataframes using transformer.

Please read [the Transformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/transformer.html)


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **using** (*Any*) -- transformer-like object, if it is a string, then it must be
the alias of a registered transformer/cotransformer


* **schema** (*Any** | **None*) -- Schema like object, defaults to None. The transformer
will be able to access this value from
[`output_schema()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.output_schema)


* **params** (*Any** | **None*) -- Parameters like object to run the processor, defaults to None.
The transformer will be able to access this value from
[`params()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


* **pre_partition** (*Any** | **None*) -- Partition like object, defaults to None. It's
recommended to use the equivalent wayt, which is to call
`partition()` and then call `transform()` without this parameter


* **ignore_errors** (*List**[**Any**]*) -- list of exception types the transformer can ignore,
defaults to empty list


* **callback** (*Any** | **None*) -- RPChandler like object, defaults to None



* **Returns**

the transformed dataframe



* **Return type**

*WorkflowDataFrame*


**NOTE**: `transform()` can be lazy and will return the transformed dataframe,
`out_transform()` is guaranteed to execute immediately (eager) and
return nothing


#### union(\*dfs, distinct=True)
Union dataframes in `dfs`.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **distinct** (*bool*) -- whether to perform distinct after union,
default to True



* **Returns**

unioned dataframe



* **Return type**

*WorkflowDataFrame*


**NOTE**: Currently, all dataframes in `dfs` must have identical schema, otherwise
exception will be thrown.


#### _property_ yields(_: Dict[str, [Yielded](fugue.collections.md#fugue.collections.yielded.Yielded)_ )

#### zip(\*dfs, how='inner', partition=None, temp_path=None, to_file_threshold=-1)
Zip multiple dataframes together with given partition
specifications.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **how** (*str*) -- can accept `inner`, `left_outer`, `right_outer`,
`full_outer`, `cross`, defaults to `inner`


* **partition** (*Any** | **None*) -- Partition like object, defaults to None.


* **temp_path** (*str** | **None*) -- file path to store the data (used only if the serialized data
is larger than `to_file_threshold`), defaults to None


* **to_file_threshold** (*Any*) -- file byte size threshold, defaults to -1



* **Returns**

a zipped dataframe



* **Return type**

*WorkflowDataFrame*


**NOTE**: 
* If `dfs` is dict like, the zipped dataframe will be dict like,
If `dfs` is list like, the zipped dataframe will be list like


* It's fine to contain only one dataframe in `dfs`


### _class_ fugue.workflow.workflow.FugueWorkflowResult(yields)
Bases: [`DataFrames`](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)

The result object of `run()`. Users should not
construct this object.


* **Parameters**


* **DataFrames** -- yields of the workflow


* **yields** (*Dict**[**str**, *[*Yielded*](fugue.collections.md#fugue.collections.yielded.Yielded)*]*) -- 



#### _property_ yields(_: Dict[str, Any_ )

### _class_ fugue.workflow.workflow.WorkflowDataFrame(workflow, task)
Bases: [`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)

It represents the edges in the graph constructed by `FugueWorkflow`.
In Fugue, we use DAG to represent workflows, and the edges are strictly
dataframes. DAG construction and execution are different steps, this class is
used in the construction step. Although it inherits from
[`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame), it's not concerete data. So a
lot of the operations are not allowed. If you want to obtain the concrete
Fugue [`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame), use `compute()`
to execute the workflow.

Normally, you don't construct it by yourself, you will just use the methods of it.


* **Parameters**


* **workflow** (*FugueWorkflow*) -- the parent workflow it belongs to


* **task** (*FugueTask*) -- the task that generates this dataframe



#### aggregate(\*agg_cols, \*\*kwagg_cols)
Aggregate on dataframe


* **Parameters**


* **df** -- the dataframe to aggregate on


* **agg_cols** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)) -- aggregation expressions


* **kwagg_cols** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)) -- aggregation expressions to be renamed to the argument names


* **self** (*TDF*) -- 



* **Returns**

the aggregated result as a dataframe



* **Return type**

*TDF*



#### alter_columns(columns)
Change column types


* **Parameters**


* **columns** (*Any*) -- Schema like object


* **self** (*TDF*) -- 



* **Returns**

a new dataframe with the new column types



* **Return type**

`WorkflowDataFrame`


**NOTE**: The output dataframe will not change the order of original schema.


#### anti_join(\*dfs, on=None)
LEFT ANTI Join this dataframe with dataframes. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.join()`. Read Join tutorials on workflow and engine for details


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **on** (*Iterable**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys. Default to None


* **self** (*TDF*) -- 



* **Returns**

joined dataframe



* **Return type**

`WorkflowDataFrame`



#### as_array(columns=None, type_safe=False)

* **Raises**

**NotImplementedError** -- don't call this method



* **Parameters**


* **columns** (*List**[**str**] **| **None*) -- 


* **type_safe** (*bool*) -- 



* **Return type**

*List*[*Any*]



#### as_array_iterable(columns=None, type_safe=False)

* **Raises**

**NotImplementedError** -- don't call this method



* **Parameters**


* **columns** (*List**[**str**] **| **None*) -- 


* **type_safe** (*bool*) -- 



* **Return type**

*Iterable*[*Any*]



#### as_local()

* **Raises**

**NotImplementedError** -- don't call this method



* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### assert_eq(\*dfs, \*\*params)
Wrapper of `fugue.workflow.workflow.FugueWorkflow.assert_eq()` to
compare this dataframe with other dataframes.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **digits** -- precision on float number comparison, defaults to 8


* **check_order** -- if to compare the row orders, defaults to False


* **check_schema** -- if compare schemas, defaults to True


* **check_content** -- if to compare the row values, defaults to True


* **no_pandas** -- if true, it will compare the string representations of the
dataframes, otherwise, it will convert both to pandas dataframe to compare,
defaults to False


* **params** (*Any*) -- 



* **Raises**

**AssertionError** -- if not equal



* **Return type**

None



#### assert_not_eq(\*dfs, \*\*params)
Wrapper of `fugue.workflow.workflow.FugueWorkflow.assert_not_eq()` to
compare this dataframe with other dataframes.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **digits** -- precision on float number comparison, defaults to 8


* **check_order** -- if to compare the row orders, defaults to False


* **check_schema** -- if compare schemas, defaults to True


* **check_content** -- if to compare the row values, defaults to True


* **no_pandas** -- if true, it will compare the string representations of the
dataframes, otherwise, it will convert both to pandas dataframe to compare,
defaults to False


* **params** (*Any*) -- 



* **Raises**

**AssertionError** -- if any dataframe is equal to the first dataframe



* **Return type**

None



#### assign(\*args, \*\*kwargs)
Update existing columns with new values and add new columns


* **Parameters**


* **df** -- the dataframe to set columns


* **args** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)) -- column expressions


* **kwargs** (*Any*) -- column expressions to be renamed to the argument names,
if a value is not ColumnExpr, it will be treated as a literal


* **self** (*TDF*) -- 



* **Returns**

a new dataframe with the updated values



* **Return type**

*TDF*



#### broadcast()
Broadcast the current dataframe


* **Returns**

the broadcasted dataframe



* **Return type**

`WorkflowDataFrame`



* **Parameters**

**self** (*TDF*) -- 



#### checkpoint(storage_type='file')

* **Parameters**


* **self** (*TDF*) -- 


* **storage_type** (*str*) -- 



* **Return type**

*TDF*



#### compute(\*args, \*\*kwargs)
Trigger the parent workflow to
`run()` and to generate and cache
the result dataframe this instance represent.

**NOTE**: Consider using `fugue.workflow.workflow.FugueWorkflow.run()` instead.
Because this method actually triggers the entire workflow to run, so it may
be confusing to use this method because extra time may be taken to compute
unrelated dataframes.

```python
dag = FugueWorkflow()
df1 = dag.df([[0]],"a:int").transform(a_transformer)
df2 = dag.df([[0]],"b:int")

dag.run(SparkExecutionEngine)
df1.result.show()
df2.result.show()
```


* **Return type**

[*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)



#### count()

* **Raises**

**NotImplementedError** -- don't call this method



* **Return type**

int



#### cross_join(\*dfs)
CROSS Join this dataframe with dataframes. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.join()`. Read Join tutorials on workflow and engine for details


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **self** (*TDF*) -- 



* **Returns**

joined dataframe



* **Return type**

`WorkflowDataFrame`



#### deterministic_checkpoint(storage_type='file', lazy=False, partition=None, single=False, namespace=None, \*\*kwargs)
Cache the dataframe as a temporary file


* **Parameters**


* **storage_type** (*str*) -- can be either `file` or `table`, defaults to `file`


* **lazy** (*bool*) -- whether it is a lazy checkpoint, defaults to False (eager)


* **partition** (*Any** | **None*) -- Partition like object, defaults to None.


* **single** (*bool*) -- force the output as a single file, defaults to False


* **kwargs** (*Any*) -- paramteters for the underlying execution engine function


* **namespace** (*Any** | **None*) -- a value to control determinism, defaults to None.


* **self** (*TDF*) -- 



* **Returns**

the cached dataframe



* **Return type**

*TDF*


**NOTE**: The difference vs `strong_checkpoint()` is that this checkpoint is not
removed after execution, so it can take effect cross execution if the
dependent compute logic is not changed.


#### distinct()
Get distinct dataframe. Equivalent to `SELECT DISTINCT \* FROM df`


* **Returns**

dataframe with unique records



* **Parameters**

**self** (*TDF*) -- 



* **Return type**

*TDF*



#### drop(columns, if_exists=False)
Drop columns from the dataframe.


* **Parameters**


* **columns** (*List**[**str**]*) -- columns to drop


* **if_exists** (*bool*) -- if setting to True, it will ignore non-existent columns,
defaults to False


* **self** (*TDF*) -- 



* **Returns**

the dataframe after dropping columns



* **Return type**

`WorkflowDataFrame`



#### dropna(how='any', thresh=None, subset=None)
Drops records containing NA records


* **Parameters**


* **how** (*str*) -- 'any' or 'all'. 'any' drops rows that contain any nulls.
'all' drops rows that contain all nulls.


* **thresh** (*int** | **None*) -- int, drops rows that have less than thresh non-null values


* **subset** (*List**[**str**] **| **None*) -- list of columns to operate on


* **self** (*TDF*) -- 



* **Returns**

dataframe with incomplete records dropped



* **Return type**

*TDF*



#### _property_ empty(_: boo_ )

* **Raises**

**NotImplementedError** -- don't call this method



#### fillna(value, subset=None)
Fills NA values with replacement values


* **Parameters**


* **value** (*Any*) -- if scalar, fills all columns with same value.
if dictionary, fills NA using the keys as column names and the
values as the replacement values.


* **subset** (*List**[**str**] **| **None*) -- list of columns to operate on. ignored if value is
a dictionary


* **self** (*TDF*) -- 



* **Returns**

dataframe with NA records filled



* **Return type**

*TDF*



#### filter(condition)
Filter rows by the given condition


* **Parameters**


* **df** -- the dataframe to be filtered


* **condition** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)) -- (boolean) column expression


* **self** (*TDF*) -- 



* **Returns**

a new filtered dataframe



* **Return type**

*TDF*



#### full_outer_join(\*dfs, on=None)
CROSS Join this dataframe with dataframes. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.join()`. Read Join tutorials on workflow and engine for details


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **on** (*Iterable**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys. Default to None


* **self** (*TDF*) -- 



* **Returns**

joined dataframe



* **Return type**

`WorkflowDataFrame`



#### head(n, columns=None)
Get first n rows of the dataframe as a new local bounded dataframe


* **Parameters**


* **n** (*int*) -- number of rows


* **columns** (*List**[**str**] **| **None*) -- selected columns, defaults to None (all columns)



* **Returns**

a local bounded dataframe



* **Return type**

[*LocalBoundedDataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.LocalBoundedDataFrame)



#### inner_join(\*dfs, on=None)
INNER Join this dataframe with dataframes. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.join()`. Read Join tutorials on workflow and engine for details


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **on** (*Iterable**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys. Default to None


* **self** (*TDF*) -- 



* **Returns**

joined dataframe



* **Return type**

`WorkflowDataFrame`



#### intersect(\*dfs, distinct=True)
Intersect this dataframe with `dfs`.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **distinct** (*bool*) -- whether to perform distinct after intersection,
default to True


* **self** (*TDF*) -- 



* **Returns**

intersected dataframe



* **Return type**

*TDF*


**NOTE**: Currently, all dataframes in `dfs` must have identical schema, otherwise
exception will be thrown.


#### _property_ is_bounded(_: boo_ )

* **Raises**

**NotImplementedError** -- don't call this method



#### _property_ is_local(_: boo_ )

* **Raises**

**NotImplementedError** -- don't call this method



#### join(\*dfs, how, on=None)
Join this dataframe with dataframes. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.join()`. Read Join tutorials on workflow and engine for details


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **how** (*str*) -- can accept `semi`, `left_semi`, `anti`, `left_anti`,
`inner`, `left_outer`, `right_outer`, `full_outer`, `cross`


* **on** (*Iterable**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys. Default to None


* **self** (*TDF*) -- 



* **Returns**

joined dataframe



* **Return type**

`WorkflowDataFrame`



#### left_anti_join(\*dfs, on=None)
LEFT ANTI Join this dataframe with dataframes. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.join()`. Read Join tutorials on workflow and engine for details


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **on** (*Iterable**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys. Default to None


* **self** (*TDF*) -- 



* **Returns**

joined dataframe



* **Return type**

`WorkflowDataFrame`



#### left_outer_join(\*dfs, on=None)
LEFT OUTER Join this dataframe with dataframes. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.join()`. Read Join tutorials on workflow and engine for details


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **on** (*Iterable**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys. Default to None


* **self** (*TDF*) -- 



* **Returns**

joined dataframe



* **Return type**

`WorkflowDataFrame`



#### left_semi_join(\*dfs, on=None)
LEFT SEMI Join this dataframe with dataframes. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.join()`. Read Join tutorials on workflow and engine for details


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **on** (*Iterable**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys. Default to None


* **self** (*TDF*) -- 



* **Returns**

joined dataframe



* **Return type**

`WorkflowDataFrame`



#### _property_ name(_: st_ )
Name of its task spec


#### _property_ native(_: An_ )
The native object this Dataset class wraps


#### native_as_df()
The dataframe form of the native object this Dataset class wraps.
Dataframe form means the object contains schema information. For example
the native an ArrayDataFrame is a python array, it doesn't contain schema
information, and its `native_as_df` should be either a pandas dataframe
or an arrow dataframe.


* **Return type**

*Any*



#### _property_ num_partitions(_: in_ )

* **Raises**

**NotImplementedError** -- don't call this method



#### out_transform(using, params=None, pre_partition=None, ignore_errors=[], callback=None)
Transform this dataframe using transformer. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.out_transform()`

Please read [the Transformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/transformer.html)


* **Parameters**


* **using** (*Any*) -- transformer-like object, if it is a string, then it must be
the alias of a registered output transformer/cotransformer


* **params** (*Any** | **None*) -- Parameters like object to run the processor, defaults to None.
The transformer will be able to access this value from
[`params()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


* **pre_partition** (*Any** | **None*) -- Partition like object, defaults to None. It's
recommended to use the equivalent wayt, which is to call
`partition()` and then call `transform()` without this parameter


* **ignore_errors** (*List**[**Any**]*) -- list of exception types the transformer can ignore,
defaults to empty list


* **callback** (*Any** | **None*) -- RPChandler like object, defaults to None


* **self** (*TDF*) -- 



* **Return type**

None


**NOTE**: `transform()` can be lazy and will return the transformed dataframe,
`out_transform()` is guaranteed to execute immediately (eager) and
return nothing


#### output(using, params=None, pre_partition=None)
Run a outputter on this dataframe. It's a simple wrapper of
`fugue.workflow.workflow.FugueWorkflow.output()`

Please read the
[Outputter Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/outputter.html)


* **Parameters**


* **using** (*Any*) -- outputter-like object, if it is a string, then it must be
the alias of a registered outputter


* **params** (*Any** | **None*) -- Parameters like object to run the outputter, defaults to None.
The outputter will be able to access this value from
[`params()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


* **pre_partition** (*Any** | **None*) -- Partition like object, defaults to None.
The outputter will be able to access this value from
[`partition_spec()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.partition_spec)



* **Return type**

None



#### partition(\*args, \*\*kwargs)
Partition the current dataframe. Please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)


* **Parameters**


* **args** (*Any*) -- Partition like object


* **kwargs** (*Any*) -- Partition like object


* **self** (*TDF*) -- 



* **Returns**

dataframe with the partition hint



* **Return type**

`WorkflowDataFrame`


**NOTE**: Normally this step is fast because it's to add a partition hint
for the next step.


#### partition_by(\*keys, \*\*kwargs)
Partition the current dataframe by keys. Please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html).
This is a wrapper of `partition()`


* **Parameters**


* **keys** (*str*) -- partition keys


* **kwargs** (*Any*) -- Partition like object excluding `by` and `partition_by`


* **self** (*TDF*) -- 



* **Returns**

dataframe with the partition hint



* **Return type**

`WorkflowDataFrame`



#### _property_ partition_spec(_: [PartitionSpec](fugue.collections.md#fugue.collections.partition.PartitionSpec_ )
The partition spec set on the dataframe for next steps to use


#### peek_array()

* **Raises**

**NotImplementedError** -- don't call this method



* **Return type**

*List*[*Any*]



#### per_partition_by(\*keys)
Partition the current dataframe by keys so each physical partition contains
only one logical partition. Please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html).
This is a wrapper of `partition()`


* **Parameters**


* **keys** (*str*) -- partition keys


* **self** (*TDF*) -- 



* **Returns**

dataframe that is both logically and physically partitioned by `keys`



* **Return type**

`WorkflowDataFrame`


**NOTE**: This is a hint but not enforced, certain execution engines will not
respect this hint.


#### per_row()
Partition the current dataframe to one row per partition.
Please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html). This is a wrapper of `partition()`


* **Returns**

dataframe that is evenly partitioned by row count



* **Return type**

`WorkflowDataFrame`



* **Parameters**

**self** (*TDF*) -- 


**NOTE**: This is a hint but not enforced, certain execution engines will not
respect this hint.


#### persist()
Persist the current dataframe


* **Returns**

the persisted dataframe



* **Return type**

`WorkflowDataFrame`



* **Parameters**

**self** (*TDF*) -- 


**NOTE**: `persist` can only guarantee the persisted dataframe will be computed
for only once. However this doesn't mean the backend really breaks up the
execution dependency at the persisting point. Commonly, it doesn't cause
any issue, but if your execution graph is long, it may cause expected
problems for example, stack overflow.

`persist` method is considered as weak checkpoint. Sometimes, it may be
necessary to use strong checkpint, which is `checkpoint()`


#### process(using, schema=None, params=None, pre_partition=None)
Run a processor on this dataframe. It's a simple wrapper of
`fugue.workflow.workflow.FugueWorkflow.process()`

Please read the
[Processor Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/processor.html)


* **Parameters**


* **using** (*Any*) -- processor-like object, if it is a string, then it must be
the alias of a registered processor


* **schema** (*Any** | **None*) -- Schema like object, defaults to None. The processor
will be able to access this value from
[`output_schema()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.output_schema)


* **params** (*Any** | **None*) -- Parameters like object to run the processor, defaults to None.
The processor will be able to access this value from
[`params()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


* **pre_partition** (*Any** | **None*) -- Partition like object, defaults to None.
The processor will be able to access this value from
[`partition_spec()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.partition_spec)


* **self** (*TDF*) -- 



* **Returns**

result dataframe



* **Return type**

`WorkflowDataFrame`



#### rename(\*args, \*\*kwargs)
Rename the dataframe using a mapping dict


* **Parameters**


* **args** (*Any*) -- list of dicts containing rename maps


* **kwargs** (*Any*) -- rename map


* **self** (*TDF*) -- 



* **Returns**

a new dataframe with the new names



* **Return type**

`WorkflowDataFrame`


**NOTE**: This interface is more flexible than
[`fugue.dataframe.dataframe.DataFrame.rename()`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.rename)


#### _property_ result(_: [DataFrame](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame_ )
The concrete DataFrame obtained from `compute()`.
This property will not trigger compute again, but compute should
have been called earlier and the result is cached.


#### right_outer_join(\*dfs, on=None)
RIGHT OUTER Join this dataframe with dataframes. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.join()`. Read Join tutorials on workflow and engine for details


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **on** (*Iterable**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys. Default to None


* **self** (*TDF*) -- 



* **Returns**

joined dataframe



* **Return type**

`WorkflowDataFrame`



#### sample(n=None, frac=None, replace=False, seed=None)
Sample dataframe by number of rows or by fraction


* **Parameters**


* **n** (*int** | **None*) -- number of rows to sample, one and only one of `n` and `fact`
must be set


* **frac** (*float** | **None*) -- fraction [0,1] to sample, one and only one of `n` and `fact`
must be set


* **replace** (*bool*) -- whether replacement is allowed. With replacement,
there may be duplicated rows in the result, defaults to False


* **seed** (*int** | **None*) -- seed for randomness, defaults to None


* **self** (*TDF*) -- 



* **Returns**

sampled dataframe



* **Return type**

*TDF*



#### save(path, fmt='', mode='overwrite', partition=None, single=False, \*\*kwargs)
Save this dataframe to a persistent storage


* **Parameters**


* **path** (*str*) -- output path


* **fmt** (*str*) -- format hint can accept `parquet`, `csv`, `json`,
defaults to None, meaning to infer


* **mode** (*str*) -- can accept `overwrite`, `append`, `error`,
defaults to "overwrite"


* **partition** (*Any** | **None*) -- Partition like object, how to partition the
dataframe before saving, defaults to empty


* **single** (*bool*) -- force the output as a single file, defaults to False


* **kwargs** (*Any*) -- parameters to pass to the underlying framework



* **Return type**

None


For more details and examples, read
Save & Load.


#### save_and_use(path, fmt='', mode='overwrite', partition=None, single=False, \*\*kwargs)
Save this dataframe to a persistent storage and load back to use
in the following steps


* **Parameters**


* **path** (*str*) -- output path


* **fmt** (*str*) -- format hint can accept `parquet`, `csv`, `json`,
defaults to None, meaning to infer


* **mode** (*str*) -- can accept `overwrite`, `append`, `error`,
defaults to "overwrite"


* **partition** (*Any** | **None*) -- Partition like object, how to partition the
dataframe before saving, defaults to empty


* **single** (*bool*) -- force the output as a single file, defaults to False


* **kwargs** (*Any*) -- parameters to pass to the underlying framework


* **self** (*TDF*) -- 



* **Return type**

*TDF*


For more details and examples, read
Save & Load.


#### _property_ schema(_: [Schema](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema_ )

* **Raises**

**NotImplementedError** -- don't call this method



#### select(\*columns, where=None, having=None, distinct=False)
The functional interface for SQL select statement


* **Parameters**


* **columns** (*str** | *[*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)) -- column expressions, for strings they will represent
the column names


* **where** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)* | **None*) -- `WHERE` condition expression, defaults to None


* **having** ([*ColumnExpr*](fugue.column.md#fugue.column.expressions.ColumnExpr)* | **None*) -- `having` condition expression, defaults to None. It
is used when `cols` contains aggregation columns, defaults to None


* **distinct** (*bool*) -- whether to return distinct result, defaults to False


* **self** (*TDF*) -- 



* **Returns**

the select result as a new dataframe



* **Return type**

*TDF*



#### semi_join(\*dfs, on=None)
LEFT SEMI Join this dataframe with dataframes. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.join()`. Read Join tutorials on workflow and engine for details


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **on** (*Iterable**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
validated against the inferred keys. Default to None


* **self** (*TDF*) -- 



* **Returns**

joined dataframe



* **Return type**

`WorkflowDataFrame`



#### show(n=10, with_count=False, title=None, best_width=100)
Show the dataframe.
See
examples.


* **Parameters**


* **n** (*int*) -- max number of rows, defaults to 10


* **with_count** (*bool*) -- whether to show total count, defaults to False


* **title** (*str** | **None*) -- title to display on top of the dataframe, defaults to None


* **best_width** (*int*) -- max width for the output table, defaults to 100



* **Return type**

None


**NOTE**: 
* When you call this method, it means you want the dataframe to be
printed when the workflow executes. So the dataframe won't show until
you run the workflow.


* When `with_count` is True, it can trigger expensive calculation for
a distributed dataframe. So if you call this function directly, you may
need to `persist()` the dataframe. Or you can turn on
tutorial:tutorials/advanced/useful_config:auto persist


#### spec_uuid()
UUID of its task spec


* **Return type**

str



#### strong_checkpoint(storage_type='file', lazy=False, partition=None, single=False, \*\*kwargs)
Cache the dataframe as a temporary file


* **Parameters**


* **storage_type** (*str*) -- can be either `file` or `table`, defaults to `file`


* **lazy** (*bool*) -- whether it is a lazy checkpoint, defaults to False (eager)


* **partition** (*Any** | **None*) -- Partition like object, defaults to None.


* **single** (*bool*) -- force the output as a single file, defaults to False


* **kwargs** (*Any*) -- paramteters for the underlying execution engine function


* **self** (*TDF*) -- 



* **Returns**

the cached dataframe



* **Return type**

*TDF*


**NOTE**: Strong checkpoint guarantees the output dataframe compute dependency is
from the temporary file. Use strong checkpoint only when
`weak_checkpoint()` can't be used.

Strong checkpoint file will be removed after the execution of the workflow.


#### subtract(\*dfs, distinct=True)
Subtract `dfs` from this dataframe.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **distinct** (*bool*) -- whether to perform distinct after subtraction,
default to True


* **self** (*TDF*) -- 



* **Returns**

subtracted dataframe



* **Return type**

*TDF*


**NOTE**: Currently, all dataframes in `dfs` must have identical schema, otherwise
exception will be thrown.


#### take(n, presort=None, na_position='last')
Get the first n rows of a DataFrame per partition. If a presort is defined,
use the presort before applying take. presort overrides partition_spec.presort


* **Parameters**


* **n** (*int*) -- number of rows to return


* **presort** (*str** | **None*) -- presort expression similar to partition presort


* **na_position** (*str*) -- position of null values during the presort.
can accept `first` or `last`


* **self** (*TDF*) -- 



* **Returns**

n rows of DataFrame per partition



* **Return type**

*TDF*



#### transform(using, schema=None, params=None, pre_partition=None, ignore_errors=[], callback=None)
Transform this dataframe using transformer. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.transform()`

Please read [the Transformer Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/extensions/transformer.html)


* **Parameters**


* **using** (*Any*) -- transformer-like object, if it is a string, then it must be
the alias of a registered transformer/cotransformer


* **schema** (*Any** | **None*) -- Schema like object, defaults to None. The transformer
will be able to access this value from
[`output_schema()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.output_schema)


* **params** (*Any** | **None*) -- Parameters like object to run the processor, defaults to None.
The transformer will be able to access this value from
[`params()`](fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


* **pre_partition** (*Any** | **None*) -- Partition like object, defaults to None. It's
recommended to use the equivalent wayt, which is to call
`partition()` and then call `transform()` without this parameter


* **ignore_errors** (*List**[**Any**]*) -- list of exception types the transformer can ignore,
defaults to empty list


* **callback** (*Any** | **None*) -- RPChandler like object, defaults to None


* **self** (*TDF*) -- 



* **Returns**

the transformed dataframe



* **Return type**

`WorkflowDataFrame`


**NOTE**: `transform()` can be lazy and will return the transformed dataframe,
`out_transform()` is guaranteed to execute immediately (eager) and
return nothing


#### union(\*dfs, distinct=True)
Union this dataframe with `dfs`.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **distinct** (*bool*) -- whether to perform distinct after union,
default to True


* **self** (*TDF*) -- 



* **Returns**

unioned dataframe



* **Return type**

*TDF*


**NOTE**: Currently, all dataframes in `dfs` must have identical schema, otherwise
exception will be thrown.


#### weak_checkpoint(lazy=False, \*\*kwargs)
Cache the dataframe in memory


* **Parameters**


* **lazy** (*bool*) -- whether it is a lazy checkpoint, defaults to False (eager)


* **kwargs** (*Any*) -- paramteters for the underlying execution engine function


* **self** (*TDF*) -- 



* **Returns**

the cached dataframe



* **Return type**

*TDF*


**NOTE**: Weak checkpoint in most cases is the best choice for caching a dataframe to
avoid duplicated computation. However it does not guarantee to break up the
the compute dependency for this dataframe, so when you have very complicated
compute, you may encounter issues such as stack overflow. Also, weak
checkpoint normally caches the dataframe in memory, if memory is a concern,
then you should consider `strong_checkpoint()`


#### _property_ workflow(_: FugueWorkflo_ )
The parent workflow


#### yield_dataframe_as(name, as_local=False)
Yield a dataframe that can be accessed without
the current execution engine


* **Parameters**


* **name** (*str*) -- the name of the yielded dataframe


* **as_local** (*bool*) -- yield the local version of the dataframe


* **self** (*TDF*) -- 



* **Return type**

None


**NOTE**: When `as_local` is True, it can trigger an additional compute
to do the conversion. To avoid recompute, you should add
`persist` before yielding.


#### yield_file_as(name)
Cache the dataframe in file


* **Parameters**


* **name** (*str*) -- the name of the yielded dataframe


* **self** (*TDF*) -- 



* **Return type**

None


**NOTE**: In only the following cases you can yield file/table:


* you have not checkpointed (persisted) the dataframe, for example
`df.yield_file_as("a")`


* you have used `deterministic_checkpoint()`, for example
`df.deterministic_checkpoint().yield_file_as("a")`


* yield is workflow, compile level logic

For the first case, the yield will also be a strong checkpoint so
whenever you yield a dataframe as a file, the dataframe has been saved as a
file and loaded back as a new dataframe.


#### yield_table_as(name)
Cache the dataframe as a table


* **Parameters**


* **name** (*str*) -- the name of the yielded dataframe


* **self** (*TDF*) -- 



* **Return type**

None


**NOTE**: In only the following cases you can yield file/table:


* you have not checkpointed (persisted) the dataframe, for example
`df.yield_file_as("a")`


* you have used `deterministic_checkpoint()`, for example
`df.deterministic_checkpoint().yield_file_as("a")`


* yield is workflow, compile level logic

For the first case, the yield will also be a strong checkpoint so
whenever you yield a dataframe as a file, the dataframe has been saved as a
file and loaded back as a new dataframe.


#### zip(\*dfs, how='inner', partition=None, temp_path=None, to_file_threshold=-1)
Zip this data frame with multiple dataframes together
with given partition specifications. It's a wrapper of
`fugue.workflow.workflow.FugueWorkflow.zip()`.


* **Parameters**


* **dfs** (*Any*) -- DataFrames like object


* **how** (*str*) -- can accept `inner`, `left_outer`, `right_outer`,
`full_outer`, `cross`, defaults to `inner`


* **partition** (*Any** | **None*) -- Partition like object, defaults to None.


* **temp_path** (*str** | **None*) -- file path to store the data (used only if the serialized data
is larger than `to_file_threshold`), defaults to None


* **to_file_threshold** (*Any*) -- file byte size threshold, defaults to -1


* **self** (*TDF*) -- 



* **Returns**

a zipped dataframe



* **Return type**

`WorkflowDataFrame`


**NOTE**: 
* `dfs` must be list like, the zipped dataframe will be list like


* `dfs` is fine to be empty


* If you want dict-like zip, use
`fugue.workflow.workflow.FugueWorkflow.zip()`


### _class_ fugue.workflow.workflow.WorkflowDataFrames(\*args, \*\*kwargs)
Bases: [`DataFrames`](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)

Ordered dictionary of WorkflowDataFrames. There are two modes: with keys
and without keys. If without key `_<n>` will be used as the key
for each dataframe, and it will be treated as an array in Fugue framework.

It's immutable, once initialized, you can't add or remove element from it.

It's a subclass of
[`DataFrames`](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames), but different from
DataFrames, in the initialization you should always use
`WorkflowDataFrame`, and they should all
come from the same `FugueWorkflow`.


* **Parameters**


* **args** (*Any*) -- 


* **kwargs** (*Any*) -- 



#### _property_ workflow(_: FugueWorkflo_ )
The parent workflow
