# fugue.collections

## fugue.collections.partition


### _class_ fugue.collections.partition.BagPartitionCursor(physical_partition_no)
Bases: `DatasetPartitionCursor`

The cursor pointing at the first bag item of each logical partition inside
a physical partition.

It's important to understand the concept of partition, please read
[the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)


* **Parameters**

**physical_partition_no** (*int*) -- physical partition number passed in by
[`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)



### _class_ fugue.collections.partition.DatasetPartitionCursor(physical_partition_no)
Bases: `object`

The cursor pointing at the first item of each logical partition inside
a physical partition.

It's important to understand the concept of partition, please read
[the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)


* **Parameters**

**physical_partition_no** (*int*) -- physical partition number passed in by
[`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)



#### _property_ item(_: An_ )
Get current item


#### _property_ partition_no(_: in_ )
Logical partition number


#### _property_ physical_partition_no(_: in_ )
Physical partition number


#### set(item, partition_no, slice_no)
reset the cursor to a row (which should be the first row of a
new logical partition)


* **Parameters**


* **item** (*Any*) -- an item of the dataset


* **partition_no** (*int*) -- logical partition number


* **slice_no** (*int*) -- slice number inside the logical partition (to be deprecated)



* **Return type**

None



#### _property_ slice_no(_: in_ )
Slice number (inside the current logical partition), for now
it should always be 0


### _class_ fugue.collections.partition.PartitionCursor(schema, spec, physical_partition_no)
Bases: `DatasetPartitionCursor`

The cursor pointing at the first row of each logical partition inside
a physical partition.

It's important to understand the concept of partition, please read
[the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)


* **Parameters**


* **schema** ([*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)) -- input dataframe schema


* **spec** (*PartitionSpec*) -- partition spec


* **physical_partition_no** (*int*) -- physical partition number passed in by
[`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)



#### _property_ key_schema(_: [Schema](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema_ )
Partition key schema


#### _property_ key_value_array(_: List[Any_ )
Based on current row, get the partition key values as an array


#### _property_ key_value_dict(_: Dict[str, Any_ )
Based on current row, get the partition key values as a dict


#### _property_ row(_: List[Any_ )
Get current row data


#### _property_ row_schema(_: [Schema](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema_ )
Schema of the current row


#### set(row, partition_no, slice_no)
reset the cursor to a row (which should be the first row of a
new logical partition)


* **Parameters**


* **row** (*Any*) -- list-like row data


* **partition_no** (*int*) -- logical partition number


* **slice_no** (*int*) -- slice number inside the logical partition (to be deprecated)



* **Return type**

None



### _class_ fugue.collections.partition.PartitionSpec(\*args, \*\*kwargs)
Bases: `object`

Fugue Partition Specification.

It's important to understand this concept, please read [the Partition Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/advanced/partition.html)

Partition consists for these specs:


* **algo**: can be one of `hash` (default), `rand` and `even`


* **num** or **num_partitions**: number of physical partitions, it can be an
expression or integer numbers, e.g `(ROWCOUNT+4) / 3`


* **by** or **partition_by**: keys to partition on


* **presort**: keys to sort other than partition keys. E.g. `a`
and `a asc` means presort by column a ascendingly, `a,b desc`
means presort by a ascendingly and then by b descendingly.


* row_limit and size_limit are to be deprecated


* **Parameters**


* **args** (*Any*) -- 


* **kwargs** (*Any*) -- 



#### _property_ algo(_: st_ )
Get algo of the spec, one of `hash` (default), `rand` and `even`


#### _property_ empty(_: boo_ )
Whether this spec didn't specify anything


#### get_cursor(schema, physical_partition_no)
Get `PartitionCursor` based on
dataframe schema and physical partition number. You normally don't call
this method directly


* **Parameters**


* **schema** ([*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)) -- the dataframe schema this partition spec to operate on


* **physical_partition_no** (*int*) -- physical partition no passed in by
[`ExecutionEngine`](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)



* **Returns**

PartitionCursor object



* **Return type**

*PartitionCursor*



#### get_key_schema(schema)
Get partition keys schema


* **Parameters**

**schema** ([*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)) -- the dataframe schema this partition spec to operate on



* **Returns**

the sub-schema only containing partition keys



* **Return type**

[*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)



#### get_num_partitions(\*\*expr_map_funcs)
Convert `num_partitions` expression to int number


* **Parameters**

**expr_map_funcs** (*Any*) -- lambda functions (no parameter) for keywords



* **Returns**

integer value of the partitions



* **Return type**

int



#### get_partitioner(schema)
Get [`SchemaedDataPartitioner`](https://triad.readthedocs.io/en/latest/api/triad.utils.html#triad.utils.pyarrow.SchemaedDataPartitioner) by input
dataframe schema


* **Parameters**

**schema** ([*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)) -- the dataframe schema this partition spec to operate on



* **Returns**

SchemaedDataPartitioner object



* **Return type**

[*SchemaedDataPartitioner*](https://triad.readthedocs.io/en/latest/api/triad.utils.html#triad.utils.pyarrow.SchemaedDataPartitioner)



#### get_sorts(schema)
Get keys for sorting in a partition, it's the combination of partition
keys plus the presort keys


* **Parameters**

**schema** ([*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)) -- the dataframe schema this partition spec to operate on



* **Returns**

an ordered dictionary of key, order pairs



* **Return type**

[*IndexedOrderedDict*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.IndexedOrderedDict)[str, bool]



#### _property_ jsondict(_: [ParamDict](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict_ )
Get json serializeable dict of the spec


#### _property_ num_partitions(_: st_ )
Number of partitions, it can be a string expression or int


#### _property_ partition_by(_: List[str_ )
Get partition keys of the spec


#### _property_ presort(_: [IndexedOrderedDict](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.IndexedOrderedDict)[str, bool_ )
Get presort pairs of the spec


#### _property_ presort_expr(_: st_ )
Get normalized presort expression


### fugue.collections.partition.parse_presort_exp(presort)
Returns ordered column sorting direction where ascending order
would return as true, and descending as false.


* **Parameters**

**presort** (*Any*) -- string that contains column and sorting direction or
list of tuple that contains column and boolean sorting direction



* **Returns**

column and boolean sorting direction of column, order matters.



* **Return type**

IndexedOrderedDict[str, bool]


## fugue.collections.sql


### _class_ fugue.collections.sql.StructuredRawSQL(statements, dialect=None)
Bases: `object`

The Raw SQL object containing table references and dialect information.


* **Parameters**


* **statements** (*Iterable**[**Tuple**[**bool**, **str**]**]*) -- In each tuple, the first value indicates whether
the second value is a dataframe name reference (True), or just a part
of the statement (False)


* **dialect** (*str** | **None*) -- the dialect of the statements, defaults to None


**NOTE**: `dialect` None means no transpilation will be done when constructing
the final sql.


#### construct(name_map=None, dialect=None, log=None)
Construct the final SQL given the `dialect`


* **Parameters**


* **name_map** (*None** | **Callable**[**[**str**]**, **str**] **| **Dict**[**str**, **str**]*) -- the name map from the original statement to
the expected names, defaults to None. It can be a function or a
dictionary


* **dialect** (*str** | **None*) -- the expected dialect, defaults to None


* **log** (*Logger** | **None*) -- the logger to log information, defaults to None



* **Returns**

the final SQL string



#### _property_ dialect(_: str | Non_ )
The dialect of this query


#### _static_ from_expr(sql, prefix='<tmpdf:', suffix='>', dialect=None)
Parse the `StructuredRawSQL` from the `sql` expression.
The sql should look like `SELECT \* FROM <tmpdf:dfname>`. This
function can identify the tmpdfs with the given syntax, and construct
the `StructuredRawSQL`


* **Parameters**


* **sql** (*str*) -- the SQL expression with `<tmpdf:?>`


* **prefix** (*str*) -- the prefix of the temp df


* **suffix** (*str*) -- the suffix of the temp df


* **dialect** (*str** | **None*) -- the dialect of the sql expression, defaults to None



* **Returns**

the parsed object



* **Return type**

*StructuredRawSQL*



### _class_ fugue.collections.sql.TempTableName()
Bases: `object`

Generating a temporary, random and globaly unique table name

## fugue.collections.yielded


### _class_ fugue.collections.yielded.PhysicalYielded(yid, storage_type)
Bases: `Yielded`

Physical yielded object from [`FugueWorkflow`](fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow).
Users shouldn't create this object directly.


* **Parameters**


* **yid** (*str*) -- unique id for determinism


* **storage_type** (*str*) -- `file` or `table`



#### _property_ is_set(_: boo_ )
Whether the value is set. It can be false if the parent workflow
has not been executed.


#### _property_ name(_: st_ )
The name reference of the yield


#### set_value(name)
Set the storage name after compute


* **Parameters**

**name** (*str*) -- name reference of the storage



* **Return type**

None



#### _property_ storage_type(_: st_ )
The storage type of this yield


### _class_ fugue.collections.yielded.Yielded(yid)
Bases: `object`

Yields from [`FugueWorkflow`](fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow).
Users shouldn't create this object directly.


* **Parameters**

**yid** (*str*) -- unique id for determinism



#### _property_ is_set(_: boo_ )
Whether the value is set. It can be false if the parent workflow
has not been executed.
