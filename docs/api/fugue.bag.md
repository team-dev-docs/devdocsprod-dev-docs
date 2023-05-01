# fugue.bag

## fugue.bag.array_bag


### _class_ fugue.bag.array_bag.ArrayBag(data, copy=True)
Bases: `LocalBoundedBag`


* **Parameters**


* **data** (*Any*) -- 


* **copy** (*bool*) -- 



#### as_array()
Convert to a native python array


* **Returns**

the native python array



* **Return type**

*List*[*Any*]



#### count()
Get number of rows of this dataframe


* **Return type**

int



#### _property_ empty(_: boo_ )
Whether this dataframe is empty


#### head(n)
Take the first n elements


* **Returns**

the python array of the first n elements



* **Parameters**

**n** (*int*) -- 



* **Return type**

*LocalBoundedBag*



#### _property_ native(_: List[Any_ )
The underlying Python list object


#### peek()
Peek the first row of the dataframe as array


* **Raises**

[**FugueDatasetEmptyError**](fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

*Any*


## fugue.bag.bag


### _class_ fugue.bag.bag.Bag()
Bases: [`Dataset`](fugue.dataset.md#fugue.dataset.dataset.Dataset)

The base class of Fugue Bags. Bag contains a collection of
unordered objects.


#### _abstract_ as_array()
Convert to a native python array


* **Returns**

the native python array



* **Return type**

*List*[*Any*]



#### _abstract_ as_local()
Convert this bag to a `LocalBag`


* **Return type**

*LocalBag*



#### _abstract_ head(n)
Take the first n elements


* **Returns**

the python array of the first n elements



* **Parameters**

**n** (*int*) -- 



* **Return type**

*LocalBoundedBag*



#### _abstract_ peek()
Peek the first row of the dataframe as array


* **Raises**

[**FugueDatasetEmptyError**](fugue.md#fugue.exceptions.FugueDatasetEmptyError) -- if it is empty



* **Return type**

*Any*



### _class_ fugue.bag.bag.BagDisplay(ds)
Bases: [`DatasetDisplay`](fugue.dataset.md#fugue.dataset.dataset.DatasetDisplay)

`Bag` plain display class


* **Parameters**

**ds** ([*Dataset*](fugue.dataset.md#fugue.dataset.dataset.Dataset)) -- 



#### _property_ bg(_: Ba_ )
The target `Bag`


#### show(n=10, with_count=False, title=None)
Show the [`Dataset`](fugue.dataset.md#fugue.dataset.dataset.Dataset)


* **Parameters**


* **n** (*int*) -- top n items to display, defaults to 10


* **with_count** (*bool*) -- whether to display the total count, defaults to False


* **title** (*str** | **None*) -- title to display, defaults to None



* **Return type**

None



### _class_ fugue.bag.bag.LocalBag()
Bases: `Bag`


#### as_local()
Convert this bag to a `LocalBag`


* **Return type**

*LocalBag*



#### _property_ is_local(_: boo_ )
Whether this dataframe is a local Dataset


#### _property_ num_partitions(_: in_ )
Number of physical partitions of this dataframe.
Please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)


### _class_ fugue.bag.bag.LocalBoundedBag()
Bases: `LocalBag`


#### _property_ is_bounded(_: boo_ )
Whether this dataframe is bounded
