# fugue.sql

## fugue.sql.api


### fugue.sql.api.fugue_sql(query, \*args, fsql_ignore_case=None, fsql_dialect=None, engine=None, engine_conf=None, as_fugue=False, as_local=False, \*\*kwargs)
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


**NOTE**: This function is different from [`raw_sql()`](../top_api.md#fugue.api.raw_sql) which directly
sends the query to the execution engine to run. This function parses the query
based on Fugue SQL syntax, creates a
`FugueSQLWorkflow` which
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


### fugue.sql.api.fugue_sql_flow(query, \*args, fsql_ignore_case=None, fsql_dialect=None, \*\*kwargs)
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

    *FugueSQLWorkflow*


**NOTE**: This function is different from [`raw_sql()`](../top_api.md#fugue.api.raw_sql) which directly
sends the query to the execution engine to run. This function parses the query
based on Fugue SQL syntax, creates a
`FugueSQLWorkflow` which
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

## fugue.sql.workflow


### _class_ fugue.sql.workflow.FugueSQLWorkflow(compile_conf=None)
Bases: [`FugueWorkflow`](fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow)

Fugue workflow that supports Fugue SQL. Please read [the Fugue SQL Tutorial](https://fugue-tutorials.readthedocs.io/tutorials/fugue_sql/index.html).


* **Parameters**

    **compile_conf** (*Any*) -- 



#### _property_ sql_vars(_: Dict[str, [WorkflowDataFrame](fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame)_ )
