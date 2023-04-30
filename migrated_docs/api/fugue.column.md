# fugue.column

## fugue.column.expressions


### _class_ fugue.column.expressions.ColumnExpr()
Bases: `object`

Fugue column expression class. It is inspired from
[`pyspark.sql.Column`](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.Column.html#pyspark.sql.Column) and it is working in progress.


#### alias(as_name)
Assign or remove alias of a column. To remove, set `as_name` to empty


* **Returns**

    a new column with the alias value



* **Parameters**

    **as_name** (*str*) -- 



* **Return type**

    *ColumnExpr*



#### _property_ as_name(_: st_ )
The name assigned by `alias()`


* **Returns**

    the alias



#### _property_ as_type(_: [DataType](https://arrow.apache.org/docs/python/generated/pyarrow.DataType.html#pyarrow.DataType) | Non_ )
The type assigned by `cast()`


* **Returns**

    the pyarrow datatype if `cast()` was called
    otherwise None



#### _property_ body_str(_: st_ )
The string expression of this column without cast type and alias.
This is only used for debug purpose. It is not SQL expression.


* **Returns**

    the string expression



#### cast(data_type)
Cast the column to a new data type


* **Parameters**

    **data_type** (*Any*) -- It can be string expressions, python primitive types,
    python datetime.datetime and pyarrow types.
    For details read Fugue Data Types



* **Returns**

    a new column instance with the assigned data type



* **Return type**

    *ColumnExpr*



#### infer_alias()
Infer alias of a column. If the column's `output_name()` is not empty
then it returns itself without change. Otherwise it tries to infer alias from
the underlying columns.


* **Returns**

    a column instance with inferred alias



* **Return type**

    *ColumnExpr*



#### infer_type(schema)
Infer data type of this column given the input schema


* **Parameters**

    **schema** ([*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)) -- the schema instance to infer from



* **Returns**

    a pyarrow datatype or None if failed to infer



* **Return type**

    [*DataType*](https://arrow.apache.org/docs/python/generated/pyarrow.DataType.html#pyarrow.DataType) | None



#### is_null()
Same as SQL `<col> IS NULL`.


* **Returns**

    a new column with the boolean values



* **Return type**

    *ColumnExpr*



#### _property_ name(_: st_ )
The original name of this column, default empty


* **Returns**

    the name



#### not_null()
Same as SQL `<col> IS NOT NULL`.


* **Returns**

    a new column with the boolean values



* **Return type**

    *ColumnExpr*



#### _property_ output_name(_: st_ )
The name assigned by `alias()`, but if empty then
return the original column name


* **Returns**

    the alias or the original column name



### fugue.column.expressions.all_cols()
The `\*` expression in SQL


* **Return type**

    *ColumnExpr*



### fugue.column.expressions.col(obj, alias='')
Convert the `obj` to a `ColumnExpr` object


* **Parameters**

    
    * **obj** (*str** | **ColumnExpr*) -- a string representing a column name or a `ColumnExpr` object


    * **alias** (*str*) -- the alias of this column, defaults to "" (no alias)



* **Returns**

    a literal column expression



* **Return type**

    *ColumnExpr*



### fugue.column.expressions.function(name, \*args, arg_distinct=False, \*\*kwargs)
Construct a function expression


* **Parameters**

    
    * **name** (*str*) -- the name of the function


    * **arg_distinct** (*bool*) -- whether to add `DISTINCT` before all arguments,
    defaults to False


    * **args** (*Any*) -- 



* **Returns**

    the function expression



* **Return type**

    *ColumnExpr*



### fugue.column.expressions.lit(obj, alias='')
Convert the `obj` to a literal column. Currently `obj` must be
`int`, `bool`, `float` or `str`, otherwise an exception will
be raised


* **Parameters**

    
    * **obj** (*Any*) -- an arbitrary value


    * **alias** (*str*) -- the alias of this literal column, defaults to "" (no alias)



* **Returns**

    a literal column expression



* **Return type**

    *ColumnExpr*



### fugue.column.expressions.null()
Equivalent to `lit(None)`, the `NULL` value


* **Returns**

    `lit(None)`



* **Return type**

    *ColumnExpr*


## fugue.column.functions


### fugue.column.functions.avg(col)
SQL `AVG` function (aggregation)


* **Parameters**

    **col** (*ColumnExpr*) -- the column to find average



* **Return type**

    *ColumnExpr*


**NOTE**: 
* this function cannot infer type from `col` type


* this function can infer alias from `col`'s inferred alias


### fugue.column.functions.coalesce(\*args)
SQL `COALESCE` function


* **Parameters**

    **args** (*Any*) -- If a value is not `ColumnExpr`
    then it's converted to a literal column by
    `col()`



* **Return type**

    *ColumnExpr*


**NOTE**: this function can infer neither type nor alias


### fugue.column.functions.count(col)
SQL `COUNT` function (aggregation)


* **Parameters**

    **col** (*ColumnExpr*) -- the column to find count



* **Return type**

    *ColumnExpr*


**NOTE**: 
* this function cannot infer type from `col` type


* this function can infer alias from `col`'s inferred alias


### fugue.column.functions.count_distinct(col)
SQL `COUNT DISTINCT` function (aggregation)


* **Parameters**

    **col** (*ColumnExpr*) -- the column to find distinct element count



* **Return type**

    *ColumnExpr*


**NOTE**: 
* this function cannot infer type from `col` type


* this function can infer alias from `col`'s inferred alias


### fugue.column.functions.first(col)
SQL `FIRST` function (aggregation)


* **Parameters**

    **col** (*ColumnExpr*) -- the column to find first



* **Return type**

    *ColumnExpr*


**NOTE**: 
* this function can infer type from `col` type


* this function can infer alias from `col`'s inferred alias


### fugue.column.functions.is_agg(column)
Check if a column contains aggregation operation


* **Parameters**

    
    * **col** -- the column to check


    * **column** (*Any*) -- 



* **Returns**

    whether the column is `ColumnExpr`
    and contains aggregation operations



* **Return type**

    bool



### fugue.column.functions.last(col)
SQL `LAST` function (aggregation)


* **Parameters**

    **col** (*ColumnExpr*) -- the column to find last



* **Return type**

    *ColumnExpr*


**NOTE**: 
* this function can infer type from `col` type


* this function can infer alias from `col`'s inferred alias


### fugue.column.functions.max(col)
SQL `MAX` function (aggregation)


* **Parameters**

    **col** (*ColumnExpr*) -- the column to find max



* **Return type**

    *ColumnExpr*


**NOTE**: 
* this function can infer type from `col` type


* this function can infer alias from `col`'s inferred alias


### fugue.column.functions.min(col)
SQL `MIN` function (aggregation)


* **Parameters**

    **col** (*ColumnExpr*) -- the column to find min



* **Return type**

    *ColumnExpr*


**NOTE**: 
* this function can infer type from `col` type


* this function can infer alias from `col`'s inferred alias


### fugue.column.functions.sum(col)
SQL `SUM` function (aggregation)


* **Parameters**

    **col** (*ColumnExpr*) -- the column to find sum



* **Return type**

    *ColumnExpr*


**NOTE**: 
* this function cannot infer type from `col` type


* this function can infer alias from `col`'s inferred alias

## fugue.column.sql


### _class_ fugue.column.sql.SQLExpressionGenerator(enable_cast=True)
Bases: `object`

SQL generator for `SelectColumns`


* **Parameters**

    **enable_cast** (*bool*) -- whether convert `cast` into the statement, defaults to True



#### add_func_handler(name, handler)
Add special function handler.


* **Parameters**

    
    * **name** (*str*) -- name of the function


    * **handler** (*Callable**[**[**_FuncExpr**]**, **Iterable**[**str**]**]*) -- the function to convert the function expression to SQL
    clause



* **Returns**

    the instance itself



* **Return type**

    *SQLExpressionGenerator*



#### correct_select_schema(input_schema, select, output_schema)
Do partial schema inference from `input_schema` and `select` columns,
then compare with the SQL output dataframe schema, and return the different
part as a new schema, or None if there is no difference


* **Parameters**

    
    * **input_schema** ([*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)) -- input dataframe schema for the select statement


    * **select** (*SelectColumns*) -- the collection of select columns


    * **output_schema** ([*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)) -- schema of the output dataframe after executing the SQL



* **Returns**

    the difference as a new schema or None if no difference



* **Return type**

    [*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema) | None



#### generate(expr)
Convert `ColumnExpr` to
SQL clause


* **Parameters**

    **expr** (*ColumnExpr*) -- the column expression to convert



* **Returns**

    the SQL clause for this expression



* **Return type**

    str



#### select(columns, table, where=None, having=None)
Construct the full `SELECT` statement on a single table


* **Parameters**

    
    * **columns** (*SelectColumns*) -- columns to select, it may contain aggregations, if
    so, the group keys are inferred.
    See `group_keys()`


    * **table** (*str*) -- table name to select from


    * **where** (*ColumnExpr** | **None*) -- `WHERE` condition, defaults to None


    * **having** (*ColumnExpr** | **None*) -- `HAVING` condition, defaults to None. It is used
    only when there is aggregation



* **Returns**

    the full `SELECT` statement



* **Return type**

    *Iterable*[*Tuple*[bool, str]]



#### type_to_expr(data_type)

* **Parameters**

    **data_type** ([*DataType*](https://arrow.apache.org/docs/python/generated/pyarrow.DataType.html#pyarrow.DataType)) -- 



#### where(condition, table)
Generate a `SELECT \*` statement with the given where clause


* **Parameters**

    
    * **condition** (*ColumnExpr*) -- column expression for `WHERE`


    * **table** (*str*) -- table name for `FROM`



* **Returns**

    the SQL statement



* **Raises**

    **ValueError** -- if `condition` contains aggregation



* **Return type**

    *Iterable*[*Tuple*[bool, str]]



### _class_ fugue.column.sql.SelectColumns(\*cols, arg_distinct=False)
Bases: `object`

SQL `SELECT` columns collection.


* **Parameters**

    
    * **cols** (*ColumnExpr*) -- collection of `ColumnExpr`


    * **arg_distinct** (*bool*) -- whether this is `SELECT DISTINCT`, defaults to False



#### _property_ agg_funcs(_: List[ColumnExpr_ )
All columns with aggregation operations


#### _property_ all_cols(_: List[ColumnExpr_ )
All columns (with inferred aliases)


#### assert_all_with_names()
Assert every column have explicit alias or the alias can
be inferred (non empty value). It will also validate there is
no duplicated aliases


* **Raises**

    **ValueError** -- if there are columns without alias, or there are
    duplicated names.



* **Returns**

    the instance itself



* **Return type**

    *SelectColumns*



#### assert_no_agg()
Assert there is no aggregation operation on any column.


* **Raises**

    **AssertionError** -- if there is any aggregation in the
    collection.



* **Returns**

    the instance itself



* **Return type**

    *SelectColumns*



#### assert_no_wildcard()
Assert there is no `\*` on first level columns


* **Raises**

    **AssertionError** -- if `all_cols()` exists



* **Returns**

    the instance itself



* **Return type**

    *SelectColumns*



#### _property_ group_keys(_: List[ColumnExpr_ )
Group keys inferred from the columns.

**NOTE**: 
* if there is no aggregation, the result will be empty


* it is `simple_cols()` plus `non_agg_funcs()`


#### _property_ has_agg(_: boo_ )
Whether this select is an aggregation


#### _property_ has_literals(_: boo_ )
Whether this select contains literal columns


#### _property_ is_distinct(_: boo_ )
Whether this is a `SELECT DISTINCT`


#### _property_ literals(_: List[ColumnExpr_ )
All literal columns


#### _property_ non_agg_funcs(_: List[ColumnExpr_ )
All columns with non-aggregation operations


#### replace_wildcard(schema)
Replace wildcard `\*` with explicit column names


* **Parameters**

    **schema** ([*Schema*](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema)) -- the schema used to parse the wildcard



* **Returns**

    a new instance containing only explicit columns



* **Return type**

    *SelectColumns*


**NOTE**: It only replaces the top level `\*`. For example
`count_distinct(all_cols())` will not be transformed because
this `\*` is not first level.


#### _property_ simple(_: boo_ )
Whether this select contains only simple column representations


#### _property_ simple_cols(_: List[ColumnExpr_ )
All columns directly representing column names
