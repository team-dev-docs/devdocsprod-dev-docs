# fugue.dataframe

## fugue.dataframe.api


### fugue.dataframe.api.get_native_as_df(df)
Return the dataframe form of the input `df`.
If `df` is a `DataFrame`, then call the
`native_as_df()`, otherwise, it depends on whether there is
a correspondent function handling it.


* **Parameters**

    **df** (*AnyDataFrame*) -- 



* **Return type**

    *AnyDataFrame*



### fugue.dataframe.api.normalize_column_names(df)
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


## fugue.dataframe.array_dataframe


### _class_ fugue.dataframe.array_dataframe.ArrayDataFrame(df=None, schema=None)
Bases: `LocalBoundedDataFrame`

DataFrame that wraps native python 2-dimensional arrays. Please read
the DataFrame Tutorial to understand the concept


* **Parameters**

    
    * **df** (*Any*) -- 2-dimensional array, iterable of arrays, or
    `DataFrame`


    * **schema** (*Any*) -- Schema like object



#### alter_columns(columns)
Change column types


* **Parameters**

    **columns** (*Any*) -- Schema like object,
    all columns should be contained by the dataframe schema



* **Returns**

    a new dataframe with altered columns, the order of the
    original schema will not change



* **Return type**

    *DataFrame*



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

    *LocalBoundedDataFrame*



#### _property_ native(_: List[Any_ )
2-dimensional native python array


#### peek_array()
Peek the first row of the dataframe as array


* **Raises**

    [**FugueDatasetEmptyError**](fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

    *List*[*Any*]



#### rename(columns)
Rename the dataframe using a mapping dict


* **Parameters**

    **columns** (*Dict**[**str**, **str**]*) -- key: the original column name, value: the new name



* **Returns**

    a new dataframe with the new names



* **Return type**

    *DataFrame*


## fugue.dataframe.arrow_dataframe


### _class_ fugue.dataframe.arrow_dataframe.ArrowDataFrame(df=None, schema=None, pandas_df_wrapper=False)
Bases: `LocalBoundedDataFrame`

DataFrame that wraps [`pyarrow.Table`](https://arrow.apache.org/docs/python/generated/pyarrow.table.html#pyarrow.table). Please also read
the DataFrame Tutorial to understand this Fugue concept


* **Parameters**

    
    * **df** (*Any*) -- 2-dimensional array, iterable of arrays,
    [`pyarrow.Table`](https://arrow.apache.org/docs/python/generated/pyarrow.table.html#pyarrow.table) or pandas DataFrame


    * **schema** (*Any*) -- Schema like object


    * **pandas_df_wrapper** (*bool*) -- 



#### alter_columns(columns)
Change column types


* **Parameters**

    **columns** (*Any*) -- Schema like object,
    all columns should be contained by the dataframe schema



* **Returns**

    a new dataframe with altered columns, the order of the
    original schema will not change



* **Return type**

    *DataFrame*



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

    *LocalBoundedDataFrame*



#### _property_ native(_: [Table](https://arrow.apache.org/docs/python/generated/pyarrow.Table.html#pyarrow.Table_ )
[`pyarrow.Table`](https://arrow.apache.org/docs/python/generated/pyarrow.table.html#pyarrow.table)


#### native_as_df()
The dataframe form of the native object this Dataset class wraps.
Dataframe form means the object contains schema information. For example
the native an ArrayDataFrame is a python array, it doesn't contain schema
information, and its `native_as_df` should be either a pandas dataframe
or an arrow dataframe.


* **Return type**

    [*Table*](https://arrow.apache.org/docs/python/generated/pyarrow.Table.html#pyarrow.Table)



#### peek_array()
Peek the first row of the dataframe as array


* **Raises**

    [**FugueDatasetEmptyError**](fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

    *List*[*Any*]



#### peek_dict()
Peek the first row of the dataframe as dict


* **Raises**

    [**FugueDatasetEmptyError**](fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

    *Dict*[str, *Any*]



#### rename(columns)
Rename the dataframe using a mapping dict


* **Parameters**

    **columns** (*Dict**[**str**, **str**]*) -- key: the original column name, value: the new name



* **Returns**

    a new dataframe with the new names



* **Return type**

    *DataFrame*


## fugue.dataframe.dataframe


### _class_ fugue.dataframe.dataframe.DataFrame(schema=None)
Bases: [`Dataset`](fugue.dataset.md#fugue.dataset.dataset.Dataset)

Base class of Fugue DataFrame. Please read
the DataFrame Tutorial to understand the concept


* **Parameters**

    **schema** (*Any*) -- Schema like object


**NOTE**: This is an abstract class, and normally you don't construct it by yourself
unless you are
implementing a new [`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)


#### _abstract_ alter_columns(columns)
Change column types


* **Parameters**

    **columns** (*Any*) -- Schema like object,
    all columns should be contained by the dataframe schema



* **Returns**

    a new dataframe with altered columns, the order of the
    original schema will not change



* **Return type**

    *DataFrame*



#### _abstract_ as_array(columns=None, type_safe=False)
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


#### _abstract_ as_array_iterable(columns=None, type_safe=False)
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



#### as_dict_iterable(columns=None)
Convert to iterable of native python dicts


* **Parameters**

    **columns** (*List**[**str**] **| **None*) -- columns to extract, defaults to None



* **Returns**

    iterable of native python dicts



* **Return type**

    *Iterable*[*Dict*[str, *Any*]]


**NOTE**: The default implementation enforces `type_safe` True


#### _abstract_ as_local()
Convert this dataframe to a `LocalDataFrame`


* **Return type**

    *LocalDataFrame*



#### as_pandas()
Convert to pandas DataFrame


* **Return type**

    [*DataFrame*](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html#pandas.DataFrame)



#### _property_ columns(_: List[str_ )
The column names of the dataframe


#### drop(columns)
Drop certain columns and return a new dataframe


* **Parameters**

    **columns** (*List**[**str**]*) -- columns to drop



* **Raises**

    [**FugueDataFrameOperationError**](fugue.md#fugue.exceptions.FugueDataFrameOperationError) -- if
    `columns` are not strictly contained by this dataframe, or it is the
    entire dataframe columns



* **Returns**

    a new dataframe removing the columns



* **Return type**

    *DataFrame*



#### get_info_str()
Get dataframe information (schema, type, metadata) as json string


* **Returns**

    json string



* **Return type**

    str



#### _abstract_ head(n, columns=None)
Get first n rows of the dataframe as a new local bounded dataframe


* **Parameters**

    
    * **n** (*int*) -- number of rows


    * **columns** (*List**[**str**] **| **None*) -- selected columns, defaults to None (all columns)



* **Returns**

    a local bounded dataframe



* **Return type**

    *LocalBoundedDataFrame*



#### _abstract_ native_as_df()
The dataframe form of the native object this Dataset class wraps.
Dataframe form means the object contains schema information. For example
the native an ArrayDataFrame is a python array, it doesn't contain schema
information, and its `native_as_df` should be either a pandas dataframe
or an arrow dataframe.


* **Return type**

    *AnyDataFrame*



#### _abstract_ peek_array()
Peek the first row of the dataframe as array


* **Raises**

    [**FugueDatasetEmptyError**](fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

    *List*[*Any*]



#### peek_dict()
Peek the first row of the dataframe as dict


* **Raises**

    [**FugueDatasetEmptyError**](fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

    *Dict*[str, *Any*]



#### _abstract_ rename(columns)
Rename the dataframe using a mapping dict


* **Parameters**

    **columns** (*Dict**[**str**, **str**]*) -- key: the original column name, value: the new name



* **Returns**

    a new dataframe with the new names



* **Return type**

    *DataFrame*



#### _property_ schema(_: [Schema](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema_ )
The schema of the dataframe


#### _property_ schema_discovered(_: [Schema](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema_ )
Whether the schema has been discovered or still a lambda


### _class_ fugue.dataframe.dataframe.DataFrameDisplay(ds)
Bases: [`DatasetDisplay`](fugue.dataset.md#fugue.dataset.dataset.DatasetDisplay)

`DataFrame` plain display class


* **Parameters**

    **ds** ([*Dataset*](fugue.dataset.md#fugue.dataset.dataset.Dataset)) -- 



#### _property_ df(_: DataFram_ )
The target `DataFrame`


#### show(n=10, with_count=False, title=None)
Show the [`Dataset`](fugue.dataset.md#fugue.dataset.dataset.Dataset)


* **Parameters**

    
    * **n** (*int*) -- top n items to display, defaults to 10


    * **with_count** (*bool*) -- whether to display the total count, defaults to False


    * **title** (*str** | **None*) -- title to display, defaults to None



* **Return type**

    None



### _class_ fugue.dataframe.dataframe.LocalBoundedDataFrame(schema=None)
Bases: `LocalDataFrame`

Base class of all local bounded dataframes. Please read
this
to understand the concept


* **Parameters**

    **schema** (*Any*) -- Schema like object


**NOTE**: This is an abstract class, and normally you don't construct it by yourself
unless you are
implementing a new [`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)


#### _property_ is_bounded(_: boo_ )
Always True because it's a bounded dataframe


### _class_ fugue.dataframe.dataframe.LocalDataFrame(schema=None)
Bases: `DataFrame`

Base class of all local dataframes. Please read
this
to understand the concept


* **Parameters**

    **schema** (*Any*) -- a [schema-like](triad.collections.schema.Schema) object


**NOTE**: This is an abstract class, and normally you don't construct it by yourself
unless you are
implementing a new [`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)


#### as_local()
Always return self, because it's a LocalDataFrame


* **Return type**

    *LocalDataFrame*



#### _property_ is_local(_: boo_ )
Always True because it's a LocalDataFrame


#### native_as_df()
The dataframe form of the native object this Dataset class wraps.
Dataframe form means the object contains schema information. For example
the native an ArrayDataFrame is a python array, it doesn't contain schema
information, and its `native_as_df` should be either a pandas dataframe
or an arrow dataframe.


* **Return type**

    *AnyDataFrame*



#### _property_ num_partitions(_: in_ )
Always 1 because it's a LocalDataFrame


### _class_ fugue.dataframe.dataframe.LocalUnboundedDataFrame(schema=None)
Bases: `LocalDataFrame`

Base class of all local unbounded dataframes. Read
this <[https://fugue-tutorials.readthedocs.io/](https://fugue-tutorials.readthedocs.io/)
en/latest/tutorials/advanced/schema_dataframes.html#DataFrame>\`_
to understand the concept


* **Parameters**

    **schema** (*Any*) -- Schema like object


**NOTE**: This is an abstract class, and normally you don't construct it by yourself
unless you are
implementing a new [`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)


#### count()

* **Raises**

    **InvalidOperationError** -- You can't count an unbounded dataframe



* **Return type**

    int



#### _property_ is_bounded()
Always False because it's an unbounded dataframe


### _class_ fugue.dataframe.dataframe.YieldedDataFrame(yid)
Bases: [`Yielded`](fugue.collections.md#fugue.collections.yielded.Yielded)

Yielded dataframe from [`FugueWorkflow`](fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow).
Users shouldn't create this object directly.


* **Parameters**

    **yid** (*str*) -- unique id for determinism



#### _property_ is_set(_: boo_ )
Whether the value is set. It can be false if the parent workflow
has not been executed.


#### _property_ result(_: DataFram_ )
The yielded dataframe, it will be set after the parent
workflow is computed


#### set_value(df)
Set the yielded dataframe after compute. Users should not
call it.


* **Parameters**

    
    * **path** -- file path


    * **df** (*DataFrame*) -- 



* **Return type**

    None



### fugue.dataframe.dataframe.as_fugue_df(df, \*\*kwargs)
Wrap the object as a Fugue DataFrame.


* **Parameters**

    
    * **df** (*AnyDataFrame*) -- the object to wrap


    * **kwargs** (*Any*) -- 



* **Return type**

    *DataFrame*


## fugue.dataframe.dataframe_iterable_dataframe


### _class_ fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame(df=None, schema=None)
Bases: `LocalUnboundedDataFrame`

DataFrame that wraps an iterable of local dataframes


* **Parameters**

    
    * **df** (*Any*) -- an iterable of
    `DataFrame`. If any is not local,
    they will be converted to `LocalDataFrame`
    by `as_local()`


    * **schema** (*Any*) -- Schema like object, if it is provided, it must match the schema
    of the dataframes


**NOTE**: It's ok to peek the dataframe, it will not affect the iteration, but it's
invalid to count.

`schema` can be used when the iterable contains no dataframe. But if there
is any dataframe, `schema` must match the schema of the dataframes.

For the iterable of dataframes, if there is any empty dataframe, they will
be skipped and their schema will not matter. However, if all dataframes
in the interable are empty, then the last empty dataframe will be used to
set the schema.


#### alter_columns(columns)
Change column types


* **Parameters**

    **columns** (*Any*) -- Schema like object,
    all columns should be contained by the dataframe schema



* **Returns**

    a new dataframe with altered columns, the order of the
    original schema will not change



* **Return type**

    *DataFrame*



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



#### as_pandas()
Convert to pandas DataFrame


* **Return type**

    [*DataFrame*](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html#pandas.DataFrame)



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

    *LocalBoundedDataFrame*



#### _property_ native(_: [EmptyAwareIterable](https://triad.readthedocs.io/en/latest/api/triad.utils.html#triad.utils.iter.EmptyAwareIterable)[LocalDataFrame_ )
Iterable of dataframes


#### peek_array()
Peek the first row of the dataframe as array


* **Raises**

    [**FugueDatasetEmptyError**](fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

    *List*[*Any*]



#### rename(columns)
Rename the dataframe using a mapping dict


* **Parameters**

    **columns** (*Dict**[**str**, **str**]*) -- key: the original column name, value: the new name



* **Returns**

    a new dataframe with the new names



* **Return type**

    *DataFrame*


## fugue.dataframe.dataframes


### _class_ fugue.dataframe.dataframes.DataFrames(\*args, \*\*kwargs)
Bases: [`IndexedOrderedDict`](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.IndexedOrderedDict)[`str`, `DataFrame`]

Ordered dictionary of DataFrames. There are two modes: with keys
and without keys. If without key `_<n>` will be used as the key
for each dataframe, and it will be treated as an array in Fugue framework.

It's a subclass of dict, so it supports all dict operations. It's
also ordered, so you can trust the order of keys and values.

The initialization is flexible

```python
>>> df1 = ArrayDataFrame([[0]],"a:int")
>>> df2 = ArrayDataFrame([[1]],"a:int")
>>> dfs = DataFrames(df1,df2)  # init as [df1, df2]
>>> assert not dfs.has_key
>>> assert df1 is dfs[0] and df2 is dfs[1]
>>> dfs_array = list(dfs.values())
>>> dfs = DataFrames(a=df1,b=df2)  # init as {a:df1, b:df2}
>>> assert dfs.has_key
>>> assert df1 is dfs[0] and df2 is dfs[1]  # order is guaranteed
>>> df3 = ArrayDataFrame([[1]],"b:int")
>>> dfs2 = DataFrames(dfs, c=df3)  # {a:df1, b:df2, c:df3}
>>> dfs2 = DataFrames(dfs, df3)  # invalid, because dfs has key, df3 doesn't
>>> dfs2 = DataFrames(dict(a=df1,b=df2))  # init as {a:df1, b:df2}
>>> dfs2 = DataFrames([df1,df2],df3)  # init as [df1, df2, df3]
```


* **Parameters**

    
    * **args** (*Any*) -- 


    * **kwargs** (*Any*) -- 



#### convert(func)
Create another DataFrames with the same structure,
but all converted by `func`


* **Returns**

    the new DataFrames



* **Parameters**

    **func** (*Callable**[**[**DataFrame**]**, **DataFrame**]*) -- 



* **Return type**

    *DataFrames*



#### _property_ has_key()
If this collection has key (dict-like) or not (list-like)

## fugue.dataframe.iterable_dataframe


### _class_ fugue.dataframe.iterable_dataframe.IterableDataFrame(df=None, schema=None)
Bases: `LocalUnboundedDataFrame`

DataFrame that wraps native python iterable of arrays. Please read
the DataFrame Tutorial to understand the concept


* **Parameters**

    
    * **df** (*Any*) -- 2-dimensional array, iterable of arrays, or
    `DataFrame`


    * **schema** (*Any*) -- Schema like object


**NOTE**: It's ok to peek the dataframe, it will not affect the iteration, but it's
invalid operation to count


#### alter_columns(columns)
Change column types


* **Parameters**

    **columns** (*Any*) -- Schema like object,
    all columns should be contained by the dataframe schema



* **Returns**

    a new dataframe with altered columns, the order of the
    original schema will not change



* **Return type**

    *DataFrame*



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

    *LocalBoundedDataFrame*



#### _property_ native(_: [EmptyAwareIterable](https://triad.readthedocs.io/en/latest/api/triad.utils.html#triad.utils.iter.EmptyAwareIterable)[Any_ )
Iterable of native python arrays


#### peek_array()
Peek the first row of the dataframe as array


* **Raises**

    [**FugueDatasetEmptyError**](fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

    *List*[*Any*]



#### rename(columns)
Rename the dataframe using a mapping dict


* **Parameters**

    **columns** (*Dict**[**str**, **str**]*) -- key: the original column name, value: the new name



* **Returns**

    a new dataframe with the new names



* **Return type**

    *DataFrame*


## fugue.dataframe.pandas_dataframe


### _class_ fugue.dataframe.pandas_dataframe.PandasDataFrame(df=None, schema=None, pandas_df_wrapper=False)
Bases: `LocalBoundedDataFrame`

DataFrame that wraps pandas DataFrame. Please also read
the DataFrame Tutorial to understand this Fugue concept


* **Parameters**

    
    * **df** (*Any*) -- 2-dimensional array, iterable of arrays or pandas DataFrame


    * **schema** (*Any*) -- Schema like object


    * **pandas_df_wrapper** (*bool*) -- if this is a simple wrapper, default False


**NOTE**: If `pandas_df_wrapper` is True, then the constructor will not do any type
check otherwise, it will enforce type according to the input schema after
the construction


#### alter_columns(columns)
Change column types


* **Parameters**

    **columns** (*Any*) -- Schema like object,
    all columns should be contained by the dataframe schema



* **Returns**

    a new dataframe with altered columns, the order of the
    original schema will not change



* **Return type**

    *DataFrame*



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

    *LocalBoundedDataFrame*



#### _property_ native(_: [DataFrame](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html#pandas.DataFrame_ )
Pandas DataFrame


#### native_as_df()
The dataframe form of the native object this Dataset class wraps.
Dataframe form means the object contains schema information. For example
the native an ArrayDataFrame is a python array, it doesn't contain schema
information, and its `native_as_df` should be either a pandas dataframe
or an arrow dataframe.


* **Return type**

    [*DataFrame*](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html#pandas.DataFrame)



#### peek_array()
Peek the first row of the dataframe as array


* **Raises**

    [**FugueDatasetEmptyError**](fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

    *List*[*Any*]



#### rename(columns)
Rename the dataframe using a mapping dict


* **Parameters**

    **columns** (*Dict**[**str**, **str**]*) -- key: the original column name, value: the new name



* **Returns**

    a new dataframe with the new names



* **Return type**

    *DataFrame*


## fugue.dataframe.utils


### fugue.dataframe.utils.deserialize_df(json_str, fs=None)
Deserialize json string to
`LocalBoundedDataFrame`


* **Parameters**

    
    * **json_str** (*str*) -- json string containing the base64 data or a file path


    * **fs** ([*FileSystem*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.fs.FileSystem)* | **None*) -- [`FileSystem`](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.fs.FileSystem), defaults to None



* **Raises**

    **ValueError** -- if the json string is invalid, not generated from
    `serialize_df()`



* **Returns**

    `LocalBoundedDataFrame` if `json_str`
    contains a dataframe or None if its valid but contains no data



* **Return type**

    *LocalBoundedDataFrame* | None



### fugue.dataframe.utils.get_join_schemas(df1, df2, how, on)
Get [`Schema`](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema) object after
joining `df1` and `df2`. If `on` is not empty, it's mainly for
validation purpose.


* **Parameters**

    
    * **df1** (*DataFrame*) -- first dataframe


    * **df2** (*DataFrame*) -- second dataframe


    * **how** (*str*) -- can accept `semi`, `left_semi`, `anti`, `left_anti`,
    `inner`, `left_outer`, `right_outer`, `full_outer`, `cross`


    * **on** (*Iterable**[**str**] **| **None*) -- it can always be inferred, but if you provide, it will be
    validated agained the inferred keys.



* **Returns**

    the pair key schema and schema after join



* **Return type**

    *Tuple*[[*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema), [*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)]


**NOTE**: In Fugue, joined schema can always be inferred because it always uses the
input dataframes' common keys as the join keys. So you must make sure to
`rename()` to input dataframes so
they follow this rule.


### fugue.dataframe.utils.pickle_df(df)
Pickles a dataframe to bytes array. It firstly converts the dataframe
using `to_local_bounded_df()`, and then serialize the underlying data.


* **Parameters**

    **df** (*DataFrame*) -- input DataFrame



* **Returns**

    pickled binary data



* **Return type**

    bytes


**NOTE**: Be careful to use on large dataframes or non-local, un-materialized dataframes,
it can be slow. You should always use `unpickle_df()` to deserialize.


### fugue.dataframe.utils.serialize_df(df, threshold=-1, file_path=None, fs=None)
Serialize input dataframe to base64 string or to file
if it's larger than threshold


* **Parameters**

    
    * **df** (*DataFrame** | **None*) -- input DataFrame


    * **threshold** (*int*) -- file byte size threshold, defaults to -1


    * **file_path** (*str** | **None*) -- file path to store the data (used only if the serialized data
    is larger than `threshold`), defaults to None


    * **fs** ([*FileSystem*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.fs.FileSystem)* | **None*) -- [`FileSystem`](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.fs.FileSystem), defaults to None



* **Raises**

    **InvalidOperationError** -- if file is large but `file_path` is not provided



* **Returns**

    a json string either containing the base64 data or the file path



* **Return type**

    str


**NOTE**: If fs is not provided but it needs to write to disk, then it will use
[`open_fs()`](https://docs.pyfilesystem.org/en/latest/reference/opener.html#fs.opener.registry.Registry.open_fs) to try to open the file to
write.


### fugue.dataframe.utils.to_local_bounded_df(df, schema=None)
Convert a data structure to
`LocalBoundedDataFrame`


* **Parameters**

    
    * **df** (*Any*) -- `DataFrame`, pandas DataFramme and
    list or iterable of arrays


    * **schema** (*Any** | **None*) -- Schema like object, defaults to None, it should not be set for
    `DataFrame` type



* **Raises**

    
    * **ValueError** -- if `df` is `DataFrame`
    but you set `schema`


    * **TypeError** -- if `df` is not compatible



* **Returns**

    the dataframe itself if it's
    `LocalBoundedDataFrame` else a converted one



* **Return type**

    *LocalBoundedDataFrame*


**NOTE**: Compared to `to_local_df()`, this function makes sure the dataframe is also
bounded, so `IterableDataFrame` will
be converted although it's local.


### fugue.dataframe.utils.to_local_df(df, schema=None)
Convert a data structure to `LocalDataFrame`


* **Parameters**

    
    * **df** (*Any*) -- `DataFrame`, pandas DataFramme and
    list or iterable of arrays


    * **schema** (*Any** | **None*) -- Schema like object, defaults to None, it should not be set for
    `DataFrame` type



* **Raises**

    
    * **ValueError** -- if `df` is `DataFrame`
    but you set `schema`


    * **TypeError** -- if `df` is not compatible



* **Returns**

    the dataframe itself if it's
    `LocalDataFrame` else a converted one



* **Return type**

    *LocalDataFrame*



### fugue.dataframe.utils.unpickle_df(stream)
Unpickles a dataframe from bytes array.


* **Parameters**

    **stream** (*bytes*) -- binary data



* **Returns**

    unpickled dataframe



* **Return type**

    *LocalBoundedDataFrame*


**NOTE**: The data must be serialized by `pickle_df()` to deserialize.
