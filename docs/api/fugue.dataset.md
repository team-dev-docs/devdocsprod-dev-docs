# fugue.dataset

## fugue.dataset.api


### fugue.dataset.api.show(data, n=10, with_count=False, title=None)
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
need to [`fugue.execution.execution_engine.ExecutionEngine.persist()`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.persist)
the dataset.

## fugue.dataset.dataset


### _class_ fugue.dataset.dataset.Dataset()
Bases: `ABC`

The base class of Fugue [`DataFrame`](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)
and [`Bag`](fugue.bag.md#fugue.bag.bag.Bag).

**NOTE**: This is for internal use only.


#### assert_not_empty()
Assert this dataframe is not empty


* **Raises**

[**FugueDatasetEmptyError**](fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

None



#### _abstract_ count()
Get number of rows of this dataframe


* **Return type**

int



#### _abstract property_ empty(_: boo_ )
Whether this dataframe is empty


#### _property_ has_metadata(_: boo_ )
Whether this dataframe contains any metadata


#### _abstract property_ is_bounded(_: boo_ )
Whether this dataframe is bounded


#### _abstract property_ is_local(_: boo_ )
Whether this dataframe is a local Dataset


#### _property_ metadata(_: [ParamDict](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict_ )
Metadata of the dataset


#### _abstract property_ native(_: An_ )
The native object this Dataset class wraps


#### _abstract property_ num_partitions(_: in_ )
Number of physical partitions of this dataframe.
Please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)


#### reset_metadata(metadata)
Reset metadata


* **Parameters**

**metadata** (*Any*) -- 



* **Return type**

None



#### show(n=10, with_count=False, title=None)
Display the Dataset


* **Parameters**


* **n** (*int*) -- number of rows to print, defaults to 10


* **with_count** (*bool*) -- whether to show dataset count, defaults to False


* **title** (*str** | **None*) -- title of the dataset, defaults to None



* **Return type**

None


**NOTE**: When `with_count` is True, it can trigger expensive calculation for
a distributed dataframe. So if you call this function directly, you may
need to [`fugue.execution.execution_engine.ExecutionEngine.persist()`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.persist)
the dataset.


### _class_ fugue.dataset.dataset.DatasetDisplay(ds)
Bases: `ABC`

The base class for display handlers of `Dataset`


* **Parameters**

**ds** (*Dataset*) -- the Dataset



#### repr()
The string representation of the `Dataset`


* **Returns**

the string representation



* **Return type**

str



#### repr_html()
The HTML representation of the `Dataset`


* **Returns**

the HTML representation



* **Return type**

str



#### _abstract_ show(n=10, with_count=False, title=None)
Show the `Dataset`


* **Parameters**


* **n** (*int*) -- top n items to display, defaults to 10


* **with_count** (*bool*) -- whether to display the total count, defaults to False


* **title** (*str** | **None*) -- title to display, defaults to None



* **Return type**

None
